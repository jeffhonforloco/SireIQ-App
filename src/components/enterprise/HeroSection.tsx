
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onDemoRequest: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onDemoRequest }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient glow">Enterprise Solutions</span>
          </h1>
          <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto">
            Scale creative excellence across your organization with SireIQ's enterprise-grade AI platform designed for large teams and complex workflows.
          </p>
          <Button 
            className="mt-8 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 h-auto"
            onClick={onDemoRequest}
          >
            Request Enterprise Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
