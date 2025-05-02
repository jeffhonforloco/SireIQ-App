
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slack, ExternalLink, Layers, Share2, Webhook } from 'lucide-react';
import { AdobeIcon, TeamsIcon } from './CustomIcons';
import { useToast } from '@/hooks/use-toast';

const IntegrationsSection: React.FC = () => {
  const { toast } = useToast();
  
  const handleIntegrationClick = (integrationName: string) => {
    toast({
      title: "Coming Soon",
      description: `Integration with ${integrationName} will be available soon.`,
      duration: 3000,
    });
  };
  
  const integrations = [
    {
      name: 'Slack',
      icon: Slack,
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
      comingSoon: true,
      primaryColor: 'bg-[#FF4A00]'
    },
    {
      name: 'Content Platforms',
      icon: Share2,
      description: 'Publish directly to WordPress, Medium, or other content platforms.',
      comingSoon: true,
      primaryColor: 'bg-[#21759B]'
    },
    {
      name: 'Data Sources',
      icon: Layers,
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
                <Button 
                  variant="outline" 
                  className="text-sireiq-cyan border-sireiq-cyan/50 hover:bg-sireiq-cyan/10 w-full group-hover:border-sireiq-cyan transition-all"
                  onClick={() => handleIntegrationClick(integration.name)}
                >
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
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
