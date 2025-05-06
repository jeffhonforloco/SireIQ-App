
import React from 'react';
import { Lock, Shield, Key } from 'lucide-react';
import { toast } from 'sonner';

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-16">
        <div className="glass-effect inline-flex rounded-full p-3 mb-4">
          <Lock className="h-8 w-8 text-sireiq-cyan" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-gradient glow">Enterprise</span> Security
        </h1>
        <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
          Rest easy with bank-level encryption and robust privacy controls protecting your creative assets.
        </p>
      </div>
      
      <div className="flex justify-center">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "End-to-End Encryption",
              description: "AES-256 encryption for all data at rest and in transit"
            },
            {
              icon: Lock,
              title: "Private AI Processing",
              description: "Your data never trains our models or gets shared with third parties"
            },
            {
              icon: Key,
              title: "Role-Based Access",
              description: "Granular permission controls for team security"
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="glass-effect rounded-lg p-6 border border-sireiq-accent/20 text-center hover:border-sireiq-cyan/30 hover:translate-y-[-5px] transition-all cursor-pointer"
              onClick={() => toast.info(feature.title, { description: feature.description })}
            >
              <div className="w-12 h-12 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-sireiq-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sireiq-light/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
