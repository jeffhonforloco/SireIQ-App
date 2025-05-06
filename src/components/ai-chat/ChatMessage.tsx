
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
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
          isUser
            ? 'bg-gradient-to-r from-sireiq-accent/30 to-sireiq-accent/20 border border-sireiq-accent/50 ml-12'
            : 'bg-gradient-to-r from-sireiq-cyan/30 to-sireiq-cyan/10 border border-sireiq-cyan/50 mr-12'
        }`}
      >
        <div className="flex items-start gap-3">
          {!isUser && (
            <div className="w-8 h-8 rounded-full bg-sireiq-cyan border border-sireiq-cyan/70 flex items-center justify-center shadow-sm">
              <MessageCircle className="h-4 w-4 text-sireiq-darker" />
            </div>
          )}
          
          <div className="flex-1">
            <p className="text-sm text-sireiq-light">{message.content}</p>
          </div>
          
          {isUser && (
            <div className="w-8 h-8 rounded-full bg-sireiq-accent border border-sireiq-accent/70 flex items-center justify-center shadow-sm">
              <User className="h-4 w-4 text-sireiq-light" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
