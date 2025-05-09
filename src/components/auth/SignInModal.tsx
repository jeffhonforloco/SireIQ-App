
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useRole } from '@/contexts/RoleContext';
import { toast } from '@/components/ui/sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Mail, Phone } from 'lucide-react';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');
  const { setRole, setIsFirstTimeUser } = useRole();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (authMethod === 'email') {
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
    } else {
      // Phone authentication
      if (!phoneNumber || !password) {
        toast.error("Please enter both phone number and password");
        return;
      }
      
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
    }
  };

  const handleForgotPassword = () => {
    onOpenChange(false); // Close the modal
    navigate('/forgot-password'); // Navigate to forgot password page
  };

  const handleGoogleSignIn = () => {
    // In a real app, this would trigger Google OAuth authentication
    toast.success("Successfully signed in with Google!");
    setRole('user');
    setIsFirstTimeUser(false);
    onOpenChange(false); // Close the modal
    navigate('/dashboard');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="glass-effect p-0 border border-sireiq-accent/20 sm:max-w-md">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-gradient glow">Sign In</h1>
          
          <Tabs defaultValue="email" className="mb-6" onValueChange={(value) => setAuthMethod(value as 'email' | 'phone')}>
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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-sireiq-light">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-md border border-sireiq-accent/30 bg-sireiq-dark/60 text-sireiq-light focus:border-sireiq-cyan focus:ring-1 focus:ring-sireiq-cyan/50 outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-1 text-sireiq-light">Password</label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-md border border-sireiq-accent/30 bg-sireiq-dark/60 text-sireiq-light focus:border-sireiq-cyan focus:ring-1 focus:ring-sireiq-cyan/50 outline-none"
                    placeholder="••••••••"
                  />
                </div>
                
                <div className="flex justify-end">
                  <button 
                    type="button" 
                    onClick={handleForgotPassword} 
                    className="text-sm text-sireiq-cyan hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90 shadow-md"
                >
                  Sign In with Email
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="phone">
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
                  <button 
                    type="button" 
                    onClick={handleForgotPassword} 
                    className="text-sm text-sireiq-cyan hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90 shadow-md"
                >
                  Sign In with Phone
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
            onClick={handleGoogleSignIn}
            className="w-full border border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 mr-2" />
            Sign in with Google
          </Button>
          
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
