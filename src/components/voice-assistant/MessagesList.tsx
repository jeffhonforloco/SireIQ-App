
import React, { useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import AssistantMessage from './AssistantMessage';
import UserMessage from './UserMessage';
import WelcomeMessage from './WelcomeMessage';

interface Message {
  id: string;
  type: 'system' | 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

interface MessagesListProps {
  messages: Message[];
  isFullScreen: boolean;
}

const MessagesList: React.FC<MessagesListProps> = ({ messages, isFullScreen }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <ScrollArea className={`flex-grow mb-4 p-4 ${isFullScreen ? 'h-full' : 'h-80'}`}>
      <div className="space-y-4">
        <WelcomeMessage />
        
        {messages.map(message => (
          message.type === 'user' ? (
            <UserMessage key={message.id} text={message.text} />
          ) : message.type === 'assistant' ? (
            <AssistantMessage key={message.id} text={message.text} />
          ) : null
        ))}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};

export default MessagesList;
