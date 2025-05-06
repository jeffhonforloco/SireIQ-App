
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Share2, Webhook, Integration, Code, Database } from 'lucide-react';
import { AdobeIcon, TeamsIcon } from './CustomIcons';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DisclosureAccordion from '@/components/DisclosureAccordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  
  const integrations = [
    {
      name: 'Slack',
      icon: Share2,
      description: 'Send AI-generated content directly to your Slack channels and collaborate with your team.',
      comingSoon: false,
      primaryColor: 'bg-[#4A154B]'
    },
    {
      name: 'Adobe',
      icon: AdobeIcon,
      description: 'Seamlessly integrate SireIQ content with Adobe Creative Cloud applications.',
      comingSoon: true,
      primaryColor: 'bg-[#FF0000]'
    },
    {
      name: 'Microsoft Teams',
      icon: TeamsIcon,
      description: 'Share and collaborate on SireIQ projects within Microsoft Teams.',
      comingSoon: true,
      primaryColor: 'bg-[#6264A7]'
    },
    {
      name: 'Zapier',
      icon: Webhook,
      description: 'Connect SireIQ to 3000+ apps with custom workflow automation.',
      comingSoon: false,
      primaryColor: 'bg-[#FF4A00]'
    },
    {
      name: 'Content Platforms',
      icon: Integration,
      description: 'Publish directly to WordPress, Medium, or other content platforms.',
      comingSoon: true,
      primaryColor: 'bg-[#21759B]'
    },
    {
      name: 'API',
      icon: Code,
      description: 'Import data from various sources to inform your AI-powered content creation.',
      comingSoon: true,
      primaryColor: 'bg-[#0078D4]'
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Featured integrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <Card key={index} className="bg-sireiq-darker border border-sireiq-accent/30 overflow-hidden group hover:border-sireiq-cyan/50 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-2">
                  <div className={`p-2 rounded-md ${integration.primaryColor} text-white mr-3`}>
                    <integration.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-sireiq-light">{integration.name}</CardTitle>
                </div>
                {integration.comingSoon && (
                  <div className="inline-block bg-sireiq-cyan/20 text-sireiq-cyan text-xs px-2 py-1 rounded-md">
                    Coming Soon
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sireiq-light/70 mb-6">
                  {integration.description}
                </CardDescription>
                
                {!integration.comingSoon ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="text-sireiq-cyan border-sireiq-cyan/50 hover:bg-sireiq-cyan/10 w-full group-hover:border-sireiq-cyan transition-all"
                        onClick={() => handleIntegrationClick(integration.name)}
                      >
                        Connect <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
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
                              onClick={() => handleThirdPartyAuth(selectedIntegration || '')}
                            >
                              Connect with {selectedIntegration}
                            </Button>
                            <p className="text-sm text-sireiq-light/70 text-center">
                              You'll be redirected to authorize this connection.
                            </p>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="advanced" className="mt-4">
                          <form onSubmit={handleWebhookSubmit} className="space-y-4">
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
                                  onClick={() => toast({
                                    title: "API Documentation",
                                    description: "Documentation will open in a new tab.",
                                  })}
                                >
                                  View API Docs <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                              </div>
                            </DisclosureAccordion>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button 
                    variant="outline" 
                    className="text-sireiq-cyan border-sireiq-cyan/50 hover:bg-sireiq-cyan/10 w-full group-hover:border-sireiq-cyan transition-all"
                    onClick={() => handleIntegrationClick(integration.name)}
                    disabled
                  >
                    Coming Soon <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration benefits */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-gradient">Why Integrate</span> with SireIQ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-sireiq-cyan">Streamlined Workflow</h3>
              <p className="text-sireiq-light/70">
                Eliminate context switching by integrating SireIQ directly with the tools your team already uses.
              </p>
            </div>
            
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-sireiq-cyan">Enhanced Productivity</h3>
              <p className="text-sireiq-light/70">
                Automate repetitive tasks and focus on creative work by connecting SireIQ to your workflow.
              </p>
            </div>
            
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-sireiq-cyan">Seamless Collaboration</h3>
              <p className="text-sireiq-light/70">
                Share and collaborate on AI-generated content with your team across all your platforms.
              </p>
            </div>
          </div>
        </div>
        
        {/* Integration request */}
        <div className="glass-effect rounded-xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Need a Specific Integration?</h3>
          <p className="text-sireiq-light/70 mb-6">
            Don't see the integration you need? Let us know what tools you'd like to connect with SireIQ.
          </p>
          <Button 
            className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-2 h-auto"
            onClick={() => toast({
              title: "Request Received",
              description: "Thank you for your interest. We'll consider your integration request.",
              duration: 3000,
            })}
          >
            Request Integration
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
