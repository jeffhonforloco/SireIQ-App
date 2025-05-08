
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

interface IntegrationCardProps {
  integration: {
    name: string;
    icon: React.ElementType;
    description: string;
    comingSoon: boolean;
    primaryColor: string;
  };
  onSelectIntegration: (name: string) => void;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ integration, onSelectIntegration }) => {
  return (
    <Card className="bg-sireiq-darker border border-sireiq-accent/30 overflow-hidden group hover:border-sireiq-cyan/50 transition-all duration-300">
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
                onClick={() => onSelectIntegration(integration.name)}
              >
                Connect <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
          </Dialog>
        ) : (
          <Button 
            variant="outline" 
            className="text-sireiq-cyan border-sireiq-cyan/50 hover:bg-sireiq-cyan/10 w-full group-hover:border-sireiq-cyan transition-all"
            disabled
          >
            Coming Soon <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default IntegrationCard;
