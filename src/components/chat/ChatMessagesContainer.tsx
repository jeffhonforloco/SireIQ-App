
import React, { useRef, useEffect } from 'react';
import { ChatMessage as Message } from './hooks/useChatState';
import ChatTypingIndicator from './ChatTypingIndicator';
import QuickSuggestionButton from './QuickSuggestionButton';
import ChatMessage from './ChatMessage'; 
import { useRolePermissions } from '@/hooks/useRolePermissions';
import ChatWelcomeSection from './ChatWelcomeSection';
import { useChatState } from './hooks/useChatState';

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
  
  // Quick suggestions based on common user needs
  const suggestions = [
    "Explain how SireIQ works",
    "What features are in the premium plan?",
    "How can I build an AI agent?",
    "Give me content ideas for my blog"
  ];

  // Scroll to bottom when messages change or when typing starts/stops
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
      {/* Welcome message when there are no messages */}
      {messages.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <ChatWelcomeSection 
            onQuickSuggestion={handleQuickSuggestion}
          />
        </div>
      )}
      
      {/* Message history */}
      <div className="space-y-6">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      
      {/* Typing indicator */}
      {isTyping && <ChatTypingIndicator />}
      
      {/* Quick suggestions */}
      {messages.length > 0 && messages.length < 3 && !isTyping && (
        <div className="pt-2 pb-4">
          <p className="text-sm text-sireiq-light/60 mb-3 font-chat">Try asking about:</p>
          <div className={`flex ${isMobile ? 'flex-col space-y-2' : 'flex-wrap gap-2'}`}>
            {suggestions.map((suggestion, index) => (
              <QuickSuggestionButton 
                key={index}
                suggestion={suggestion}
                onClick={() => handleQuickSuggestion(suggestion)}
              />
            ))}
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessagesContainer;
