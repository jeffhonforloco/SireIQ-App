
import React from 'react';
import { MessageSquare } from 'lucide-react';

const ChatTypingIndicator: React.FC = () => {
  return (
    <div className="message-container assistant-message-container">
      <div className="flex items-start gap-3">
        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
          <MessageSquare className="h-4 w-4 text-white" />
        </div>
        
        <div className="flex-1">
          <div className="font-medium text-sm mb-1 text-gray-400">
            SireIQ
          </div>
          <div className="typing-indicator flex space-x-1.5 items-center p-1">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatTypingIndicator;
