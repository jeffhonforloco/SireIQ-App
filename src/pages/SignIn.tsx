
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useRole } from '@/contexts/RoleContext';
import { toast } from '@/components/ui/sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Phone, User } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Mock user database for demo purposes
// In a real app, this would be fetched from a backend
const mockUsers = [
  { email: 'user@example.com', password: 'password', phone: '1234567890', role: 'user', verified: true },
  { email: 'dev@example.com', password: 'password', phone: '2345678901', role: 'developer', verified: true },
  { email: 'enterprise@example.com', password: 'password', phone: '3456789012', role: 'user', verified: true } // All users start as regular users
];

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');
  const [isProcessing, setIsProcessing] = useState(false);
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
        navigate('/dashboard');
      } else {
        toast.error("Invalid phone number or password");
      }
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
        navigate('/dashboard');
      } catch (error) {
        toast.error("Google sign-in failed. Please try again.");
        console.error("Google sign-in error:", error);
      } finally {
        setIsProcessing(false);
      }
    }, 1500); // Simulate loading for 1.5 seconds
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Sign In | SireIQ</title>
        <meta name="description" content="Sign in to your SireIQ account to access AI-powered tools and creative workflows." />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-md mx-auto glass-effect p-8 rounded-lg shadow-lg">
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
                  <Link to="/forgot-password" className="text-sm text-sireiq-cyan hover:underline">
                    Forgot password?
                  </Link>
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
            disabled={isProcessing}
            className="w-full border border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan mb-4 relative"
          >
            {isProcessing ? (
              <>
                <span className="flex items-center justify-center absolute inset-0">
                  <svg className="animate-spin h-5 w-5 text-sireiq-cyan" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                <span className="opacity-0">Sign in with Google</span>
              </>
            ) : (
              <>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 mr-2" />
                Sign in with Google
              </>
            )}
          </Button>
          
          <p className="mt-6 text-center text-sm text-sireiq-light/90">
            Don't have an account?{' '}
            <Link to="/get-started" className="text-sireiq-cyan hover:underline">
              Get Started
            </Link>
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignIn;
