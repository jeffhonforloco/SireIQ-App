
import React from 'react';
import { Database } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 mb-16">
      <div className="text-center mb-12">
        <div className="glass-effect inline-flex rounded-full p-3 mb-4">
          <Database className="h-8 w-8 text-sireiq-cyan" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-gradient glow">Custom Training</span>
        </h1>
        <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
          Train SireIQ on your brand assets and content for perfectly aligned outputs.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
