
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Lightbulb, 
  Code, 
  FileText, 
  BarChart3, 
  Sparkles,
  ArrowRight 
} from 'lucide-react';

interface ChatWelcomeSectionProps {
  onQuickSuggestion: (suggestion: string) => void;
}

const ChatWelcomeSection: React.FC<ChatWelcomeSectionProps> = ({ onQuickSuggestion }) => {
  const quickActions = [
    {
      icon: Lightbulb,
      title: "Generate Ideas",
      description: "Brainstorm creative solutions",
      suggestion: "Help me brainstorm ideas for a mobile app that helps people track their daily habits",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Code,
      title: "Write Code",
      description: "Build applications faster",
      suggestion: "Write a React component for a user profile card with avatar, name, and social links",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: FileText,
      title: "Create Content",
      description: "Generate compelling copy",
      suggestion: "Write a professional email to introduce our new AI platform to potential clients",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Analyze Data",
      description: "Extract insights quickly",
      suggestion: "Help me analyze customer feedback data and identify key trends and improvement areas",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
      {/* Welcome message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-sireiq-cyan animate-pulse" />
          <h2 className="text-2xl font-bold text-white">Welcome to SireIQ</h2>
          <Sparkles className="w-6 h-6 text-sireiq-cyan animate-pulse" />
        </div>
        <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
          Your intelligent AI assistant is ready to help you create, analyze, and innovate. What would you like to build today?
        </p>
      </motion.div>

      {/* Quick action cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mb-6"
      >
        {quickActions.map((action, index) => (
          <motion.div
            key={action.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="group"
          >
            <Button
              onClick={() => onQuickSuggestion(action.suggestion)}
              variant="ghost"
              className="w-full h-auto p-4 bg-gray-800/30 hover:bg-gray-800/60 border border-gray-700/50 hover:border-gray-600 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-900/25"
            >
              <div className="flex items-start gap-3 w-full text-left">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                  <action.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-sireiq-cyan transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {action.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-sireiq-cyan group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
              </div>
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center"
      >
        <p className="text-xs text-gray-500 mb-2">
          Pro tip: You can type anything or use voice input to get started
        </p>
        <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>AI Assistant is online and ready</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatWelcomeSection;
