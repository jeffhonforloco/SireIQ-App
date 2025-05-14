
import React from 'react';
import { RouteObject } from 'react-router-dom';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import UserManagement from '@/pages/admin/UserManagement';
import AnalyticsDashboard from '@/pages/admin/AnalyticsDashboard';
import SystemSettings from '@/pages/admin/SystemSettings';
import SecurityOverview from '@/pages/admin/SecurityOverview';

// Admin routes
const adminRoutes: RouteObject[] = [
  {
    path: '/admin',
    element: <AdminDashboard />
  },
  {
    path: '/admin/users',
    element: <UserManagement />
  },
  {
    path: '/admin/analytics',
    element: <AnalyticsDashboard />
  },
  {
    path: '/admin/settings',
    element: <SystemSettings />
  },
  {
    path: '/admin/security',
    element: <SecurityOverview />
  }
];

export default adminRoutes;
