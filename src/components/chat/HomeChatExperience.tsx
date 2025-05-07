
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import ChatHeader from './ChatHeader';
import ChatMessagesContainer from './ChatMessagesContainer';
import ChatInputForm from './ChatInputForm';
import { useChatState } from './hooks/useChatState';

const HomeChatExperience: React.FC = () => {
  const { 
    messages, 
    input, 
    isTyping, 
    setInput, 
    handleSubmit, 
    handleQuickSuggestion, 
    handleVoiceInput, 
    clearChat 
  } = useChatState();
  
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col h-full">
      <ChatHeader clearChat={clearChat} />
      
      <div className="flex-1 overflow-hidden">
        <ChatMessagesContainer 
          messages={messages} 
          isTyping={isTyping} 
          handleQuickSuggestion={handleQuickSuggestion} 
          isMobile={isMobile} 
        />
      </div>
      
      <ChatInputForm
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        handleVoiceInput={handleVoiceInput}
        isTyping={isTyping}
      />
    </div>
  );
};

export default HomeChatExperience;
