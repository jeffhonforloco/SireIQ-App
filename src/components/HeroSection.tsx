
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import WhySireIQCallout from './WhySireIQCallout';
import { toast } from './ui/sonner';
import { useRole } from '@/contexts/RoleContext';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const { role } = useRole();
  
  const handleGetStarted = () => {
    navigate('/get-started');
  };
  
  const handleBookDemo = () => {
    toast.success("Demo request submitted! Our team will contact you soon.");
    
    // If the user is authenticated, don't change the route
    if (!role) {
      // After 2 seconds, redirect to the get started page for non-authenticated users
      setTimeout(() => {
        navigate('/get-started');
      }, 2000);
    }
  };

  return (
    <section className="pt-40 pb-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left column: Hero text */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Think it. Build it.</span> With SireIQ.
            </h1>
            
            <p className="text-xl text-sireiq-light/80 mb-8 max-w-lg">
              SireIQ combines AI-powered tools, real-time collaboration, and enterprise-grade features to revolutionize content creation.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 h-auto"
                onClick={handleGetStarted}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-sireiq-cyan text-sireiq-cyan hover:bg-sireiq-cyan/10 px-6 py-3 h-auto"
                onClick={handleBookDemo}
              >
                Book a Demo
              </Button>
            </div>
            
            {/* Forrester callout */}
            <WhySireIQCallout className="max-w-lg" />
          </div>
          
          {/* Right column: Hero image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 rounded-2xl blur opacity-30"></div>
              <img 
                src="/lovable-uploads/207b3383-58aa-491c-8000-d56fca868602.png" 
                alt="SireIQ Platform Interface" 
                className="relative rounded-2xl shadow-2xl glow-image border border-sireiq-accent/20 w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
