
import { useRole } from '@/contexts/RoleContext';
import { hasAccess, getAvailableFeatures, getUpgradeFeatures } from '@/utils/rolePermissions';

export function useRolePermissions() {
  const { role } = useRole();
  
  return {
    role,
    hasAccess: (feature: string) => hasAccess(role, feature),
    availableFeatures: getAvailableFeatures(role),
    upgradeOptions: getUpgradeFeatures(role),
    isPersonal: role === 'user',
    isDeveloper: role === 'developer',
    isEnterprise: role === 'enterprise',
    isAdmin: role === 'admin',
  };
}
