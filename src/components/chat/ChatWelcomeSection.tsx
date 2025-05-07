
import React from 'react';
import QuickSuggestionButton from './QuickSuggestionButton';

interface ChatWelcomeSectionProps {
  handleQuickSuggestion: (suggestion: string) => void;
  isMobile: boolean;
}

const ChatWelcomeSection: React.FC<ChatWelcomeSectionProps> = ({ 
  handleQuickSuggestion,
  isMobile 
}) => {
  const quickSuggestions = [
    "How can you enhance my workflow?",
    "Analyze my content strategy",
    "Generate creative ideas",
    "Optimize my decision-making process"
  ];

  return (
    <div className="mb-3 sm:mb-4 md:mb-6 animate-fade-in">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 glow-text">
        {isMobile ? "Chat with intelligent AI" : "Unleash your potential with intelligent AI"}
      </h1>
      <div className="grid grid-cols-1 gap-1.5 sm:gap-2 md:gap-3">
        {quickSuggestions.map((suggestion, index) => (
          <QuickSuggestionButton 
            key={index}
            text={suggestion}
            onClick={() => handleQuickSuggestion(suggestion)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatWelcomeSection;
