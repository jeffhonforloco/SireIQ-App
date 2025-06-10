
import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';

interface WelcomeSectionProps {
  username?: string;
  suggestions: string[];
}

const WelcomeSection = ({ username = "Alex", suggestions }: WelcomeSectionProps) => {
  const [chatInput, setChatInput] = useState('');
  const navigate = useNavigate();

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      // Navigate to AI assistant with the query
      navigate('/features/ai-assistant', { state: { initialMessage: chatInput } });
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setChatInput(suggestion);
  };

  const handleNewChat = () => {
    navigate('/features/ai-assistant');
  };

  return (
    <div className="bg-sireiq-darker rounded-xl p-6 border border-sireiq-accent/20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">
            <span className="text-gradient glow">Welcome back, {username}</span>
          </h1>
          <p className="text-sireiq-light/70">What would you like to accomplish today?</p>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="h-14 w-14 border-2 border-sireiq-accent/30">
            <AvatarImage src="/lovable-uploads/8e6b4446-3486-45e0-b6f6-b46acd418ac4.png" />
            <AvatarFallback className="bg-sireiq-accent/20 text-sireiq-cyan">
              {username.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <Button 
            onClick={handleNewChat}
            className="bg-gradient-to-r from-sireiq-cyan to-sireiq-purple hover:opacity-90"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            New Chat
          </Button>
        </div>
      </div>
      
      <form onSubmit={handleChatSubmit} className="relative mb-4">
        <input 
          type="text" 
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Ask me anything..." 
          className="w-full bg-sireiq-dark p-4 pr-12 rounded-lg border border-sireiq-accent/20 focus:border-sireiq-cyan focus:ring-1 focus:ring-sireiq-cyan focus:outline-none transition-colors"
        />
        <button 
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sireiq-cyan hover:text-sireiq-cyan/80 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
      
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, idx) => (
          <Button 
            key={idx} 
            variant="outline" 
            size="sm" 
            onClick={() => handleSuggestionClick(suggestion)}
            className="bg-sireiq-dark/50 border border-sireiq-accent/20 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan text-sm transition-colors"
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default WelcomeSection;
