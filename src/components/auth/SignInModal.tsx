
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useRole } from '@/contexts/RoleContext';
import { toast } from '@/components/ui/sonner';

// Mock user database for demo purposes
// In a real app, this would be fetched from a backend
const mockUsers = [
  { email: 'user@example.com', password: 'password', role: 'user', verified: true },
  { email: 'dev@example.com', password: 'password', role: 'developer', verified: true },
  { email: 'enterprise@example.com', password: 'password', role: 'user', verified: true } // All users start as regular users
];

interface SignInModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignInModal = ({ isOpen, onOpenChange }: SignInModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setRole, setIsFirstTimeUser } = useRole();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    
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
      onOpenChange(false); // Close the modal
      navigate('/dashboard');
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-sireiq-darker p-0 border border-sireiq-accent/20 sm:max-w-md">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-sireiq-accent/20 bg-sireiq-dark text-sireiq-light"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-sireiq-accent/20 bg-sireiq-dark text-sireiq-light"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex justify-end">
              <a href="#" className="text-sm text-sireiq-cyan hover:underline">Forgot password?</a>
            </div>
            
            <Button type="submit" className="w-full bg-[#3CDFFF] text-sireiq-darker hover:bg-[#33c3e0]">
              Sign In
            </Button>
          </form>
          
          <p className="mt-6 text-center text-sm">
            Don't have an account?{' '}
            <Link to="/get-started" className="text-sireiq-cyan hover:underline">Get Started</Link>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
