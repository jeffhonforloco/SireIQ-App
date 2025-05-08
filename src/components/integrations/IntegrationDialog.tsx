
import React, { useState } from 'react';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DisclosureAccordion from '@/components/DisclosureAccordion';
import { ExternalLink } from 'lucide-react';

interface IntegrationDialogProps {
  selectedIntegration: string | null;
  onThirdPartyAuth: (integrationName: string) => void;
  onWebhookSubmit: (e: React.FormEvent) => void;
  webhookUrl: string;
  setWebhookUrl: (url: string) => void;
  isSubmitting: boolean;
}

const IntegrationDialog: React.FC<IntegrationDialogProps> = ({
  selectedIntegration,
  onThirdPartyAuth,
  onWebhookSubmit,
  webhookUrl,
  setWebhookUrl,
  isSubmitting,
}) => {
  return (
    <DialogContent className="sm:max-w-md bg-sireiq-darker border-sireiq-accent/30 text-sireiq-light">
      <DialogHeader>
        <DialogTitle className="text-sireiq-light">Connect to {selectedIntegration}</DialogTitle>
        <DialogDescription className="text-sireiq-light/70">
          Set up your integration with {selectedIntegration}.
        </DialogDescription>
      </DialogHeader>
      
      <Tabs defaultValue="quickConnect" className="w-full mt-4">
        <TabsList className="grid w-full grid-cols-2 bg-sireiq-accent/10">
          <TabsTrigger value="quickConnect">Quick Connect</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        <TabsContent value="quickConnect" className="mt-4">
          <div className="space-y-4">
            <Button 
              className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
              onClick={() => onThirdPartyAuth(selectedIntegration || '')}
            >
              Connect with {selectedIntegration}
            </Button>
            <p className="text-sm text-sireiq-light/70 text-center">
              You'll be redirected to authorize this connection.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="mt-4">
          <form onSubmit={onWebhookSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="webhook" className="text-sireiq-light">Webhook URL</Label>
              <Input 
                id="webhook" 
                value={webhookUrl} 
                onChange={(e) => setWebhookUrl(e.target.value)}
                placeholder="https://hooks.yourservice.com/trigger/..." 
                className="bg-sireiq-darker border-sireiq-accent/50 text-sireiq-light"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-sireiq-cyan text-sireiq-darker"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Connecting..." : "Connect Webhook"}
            </Button>
          </form>
          
          <div className="mt-6 space-y-4">
            <h4 className="text-sm font-semibold text-sireiq-light">Documentation</h4>
            <DisclosureAccordion title="How to use webhooks">
              <div className="text-sm text-sireiq-light/80 space-y-2">
                <p>
                  Webhooks allow SireIQ to send real-time updates to your other applications when certain events occur.
                </p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Set up a webhook endpoint in your application</li>
                  <li>Enter the webhook URL above</li>
                  <li>Configure the events you want to receive</li>
                  <li>Test the connection</li>
                </ol>
              </div>
            </DisclosureAccordion>
            
            <DisclosureAccordion title="API Reference">
              <div className="text-sm text-sireiq-light/80 space-y-2">
                <p>
                  Our API allows for programmatic access to SireIQ features. View our full API documentation for details.
                </p>
                <Button 
                  variant="outline" 
                  className="text-sireiq-cyan border-sireiq-cyan/50 hover:bg-sireiq-cyan/10 mt-2"
                  onClick={() => {}}
                >
                  View API Docs <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </DisclosureAccordion>
          </div>
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
};

export default IntegrationDialog;
