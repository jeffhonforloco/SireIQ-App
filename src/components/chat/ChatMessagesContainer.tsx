
import React, { useRef, useEffect } from 'react';
import { Message } from '@/components/ai-chat/types';
import ChatMessage from './ChatMessage';
import ChatTypingIndicator from './ChatTypingIndicator';
import ChatWelcomeSection from './ChatWelcomeSection';

interface ChatMessagesContainerProps {
  messages: Message[];
  isTyping: boolean;
  handleQuickSuggestion: (suggestion: string) => void;
  isMobile: boolean;
}

const ChatMessagesContainer: React.FC<ChatMessagesContainerProps> = ({
  messages,
  isTyping,
  handleQuickSuggestion,
  isMobile
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex-grow overflow-y-auto p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3 md:space-y-4">
      {/* Welcome section with quick suggestions */}
      {messages.length === 1 && messages[0].id.includes('welcome') && (
        <ChatWelcomeSection 
          handleQuickSuggestion={handleQuickSuggestion} 
          isMobile={isMobile} 
        />
      )}
      
      {/* Chat messages */}
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isTyping && <ChatTypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatMessagesContainer;
