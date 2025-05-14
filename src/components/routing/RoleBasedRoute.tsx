
import React from 'react';
import { useRole } from '@/contexts/RoleContext';
import { Navigate, Outlet } from 'react-router-dom';
import RoleGuard from '@/components/auth/RoleGuard';

interface RoleBasedRouteProps {
  requiredFeature: string;
  redirectTo?: string;
  children?: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * A route wrapper that restricts access based on user role feature access
 */
const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({
  requiredFeature,
  redirectTo,
  children,
  fallback
}) => {
  const { role } = useRole();
  
  // First check if user is authenticated at all
  if (!role) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <RoleGuard 
      requiredFeature={requiredFeature}
      redirectTo={redirectTo}
      fallback={fallback}
    >
      {children || <Outlet />}
    </RoleGuard>
  );
};

export default RoleBasedRoute;
