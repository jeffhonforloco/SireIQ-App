
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const IntegrationRequest: React.FC = () => {
  const { toast } = useToast();
  
  const handleRequestClick = () => {
    toast({
      title: "Request Received",
      description: "Thank you for your interest. We'll consider your integration request.",
      duration: 3000,
    });
  };
  
  return (
    <div className="glass-effect rounded-xl p-8 text-center max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Need a Specific Integration?</h3>
      <p className="text-sireiq-light/70 mb-6">
        Don't see the integration you need? Let us know what tools you'd like to connect with SireIQ.
      </p>
      <Button 
        className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-2 h-auto"
        onClick={handleRequestClick}
      >
        Request Integration
      </Button>
    </div>
  );
};

export default IntegrationRequest;
