
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Dialog } from "@/components/ui/dialog";

import IntegrationCard from './integrations/IntegrationCard';
import IntegrationDialog from './integrations/IntegrationDialog';
import IntegrationBenefits from './integrations/IntegrationBenefits';
import IntegrationRequest from './integrations/IntegrationRequest';
import { integrations } from './integrations/integrationData';

const IntegrationsSection: React.FC = () => {
  const { toast } = useToast();
  const [selectedIntegration, setSelectedIntegration] = useState<string | null>(null);
  const [webhookUrl, setWebhookUrl] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const handleIntegrationClick = (integrationName: string) => {
    setSelectedIntegration(integrationName);
  };

  const handleWebhookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid webhook URL",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Integration Successful",
        description: `Successfully connected to ${webhookUrl}`,
        duration: 3000,
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const handleThirdPartyAuth = (integrationName: string) => {
    toast({
      title: "Authorization Started",
      description: `Connecting to ${integrationName}...`,
      duration: 3000,
    });
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Connection Successful",
        description: `Successfully connected to ${integrationName}`,
        duration: 3000,
      });
    }, 2000);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Featured integrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <Dialog key={index}>
              <IntegrationCard
                integration={integration}
                onSelectIntegration={handleIntegrationClick}
              />
              <IntegrationDialog
                selectedIntegration={selectedIntegration}
                onThirdPartyAuth={handleThirdPartyAuth}
                onWebhookSubmit={handleWebhookSubmit}
                webhookUrl={webhookUrl}
                setWebhookUrl={setWebhookUrl}
                isSubmitting={isSubmitting}
              />
            </Dialog>
          ))}
        </div>

        {/* Integration benefits */}
        <IntegrationBenefits />
        
        {/* Integration request */}
        <IntegrationRequest />
      </div>
    </section>
  );
};

export default IntegrationsSection;
