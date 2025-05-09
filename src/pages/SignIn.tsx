
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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

const SignIn = () => {
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
      navigate('/dashboard');
    } else {
      toast.error("Invalid email or password");
    }
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
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-sireiq-light">Email</label>
              <input
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
              <input
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
              Sign In
            </Button>
          </form>
          
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
