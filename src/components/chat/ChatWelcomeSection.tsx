
import React from 'react';
import { Lightbulb, Gift, BarChart2, Feather, ChevronRight, Code, Globe, Shield } from 'lucide-react';

interface ChatWelcomeSectionProps {
  handleQuickSuggestion: (suggestion: string) => void;
  isMobile: boolean;
}

const ChatWelcomeSection: React.FC<ChatWelcomeSectionProps> = ({ 
  handleQuickSuggestion,
  isMobile 
}) => {
  return (
    <div className="welcome-container">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
        Unleash your potential with intelligent AI
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6 w-full">
        <button 
          className="suggestion-button"
          onClick={() => handleQuickSuggestion("How can you enhance my workflow?")}
        >
          <span className="flex-1 text-left">How can you enhance my workflow?</span>
          <ChevronRight className="w-3 h-3 opacity-70" />
        </button>
        
        <button 
          className="suggestion-button"
          onClick={() => handleQuickSuggestion("Analyze my content strategy")}
        >
          <span className="flex-1 text-left">Analyze my content strategy</span>
          <ChevronRight className="w-3 h-3 opacity-70" />
        </button>
        
        <button 
          className="suggestion-button"
          onClick={() => handleQuickSuggestion("Generate creative ideas")}
        >
          <span className="flex-1 text-left">Generate creative ideas</span>
          <ChevronRight className="w-3 h-3 opacity-70" />
        </button>
        
        <button 
          className="suggestion-button"
          onClick={() => handleQuickSuggestion("Optimize my decision-making process")}
        >
          <span className="flex-1 text-left">Optimize my decision-making process</span>
          <ChevronRight className="w-3 h-3 opacity-70" />
        </button>
      </div>
      
      <div className="mt-16 px-4 py-6 bg-gray-800/30 rounded-xl border border-gray-700/50 mb-4">
        <div className="flex items-start gap-3">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
            <MessageSquare className="h-4 w-4 text-white" />
          </div>
          
          <div className="flex-1">
            <p className="text-gray-200">
              Hi there! I'm SireIQ, your intelligent AI assistant. I can help with content creation, 
              data analysis, workflow optimization, and much more. How can I assist you today?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWelcomeSection;
