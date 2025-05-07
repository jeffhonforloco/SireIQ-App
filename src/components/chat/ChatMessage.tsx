
import React from 'react';
import { MessageSquare, User } from 'lucide-react';
import { Message } from '@/components/ai-chat/types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
      <div className={`flex items-start gap-1 sm:gap-1.5 md:gap-2 max-w-[85%] sm:max-w-[80%] md:max-w-[75%]`}>
        {!isUser && (
          <div className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 rounded-full bg-gradient-to-r from-sireiq-cyan to-blue-500 flex items-center justify-center mt-1 shadow-glow flex-shrink-0">
            <MessageSquare className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 text-sireiq-darker" />
          </div>
        )}
        
        <div className={`p-1.5 sm:p-2 md:p-3 text-xs sm:text-sm md:text-base ${
          isUser 
            ? 'chat-bubble-user ml-2 sm:ml-4 md:ml-6' 
            : 'chat-bubble-assistant mr-2 sm:mr-4 md:mr-6'
        }`}>
          <p className="text-gray-100 whitespace-pre-wrap">{message.content}</p>
        </div>
        
        {isUser && (
          <div className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 rounded-full bg-gray-700 flex items-center justify-center mt-1 flex-shrink-0">
            <User className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 text-gray-300" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
