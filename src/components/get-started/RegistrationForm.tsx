
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import { usePasswordStrength } from '@/hooks/usePasswordStrength';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Phone } from 'lucide-react';

interface RegistrationFormProps {
  onSuccess: (email: string) => void;
}

const RegistrationForm = ({ onSuccess }: RegistrationFormProps) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationMethod, setRegistrationMethod] = useState<'email' | 'phone'>('email');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Use custom hook for password strength
  const passwordStrength = usePasswordStrength(password);

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Common validation
    if (!fullName || !password || !confirmPassword) {
      toast.error("Please fill in all required fields");
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
    
    if (registrationMethod === 'email') {
      if (!email) {
        toast.error("Please enter your email address");
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
    } else {
      if (!phoneNumber) {
        toast.error("Please enter your phone number");
        return;
      }
      
      // Phone format validation (simple check)
      if (phoneNumber.length < 10) {
        toast.error("Please enter a valid phone number");
        return;
      }
      
      // In a real app, this would send an SMS verification code
      toast.success("Account created! Please verify your phone number");
      onSuccess(phoneNumber);
    }
    
    // In a real app, this would send an actual verification code
    console.log(`Verification code for demo: 123456`);
  };

  const handleGoogleSignUp = () => {
    setIsProcessing(true);

    // Simulate API call delay
    setTimeout(() => {
      try {
        // In a real app, this would trigger Google OAuth authentication
        console.log("Google sign-up initiated");
        
        // Mock successful authentication
        const mockGoogleUser = {
          email: 'new-google-user@example.com',
          name: 'New Google User'
        };
        
        toast.success(`Account created with Google! Verification complete!`);
        
        // For demo, we'll just call onSuccess with the mock email
        onSuccess(mockGoogleUser.email);
      } catch (error) {
        toast.error("Google sign-up failed. Please try again.");
        console.error("Google sign-up error:", error);
      } finally {
        setIsProcessing(false);
      }
    }, 1500); // Simulate loading for 1.5 seconds
  };

  return (
    <div>
      <Tabs defaultValue="email" className="mb-6" onValueChange={(value) => setRegistrationMethod(value as 'email' | 'phone')}>
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="email" className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </TabsTrigger>
          <TabsTrigger value="phone" className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>Phone</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="email">
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
        </TabsContent>
        
        <TabsContent value="phone">
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
              <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">Phone Number</label>
              <Input
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-sireiq-dark text-sireiq-light border-sireiq-accent/20"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label htmlFor="phonePassword" className="block text-sm font-medium mb-1">Create Password</label>
              <div className="relative">
                <Input
                  id="phonePassword"
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
              <label htmlFor="confirmPhonePassword" className="block text-sm font-medium mb-1">Confirm Password</label>
              <Input
                id="confirmPhonePassword"
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
        </TabsContent>
      </Tabs>
      
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-sireiq-accent/30"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-sireiq-darker px-2 text-sireiq-light/70">Or continue with</span>
        </div>
      </div>
      
      <Button 
        type="button" 
        variant="outline"
        onClick={handleGoogleSignUp}
        disabled={isProcessing}
        className="w-full border border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan"
      >
        {isProcessing ? (
          <>
            <span className="flex items-center justify-center absolute inset-0">
              <svg className="animate-spin h-5 w-5 text-sireiq-cyan" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
            <span className="opacity-0">Sign up with Google</span>
          </>
        ) : (
          <>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </>
        )}
      </Button>
    </div>
  );
};

export default RegistrationForm;
