
import React from 'react';
import { 
  BarChart2, 
  Feather,
  Lightbulb, 
  Code, 
  Globe, 
  Shield, 
  ChevronRight, 
  MessageSquare 
} from 'lucide-react';
import ChatFeatureCard from './ChatFeatureCard';

interface ChatWelcomeSectionProps {
  handleQuickSuggestion: (suggestion: string) => void;
  isMobile: boolean;
}

const ChatWelcomeSection: React.FC<ChatWelcomeSectionProps> = ({ 
  handleQuickSuggestion,
  isMobile 
}) => {
  // Feature cards data 
  const featureCards = [
    {
      title: "Data Analysis",
      description: "Extract insights from your data with advanced analytics",
      icon: BarChart2,
      path: "/features/data-analysis"
    },
    {
      title: "Content Creation",
      description: "Generate high-quality content for any purpose",
      icon: Feather,
      path: "/features/content-creation"
    },
    {
      title: "Idea Generation",
      description: "Unlock creative ideas and innovation opportunities",
      icon: Lightbulb,
      path: "/features/idea-generation"
    },
    {
      title: "Code Assistance",
      description: "Get help with coding, debugging and development",
      icon: Code,
      path: "/features/code-assistance"
    },
    {
      title: "Workflow Optimization",
      description: "Streamline your processes for maximum efficiency",
      icon: Globe,
      path: "/features/workflow-optimization"
    },
    {
      title: "Decision Support",
      description: "Get AI-powered insights for better decision making",
      icon: Shield,
      path: "/features/decision-support"
    }
  ];

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

      <div className="mt-10 w-full">
        <h2 className="text-lg font-medium text-gray-200 mb-3">SireIQ features</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {featureCards.map((feature) => (
            <ChatFeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              path={feature.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatWelcomeSection;
