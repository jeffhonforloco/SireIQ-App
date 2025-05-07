
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Allow interaction within the messages container but prevent page reloads
  const handleContainerClick = (e: React.MouseEvent) => {
    // Only prevent default if clicked directly on the container
    if (e.target === e.currentTarget) {
      e.preventDefault();
    }
  };

  return (
    <div 
      ref={containerRef}
      className="flex-grow overflow-y-auto overflow-x-hidden p-2 space-y-2" 
      onClick={handleContainerClick}
    >
      {/* Welcome section with quick suggestions */}
      {messages.length === 1 && messages[0].id.includes('welcome') && (
        <ChatWelcomeSection 
          handleQuickSuggestion={handleQuickSuggestion} 
          isMobile={isMobile} 
        />
      )}
      
      {/* Chat messages */}
      <div className="space-y-2">
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
