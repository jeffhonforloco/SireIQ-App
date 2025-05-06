
import React, { useState } from 'react';
import { Lightbulb, Star, Share2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface IdeaCardProps {
  title: string;
  description: string;
  index: number;
}

const IdeaCard = ({ title, description, index }: IdeaCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  
  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    if (!isFavorited) {
      toast({
        title: "Added to favorites",
        description: `"${title}" has been added to your favorites.`,
        duration: 3000,
      });
    } else {
      toast({
        title: "Removed from favorites",
        description: `"${title}" has been removed from your favorites.`,
        duration: 3000,
      });
    }
  };
  
  const handleShare = () => {
    // Simulate copying to clipboard
    navigator.clipboard.writeText(`${title}: ${description}`).then(() => {
      toast({
        title: "Copied to clipboard",
        description: "Idea has been copied to your clipboard.",
        duration: 3000,
      });
    });
  };
  
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
        <Button 
          size="sm" 
          variant="ghost" 
          className={`h-8 w-8 p-0 ${isFavorited ? 'text-amber-400' : ''}`}
          onClick={handleFavorite}
        >
          {isFavorited ? 
            <Star className="h-4 w-4 fill-current" /> : 
            <Star className="h-4 w-4" />
          }
        </Button>
        <Button 
          size="sm" 
          variant="ghost" 
          className="h-8 w-8 p-0"
          onClick={handleShare}
        >
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default IdeaCard;
