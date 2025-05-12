
import { Role } from '@/contexts/RoleContext';

// Feature permissions based on user role
export const roleFeatures = {
  user: ['basic_dashboard', 'content_creation', 'ai_assistant_basic', 'chat_basic'],
  developer: ['basic_dashboard', 'content_creation', 'ai_assistant_basic', 'chat_basic', 'coding_tools', 'api_access', 'agent_building', 'chat_advanced'],
  enterprise: ['basic_dashboard', 'content_creation', 'ai_assistant_basic', 'chat_basic', 'coding_tools', 'api_access', 'agent_building', 'chat_advanced', 'team_management', 'advanced_security', 'custom_training', 'chat_unlimited'],
  admin: ['basic_dashboard', 'content_creation', 'ai_assistant_basic', 'chat_basic', 'coding_tools', 'api_access', 'agent_building', 'chat_advanced', 'team_management', 'advanced_security', 'custom_training', 'chat_unlimited', 'user_management', 'system_settings']
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
  
  // Add developer features if user is on basic plan
  if (currentRole === 'user') {
    const developerOnlyFeatures = roleFeatures.developer.filter(f => !currentFeatures.has(f));
    result.push({
      role: 'developer',
      features: developerOnlyFeatures
    });
  }
  
  // Add enterprise features if user is on basic or developer plan
  if (currentRole === 'user' || currentRole === 'developer') {
    const enterpriseOnlyFeatures = roleFeatures.enterprise.filter(f => !currentFeatures.has(f));
    result.push({
      role: 'enterprise',
      features: enterpriseOnlyFeatures
    });
  }
  
  return result;
};

// Function to get user-friendly name for a feature
export const getFeatureDisplayName = (feature: string): string => {
  const featureNames: Record<string, string> = {
    basic_dashboard: 'Basic Dashboard',
    content_creation: 'Content Creation',
    ai_assistant_basic: 'Basic AI Assistant',
    chat_basic: 'Limited Chat (10 messages)',
    chat_advanced: 'Extended Chat (50 messages)',
    chat_unlimited: 'Unlimited Chat',
    coding_tools: 'Coding Tools',
    api_access: 'API Access',
    agent_building: 'Agent Building',
    team_management: 'Team Management',
    advanced_security: 'Advanced Security',
    custom_training: 'Custom Training',
    user_management: 'User Management',
    system_settings: 'System Settings'
  };
  
  return featureNames[feature] || feature;
};

// Function to check if a user can access more chat messages
export const getChatMessageLimit = (role: Role | null): number => {
  if (!role) return 3; // Non-authenticated users get 3 messages
  if (role === 'user') return 10;
  if (role === 'developer') return 50;
  return Infinity; // Enterprise and admin get unlimited
};
