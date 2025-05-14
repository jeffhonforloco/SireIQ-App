
import React from 'react';
import { RouteObject } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import AccountSettings from '@/pages/AccountSettings';

// Dashboard and account routes
const dashboardRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/account/settings',
    element: <AccountSettings />
  }
];

export default dashboardRoutes;
