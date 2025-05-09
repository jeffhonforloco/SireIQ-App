
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface WelcomeSectionProps {
  username?: string;
  suggestions: string[];
}

const WelcomeSection = ({ username = "Alex", suggestions }: WelcomeSectionProps) => {
  return (
    <div className="bg-sireiq-darker rounded-xl p-8 border border-sireiq-accent/20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-gradient glow">Welcome back, {username}</span>
          </h1>
          <p className="text-sireiq-light/70">Continue where you left off or start something new</p>
          <p className="text-xs text-sireiq-light/50 mt-1">Dashboard v1.0.1</p>
        </div>
        <Avatar className="h-16 w-16 border-2 border-sireiq-accent/30">
          <AvatarImage src="/lovable-uploads/8e6b4446-3486-45e0-b6f6-b46acd418ac4.png" />
          <AvatarFallback className="bg-sireiq-accent/20 text-sireiq-cyan">
            {username.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
      
      <div className="relative">
        <input 
          type="text" 
          placeholder="Ask me anything or try a suggestion below..." 
          className="w-full bg-sireiq-dark p-4 pr-12 rounded-lg border border-sireiq-accent/20 focus:border-sireiq-cyan focus:ring-1 focus:ring-sireiq-cyan focus:outline-none"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sireiq-cyan">
          <MessageSquare className="w-5 h-5" />
        </button>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {suggestions.map((suggestion, idx) => (
          <Button 
            key={idx} 
            variant="outline" 
            size="sm" 
            className="bg-sireiq-dark/50 border border-sireiq-accent/20 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan text-sm"
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default WelcomeSection;
