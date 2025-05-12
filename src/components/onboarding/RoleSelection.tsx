
import React from 'react';
import { Button } from "@/components/ui/button";
import { useRole } from '@/contexts/RoleContext';
import { Users } from 'lucide-react';
import RoleFeatureGuide from './RoleFeatureGuide';

const RoleSelection = () => {
  const { setRole, setOnboardingStep } = useRole();

  const handleContinue = () => {
    // Always set to 'user' role by default
    setRole('user');
    setOnboardingStep(2);
  };

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        <span className="text-gradient glow">Welcome to SireIQ</span>
      </h1>
      
      <p className="text-center text-sireiq-light/70">
        You're now set up with a free account. You can personalize your experience in the next steps, and upgrade to Developer or Enterprise plans from your dashboard anytime.
      </p>
      
      <div className="relative flex flex-col items-center border rounded-lg p-6 cursor-pointer transition-all bg-sireiq-accent/20 border-sireiq-cyan w-full max-w-md">
        <Users className="h-10 w-10 mb-4 text-sireiq-cyan" />
        <h3 className="text-lg font-semibold mb-2">Free Account</h3>
        <p className="text-sm text-center text-sireiq-light/70">
          Personal assistant for daily tasks, content creation, and conversations with upgrade options available
        </p>
      </div>
      
      {/* Feature guide */}
      <div className="w-full mt-8 border-t border-sireiq-accent/20 pt-8">
        <RoleFeatureGuide />
      </div>
      
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
