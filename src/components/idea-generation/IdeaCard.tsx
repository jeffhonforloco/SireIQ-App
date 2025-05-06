
import React from 'react';
import { Lightbulb, Star, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface IdeaCardProps {
  title: string;
  description: string;
  index: number;
}

const IdeaCard = ({ title, description, index }: IdeaCardProps) => {
  return (
    <div 
      className="glass-effect rounded-lg p-5 border border-sireiq-accent/20 animate-fade-in hover:border-sireiq-cyan/30 transition-all group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start mb-2">
        <div className="p-1.5 rounded-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 mr-3 flex-shrink-0">
          <Lightbulb className="h-4 w-4 text-sireiq-darker" />
        </div>
        <h4 className="font-bold text-sireiq-cyan">{title}</h4>
      </div>
      
      <p className="text-sm text-sireiq-light/70 mb-4 pl-9">{description}</p>
      
      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
          <Star className="h-4 w-4" />
        </Button>
        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default IdeaCard;
