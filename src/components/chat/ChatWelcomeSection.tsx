
import React from 'react';
import { Lightbulb, Gift, BarChart2, Feather, ChevronRight } from 'lucide-react';

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
    }
  ];

  return (
    <div className="welcome-container">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center">
        How can I help you today?
      </h1>
      
      <div className="quick-suggestion-grid">
        {quickSuggestions.map((suggestion, index) => (
          <button 
            key={index}
            className="suggestion-button"
            onClick={() => handleQuickSuggestion(suggestion.text)}
          >
            {suggestion.icon}
            <span className="flex-1 text-left">{suggestion.text}</span>
            <ChevronRight className="w-3 h-3 opacity-70" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatWelcomeSection;
