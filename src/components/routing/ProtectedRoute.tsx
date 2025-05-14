
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useRole } from '@/contexts/RoleContext';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  redirectPath?: string;
  requiredRole?: 'user' | 'developer' | 'enterprise' | 'admin';
  children?: React.ReactNode;
}

/**
 * A route wrapper that protects content based on user authentication
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = '/signin',
  requiredRole,
  children
}) => {
  const { role, isFirstTimeUser } = useRole();
  const location = useLocation();
  
  // First, check if the user needs to complete onboarding
  if (isFirstTimeUser) {
    return <Navigate to="/get-started" state={{ from: location }} replace />;
  }
  
  // Then check if user is authenticated at all
  if (!role) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  // Finally check if user has required role
  if (requiredRole && role !== requiredRole && role !== 'admin') {
    // Admin can access everything, but other roles are limited
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return <>{children || <Outlet />}</>;
};

export default ProtectedRoute;
