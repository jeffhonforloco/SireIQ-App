
import React, { useEffect, useState } from 'react';
import { useRole } from '@/contexts/RoleContext';
import { hasAccess, getFeatureDisplayName } from '@/utils/rolePermissions';
import { verifyFeatureAccess } from '@/utils/roleVerification';
import { toast } from '@/components/ui/sonner';
import { Navigate } from 'react-router-dom';
import { Lock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { authService } from '@/services/authService';

interface RoleGuardProps {
  children: React.ReactNode;
  requiredFeature: string;
  fallback?: React.ReactNode;
  redirectTo?: string;
}

/**
 * A component that restricts access based on secure user role verification
 */
export const RoleGuard: React.FC<RoleGuardProps> = ({
  children,
  requiredFeature,
  fallback,
  redirectTo
}) => {
  const { role } = useRole();
  const [isVerifying, setIsVerifying] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const verifyAccess = async () => {
      // First check if user is authenticated
      if (!authService.isTokenValid()) {
        setHasPermission(false);
        setIsVerifying(false);
        return;
      }

      try {
        // Verify feature access with server-side validation
        const hasAccess = await verifyFeatureAccess(requiredFeature);
        setHasPermission(hasAccess);
      } catch (error) {
        console.error('Error verifying feature access:', error);
        setHasPermission(false);
      } finally {
        setIsVerifying(false);
      }
    };

    verifyAccess();
  }, [requiredFeature, role]);

  // Show loading state while verifying
  if (isVerifying) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sireiq-cyan"></div>
      </div>
    );
  }

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

  // Get the appropriate plan name based on the required feature
  const requiredPlan = requiredFeature.includes('coding') || requiredFeature.includes('api') 
    ? 'Developer' 
    : requiredFeature.includes('team') || requiredFeature.includes('security') || requiredFeature.includes('unlimited')
      ? 'Enterprise'
      : 'Premium';

  // Default fallback with security messaging
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-lg border border-sireiq-accent/20 bg-sireiq-darker">
      <Lock className="w-12 h-12 text-sireiq-accent mb-4" />
      <h3 className="text-xl font-bold mb-2">Access Restricted</h3>
      <p className="text-sireiq-light/70 text-center mb-4">
        {getFeatureDisplayName(requiredFeature)} requires a {requiredPlan} account.
      </p>
      <Button 
        onClick={() => toast.info(`Upgrade to ${requiredPlan} to access the ${getFeatureDisplayName(requiredFeature)} feature.`)}
        className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
      >
        Upgrade Your Account
      </Button>
    </div>
  );
};

/**
 * Higher-order component that wraps a component with secure role-based protection
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
