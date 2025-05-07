
import React, { useRef, useEffect } from 'react';
import { Message } from '@/components/ai-chat/types';
import ChatMessage from './ChatMessage';
import ChatTypingIndicator from './ChatTypingIndicator';
import ChatWelcomeSection from './ChatWelcomeSection';
import { ScrollArea } from '@/components/ui/scroll-area';

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

  // Show welcome screen if no messages
  const showWelcome = messages.length === 0;

  return (
    <ScrollArea className="h-full w-full">
      <div 
        ref={containerRef}
        className="p-4"
      >
        {showWelcome ? (
          <ChatWelcomeSection 
            handleQuickSuggestion={handleQuickSuggestion} 
            isMobile={isMobile} 
          />
        ) : (
          <div className="space-y-0 w-full">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
        )}
        
        {isTyping && <ChatTypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};

export default ChatMessagesContainer;
