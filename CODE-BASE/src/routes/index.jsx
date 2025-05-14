import React, { Suspense, lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { routes } from './routes';
import { toCamelCase } from '../utils';
import Page404 from '../screens/page404';
import PrivateRoute from './priviteRoutes';
import PublicRoute from './publicRoutes';
import ErrorBoundary from '../Components/Common/ErrorBoundary';
import { ToastContainer } from 'react-toastify';

const AsyncRoute = ({ layout, screen }) => {
  const LayoutComponent = lazy(() =>
    import(`../layouts/${toCamelCase(layout)}`)
  );
  const ScreenComponent = lazy(() =>
    import(`../screens/${toCamelCase(screen)}`)
  );

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <LayoutComponent>
         <ScreenComponent />
        </LayoutComponent>
      </Suspense>
    </ErrorBoundary>
  );
};

function AppRoutes() {
  const appRoutes = routes.flatMap((route) => {
    if (route.redirectTo) {
      return {
        path: route.path,
        element: <Navigate to={route.redirectTo} replace />,
      };
    }

    if (route.childPath === '*') {
      return { path: '*', element: <Page404 /> };
    }

    if (route.children) {
      return route.children.map(({ screen, childPath }) => {
        const element = (
          <AsyncRoute layout={route.layout} screen={screen} />
        );

        return {
          path: `${route.path}${childPath}`,
          element: route.isSecure ? (
            <PrivateRoute>{element}</PrivateRoute>
          ) : (
            <PublicRoute>{element}</PublicRoute>
          ),
        };
      });
    }

    const element = (
      <AsyncRoute layout={route.layout} screen={route.component} />
    );

    return {
      path: route.path,
      element: route.isSecure ? (
        <PrivateRoute>{element}</PrivateRoute>
      ) : (
        <PublicRoute>{element}</PublicRoute>
      ),
    };
  });

  const routing = useRoutes(appRoutes);
  console.log(routing, "routing")

  return (
    <>
      <Suspense fallback={<div>Loading App...</div>}>{routing}</Suspense>
      <ToastContainer />
    </>
  );
}

export default AppRoutes;
