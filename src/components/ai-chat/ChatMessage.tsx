
import React from 'react';
import { User } from 'lucide-react';

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
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          isUser
            ? 'bg-sireiq-cyan/20 border border-sireiq-cyan/30 ml-12'
            : 'bg-sireiq-accent/10 border border-sireiq-accent/30 mr-12'
        }`}
      >
        <div className="flex items-start gap-3">
          {!isUser && (
            <div className="w-8 h-8 rounded-full bg-sireiq-cyan/20 border border-sireiq-cyan/30 flex items-center justify-center">
              <span className="text-sm">🤖</span>
            </div>
          )}
          
          <div className="flex-1">
            <p className="text-sm text-sireiq-light">{message.content}</p>
          </div>
          
          {isUser && (
            <div className="w-8 h-8 rounded-full bg-sireiq-darker flex items-center justify-center">
              <User className="h-4 w-4 text-sireiq-light" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
