
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/sonner';
import { Shield, ShieldCheck, ShieldX } from 'lucide-react';

type AccountType = 'personal' | 'developer' | 'enterprise';

interface RegistrationFormProps {
  onSuccess: (email: string) => void;
}

const RegistrationForm = ({ onSuccess }: RegistrationFormProps) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState<AccountType>('personal');
  const [passwordStrength, setPasswordStrength] = useState<'weak' | 'medium' | 'strong' | null>(null);

  // Calculate password strength whenever password changes
  useEffect(() => {
    if (!password) {
      setPasswordStrength(null);
      return;
    }

    // Simple password strength calculation
    let strength: 'weak' | 'medium' | 'strong' = 'weak';
    
    // Check for minimum length
    if (password.length >= 8) {
      strength = 'medium';
      
      // Check for complexity (has uppercase, lowercase, number, and special character)
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecial = /[^A-Za-z0-9]/.test(password);
      
      if (hasUppercase && hasLowercase && (hasNumber || hasSpecial)) {
        strength = 'strong';
      }
    }
    
    setPasswordStrength(strength);
  }, [password]);

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

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 'weak': return 'text-red-500 border-red-500';
      case 'medium': return 'text-yellow-500 border-yellow-500';
      case 'strong': return 'text-green-500 border-green-500';
      default: return 'text-sireiq-light/50 border-sireiq-accent/20';
    }
  };

  const getPasswordStrengthIcon = () => {
    switch (passwordStrength) {
      case 'weak': return <ShieldX className="h-5 w-5 text-red-500" />;
      case 'medium': return <Shield className="h-5 w-5 text-yellow-500" />;
      case 'strong': return <ShieldCheck className="h-5 w-5 text-green-500" />;
      default: return null;
    }
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
      
      <div>
        <label htmlFor="accountType" className="block text-sm font-medium mb-2">Account Type</label>
        <RadioGroup
          value={accountType}
          onValueChange={(value) => setAccountType(value as AccountType)}
          className="flex flex-wrap gap-3"
        >
          <div className="flex items-center space-x-2 bg-sireiq-dark/50 border border-sireiq-accent/20 px-3 py-2 rounded-md">
            <RadioGroupItem value="personal" id="personal" />
            <Label htmlFor="personal" className="cursor-pointer">Personal</Label>
          </div>
          <div className="flex items-center space-x-2 bg-sireiq-dark/50 border border-sireiq-accent/20 px-3 py-2 rounded-md">
            <RadioGroupItem value="developer" id="developer" />
            <Label htmlFor="developer" className="cursor-pointer">Developer</Label>
          </div>
          <div className="flex items-center space-x-2 bg-sireiq-dark/50 border border-sireiq-accent/20 px-3 py-2 rounded-md">
            <RadioGroupItem value="enterprise" id="enterprise" />
            <Label htmlFor="enterprise" className="cursor-pointer">Enterprise</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">Create Password</label>
        <div className="relative">
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`bg-sireiq-dark text-sireiq-light border-sireiq-accent/20 pr-10 ${password ? getPasswordStrengthColor() : ''}`}
            placeholder="Min 6 characters"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            {getPasswordStrengthIcon()}
          </div>
        </div>
        {passwordStrength && (
          <div className="mt-1 text-xs flex items-center gap-1">
            <span className={`font-medium capitalize ${getPasswordStrengthColor()}`}>
              {passwordStrength}
            </span>
            <span className="text-sireiq-light/50">
              {passwordStrength === 'weak' && "- Consider a stronger password"}
              {passwordStrength === 'medium' && "- Good, but could be stronger"}
              {passwordStrength === 'strong' && "- Excellent password strength"}
            </span>
          </div>
        )}
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
