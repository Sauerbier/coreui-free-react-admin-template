import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const ServiceDetails = React.lazy(() => import('./views/service/ServiceDetails'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/service/:namespace', name: 'Services', component: ServiceDetails },
];

export default routes;
