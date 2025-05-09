
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useAuth } from '@/hooks/useAuth';
import SignInTabs from './SignInTabs';
import SocialSignIn from './SocialSignIn';

interface SignInModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignInModal = ({ isOpen, onOpenChange }: SignInModalProps) => {
  const navigate = useNavigate();
  const { isProcessing, handleEmailSignIn, handlePhoneSignIn, handleGoogleSignIn } = useAuth();

  // Callback for after successful authentication
  const afterAuthSuccess = () => {
    onOpenChange(false); // Close the modal
    navigate('/dashboard');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="glass-effect p-0 border border-sireiq-accent/20 sm:max-w-md">
        <div className="p-6">
          <DialogTitle className="text-3xl font-bold mb-6 text-center text-gradient glow">Sign In</DialogTitle>
          
          <SignInTabs 
            onEmailSignIn={(email, password) => handleEmailSignIn(email, password, afterAuthSuccess)}
            onPhoneSignIn={(phone, password) => handlePhoneSignIn(phone, password, afterAuthSuccess)}
          />

          <SocialSignIn 
            onGoogleSignIn={() => handleGoogleSignIn(afterAuthSuccess)}
            isProcessing={isProcessing}
          />
          
          <p className="mt-6 text-center text-sm text-sireiq-light/90">
            Don't have an account?{' '}
            <Link to="/get-started" className="text-sireiq-cyan hover:underline">Get Started</Link>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
