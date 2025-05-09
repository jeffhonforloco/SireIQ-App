
import React, { useRef, useEffect } from 'react';
import { ChatMessage as Message } from './hooks/useChatState';
import ChatTypingIndicator from './ChatTypingIndicator';
import QuickSuggestionButton from './QuickSuggestionButton';
import ChatMessage from './ChatMessage'; 
import { useRolePermissions } from '@/hooks/useRolePermissions';
import ChatWelcomeSection from './ChatWelcomeSection';
import { useChatState } from './hooks/useChatState';
import SignupPrompt from '../ai-chat/SignupPrompt';
import { useNavigate } from 'react-router-dom';

interface ChatMessagesContainerProps {
  messages: Message[];
  isTyping: boolean;
  handleQuickSuggestion: (suggestion: string) => void;
  isMobile: boolean;
  showSignupPrompt?: boolean;
}

const ChatMessagesContainer: React.FC<ChatMessagesContainerProps> = ({
  messages,
  isTyping,
  handleQuickSuggestion,
  isMobile,
  showSignupPrompt = false
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messageCount, chatMessageLimit } = useChatState();
  const navigate = useNavigate();
  
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
  }, [messages, isTyping, showSignupPrompt]);

  const handleSignUp = () => {
    navigate('/get-started');
  };
  
  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {/* Welcome message when there are no messages */}
      {messages.length === 0 && (
        <ChatWelcomeSection 
          messageCount={messageCount}
          chatMessageLimit={chatMessageLimit}
        />
      )}
      
      {/* Message history */}
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      
      {/* Typing indicator */}
      {isTyping && <ChatTypingIndicator />}
      
      {/* Sign up prompt when limit is reached */}
      {showSignupPrompt && (
        <SignupPrompt 
          onSignUp={handleSignUp} 
          onSignIn={handleSignIn}
          message="You've reached the limit of free messages. Sign up to continue chatting with SireIQ and unlock all features."
          isAuthenticated={false}
        />
      )}
      
      {/* Quick suggestions */}
      {messages.length > 0 && messages.length < 3 && !isTyping && !showSignupPrompt && (
        <div className="pt-2 pb-4">
          <p className="text-sm text-sireiq-light/60 mb-3">Try asking about:</p>
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
