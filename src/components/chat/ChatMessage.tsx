
import React from 'react';
import { MessageSquare, User } from 'lucide-react';
import { Message } from '@/components/ai-chat/types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`${isUser ? 'user-message-container' : 'assistant-message-container'} animate-fade-in w-full`} onClick={(e) => e.stopPropagation()}>
      <div className={`flex items-start gap-1 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {!isUser && (
          <div className="h-5 w-5 rounded-full bg-gradient-to-r from-sireiq-cyan to-blue-500 flex items-center justify-center mt-1 shadow-glow flex-shrink-0">
            <MessageSquare className="h-2.5 w-2.5 text-sireiq-darker" />
          </div>
        )}
        
        <div className={`p-2 text-sm ${
          isUser 
            ? 'chat-bubble-user' 
            : 'chat-bubble-assistant'
        }`}>
          <p className="text-gray-100 whitespace-pre-wrap">{message.content}</p>
        </div>
        
        {isUser && (
          <div className="h-5 w-5 rounded-full bg-gray-700 flex items-center justify-center mt-1 flex-shrink-0">
            <User className="h-2.5 w-2.5 text-gray-300" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
