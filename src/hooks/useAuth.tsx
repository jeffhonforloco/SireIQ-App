
import { useState } from 'react';
import { useRole } from '@/contexts/RoleContext';
import { toast } from '@/components/ui/sonner';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/services/authService';

/**
 * Custom hook for secure authentication operations
 */
export const useAuth = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { setRole, setIsFirstTimeUser } = useRole();
  const navigate = useNavigate();

  const handleEmailSignIn = async (email: string, password: string, afterAuthCallback?: () => void) => {
    setIsProcessing(true);
    
    try {
      const result = await authService.login(email, password);
      
      if (result.success && result.user) {
        // Set the user role and clear first-time user flag
        setRole(result.user.role);
        setIsFirstTimeUser(false);
        
        toast.success(`Welcome back, ${result.user.email}!`);
        
        if (afterAuthCallback) {
          afterAuthCallback();
        } else {
          navigate('/dashboard');
        }
      } else {
        toast.error(result.error || 'Sign in failed');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePhoneSignIn = async (phoneNumber: string, password: string, afterAuthCallback?: () => void) => {
    setIsProcessing(true);
    
    // For now, redirect phone auth to email auth
    toast.info('Phone authentication is not yet implemented. Please use email authentication.');
    setIsProcessing(false);
  };

  const handleGoogleSignIn = (afterAuthCallback?: () => void) => {
    setIsProcessing(true);

    // Simulate OAuth flow
    setTimeout(() => {
      try {
        // In a real app, this would integrate with Google OAuth
        toast.info('Google authentication is not yet implemented. Please use email authentication.');
      } catch (error) {
        toast.error("Google sign-in failed. Please try again.");
        console.error("Google sign-in error:", error);
      } finally {
        setIsProcessing(false);
      }
    }, 1500);
  };

  // Check if user is authenticated
  const isAuthenticated = (): boolean => {
    return authService.isTokenValid();
  };

  // Get current user
  const getCurrentUser = () => {
    return authService.getCurrentUser();
  };

  // Secure logout
  const logout = () => {
    authService.logout();
    setRole(null);
    setIsFirstTimeUser(false);
    toast.success('Logged out successfully');
    navigate('/');
  };

  return {
    isProcessing,
    handleEmailSignIn,
    handlePhoneSignIn,
    handleGoogleSignIn,
    isAuthenticated,
    getCurrentUser,
    logout
  };
};
