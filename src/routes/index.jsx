import React, {  Suspense } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { routes } from './routes';
import { toCamelCase } from '../utils';

// Async wrapper to handle dynamic layout and screen loading
const AsyncRoute = ({ layout, screen }) => {
  const [Component, setComponent] = React.useState(null);

  React.useEffect(() => {
    const load = async () => {
      try {
        const layoutName = toCamelCase(layout);
        const screenName = toCamelCase(screen);

        const LayoutModule = await import(/* @vite-ignore */ `../layouts/${layoutName}`);
        const ScreenModule = await import(/* @vite-ignore */ `../screens/${screenName}`);

        const LayoutComponent = LayoutModule.default;
        const ScreenComponent = ScreenModule.default;

        console.log(`<${layoutName}> wrapping <${screenName}>`);

        setComponent(
          <LayoutComponent>
            <ScreenComponent />
          </LayoutComponent>
        );
      } catch (error) {
        console.error('Error loading layout or screen:', error);
      }
    };
    load();
  }, [layout, screen]);

  return Component || <div>Loading...</div>;
};

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading App...</div>}>
        <Routes>
          {
            routes?.map((route, index) => {
              if (route?.children) {
                return route.children.map(({ screen, childPath }, i) => (
                  <Route
                    key={`${index}_${i}`}
                    path={`${route.path}${childPath}`}
                    element={<AsyncRoute layout={route.layout} screen={screen} />}
                  />
                ));
              } else {
                return route.path === "*" ? (
                  <Route
                    key={"page_404"}
                    path={route.path}
                    element={<AsyncRoute layout={route.layout} screen={route.component} />}
                  />
                ) : (
                  <Route
                    key={"init"}
                    path={route.path}
                    element={<Navigate to={route.init} />}
                  />
                );
              }
            })
          }
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
