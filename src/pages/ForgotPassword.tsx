
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';
import { Key } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
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
    
    // In a real app, this would send a password reset request to the backend
    // For demo purposes, we'll just show a success message
    setIsSubmitted(true);
    toast.success("Password reset link sent! Please check your email");
    
    // In a real app, this would log the action
    console.log(`Password reset requested for: ${email}`);
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Forgot Password | SireIQ</title>
        <meta name="description" content="Reset your password for your SireIQ account." />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-md mx-auto bg-sireiq-darker p-8 rounded-lg border border-sireiq-accent/20">
          {!isSubmitted ? (
            <>
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-sireiq-dark border border-sireiq-accent/20">
                  <Key size={24} className="text-[#3CDFFF]" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold mb-2 text-center">Forgot Password</h1>
              <p className="text-center text-sireiq-light/70 mb-6">
                Enter your email address and we'll send you a link to reset your password.
              </p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
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
                
                <Button type="submit" className="w-full bg-[#3CDFFF] text-sireiq-darker hover:bg-[#33c3e0]">
                  Send Reset Link
                </Button>
              </form>
              
              <p className="mt-6 text-center text-sm">
                Remember your password?{' '}
                <Link to="/signin" className="text-sireiq-cyan hover:underline">Sign In</Link>
              </p>
            </>
          ) : (
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-sireiq-dark border border-green-500/30">
                  <Key size={24} className="text-green-500" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-3">Check Your Email</h2>
              <p className="mb-6 text-sireiq-light/70">
                We've sent a password reset link to <span className="text-sireiq-light font-medium">{email}</span>
              </p>
              
              <div className="space-y-4">
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  variant="outline" 
                  className="w-full border-sireiq-accent/20"
                >
                  Try Another Email
                </Button>
                
                <Button 
                  onClick={() => navigate('/signin')} 
                  className="w-full bg-[#3CDFFF] text-sireiq-darker hover:bg-[#33c3e0]"
                >
                  Back to Sign In
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForgotPassword;
