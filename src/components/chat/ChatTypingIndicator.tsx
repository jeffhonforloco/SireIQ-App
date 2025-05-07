
import React from 'react';
import { MessageSquare } from 'lucide-react';

const ChatTypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-3 animate-fade-in">
      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-sireiq-cyan to-blue-500 flex items-center justify-center mt-1 shadow-glow">
        <MessageSquare className="h-4 w-4 text-sireiq-darker" />
      </div>
      <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl rounded-tl-sm inline-flex">
        <div className="typing-indicator flex space-x-2 items-center">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ChatTypingIndicator;
