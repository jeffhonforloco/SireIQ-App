
import React from 'react';
import { Lightbulb, Gift, BarChart2, Feather, ChevronRight, Code, Globe, Shield } from 'lucide-react';
import Logo from '@/components/Logo';

interface ChatWelcomeSectionProps {
  handleQuickSuggestion: (suggestion: string) => void;
  isMobile: boolean;
}

const ChatWelcomeSection: React.FC<ChatWelcomeSectionProps> = ({ 
  handleQuickSuggestion,
  isMobile 
}) => {
  const quickSuggestions = [
    {
      icon: <Lightbulb className="w-4 h-4 text-yellow-400" />,
      text: "What can SireIQ help with?"
    },
    {
      icon: <Gift className="w-4 h-4 text-blue-400" />,
      text: "How does SireIQ compare to other AI assistants?"
    },
    {
      icon: <BarChart2 className="w-4 h-4 text-green-400" />,
      text: "What are SireIQ's main features?"
    },
    {
      icon: <Feather className="w-4 h-4 text-purple-400" />,
      text: "Tell me about SireIQ's Enterprise plan"
    },
    {
      icon: <Code className="w-4 h-4 text-pink-400" />,
      text: "How can I integrate SireIQ with my existing tools?"
    },
    {
      icon: <Globe className="w-4 h-4 text-cyan-400" />,
      text: "What industries is SireIQ designed for?"
    },
    {
      icon: <Shield className="w-4 h-4 text-emerald-400" />,
      text: "How does SireIQ handle data security?"
    }
  ];

  return (
    <div className="welcome-container">
      <div className="flex flex-col items-center mb-8">
        <Logo size="lg" />
        <h1 className="text-2xl sm:text-3xl font-bold mt-6 mb-2 text-white text-center">
          SireIQ Assistant
        </h1>
        <p className="text-gray-400 text-center max-w-md">
          Your advanced AI platform for data insights, content creation, and decision-making
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-2xl mx-auto">
        {quickSuggestions.map((suggestion, index) => (
          <button 
            key={index}
            className="suggestion-button"
            onClick={() => handleQuickSuggestion(suggestion.text)}
          >
            <span className="flex items-center">
              {suggestion.icon}
              <span className="ml-2 flex-1 text-left">{suggestion.text}</span>
            </span>
            <ChevronRight className="w-3 h-3 opacity-70" />
          </button>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          SireIQ combines advanced AI models with intuitive interfaces to deliver powerful business insights.
        </p>
      </div>
    </div>
  );
};

export default ChatWelcomeSection;
