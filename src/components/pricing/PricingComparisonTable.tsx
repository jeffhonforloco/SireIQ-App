
import React from 'react';
import { Check, Minus, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useRolePermissions } from '@/hooks/useRolePermissions';
import { Button } from '@/components/ui/button';
import { useRole } from '@/contexts/RoleContext';
import { toast } from 'sonner';

const PricingComparisonTable: React.FC = () => {
  const { role } = useRolePermissions();
  const { setRole } = useRole();

  const handlePlanChange = (newRole: 'user' | 'developer' | 'enterprise') => {
    if (role === newRole) {
      toast.info(`You're already on the ${newRole} plan.`);
      return;
    }

    setRole(newRole);
    toast.success(`Successfully switched to ${newRole} plan!`);
  };

  const handleEnterpriseRequest = () => {
    toast.info("Request sent! Our team will contact you shortly to discuss enterprise options.");
  };

  // Feature categories and items
  const featureCategories = [
    {
      name: "Core Features",
      features: [
        { name: "Dashboard Access", personal: true, developer: true, enterprise: true },
        { name: "AI Assistant", personal: "Basic", developer: "Advanced", enterprise: "Enterprise-grade" },
        { name: "Messages per day", personal: "10", developer: "50", enterprise: "Unlimited" },
        { name: "Response types", personal: "Text only", developer: "Text, code", enterprise: "All formats" },
      ]
    },
    {
      name: "Developer Tools",
      features: [
        { name: "Coding tools", personal: false, developer: true, enterprise: true },
        { name: "API Access", personal: false, developer: true, enterprise: true },
        { name: "Agent building", personal: false, developer: true, enterprise: true },
        { name: "Custom workflows", personal: false, developer: false, enterprise: true },
      ]
    },
    {
      name: "Team & Security",
      features: [
        { name: "Team management", personal: false, developer: false, enterprise: true },
        { name: "Advanced security", personal: false, developer: false, enterprise: true },
        { name: "Custom model training", personal: false, developer: false, enterprise: true },
        { name: "SSO integration", personal: false, developer: false, enterprise: true },
      ]
    },
    {
      name: "Support",
      features: [
        { name: "Support level", personal: "Community", developer: "Priority", enterprise: "Dedicated" },
        { name: "Response time", personal: false, developer: "24 hours", enterprise: "4 hours" },
        { name: "Custom onboarding", personal: false, developer: false, enterprise: true },
        { name: "SLA", personal: false, developer: false, enterprise: true },
      ]
    }
  ];

  return (
    <div className="border border-sireiq-accent/30 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-sireiq-accent/10 p-4 text-left border-b border-sireiq-accent/30">Features</th>
              <th className="bg-sireiq-accent/10 p-4 text-center border-b border-sireiq-accent/30 min-w-[180px]">
                <div className="text-lg font-bold">Personal</div>
                <div className="text-sireiq-light/60 text-sm mb-3">Free</div>
                <Button 
                  size="sm"
                  className={`w-full ${role === 'user' 
                    ? 'bg-sireiq-accent/30 cursor-not-allowed border border-sireiq-accent/50' 
                    : 'bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90'}`}
                  onClick={() => handlePlanChange('user')}
                  disabled={role === 'user'}
                >
                  {role === 'user' ? 'Current Plan' : 'Get Started'}
                </Button>
              </th>
              <th className="bg-sireiq-cyan/10 p-4 text-center border border-sireiq-cyan/30 min-w-[180px]">
                <div className="text-lg font-bold">Developer</div>
                <div className="text-sireiq-light/60 text-sm mb-3">$19/month</div>
                <Button 
                  size="sm"
                  className={`w-full ${role === 'developer' 
                    ? 'bg-sireiq-accent/30 cursor-not-allowed border border-sireiq-accent/50' 
                    : 'bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90'}`}
                  onClick={() => handlePlanChange('developer')}
                  disabled={role === 'developer'}
                >
                  {role === 'developer' ? 'Current Plan' : 'Upgrade'}
                </Button>
              </th>
              <th className="bg-sireiq-accent/10 p-4 text-center border-b border-sireiq-accent/30 min-w-[180px]">
                <div className="text-lg font-bold">Enterprise</div>
                <div className="text-sireiq-light/60 text-sm mb-3">Custom pricing</div>
                <Button 
                  size="sm"
                  className={`w-full ${role === 'enterprise' 
                    ? 'bg-sireiq-accent/30 cursor-not-allowed border border-sireiq-accent/50' 
                    : 'bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90'}`}
                  onClick={() => handleEnterpriseRequest()}
                  disabled={role === 'enterprise'}
                >
                  {role === 'enterprise' ? 'Current Plan' : 'Contact Sales'}
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {featureCategories.map((category, categoryIndex) => (
              <React.Fragment key={`category-${categoryIndex}`}>
                <tr>
                  <td colSpan={4} className="bg-sireiq-accent/5 p-3 font-medium border-t border-b border-sireiq-accent/30">
                    {category.name}
                  </td>
                </tr>
                {category.features.map((feature, featureIndex) => (
                  <tr key={`feature-${categoryIndex}-${featureIndex}`} className="border-b border-sireiq-accent/10 last:border-0">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span>{feature.name}</span>
                        {feature.name === "Messages per day" && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-sireiq-light/40" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-xs w-56">Number of AI assistant messages you can use per day</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      {typeof feature.personal === 'boolean' ? (
                        feature.personal ? (
                          <Check className="h-5 w-5 text-sireiq-cyan mx-auto" />
                        ) : (
                          <Minus className="h-5 w-5 text-sireiq-light/30 mx-auto" />
                        )
                      ) : (
                        <div className="text-sireiq-light/70 text-sm">{feature.personal}</div>
                      )}
                    </td>
                    <td className="p-4 text-center bg-sireiq-cyan/5">
                      {typeof feature.developer === 'boolean' ? (
                        feature.developer ? (
                          <Check className="h-5 w-5 text-sireiq-cyan mx-auto" />
                        ) : (
                          <Minus className="h-5 w-5 text-sireiq-light/30 mx-auto" />
                        )
                      ) : (
                        <div className="text-sireiq-light/70 text-sm">{feature.developer}</div>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof feature.enterprise === 'boolean' ? (
                        feature.enterprise ? (
                          <Check className="h-5 w-5 text-sireiq-cyan mx-auto" />
                        ) : (
                          <Minus className="h-5 w-5 text-sireiq-light/30 mx-auto" />
                        )
                      ) : (
                        <div className="text-sireiq-light/70 text-sm">{feature.enterprise}</div>
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingComparisonTable;
