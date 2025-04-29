
import React from 'react';
import { Button } from "@/components/ui/button";
import { BrainCircuit, Sparkles, Zap } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-hero-gradient -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo display */}
          <div className="mb-8 animate-float">
            <img 
              src="/lovable-uploads/c3e0c182-65f5-4612-a523-35da753a98a4.png" 
              alt="SireIQ Logo" 
              className="w-24 h-24 md:w-32 md:h-32 glow-image" 
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Create With <span className="text-gradient glow">Intelligence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-sireiq-light/80 mb-8 max-w-2xl">
            SireIQ is a world-class AI creative platform that empowers your ideas with intelligent, personality-driven content creation.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90 transition-opacity text-lg px-8"
            >
              <Sparkles className="mr-2 h-5 w-5" /> Get Started Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border border-sireiq-cyan bg-transparent hover:bg-sireiq-cyan/10 text-sireiq-cyan text-lg px-8"
            >
              <BrainCircuit className="mr-2 h-5 w-5" /> Watch Demo
            </Button>
          </div>

          {/* Featured highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="glass-effect rounded-xl p-4 flex items-center">
              <Zap className="h-6 w-6 text-sireiq-cyan mr-3" />
              <span>Lightning-Fast Generation</span>
            </div>
            <div className="glass-effect rounded-xl p-4 flex items-center">
              <BrainCircuit className="h-6 w-6 text-sireiq-cyan mr-3" />
              <span>Advanced Neural Networks</span>
            </div>
            <div className="glass-effect rounded-xl p-4 flex items-center">
              <Sparkles className="h-6 w-6 text-sireiq-cyan mr-3" />
              <span>Personality-Driven Content</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
