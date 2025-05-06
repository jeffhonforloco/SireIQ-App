
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRole } from '@/contexts/RoleContext';
import { User } from 'lucide-react';

const RoleSelection = () => {
  const { setRole, setOnboardingStep } = useRole();
  const [selectedRole, setSelectedRole] = React.useState<'user'>('user');

  const handleContinue = () => {
    setRole(selectedRole);
    setOnboardingStep(2);
  };

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        <span className="text-gradient glow">Welcome to SireIQ</span>
      </h1>
      
      <p className="text-center text-sireiq-light/70">
        You're now set up with a regular user account. You can personalize your experience in the next steps, and upgrade to Developer or Enterprise accounts from your dashboard later.
      </p>
      
      <RadioGroup 
        className="grid grid-cols-1 gap-4 w-full" 
        defaultValue="user"
        value="user"
        onValueChange={(value) => setSelectedRole(value as 'user')}
      >
        <div className="relative flex flex-col items-center border rounded-lg p-6 cursor-pointer transition-all bg-sireiq-accent/20 border-sireiq-cyan">
          <RadioGroupItem value="user" id="user" className="sr-only" />
          <User className="h-10 w-10 mb-4 text-sireiq-cyan" />
          <Label htmlFor="user" className="text-lg font-semibold mb-2">User</Label>
          <p className="text-sm text-center text-sireiq-light/70">
            Personal assistant for daily tasks, content creation, and conversations
          </p>
        </div>
      </RadioGroup>
      
      <Button 
        onClick={handleContinue} 
        className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-8 py-2 h-auto mt-8"
      >
        Continue
      </Button>
    </div>
  );
};

export default RoleSelection;
