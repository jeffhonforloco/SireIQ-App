
import React from 'react';
import { MessageSquare } from 'lucide-react';

const ChatTypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-1 sm:gap-1.5 md:gap-2 animate-fade-in">
      <div className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 rounded-full bg-gradient-to-r from-sireiq-cyan to-blue-500 flex items-center justify-center mt-1 shadow-glow">
        <MessageSquare className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 text-sireiq-darker" />
      </div>
      <div className="p-1.5 sm:p-2 md:p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl rounded-tl-sm inline-flex">
        <div className="typing-indicator flex space-x-0.5 sm:space-x-1 md:space-x-1.5 items-center">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ChatTypingIndicator;
