
import React from 'react';
import { MessageSquare, User } from 'lucide-react';
import { Message } from '@/components/ai-chat/types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className="message-container">
      <div className="flex items-start gap-3 max-w-full">
        {!isUser && (
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
            <MessageSquare className="h-4 w-4 text-white" />
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className={`message-content ${isUser ? 'text-gray-100' : 'text-gray-100'}`}>
            {message.content}
          </div>
        </div>
        
        {isUser && (
          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 mt-1">
            <User className="h-4 w-4 text-gray-300" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
