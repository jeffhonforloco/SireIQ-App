
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import AccountTypeSelector, { AccountType } from './AccountTypeSelector';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import { usePasswordStrength } from '@/hooks/usePasswordStrength';

interface RegistrationFormProps {
  onSuccess: (email: string) => void;
}

const RegistrationForm = ({ onSuccess }: RegistrationFormProps) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState<AccountType>('personal');
  
  // Use custom hook for password strength
  const passwordStrength = usePasswordStrength(password);

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!fullName || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    // Password confirmation check
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // In a real app, this would register the user in a database
    toast.success("Account created! Please verify your email");
    onSuccess(email);
    
    // In a real app, this would send an actual verification code via email
    console.log(`Verification code for demo: 123456`);
  };

  return (
    <form className="space-y-4" onSubmit={handleCreateAccount}>
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name</label>
        <Input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="bg-sireiq-dark text-sireiq-light border-sireiq-accent/20"
          placeholder="Enter your full name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-sireiq-dark text-sireiq-light border-sireiq-accent/20"
          placeholder="Enter your email address"
        />
      </div>
      
      <AccountTypeSelector 
        accountType={accountType}
        onChange={setAccountType}
      />
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">Create Password</label>
        <div className="relative">
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`bg-sireiq-dark text-sireiq-light border-sireiq-accent/20 pr-10 ${
              password && passwordStrength ? 
                passwordStrength === 'weak' ? 'text-red-500 border-red-500' :
                passwordStrength === 'medium' ? 'text-yellow-500 border-yellow-500' :
                'text-green-500 border-green-500' 
              : ''
            }`}
            placeholder="Min 6 characters"
          />
          <PasswordStrengthIndicator 
            password={password}
            passwordStrength={passwordStrength}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</label>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`bg-sireiq-dark text-sireiq-light border-sireiq-accent/20 ${
            confirmPassword && password !== confirmPassword ? 'border-red-500' : ''
          }`}
          placeholder="Re-enter your password"
        />
        {confirmPassword && password !== confirmPassword && (
          <p className="mt-1 text-xs text-red-500">Passwords do not match</p>
        )}
      </div>
      
      <Button type="submit" className="w-full bg-[#3CDFFF] text-sireiq-darker hover:bg-[#33c3e0]">
        Create Free Account
      </Button>
    </form>
  );
};

export default RegistrationForm;
