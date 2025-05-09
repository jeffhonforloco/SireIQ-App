
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useRole } from '@/contexts/RoleContext';
import { toast } from '@/components/ui/sonner';
import SignInTabs from './SignInTabs';
import SocialSignIn from './SocialSignIn';

// Mock user database for demo purposes
// In a real app, this would be fetched from a backend
const mockUsers = [
  { email: 'user@example.com', password: 'password', phone: '1234567890', role: 'user', verified: true },
  { email: 'dev@example.com', password: 'password', phone: '2345678901', role: 'developer', verified: true },
  { email: 'enterprise@example.com', password: 'password', phone: '3456789012', role: 'user', verified: true } // All users start as regular users
];

interface SignInModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignInModal = ({ isOpen, onOpenChange }: SignInModalProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { setRole, setIsFirstTimeUser } = useRole();
  const navigate = useNavigate();

  const handleEmailSignIn = (email: string, password: string) => {
    // Mock authentication
    const user = mockUsers.find(user => user.email === email && user.password === password);
    
    if (user) {
      if (!user.verified) {
        toast.error("Your email is not verified. Please check your email for a verification link.");
        return;
      }

      // Set the appropriate role based on the user account
      setRole(user.role as 'user' | 'developer');
      setIsFirstTimeUser(false);
      toast.success(`Signed in successfully as ${user.role}!`);
      onOpenChange(false); // Close the modal
      navigate('/dashboard');
    } else {
      toast.error("Invalid email or password");
    }
  };

  const handlePhoneSignIn = (phoneNumber: string, password: string) => {
    // Mock phone authentication
    const user = mockUsers.find(user => user.phone === phoneNumber && user.password === password);
    
    if (user) {
      // Set the appropriate role based on the user account
      setRole(user.role as 'user' | 'developer');
      setIsFirstTimeUser(false);
      toast.success(`Signed in successfully as ${user.role}!`);
      onOpenChange(false); // Close the modal
      navigate('/dashboard');
    } else {
      toast.error("Invalid phone number or password");
    }
  };

  const handleGoogleSignIn = () => {
    setIsProcessing(true);

    // Simulate API call delay
    setTimeout(() => {
      try {
        // In a real app, this would trigger Google OAuth authentication
        console.log("Google sign-in initiated from modal");
        
        // Mock successful authentication
        const mockGoogleUser = {
          email: 'google-user@example.com',
          name: 'Google User',
          role: 'user'
        };
        
        // Set the user role and show success message
        setRole(mockGoogleUser.role as 'user' | 'developer');
        setIsFirstTimeUser(false);
        toast.success(`Welcome, ${mockGoogleUser.name}!`);
        onOpenChange(false); // Close the modal
        navigate('/dashboard');
      } catch (error) {
        toast.error("Google sign-in failed. Please try again.");
        console.error("Google sign-in error:", error);
      } finally {
        setIsProcessing(false);
      }
    }, 1500); // Simulate loading for 1.5 seconds
  };

  const handleForgotPassword = () => {
    onOpenChange(false); // Close the modal
    navigate('/forgot-password'); // Navigate to forgot password page
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="glass-effect p-0 border border-sireiq-accent/20 sm:max-w-md">
        <div className="p-6">
          <DialogTitle className="text-3xl font-bold mb-6 text-center text-gradient glow">Sign In</DialogTitle>
          
          <SignInTabs 
            onEmailSignIn={handleEmailSignIn}
            onPhoneSignIn={handlePhoneSignIn}
          />

          <SocialSignIn 
            onGoogleSignIn={handleGoogleSignIn}
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
