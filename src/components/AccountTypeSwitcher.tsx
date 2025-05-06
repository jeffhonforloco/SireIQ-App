
import React, { useState } from 'react';
import { useRole } from '@/contexts/RoleContext';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/components/ui/sonner';

const pricingOptions = {
  user: {
    price: 'Free',
    features: [
      'Basic AI assistants',
      'Limited content creation',
      'Standard support',
    ]
  },
  developer: {
    price: '$19/month',
    features: [
      'Advanced coding assistance',
      'API access',
      'Agent building',
      'Priority support'
    ]
  },
  enterprise: {
    price: 'Custom pricing',
    features: [
      'Dedicated infrastructure',
      'Custom AI model training',
      'Advanced security & compliance',
      'Dedicated support team'
    ]
  }
};

type AccountType = 'user' | 'developer' | 'enterprise';

export const AccountTypeSwitcher = () => {
  const { role, setRole } = useRole();
  const [selectedPlan, setSelectedPlan] = useState<AccountType>(role as AccountType || 'user');
  const [upgradeDialogOpen, setUpgradeDialogOpen] = useState(false);
  
  const handleSwitchRole = () => {
    if (selectedPlan === 'enterprise') {
      // For enterprise, we'll show a demo request dialog instead of immediate switch
      toast.info("Enterprise upgrade requires contacting our sales team.");
      setUpgradeDialogOpen(false);
      // This is where you'd open a demo request modal in a real app
    } else {
      setRole(selectedPlan);
      toast.success(`Account switched to ${selectedPlan} plan successfully!`);
      setUpgradeDialogOpen(false);
    }
  };
  
  return (
    <Dialog open={upgradeDialogOpen} onOpenChange={setUpgradeDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-sireiq-cyan text-sireiq-cyan bg-transparent hover:bg-sireiq-cyan/10">
          Switch/Upgrade Account
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-sireiq-darker border-sireiq-accent/30 text-sireiq-light sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Switch or Upgrade Your Account</DialogTitle>
          <DialogDescription className="text-sireiq-light/70">
            Choose the plan that best fits your needs. Upgrade anytime.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-6">
          <RadioGroup 
            defaultValue={role || 'user'}
            className="space-y-4"
            value={selectedPlan}
            onValueChange={(value) => setSelectedPlan(value as AccountType)}
          >
            {/* User Plan */}
            <div className={`flex items-start space-x-3 border rounded-lg p-4 ${selectedPlan === 'user' ? 'border-sireiq-cyan bg-sireiq-accent/10' : 'border-sireiq-accent/30'}`}>
              <RadioGroupItem value="user" id="user-plan" className="mt-1" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <Label htmlFor="user-plan" className="text-lg font-medium">Regular User</Label>
                  <span className="font-medium">{pricingOptions.user.price}</span>
                </div>
                <p className="text-sm text-sireiq-light/70 mt-1">Personal assistant for daily tasks</p>
                <ul className="mt-2 space-y-1">
                  {pricingOptions.user.features.map((feature, index) => (
                    <li key={index} className="text-sm flex">
                      <span className="text-sireiq-cyan mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Developer Plan */}
            <div className={`flex items-start space-x-3 border rounded-lg p-4 ${selectedPlan === 'developer' ? 'border-sireiq-cyan bg-sireiq-accent/10' : 'border-sireiq-accent/30'}`}>
              <RadioGroupItem value="developer" id="developer-plan" className="mt-1" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <Label htmlFor="developer-plan" className="text-lg font-medium">Developer</Label>
                  <span className="font-medium">{pricingOptions.developer.price}</span>
                </div>
                <p className="text-sm text-sireiq-light/70 mt-1">Technical tools for coding and building</p>
                <ul className="mt-2 space-y-1">
                  {pricingOptions.developer.features.map((feature, index) => (
                    <li key={index} className="text-sm flex">
                      <span className="text-sireiq-cyan mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className={`flex items-start space-x-3 border rounded-lg p-4 ${selectedPlan === 'enterprise' ? 'border-sireiq-cyan bg-sireiq-accent/10' : 'border-sireiq-accent/30'}`}>
              <RadioGroupItem value="enterprise" id="enterprise-plan" className="mt-1" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <Label htmlFor="enterprise-plan" className="text-lg font-medium">Enterprise</Label>
                  <span className="font-medium">{pricingOptions.enterprise.price}</span>
                </div>
                <p className="text-sm text-sireiq-light/70 mt-1">Custom solutions for organizations</p>
                <ul className="mt-2 space-y-1">
                  {pricingOptions.enterprise.features.map((feature, index) => (
                    <li key={index} className="text-sm flex">
                      <span className="text-sireiq-cyan mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-xs italic mt-2 text-sireiq-light/70">Enterprise upgrade requires contacting our sales team</p>
              </div>
            </div>
          </RadioGroup>
        </div>
        
        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={() => setUpgradeDialogOpen(false)}
            className="border-sireiq-accent/30"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSwitchRole}
            className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
          >
            {selectedPlan === 'enterprise' ? 'Request Demo' : 'Confirm Change'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AccountTypeSwitcher;
