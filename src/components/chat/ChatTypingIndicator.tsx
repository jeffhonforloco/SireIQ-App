
import React from 'react';
import { MessageSquare } from 'lucide-react';

const ChatTypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3 animate-fade-in">
      <div className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-full bg-gradient-to-r from-sireiq-cyan to-blue-500 flex items-center justify-center mt-1 shadow-glow">
        <MessageSquare className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-sireiq-darker" />
      </div>
      <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl rounded-tl-sm inline-flex">
        <div className="typing-indicator flex space-x-1 sm:space-x-1.5 md:space-x-2 items-center">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ChatTypingIndicator;
