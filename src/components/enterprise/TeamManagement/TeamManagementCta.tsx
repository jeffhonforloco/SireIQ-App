
import React from 'react';
import { Button } from '@/components/ui/button';

type TeamManagementCtaProps = {
  onDemoRequest: () => void;
};

const TeamManagementCta = ({ onDemoRequest }: TeamManagementCtaProps) => {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="glass-effect rounded-xl border border-sireiq-accent/30 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to centralize your team management?
        </h2>
        <p className="text-lg text-sireiq-light/70 mb-8 max-w-2xl mx-auto">
          Get started with SireIQ's enterprise team management solution and streamline your creative workflows today.
        </p>
        <Button 
          className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 h-auto"
          onClick={onDemoRequest}
        >
          Request Enterprise Demo
        </Button>
      </div>
    </section>
  );
};

export default TeamManagementCta;
