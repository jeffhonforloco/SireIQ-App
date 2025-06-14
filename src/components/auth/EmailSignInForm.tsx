
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { sanitizeInput, isValidEmail, checkRateLimit } from '@/utils/security';
import { Mail } from 'lucide-react';

interface EmailSignInFormProps {
  onSignIn: (email: string, password: string) => void;
}

const EmailSignInForm: React.FC<EmailSignInFormProps> = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    // Rate limiting check
    if (!checkRateLimit('signin_form', 3, 60000)) {
      toast.error("Too many sign-in attempts. Please wait a minute.");
      return;
    }
    
    // Input validation and sanitization
    const sanitizedEmail = sanitizeInput(email.toLowerCase().trim());
    const sanitizedPassword = password.trim();
    
    if (!sanitizedEmail || !sanitizedPassword) {
      toast.error("Please enter both email and password");
      return;
    }
    
    if (!isValidEmail(sanitizedEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    if (sanitizedPassword.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await onSignIn(sanitizedEmail, sanitizedPassword);
    } catch (error) {
      console.error('Sign in error:', error);
      toast.error("An error occurred during sign in");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = sanitizeInput(e.target.value);
    setEmail(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Don't sanitize password input to preserve special characters
    setPassword(e.target.value);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-sireiq-light">Email</label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-4 py-2 rounded-md border border-sireiq-accent/30 bg-sireiq-dark/60 text-sireiq-light focus:border-sireiq-cyan focus:ring-1 focus:ring-sireiq-cyan/50 outline-none"
          placeholder="your@email.com"
          required
          maxLength={100}
          autoComplete="email"
          disabled={isSubmitting}
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1 text-sireiq-light">Password</label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full px-4 py-2 rounded-md border border-sireiq-accent/30 bg-sireiq-dark/60 text-sireiq-light focus:border-sireiq-cyan focus:ring-1 focus:ring-sireiq-cyan/50 outline-none"
          placeholder="••••••••"
          required
          minLength={8}
          maxLength={128}
          autoComplete="current-password"
          disabled={isSubmitting}
        />
      </div>
      
      <div className="flex justify-end">
        <Link to="/forgot-password" className="text-sm text-sireiq-cyan hover:underline">
          Forgot password?
        </Link>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90 shadow-md"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Signing In...' : 'Sign In with Email'}
      </Button>
    </form>
  );
};

export default EmailSignInForm;
