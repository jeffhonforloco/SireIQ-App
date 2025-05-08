
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface SignupPromptProps {
  onSignUp: () => void;
  onSignIn: () => void;
  message?: string;
  isAuthenticated?: boolean;
}

const SignupPrompt: React.FC<SignupPromptProps> = ({ 
  onSignUp, 
  onSignIn, 
  message = "You've reached the limit of free messages. Sign up to continue chatting with SireIQ and unlock all features.",
  isAuthenticated = false
}) => {
  const navigate = useNavigate();
  
  const handleUpgrade = () => {
    // In a real app, this would navigate to an upgrade page or open a pricing modal
    navigate('/dashboard');
  };
  
  return (
    <div className="bg-sireiq-accent/10 border border-sireiq-cyan/30 p-4 rounded-lg text-center">
      <h4 className="text-lg font-medium mb-2">Continue the conversation</h4>
      <p className="text-sm text-sireiq-light/80 mb-4">
        {message}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {isAuthenticated ? (
          <Button 
            onClick={handleUpgrade}
            className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
          >
            Upgrade Account
          </Button>
        ) : (
          <>
            <Button 
              onClick={onSignUp}
              className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
            >
              Sign Up
            </Button>
            <Button 
              onClick={onSignIn}
              variant="outline"
              className="border-sireiq-cyan text-sireiq-cyan hover:bg-sireiq-cyan/10"
            >
              Sign In
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default SignupPrompt;
