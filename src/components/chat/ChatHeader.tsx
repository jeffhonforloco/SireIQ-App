
import React from 'react';
import { MessageSquare, Plus, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  clearChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ clearChat }) => {
  return (
    <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-800 bg-gray-900">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800 mr-2"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h2 className="text-base sm:text-lg font-semibold text-white">SireIQ</h2>
      </div>
      
      <Button 
        variant="outline" 
        size="sm"
        onClick={clearChat}
        className="flex items-center gap-1 h-8 text-xs border-gray-700 hover:bg-gray-800 text-gray-300"
      >
        <Plus className="h-3.5 w-3.5" />
        <span>New chat</span>
      </Button>
    </div>
  );
};

export default ChatHeader;
