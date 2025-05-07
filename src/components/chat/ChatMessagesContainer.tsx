
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
    
    // Prevent default behavior for all events within this container
    if (containerRef.current) {
      const container = containerRef.current;
      
      const preventEvent = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
      };
      
      container.addEventListener('touchstart', preventEvent, { passive: false });
      container.addEventListener('touchmove', preventEvent, { passive: false });
      
      return () => {
        container.removeEventListener('touchstart', preventEvent);
        container.removeEventListener('touchmove', preventEvent);
      };
    }
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const preventPropagation = (e: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div 
      ref={containerRef}
      className="flex-grow overflow-hidden p-2 space-y-2" 
      onClick={preventPropagation}
      onTouchStart={preventPropagation}
      onTouchMove={preventPropagation}
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
