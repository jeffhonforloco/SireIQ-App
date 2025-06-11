
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface AICapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  onTryNow: () => void;
}

const AICapabilityCard: React.FC<AICapabilityCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  onTryNow
}) => {
  return (
    <Card className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mr-4">
            <Icon className="h-6 w-6 text-sireiq-cyan" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <p className="text-sireiq-light/70 mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-sireiq-light/80">
              <div className="w-1.5 h-1.5 rounded-full bg-sireiq-cyan mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        <Button 
          onClick={onTryNow}
          className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90 transition-opacity group-hover:scale-105 transform duration-200"
        >
          Try Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default AICapabilityCard;
