
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

interface SignInFormProps {
  onSuccessfulSignIn: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSuccessfulSignIn }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { setRole, setIsFirstTimeUser } = useRole();

  const handleEmailSignIn = (email: string, password: string) => {
    // Mock authentication
    // In a real app, this would be handled by a backend service
    const user = mockUsers.find(user => user.email === email && user.password === password);
    
    if (user) {
      if (!user.verified) {
        // In a real app, this would send a verification email
        toast.error("Your email is not verified. Please check your email for a verification link.");
        return;
      }

      // Set the appropriate role based on the user account
      setRole(user.role as 'user' | 'developer');
      setIsFirstTimeUser(false);
      toast.success(`Signed in successfully as ${user.role}!`);
      onSuccessfulSignIn();
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
      onSuccessfulSignIn();
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
        // Here we're doing a mock implementation
        console.log("Google sign-in initiated");
        
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
        onSuccessfulSignIn();
      } catch (error) {
        toast.error("Google sign-in failed. Please try again.");
        console.error("Google sign-in error:", error);
      } finally {
        setIsProcessing(false);
      }
    }, 1500); // Simulate loading for 1.5 seconds
  };

  return (
    <div className="max-w-md mx-auto glass-effect p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gradient glow">Sign In</h1>
      
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
        <Link to="/get-started" className="text-sireiq-cyan hover:underline">
          Get Started
        </Link>
      </p>
    </div>
  );
};

export default SignInForm;
