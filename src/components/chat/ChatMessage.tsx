
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
      <div className={`flex items-start gap-3 max-w-[85%]`}>
        {!isUser && (
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-sireiq-cyan to-blue-500 flex items-center justify-center mt-1 shadow-glow">
            <MessageSquare className="h-4 w-4 text-sireiq-darker" />
          </div>
        )}
        
        <div className={`p-4 ${
          isUser 
            ? 'chat-bubble-user ml-12' 
            : 'chat-bubble-assistant mr-12'
        }`}>
          <p className="text-gray-100 whitespace-pre-wrap">{message.content}</p>
        </div>
        
        {isUser && (
          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center mt-1">
            <User className="h-4 w-4 text-gray-300" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
