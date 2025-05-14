
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRole } from '@/contexts/RoleContext';

interface PublicRouteProps {
  restrictAfterAuth?: boolean; 
  redirectAfterAuthTo?: string;
  children?: React.ReactNode;
}

/**
 * A route wrapper for public routes that may redirect authenticated users
 */
const PublicRoute: React.FC<PublicRouteProps> = ({
  restrictAfterAuth = false,
  redirectAfterAuthTo = '/dashboard',
  children
}) => {
  const { role } = useRole();
  
  // Redirect authenticated users away from certain public pages (like signin)
  if (restrictAfterAuth && role) {
    return <Navigate to={redirectAfterAuthTo} replace />;
  }

  return <>{children || <Outlet />}</>;
};

export default PublicRoute;
