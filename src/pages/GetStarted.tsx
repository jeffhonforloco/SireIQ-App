
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRole } from '@/contexts/RoleContext';
import { toast } from '@/components/ui/sonner';

const GetStarted = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setRole, setIsFirstTimeUser, setOnboardingStep } = useRole();
  const navigate = useNavigate();

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!fullName || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // For demo purposes, we'll set the user role and start onboarding
    setRole('user');
    setIsFirstTimeUser(true);
    setOnboardingStep(1);
    toast.success("Account created successfully!");
    navigate('/dashboard');
  };

  const handleScheduleDemo = () => {
    // In a real app, this would navigate to a scheduling page or open a dialog
    toast.success("Demo request submitted! Our team will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Get Started | SireIQ</title>
        <meta name="description" content="Get started with SireIQ and bring your ideas to life. Use intelligent workflows and AI-native tools to build faster, smarter digital experiences." />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="text-gradient glow">Get Started</span> with SireIQ
          </h1>
          
          <p className="text-xl text-center text-sireiq-light/80 mb-12 max-w-2xl mx-auto">
            Join thousands of creators, developers, and innovators building the next generation of intelligent applications.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-sireiq-darker p-8 rounded-lg border border-sireiq-accent/20">
              <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
              <p className="mb-6 text-sireiq-light/80">
                Sign up for free and start exploring SireIQ's AI-powered tools and creative workflows.
              </p>
              <form className="space-y-4" onSubmit={handleCreateAccount}>
                <div>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2 rounded-md border border-sireiq-accent/20 bg-sireiq-dark text-sireiq-light"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-md border border-sireiq-accent/20 bg-sireiq-dark text-sireiq-light"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-md border border-sireiq-accent/20 bg-sireiq-dark text-sireiq-light"
                    placeholder="Create Password"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                  Create Free Account
                </Button>
              </form>
            </div>
            
            <div className="bg-sireiq-darker p-8 rounded-lg border border-sireiq-accent/20 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">Enterprise Solutions</h2>
                <p className="mb-6 text-sireiq-light/80">
                  Discover how SireIQ can transform your organization with custom AI solutions and enterprise-grade features.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 text-sireiq-cyan">✓</div>
                    <div>Custom AI model training</div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 text-sireiq-cyan">✓</div>
                    <div>Advanced security and compliance</div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 text-sireiq-cyan">✓</div>
                    <div>Dedicated support and onboarding</div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 text-sireiq-cyan">✓</div>
                    <div>Custom integrations and workflows</div>
                  </li>
                </ul>
              </div>
              <Button 
                onClick={handleScheduleDemo}
                variant="outline" 
                className="border-sireiq-cyan text-sireiq-cyan hover:bg-sireiq-cyan/10 mt-4"
              >
                Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetStarted;
