
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { Phone } from 'lucide-react';

interface PhoneSignInFormProps {
  onSignIn: (phoneNumber: string, password: string) => void;
}

const PhoneSignInForm: React.FC<PhoneSignInFormProps> = ({ onSignIn }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!phoneNumber || !password) {
      toast.error("Please enter both phone number and password");
      return;
    }
    
    onSignIn(phoneNumber, password);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1 text-sireiq-light">Phone Number</label>
        <Input
          id="phone"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-sireiq-accent/30 bg-sireiq-dark/60 text-sireiq-light focus:border-sireiq-cyan focus:ring-1 focus:ring-sireiq-cyan/50 outline-none"
          placeholder="Enter your phone number"
        />
      </div>
      
      <div>
        <label htmlFor="phone-password" className="block text-sm font-medium mb-1 text-sireiq-light">Password</label>
        <Input
          id="phone-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-sireiq-accent/30 bg-sireiq-dark/60 text-sireiq-light focus:border-sireiq-cyan focus:ring-1 focus:ring-sireiq-cyan/50 outline-none"
          placeholder="••••••••"
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
      >
        Sign In with Phone
      </Button>
    </form>
  );
};

export default PhoneSignInForm;
