
import { Role } from '@/contexts/RoleContext';

// Feature permissions based on user role
export const roleFeatures = {
  user: ['basic_dashboard', 'content_creation', 'ai_assistant_basic'],
  developer: ['basic_dashboard', 'content_creation', 'ai_assistant_basic', 'coding_tools', 'api_access', 'agent_building'],
  enterprise: ['basic_dashboard', 'content_creation', 'ai_assistant_basic', 'coding_tools', 'api_access', 'agent_building', 'team_management', 'advanced_security', 'custom_training'],
  admin: ['basic_dashboard', 'content_creation', 'ai_assistant_basic', 'coding_tools', 'api_access', 'agent_building', 'team_management', 'advanced_security', 'custom_training', 'user_management', 'system_settings']
};

// Check if user has access to a specific feature
export const hasAccess = (role: Role | null, feature: string): boolean => {
  if (!role) return false;
  return roleFeatures[role]?.includes(feature) || false;
};

// Get available features for a role
export const getAvailableFeatures = (role: Role | null): string[] => {
  if (!role) return [];
  return roleFeatures[role] || [];
};

// Get premium features that require upgrade
export const getUpgradeFeatures = (currentRole: Role | null): {role: Role, features: string[]}[] => {
  if (!currentRole) return [];
  
  const result: {role: Role, features: string[]}[] = [];
  const currentFeatures = new Set(getAvailableFeatures(currentRole));
  
  // Add developer features if user is on personal plan
  if (currentRole === 'user') {
    const developerOnlyFeatures = roleFeatures.developer.filter(f => !currentFeatures.has(f));
    result.push({
      role: 'developer',
      features: developerOnlyFeatures
    });
  }
  
  // Add enterprise features if user is on personal or developer plan
  if (currentRole === 'user' || currentRole === 'developer') {
    const enterpriseOnlyFeatures = roleFeatures.enterprise.filter(f => !currentFeatures.has(f));
    result.push({
      role: 'enterprise',
      features: enterpriseOnlyFeatures
    });
  }
  
  return result;
};
