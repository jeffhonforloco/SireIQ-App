
import React from 'react';
import { User, MessageCircle } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`max-w-[80%] p-4 ${
          isUser
            ? 'bg-gray-700 rounded-2xl rounded-tr-sm ml-12'
            : 'bg-gray-800 rounded-2xl rounded-tl-sm mr-12'
        }`}
      >
        <div className="flex items-start gap-3">
          {!isUser && (
            <div className="w-8 h-8 rounded-full bg-blue-600 border border-blue-500 flex items-center justify-center shadow-sm">
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
          )}
          
          <div className="flex-1">
            <p className="text-gray-100">{message.content}</p>
          </div>
          
          {isUser && (
            <div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center shadow-sm">
              <User className="h-4 w-4 text-gray-300" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
