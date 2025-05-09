
import React from 'react';
import { format } from 'date-fns';
import { User, Bot } from 'lucide-react';
import { ChatMessage as MessageType } from './hooks/useChatState';

interface ChatMessageProps {
  message: MessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex items-start gap-3 ${isUser ? 'justify-end' : ''}`}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sireiq-accent/20 flex items-center justify-center">
          <Bot className="h-4 w-4 text-sireiq-cyan" />
        </div>
      )}
      
      <div className={`max-w-[85%] p-3 rounded-lg ${
        isUser 
          ? 'bg-sireiq-cyan/20 text-sireiq-light' 
          : 'bg-sireiq-accent/10 border border-sireiq-accent/20'
      }`}>
        <div className="whitespace-pre-wrap text-sm">{message.content}</div>
        <div className="mt-1 text-xs text-sireiq-light/50 text-right">
          {format(message.timestamp, 'h:mm a')}
        </div>
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sireiq-cyan/20 flex items-center justify-center">
          <User className="h-4 w-4 text-sireiq-cyan" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
