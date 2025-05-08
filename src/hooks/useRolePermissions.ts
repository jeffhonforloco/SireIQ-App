
import { useRole } from '@/contexts/RoleContext';
import { hasAccess, getAvailableFeatures, getUpgradeFeatures, getFeatureDisplayName, getChatMessageLimit } from '@/utils/rolePermissions';

export function useRolePermissions() {
  const { role } = useRole();
  
  return {
    role,
    hasAccess: (feature: string) => hasAccess(role, feature),
    availableFeatures: getAvailableFeatures(role),
    upgradeOptions: getUpgradeFeatures(role),
    getFeatureDisplayName,
    chatMessageLimit: getChatMessageLimit(role),
    isPersonal: role === 'user',
    isDeveloper: role === 'developer',
    isEnterprise: role === 'enterprise',
    isAdmin: role === 'admin',
  };
}
