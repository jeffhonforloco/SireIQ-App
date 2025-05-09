
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Users, Code, Building, Zap, Star } from 'lucide-react';
import { useRole } from '@/contexts/RoleContext';
import { toast } from 'sonner';

const PricingCards: React.FC = () => {
  const { role, setRole } = useRole();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

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

  return (
    <div className="space-y-8">
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center bg-sireiq-accent/10 p-1 rounded-full border border-sireiq-accent/30">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setBillingCycle('monthly')}
            className={`rounded-full px-6 ${
              billingCycle === 'monthly'
                ? 'bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker'
                : 'hover:bg-sireiq-accent/20'
            }`}
          >
            Monthly
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setBillingCycle('annual')}
            className={`rounded-full px-6 ${
              billingCycle === 'annual'
                ? 'bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker'
                : 'hover:bg-sireiq-accent/20'
            }`}
          >
            Annually <Badge className="ml-2 bg-sireiq-purple text-white">Save 20%</Badge>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Personal Plan */}
        <div className="bg-sireiq-accent/5 border border-sireiq-accent/30 rounded-xl overflow-hidden transition-all hover:border-sireiq-cyan/50 hover:shadow-[0_0_15px_rgba(60,223,255,0.15)]">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-sireiq-accent/20 rounded-lg">
                <Users className="h-5 w-5 text-sireiq-cyan" />
              </div>
              <h3 className="text-xl font-bold">Personal</h3>
            </div>
            
            <div className="mt-4 mb-6">
              <div className="flex items-end">
                <span className="text-4xl font-bold">Free</span>
              </div>
              <p className="text-sm text-sireiq-light/60 mt-1">No credit card required</p>
            </div>
            
            <Button 
              className={`w-full mb-6 ${role === 'user' 
                ? 'bg-sireiq-accent/30 cursor-not-allowed' 
                : 'bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90'}`}
              onClick={() => handlePlanChange('user')}
              disabled={role === 'user'}
            >
              {role === 'user' ? 'Current Plan' : 'Get Started'}
            </Button>
            
            <div className="space-y-3">
              <p className="text-sm text-sireiq-light/70 font-medium">Includes:</p>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-sireiq-cyan mt-0.5" />
                <span className="text-sm">Basic Dashboard Access</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-sireiq-cyan mt-0.5" />
                <span className="text-sm">Limited Content Creation</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-sireiq-cyan mt-0.5" />
                <span className="text-sm">Basic AI Assistant</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-sireiq-cyan mt-0.5" />
                <span className="text-sm">Limited Chat (10 messages/day)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-sireiq-cyan mt-0.5" />
                <span className="text-sm">Standard Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Plan */}
        <div className="bg-sireiq-accent/5 border border-sireiq-cyan/30 rounded-xl overflow-hidden relative transition-all hover:shadow-[0_0_20px_rgba(60,223,255,0.25)]">
          <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-center py-1 text-xs font-medium text-sireiq-darker">
            MOST POPULAR
          </div>
          <div className="p-6 pt-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-sireiq-cyan/20 rounded-lg">
                <Code className="h-5 w-5 text-sireiq-cyan" />
              </div>
              <h3 className="text-xl font-bold">Developer</h3>
            </div>
            
            <div className="mt-4 mb-6">
              <div className="flex items-end">
                <span className="text-4xl font-bold">${billingCycle === 'monthly' ? '19' : '15'}</span>
                <span className="text-sireiq-light/60 ml-1">/month</span>
              </div>
              <p className="text-sm text-sireiq-light/60 mt-1">
                {billingCycle === 'annual' && "Billed annually ($180)"}
              </p>
            </div>
            
            <Button 
              className={`w-full mb-6 ${role === 'developer' 
                ? 'bg-sireiq-accent/30 cursor-not-allowed' 
                : 'bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90'}`}
              onClick={() => handlePlanChange('developer')}
              disabled={role === 'developer'}
            >
              {role === 'developer' ? 'Current Plan' : 'Upgrade to Developer'}
            </Button>
            
            <div className="space-y-3">
              <p className="text-sm text-sireiq-light/70 font-medium">Everything in Personal, plus:</p>
              <div className="flex items-start gap-3">
                <Zap className="h-4 w-4 text-sireiq-cyan mt-0.5" />
                <span className="text-sm">Advanced Coding Tools</span>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-4 w-4 text-sireiq-cyan mt-0.5" />
                <span className="text-sm">API Access</span>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-4 w-4 text-sireiq-cyan mt-0.5" />
                <span className="text-sm">Agent Building Capabilities</span>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-4 w-4 text-sireiq-cyan mt-0.5" />
                <span className="text-sm">Extended Chat (50 messages/day)</span>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-4 w-4 text-sireiq-cyan mt-0.5" />
                <span className="text-sm">Priority Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-sireiq-accent/5 border border-sireiq-accent/30 rounded-xl overflow-hidden transition-all hover:border-sireiq-cyan/50 hover:shadow-[0_0_15px_rgba(60,223,255,0.15)]">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-sireiq-accent/20 rounded-lg">
                <Building className="h-5 w-5 text-sireiq-cyan" />
              </div>
              <h3 className="text-xl font-bold">Enterprise</h3>
            </div>
            
            <div className="mt-4 mb-6">
              <div className="flex items-end">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-sm text-sireiq-light/60 mt-1">Tailored to your needs</p>
            </div>
            
            <Button 
              className={`w-full mb-6 ${role === 'enterprise' 
                ? 'bg-sireiq-accent/30 cursor-not-allowed' 
                : 'bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90'}`}
              onClick={role === 'enterprise' ? undefined : handleEnterpriseRequest}
              disabled={role === 'enterprise'}
            >
              {role === 'enterprise' ? 'Current Plan' : 'Contact Sales'}
            </Button>
            
            <div className="space-y-3">
              <p className="text-sm text-sireiq-light/70 font-medium">Everything in Developer, plus:</p>
              <div className="flex items-start gap-3">
                <Star className="h-4 w-4 text-sireiq-cyan mt-0.5" />
                <span className="text-sm">Team Management</span>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-4 w-4 text-sireiq-cyan mt-0.5" />
                <span className="text-sm">Advanced Security & Compliance</span>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-4 w-4 text-sireiq-cyan mt-0.5" />
                <span className="text-sm">Custom Model Training</span>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-4 w-4 text-sireiq-cyan mt-0.5" />
                <span className="text-sm">Unlimited Chat</span>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-4 w-4 text-sireiq-cyan mt-0.5" />
                <span className="text-sm">Dedicated Support Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
