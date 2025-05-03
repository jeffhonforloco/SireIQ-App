
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRole } from '@/contexts/RoleContext';
import { User, Code, Building2 } from 'lucide-react';

const RoleSelection = () => {
  const { setRole, setOnboardingStep } = useRole();
  const [selectedRole, setSelectedRole] = React.useState<'user' | 'developer' | 'enterprise'>('user');

  const handleContinue = () => {
    setRole(selectedRole);
    setOnboardingStep(2);
  };

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        <span className="text-gradient glow">Select Your Role</span>
      </h1>
      
      <p className="text-center text-sireiq-light/70">
        Choose how you'll primarily use SireIQ. This helps us personalize your experience.
      </p>
      
      <RadioGroup 
        className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full" 
        defaultValue="user"
        onValueChange={(value) => setSelectedRole(value as 'user' | 'developer' | 'enterprise')}
      >
        <div className={`relative flex flex-col items-center border rounded-lg p-6 cursor-pointer transition-all ${selectedRole === 'user' ? 'bg-sireiq-accent/20 border-sireiq-cyan' : 'bg-sireiq-darker border-sireiq-accent/20 hover:bg-sireiq-accent/10'}`}>
          <RadioGroupItem value="user" id="user" className="sr-only" />
          <User className="h-10 w-10 mb-4 text-sireiq-cyan" />
          <Label htmlFor="user" className="text-lg font-semibold mb-2">User</Label>
          <p className="text-sm text-center text-sireiq-light/70">
            Personal assistant for daily tasks, content creation, and conversations
          </p>
        </div>
        
        <div className={`relative flex flex-col items-center border rounded-lg p-6 cursor-pointer transition-all ${selectedRole === 'developer' ? 'bg-sireiq-accent/20 border-sireiq-cyan' : 'bg-sireiq-darker border-sireiq-accent/20 hover:bg-sireiq-accent/10'}`}>
          <RadioGroupItem value="developer" id="developer" className="sr-only" />
          <Code className="h-10 w-10 mb-4 text-sireiq-cyan" />
          <Label htmlFor="developer" className="text-lg font-semibold mb-2">Developer</Label>
          <p className="text-sm text-center text-sireiq-light/70">
            Technical tools for coding, API access, and agent building
          </p>
        </div>
        
        <div className={`relative flex flex-col items-center border rounded-lg p-6 cursor-pointer transition-all ${selectedRole === 'enterprise' ? 'bg-sireiq-accent/20 border-sireiq-cyan' : 'bg-sireiq-darker border-sireiq-accent/20 hover:bg-sireiq-accent/10'}`}>
          <RadioGroupItem value="enterprise" id="enterprise" className="sr-only" />
          <Building2 className="h-10 w-10 mb-4 text-sireiq-cyan" />
          <Label htmlFor="enterprise" className="text-lg font-semibold mb-2">Enterprise</Label>
          <p className="text-sm text-center text-sireiq-light/70">
            Team collaboration, knowledge sharing, and advanced workflows
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
