
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HowItWorksSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-sireiq-darker/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-full mb-4">
            <span className="text-sm font-medium text-sireiq-cyan">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">SireIQ</span> Works
          </h2>
          <p className="text-lg text-sireiq-light/70 max-w-2xl mx-auto">
            Start enhancing your workflow in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Sign Up",
              description: "Create your account and select your role (User, Developer, or Enterprise)"
            },
            {
              step: "02",
              title: "Choose Features",
              description: "Select the AI features that best suit your workflow needs"
            },
            {
              step: "03",
              title: "Start Creating",
              description: "Use SireIQ's powerful tools to enhance your productivity"
            }
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="glass-effect border border-sireiq-accent/30 rounded-xl p-6 h-full">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-sireiq-cyan to-sireiq-cyan2 rounded-full flex items-center justify-center text-sireiq-darker font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-3">{item.title}</h3>
                <p className="text-sireiq-light/70">{item.description}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10 text-sireiq-cyan/30">
                  <ArrowRight className="h-8 w-8" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            onClick={() => navigate('/get-started')}
            className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 h-auto group"
          >
            Get Started Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
