
import React, { useState } from 'react';
import { useRole } from '@/contexts/RoleContext';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/components/ui/sonner';
import { Check, ChevronRight, Users, Code, Building } from 'lucide-react';

const pricingOptions = {
  user: {
    icon: Users,
    title: 'Regular User',
    description: 'Personal assistant for daily tasks',
    price: 'Free',
    features: [
      'Basic AI assistants',
      'Limited content creation',
      'Standard support',
    ]
  },
  developer: {
    icon: Code,
    title: 'Developer',
    description: 'Technical tools for coding and building',
    price: '$19/month',
    features: [
      'Advanced coding assistance',
      'API access',
      'Agent building',
      'Priority support'
    ]
  },
  enterprise: {
    icon: Building,
    title: 'Enterprise',
    description: 'Custom solutions for organizations',
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
        <Button variant="outline" className="border-sireiq-cyan text-sireiq-cyan bg-transparent hover:bg-sireiq-cyan/10 flex items-center gap-2">
          <span>Switch Role</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-sireiq-darker border-sireiq-accent/30 text-sireiq-light sm:max-w-[550px]">
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
            {Object.entries(pricingOptions).map(([key, option]) => {
              const Icon = option.icon;
              const isSelected = selectedPlan === key;
              return (
                <div 
                  key={key}
                  className={`flex items-start space-x-3 border rounded-lg p-4 transition-all ${
                    isSelected ? 'border-sireiq-cyan bg-sireiq-accent/10 shadow-[0_0_10px_rgba(60,223,255,0.1)]' : 'border-sireiq-accent/30'
                  }`}
                >
                  <RadioGroupItem value={key} id={`${key}-plan`} className="mt-1" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-md ${isSelected ? 'bg-sireiq-cyan/20' : 'bg-sireiq-accent/10'}`}>
                          <Icon size={16} className={isSelected ? 'text-sireiq-cyan' : 'text-sireiq-light/70'} />
                        </div>
                        <Label htmlFor={`${key}-plan`} className="text-lg font-medium">{option.title}</Label>
                      </div>
                      <span className="font-medium">{option.price}</span>
                    </div>
                    <p className="text-sm text-sireiq-light/70 mt-1">{option.description}</p>
                    <ul className="mt-3 space-y-2">
                      {option.features.map((feature, index) => (
                        <li key={index} className="text-sm flex items-center">
                          <Check className="h-4 w-4 text-sireiq-cyan mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {key === 'enterprise' && (
                      <p className="text-xs italic mt-3 text-sireiq-light/70">Enterprise upgrade requires contacting our sales team</p>
                    )}
                  </div>
                </div>
              );
            })}
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
