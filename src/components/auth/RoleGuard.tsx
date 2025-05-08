
import React from 'react';
import { useRole } from '@/contexts/RoleContext';
import { hasAccess } from '@/utils/rolePermissions';
import { toast } from '@/components/ui/sonner';
import { Navigate } from 'react-router-dom';
import { Lock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RoleGuardProps {
  children: React.ReactNode;
  requiredFeature: string;
  fallback?: React.ReactNode;
  redirectTo?: string;
}

/**
 * A component that restricts access based on user role and required feature
 */
export const RoleGuard: React.FC<RoleGuardProps> = ({
  children,
  requiredFeature,
  fallback,
  redirectTo
}) => {
  const { role } = useRole();
  const hasPermission = hasAccess(role, requiredFeature);

  // If user has access, render the children
  if (hasPermission) {
    return <>{children}</>;
  }

  // If a redirect path is provided, navigate to that path
  if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }

  // If a fallback is provided, render the fallback
  if (fallback) {
    return <>{fallback}</>;
  }

  // Default fallback
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-lg border border-sireiq-accent/20 bg-sireiq-darker">
      <Lock className="w-12 h-12 text-sireiq-accent mb-4" />
      <h3 className="text-xl font-bold mb-2">Feature Restricted</h3>
      <p className="text-sireiq-light/70 text-center mb-4">
        This feature requires a {requiredFeature.includes('api') ? 'Developer' : 'Enterprise'} account.
      </p>
      <Button 
        onClick={() => toast.info("Upgrade your account to access this feature.")}
        className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
      >
        Upgrade Your Account
      </Button>
    </div>
  );
};

/**
 * Higher-order component that wraps a component with role-based protection
 */
export const withRoleGuard = (
  Component: React.ComponentType<any>,
  requiredFeature: string,
  fallback?: React.ReactNode,
  redirectTo?: string
) => {
  return (props: any) => (
    <RoleGuard requiredFeature={requiredFeature} fallback={fallback} redirectTo={redirectTo}>
      <Component {...props} />
    </RoleGuard>
  );
};

export default RoleGuard;
