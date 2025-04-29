
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-cta-gradient p-8 md:p-12">
          {/* Glowing accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sireiq-cyan/30 rounded-full blur-3xl -z-10 animate-glow"></div>
          
          <div className="max-w-3xl mx-auto">
            {/* CTA content */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your <span className="text-gradient glow">Creative Process</span>?
              </h2>
              <p className="text-xl text-sireiq-light/80">
                Join thousands of creative professionals using SireIQ to produce exceptional content with AI assistance.
              </p>
            </div>

            {/* Email signup form */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-sireiq-darker/50 border border-sireiq-cyan/30 focus:border-sireiq-cyan focus:ring focus:ring-sireiq-cyan/20 focus:outline-none text-sireiq-light"
              />
              <Button 
                className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90 transition-opacity px-6"
              >
                Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 text-center text-sm text-sireiq-light/50">
              <p>No credit card required. 14-day free trial. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
