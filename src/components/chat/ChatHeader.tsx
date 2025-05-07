
import React from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  clearChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ clearChat }) => {
  return (
    <div className="flex items-center justify-between p-3 md:p-4 border-b border-gray-800 bg-black/50">
      <div className="flex items-center">
        <div className="bg-gradient-to-r from-sireiq-cyan to-blue-500 rounded-full p-1.5 md:p-2 mr-2 md:mr-3 shadow-lg">
          <MessageSquare className="h-4 w-4 md:h-5 md:w-5 text-sireiq-darker" />
        </div>
        <div>
          <h2 className="text-base md:text-lg font-medium text-white">Chat with SireIQ</h2>
          <p className="text-xs text-gray-400 hidden sm:block">Your intelligent AI assistant</p>
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={clearChat}
        className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ChatHeader;
