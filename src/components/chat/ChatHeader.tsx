
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatHeaderProps {
  clearChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ clearChat }) => {
  const handleNewChat = () => {
    clearChat();
    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('new-chat-created'));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between p-4 border-b border-gray-800/50 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm"
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sireiq-cyan to-blue-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">SireIQ Assistant</h2>
            <p className="text-xs text-gray-400">Powered by advanced AI</p>
          </div>
        </div>
      </div>
      
      <Button
        onClick={handleNewChat}
        variant="ghost"
        size="sm"
        className="text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group"
      >
        <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-200" />
        New Chat
      </Button>
    </motion.div>
  );
};

export default ChatHeader;
