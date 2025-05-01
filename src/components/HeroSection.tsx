
import React from 'react';
import { Button } from "@/components/ui/button";
import { PlayCircle, Sparkles } from 'lucide-react';
import WhySireIQCallout from './WhySireIQCallout';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Hero image for mobile */}
          <div className="mb-8 md:hidden">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 rounded-2xl blur opacity-30"></div>
              <img 
                src="/lovable-uploads/9320e81f-6697-4793-82cc-7d98c752e828.png" 
                alt="SireIQ Platform Badge" 
                className="relative rounded-2xl shadow-2xl glow-image border border-sireiq-accent/20 w-64 h-64 object-cover"
              />
            </div>
          </div>
          
          {/* Hero title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Create With <br/>
            <span className="text-gradient glow">Intelligence</span>
          </h1>
          
          <p className="text-xl text-sireiq-light/80 mb-8 max-w-2xl">
            SireIQ is a world-class AI creative platform that empowers your ideas with intelligent, personality-driven content creation.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-md mx-auto">
            <Button className="bg-sireiq-cyan text-sireiq-darker px-6 py-6 h-auto text-lg w-full">
              <Sparkles className="mr-2 h-5 w-5" />
              Get Started Free
            </Button>
            
            <Button variant="outline" className="border-sireiq-cyan text-sireiq-cyan hover:bg-sireiq-cyan/10 px-6 py-6 h-auto text-lg w-full">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
