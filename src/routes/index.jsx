import React, { Suspense, lazy, useEffect } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { routes } from './routes';
import { toCamelCase } from '../utils';
import Page404 from '../screens/page404';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

// Async wrapper using React.lazy for dynamic import
const AsyncRoute = ({ layout, screen }) => {
  const LayoutComponent = lazy(() => import(/* @vite-ignore */ `../layouts/${toCamelCase(layout)}`));
  const ScreenComponent = lazy(() => import(/* @vite-ignore */ `../screens/${toCamelCase(screen)}`));

  return (
    <Suspense fallback={<div>Loading</div>}>
      <LayoutComponent>
        <ScreenComponent />
      </LayoutComponent>
    </Suspense>
  );
};

function AppRoutes() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state?.kitchen?.accessToken);
  console.log(isAuthenticated,"istrue")

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login", { replace: true });
    }
  }, [isAuthenticated]);
  

  return (
    <>
      <Suspense fallback={<div>Loading App...</div>}>
        <Routes>
          {routes?.map((route, index) => {
           if (route.redirectTo) {
            return <Route key={index} path={route.path} element={<Navigate to={route.redirectTo} replace />} />;
          }
           if (route?.children) {
              return route.children.map(({ screen, childPath }, i) => (
                <Route
                  key={`${index}_${i}`}
                  path={`${route.path}${childPath}`}
                  element={
                    route.isSecure && !isAuthenticated ? (
                      <Navigate to="/auth/login" replace />
                    ) : (
                      <AsyncRoute layout={route.layout} screen={screen} />
                    )
                  }
                  
                />
              ));
            }

            if (route.childPath === "*") {
              return (
                <Route
                  key="page_404"
                  path={route.childPath}
                  element={<Page404 />}
                />
              );
            }

            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  route.isSecure && !isAuthenticated ? (
                    <Navigate to="/auth/login" replace />
                  ) : (
                    <AsyncRoute layout={route.layout} screen={route.component} />
                  )
                }
              />
            );
          })}
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default AppRoutes;
