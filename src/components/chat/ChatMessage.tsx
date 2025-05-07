
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
      <div className={`flex items-start gap-1.5 sm:gap-2 md:gap-3 max-w-[92%] sm:max-w-[90%] md:max-w-[85%]`}>
        {!isUser && (
          <div className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-full bg-gradient-to-r from-sireiq-cyan to-blue-500 flex items-center justify-center mt-1 shadow-glow flex-shrink-0">
            <MessageSquare className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-sireiq-darker" />
          </div>
        )}
        
        <div className={`p-2 sm:p-3 md:p-4 text-sm md:text-base ${
          isUser 
            ? 'chat-bubble-user ml-4 sm:ml-8 md:ml-12' 
            : 'chat-bubble-assistant mr-4 sm:mr-8 md:mr-12'
        }`}>
          <p className="text-gray-100 whitespace-pre-wrap">{message.content}</p>
        </div>
        
        {isUser && (
          <div className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-full bg-gray-700 flex items-center justify-center mt-1 flex-shrink-0">
            <User className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-gray-300" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
