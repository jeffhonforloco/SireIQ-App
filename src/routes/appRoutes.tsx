
import React from 'react';
import { RouteObject } from 'react-router-dom';

// Import route categories
import publicRoutes from './publicRoutes';
import featureRoutes from './featureRoutes';
import enterpriseRoutes from './enterpriseRoutes';
import adminRoutes from './adminRoutes';
import dashboardRoutes from './dashboardRoutes';

// Combine all routes
const appRoutes: RouteObject[] = [
  ...publicRoutes,
  ...featureRoutes,
  ...enterpriseRoutes,
  ...adminRoutes,
  ...dashboardRoutes
];

export default appRoutes;
