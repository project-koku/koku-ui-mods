import { Bullseye, Spinner } from '@patternfly/react-core';
import { userAccess } from 'components/userAccess';
import React, { lazy, Suspense } from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

const NotFound = lazy(() => import(/* webpackChunkName: "notFound" */ 'routes/components/page/notFound'));
const OptimizationsBadgeDemo = lazy(
  () => import(/* webpackChunkName: "recommendations" */ 'routes/demos/optimizations/optimizationsBadgeDemo')
);
const OptimizationsBreakdownDemo = lazy(
  () => import(/* webpackChunkName: "recommendations" */ 'routes/demos/optimizations/optimizationsBreakdownDemo')
);
const OptimizationsDetailsDemo = lazy(
  () => import(/* webpackChunkName: "recommendations" */ 'routes/demos/optimizations/optimizationsDetailsDemo')
);
const OptimizationsLinkDemo = lazy(
  () => import(/* webpackChunkName: "recommendations" */ 'routes/demos/optimizations/optimizationsLinkDemo')
);
const OptimizationsSummaryDemo = lazy(
  () => import(/* webpackChunkName: "recommendations" */ 'routes/demos/optimizations/optimizationsSummaryDemo')
);
const OptimizationsTableDemo = lazy(
  () => import(/* webpackChunkName: "recommendations" */ 'routes/demos/optimizations/optimizationsTableDemo')
);
const Welcome = lazy(() => import(/* webpackChunkName: "ocpDetails" */ 'routes/components/page/welcome/welcome'));

const routes = {
  ocmOverview: {
    element: userAccess(Welcome),
    path: '/ocm/overview',
  },
  optimizationsBadge: {
    element: userAccess(OptimizationsBadgeDemo),
    path: '/ros/optimizations/badge',
  },
  optimizationsBreakdown: {
    element: userAccess(OptimizationsBreakdownDemo),
    path: '/ros/optimizations/breakdown',
  },
  optimizationsDetails: {
    element: userAccess(OptimizationsDetailsDemo),
    path: '/ros/optimizations/details',
  },
  optimizationsLink: {
    element: userAccess(OptimizationsLinkDemo),
    path: '/ros/optimizations/link',
  },
  optimizationsSummary: {
    element: userAccess(OptimizationsSummaryDemo),
    path: '/ros/optimizations/summary',
  },
  optimizationsTable: {
    element: userAccess(OptimizationsTableDemo),
    path: '/ros/optimizations/table',
  },
  welcome: {
    element: userAccess(Welcome),
    path: '/',
  },
};

const Routes = () => (
  <Suspense
    fallback={
      <Bullseye>
        <Spinner size="lg" />
      </Bullseye>
    }
  >
    <RouterRoutes>
      {Object.keys(routes).map(key => {
        const route = routes[key];
        return <Route key={route.path} path={route.path} element={<route.element />} />;
      })}
      {/* Finally, catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  </Suspense>
);

export { routes, Routes };
