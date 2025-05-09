
import { useState } from 'react';
import { useRole } from '@/contexts/RoleContext';
import { toast } from '@/components/ui/sonner';
import { useNavigate } from 'react-router-dom';

// Mock user database for demo purposes
// In a real app, this would be fetched from a backend
const mockUsers = [
  { email: 'user@example.com', password: 'password', phone: '1234567890', role: 'user', verified: true },
  { email: 'dev@example.com', password: 'password', phone: '2345678901', role: 'developer', verified: true },
  { email: 'enterprise@example.com', password: 'password', phone: '3456789012', role: 'user', verified: true } // All users start as regular users
];

/**
 * Custom hook for authentication operations
 */
export const useAuth = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { setRole, setIsFirstTimeUser } = useRole();
  const navigate = useNavigate();

  const handleEmailSignIn = (email: string, password: string, afterAuthCallback?: () => void) => {
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
      
      if (afterAuthCallback) {
        afterAuthCallback();
      } else {
        navigate('/dashboard');
      }
    } else {
      toast.error("Invalid email or password");
    }
  };

  const handlePhoneSignIn = (phoneNumber: string, password: string, afterAuthCallback?: () => void) => {
    // Mock phone authentication
    const user = mockUsers.find(user => user.phone === phoneNumber && user.password === password);
    
    if (user) {
      // Set the appropriate role based on the user account
      setRole(user.role as 'user' | 'developer');
      setIsFirstTimeUser(false);
      toast.success(`Signed in successfully as ${user.role}!`);
      
      if (afterAuthCallback) {
        afterAuthCallback();
      } else {
        navigate('/dashboard');
      }
    } else {
      toast.error("Invalid phone number or password");
    }
  };

  const handleGoogleSignIn = (afterAuthCallback?: () => void) => {
    setIsProcessing(true);

    // Simulate API call delay
    setTimeout(() => {
      try {
        // In a real app, this would trigger Google OAuth authentication
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
        
        if (afterAuthCallback) {
          afterAuthCallback();
        } else {
          navigate('/dashboard');
        }
      } catch (error) {
        toast.error("Google sign-in failed. Please try again.");
        console.error("Google sign-in error:", error);
      } finally {
        setIsProcessing(false);
      }
    }, 1500); // Simulate loading for 1.5 seconds
  };

  return {
    isProcessing,
    handleEmailSignIn,
    handlePhoneSignIn,
    handleGoogleSignIn
  };
};

