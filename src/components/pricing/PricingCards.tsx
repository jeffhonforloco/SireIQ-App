
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Floating comparison label */}
        <div className="absolute -top-10 left-0 right-0 flex justify-center md:hidden">
          <span className="text-sm font-medium text-sireiq-light/70">Scroll to compare plans →</span>
        </div>

        {/* Personal Plan */}
        <div className="bg-sireiq-darker border border-sireiq-accent/30 rounded-xl overflow-hidden h-full transition-all hover:border-sireiq-cyan/50 hover:shadow-[0_0_15px_rgba(60,223,255,0.15)]">
          <div className="p-6 flex flex-col h-full">
            <div className="mb-6">
              <span className="text-sm font-medium text-sireiq-light/70">For individuals</span>
              <h3 className="text-2xl font-bold mt-1">Personal</h3>
              <div className="mt-3 mb-2">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-sireiq-light/70">/forever</span>
              </div>
              <p className="text-sm text-sireiq-light/60">Get started with basic features</p>
            </div>
            
            <Button 
              className={`mb-6 ${role === 'user' 
                ? 'bg-sireiq-accent/30 cursor-not-allowed' 
                : 'bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90'}`}
              onClick={() => handlePlanChange('user')}
              disabled={role === 'user'}
            >
              {role === 'user' ? 'Current Plan' : 'Get Started'}
            </Button>
            
            <div className="space-y-4 flex-grow">
              <p className="text-sm font-medium text-sireiq-light">Included in the free plan:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                  <span>Basic AI assistant access</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                  <span>10 messages per day</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                  <span>Content creation (basic)</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                  <span>Simple text responses</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                  <span>Community support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Developer Plan */}
        <div className="bg-sireiq-darker border-2 border-sireiq-cyan rounded-xl overflow-hidden h-full relative transition-all shadow-[0_0_20px_rgba(60,223,255,0.25)]">
          <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-center py-1.5 text-xs font-medium text-sireiq-darker">
            MOST POPULAR
          </div>
          <div className="p-6 pt-10 flex flex-col h-full">
            <div className="mb-6">
              <span className="text-sm font-medium text-sireiq-light/70">For professionals</span>
              <h3 className="text-2xl font-bold mt-1">Developer</h3>
              <div className="mt-3 mb-2">
                <span className="text-4xl font-bold">${billingCycle === 'monthly' ? '19' : '15'}</span>
                <span className="text-sireiq-light/70">/month</span>
              </div>
              <p className="text-sm text-sireiq-light/60">
                {billingCycle === 'annual' ? 'Billed annually ($180/year)' : 'Billed monthly'}
              </p>
            </div>
            
            <Button 
              className={`mb-6 ${role === 'developer' 
                ? 'bg-sireiq-accent/30 cursor-not-allowed' 
                : 'bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90'}`}
              onClick={() => handlePlanChange('developer')}
              disabled={role === 'developer'}
            >
              {role === 'developer' ? 'Current Plan' : 'Upgrade Now'}
            </Button>
            
            <div className="space-y-4 flex-grow">
              <p className="text-sm font-medium text-sireiq-light">Everything in Personal, plus:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                  <span><strong>50 messages per day</strong> (5x more than Personal)</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                  <span><strong>Advanced coding tools</strong> with syntax highlighting</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                  <span><strong>API access</strong> for integrations</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                  <span><strong>Agent building</strong> capabilities</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                  <span><strong>Priority support</strong> (24hr response)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-sireiq-darker border border-sireiq-accent/30 rounded-xl overflow-hidden h-full transition-all hover:border-sireiq-cyan/50 hover:shadow-[0_0_15px_rgba(60,223,255,0.15)]">
          <div className="p-6 flex flex-col h-full">
            <div className="mb-6">
              <span className="text-sm font-medium text-sireiq-light/70">For organizations</span>
              <h3 className="text-2xl font-bold mt-1">Enterprise</h3>
              <div className="mt-3 mb-2">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-sm text-sireiq-light/60">Tailored for your business needs</p>
            </div>
            
            <Button 
              className={`mb-6 ${role === 'enterprise' 
                ? 'bg-sireiq-accent/30 cursor-not-allowed' 
                : 'bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90'}`}
              onClick={role === 'enterprise' ? undefined : handleEnterpriseRequest}
              disabled={role === 'enterprise'}
            >
              {role === 'enterprise' ? 'Current Plan' : 'Contact Sales'}
            </Button>
            
            <div className="space-y-4 flex-grow">
              <p className="text-sm font-medium text-sireiq-light">Everything in Developer, plus:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Star className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                  <span><strong>Unlimited messages</strong> for all team members</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Star className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                  <span><strong>Team management</strong> with role-based access</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Star className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                  <span><strong>Advanced security</strong> & compliance controls</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Star className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                  <span><strong>Custom model training</strong> on your data</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Star className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                  <span><strong>Dedicated support</strong> team & SLA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
