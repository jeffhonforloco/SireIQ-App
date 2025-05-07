
import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';

const FeaturesHero: React.FC = () => {
  return (
    <>
      <ParticleBackground />
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Powerful <span className="text-gradient glow">AI Features</span> for Your Business
        </h1>
        <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
          Explore our full suite of AI-powered tools and features designed to transform your workflow.
        </p>
      </div>
    </>
  );
};

export default FeaturesHero;
