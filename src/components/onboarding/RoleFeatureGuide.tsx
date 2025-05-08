
import React from 'react';
import { useRole } from '@/contexts/RoleContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lock, Check, Users, Code, Building } from 'lucide-react';
import { roleFeatures } from '@/utils/rolePermissions';

// Mapping of feature IDs to user-friendly names and descriptions
const featureInfo = {
  basic_dashboard: { 
    name: 'Dashboard Access', 
    description: 'Access to the main application dashboard' 
  },
  content_creation: { 
    name: 'Content Creation', 
    description: 'Create basic content and documents' 
  },
  ai_assistant_basic: { 
    name: 'AI Assistant', 
    description: 'Basic AI powered assistant capabilities' 
  },
  coding_tools: { 
    name: 'Coding Tools', 
    description: 'Access to developer coding tools and IDE' 
  },
  api_access: { 
    name: 'API Access', 
    description: 'Ability to use and create APIs' 
  },
  agent_building: { 
    name: 'Agent Building', 
    description: 'Create and customize AI agents' 
  },
  team_management: { 
    name: 'Team Management', 
    description: 'Invite and manage team members' 
  },
  advanced_security: { 
    name: 'Advanced Security', 
    description: 'Enhanced security controls' 
  },
  custom_training: { 
    name: 'Custom Training', 
    description: 'Train AI models on custom data' 
  },
};

// Map roles to their user-friendly titles and icons
const roleInfo = {
  user: { title: 'Personal', icon: Users },
  developer: { title: 'Developer', icon: Code },
  enterprise: { title: 'Enterprise', icon: Building },
};

const RoleFeatureGuide = () => {
  const { role } = useRole();
  const currentUserFeatures = role ? roleFeatures[role] : [];
  
  // All unique features across all roles
  const allFeatures = Array.from(
    new Set([
      ...roleFeatures.user,
      ...roleFeatures.developer,
      ...roleFeatures.enterprise
    ])
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Features by Account Type</h2>
      <p className="text-sireiq-light/70">
        Discover what features are available with each account level. Upgrade your account to unlock more capabilities.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {(['user', 'developer', 'enterprise'] as const).map((roleType) => {
          const RoleIcon = roleInfo[roleType].icon;
          const isCurrentRole = role === roleType;
          
          return (
            <Card 
              key={roleType}
              className={`border ${isCurrentRole ? 'border-sireiq-cyan bg-sireiq-accent/5' : 'border-sireiq-accent/20'}`}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-md ${isCurrentRole ? 'bg-sireiq-cyan/20' : 'bg-sireiq-accent/10'}`}>
                      <RoleIcon size={18} className={isCurrentRole ? 'text-sireiq-cyan' : 'text-sireiq-light/70'} />
                    </div>
                    <h3 className="font-bold text-lg">{roleInfo[roleType].title}</h3>
                  </div>
                  {isCurrentRole && (
                    <Badge className="bg-sireiq-cyan text-sireiq-darker">Current</Badge>
                  )}
                </div>
                
                <div className="space-y-3 mt-4">
                  {allFeatures.map((feature) => {
                    const hasFeature = roleFeatures[roleType].includes(feature);
                    return (
                      <div 
                        key={feature}
                        className={`flex items-center p-2 rounded ${hasFeature ? 'bg-sireiq-accent/10' : 'bg-transparent opacity-50'}`}
                      >
                        {hasFeature ? (
                          <Check size={16} className="text-sireiq-cyan mr-2" />
                        ) : (
                          <Lock size={16} className="text-sireiq-accent/80 mr-2" />
                        )}
                        <div>
                          <p className="text-sm font-medium">{featureInfo[feature as keyof typeof featureInfo]?.name}</p>
                          <p className="text-xs text-sireiq-light/60">{featureInfo[feature as keyof typeof featureInfo]?.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default RoleFeatureGuide;
