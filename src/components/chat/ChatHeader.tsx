
import React from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  clearChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ clearChat }) => {
  return (
    <div className="flex items-center justify-between p-2 sm:p-3 border-b border-gray-800 bg-black/50 backdrop-blur-sm" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-center">
        <div className="bg-gradient-to-r from-sireiq-cyan to-blue-500 rounded-full p-1.5 mr-2 shadow-lg">
          <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-sireiq-darker" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm sm:text-base font-medium text-white whitespace-nowrap">Chat with SireIQ</h2>
          <p className="text-xs text-gray-400 hidden sm:block">Your intelligent AI assistant</p>
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          clearChat();
        }}
        className="h-6 w-6 sm:h-7 sm:w-7 text-gray-400 hover:text-white hover:bg-gray-800"
      >
        <X className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
      </Button>
    </div>
  );
};

export default ChatHeader;
