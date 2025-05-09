
import React from 'react';
import { Check, Minus, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useRolePermissions } from '@/hooks/useRolePermissions';

const PricingComparisonTable: React.FC = () => {
  const { role } = useRolePermissions();

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="text-left p-4 bg-sireiq-accent/10 rounded-tl-xl border-b border-sireiq-accent/30">Features</th>
            <th className="text-center p-4 bg-sireiq-accent/10 border-b border-sireiq-accent/30">
              <div className="text-lg font-bold">Personal</div>
              <div className="text-sireiq-light/60 text-sm">Free</div>
            </th>
            <th className="text-center p-4 bg-sireiq-cyan/10 border-b border-sireiq-cyan/30">
              <div className="text-lg font-bold">Developer</div>
              <div className="text-sireiq-light/60 text-sm">$19/month</div>
            </th>
            <th className="text-center p-4 bg-sireiq-accent/10 rounded-tr-xl border-b border-sireiq-accent/30">
              <div className="text-lg font-bold">Enterprise</div>
              <div className="text-sireiq-light/60 text-sm">Custom pricing</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b border-sireiq-accent/20">Dashboard Access</td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Check className="h-5 w-5 text-sireiq-cyan mx-auto" />
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Check className="h-5 w-5 text-sireiq-cyan mx-auto" />
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Check className="h-5 w-5 text-sireiq-cyan mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-sireiq-accent/20">Content Creation</td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <div className="flex justify-center items-center">
                <span className="text-sireiq-light/60 text-sm">Basic</span>
              </div>
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <div className="flex justify-center items-center">
                <span className="text-sireiq-light/60 text-sm">Advanced</span>
              </div>
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <div className="flex justify-center items-center">
                <span className="text-sireiq-light/60 text-sm">Enterprise-grade</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-sireiq-accent/20">
              <div className="flex items-center gap-2">
                <span>Chat Messages</span>
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
              </div>
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <div className="text-sireiq-light/60 text-sm">10/day</div>
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <div className="text-sireiq-light/60 text-sm">50/day</div>
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <div className="text-sireiq-light/60 text-sm">Unlimited</div>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-sireiq-accent/20">Coding Tools</td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Minus className="h-5 w-5 text-sireiq-light/30 mx-auto" />
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Check className="h-5 w-5 text-sireiq-cyan mx-auto" />
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Check className="h-5 w-5 text-sireiq-cyan mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-sireiq-accent/20">API Access</td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Minus className="h-5 w-5 text-sireiq-light/30 mx-auto" />
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Check className="h-5 w-5 text-sireiq-cyan mx-auto" />
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Check className="h-5 w-5 text-sireiq-cyan mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-sireiq-accent/20">Agent Building</td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Minus className="h-5 w-5 text-sireiq-light/30 mx-auto" />
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Check className="h-5 w-5 text-sireiq-cyan mx-auto" />
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Check className="h-5 w-5 text-sireiq-cyan mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-sireiq-accent/20">Team Management</td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Minus className="h-5 w-5 text-sireiq-light/30 mx-auto" />
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Minus className="h-5 w-5 text-sireiq-light/30 mx-auto" />
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Check className="h-5 w-5 text-sireiq-cyan mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-sireiq-accent/20">Advanced Security</td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Minus className="h-5 w-5 text-sireiq-light/30 mx-auto" />
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Minus className="h-5 w-5 text-sireiq-light/30 mx-auto" />
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Check className="h-5 w-5 text-sireiq-cyan mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-sireiq-accent/20">Custom Model Training</td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Minus className="h-5 w-5 text-sireiq-light/30 mx-auto" />
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Minus className="h-5 w-5 text-sireiq-light/30 mx-auto" />
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <Check className="h-5 w-5 text-sireiq-cyan mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-sireiq-accent/20">Support Level</td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <div className="text-sireiq-light/60 text-sm">Standard</div>
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <div className="text-sireiq-light/60 text-sm">Priority</div>
            </td>
            <td className="text-center p-4 border-b border-sireiq-accent/20">
              <div className="text-sireiq-light/60 text-sm">Dedicated Team</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingComparisonTable;
