
import React, { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import ChatHeader from './ChatHeader';
import ChatMessagesContainer from './ChatMessagesContainer';
import ChatInputForm from './ChatInputForm';
import { useChatState } from './hooks/useChatState';
import { toast } from '@/components/ui/sonner';
import { useVoiceAssistant } from '@/hooks/useVoiceAssistant';

const HomeChatExperience: React.FC = () => {
  const { 
    messages, 
    input, 
    isTyping, 
    setInput, 
    handleSubmit, 
    handleQuickSuggestion, 
    handleVoiceInput, 
    clearChat,
    generateResponse
  } = useChatState();
  
  const isMobile = useIsMobile();
  const { isListening, startListening, stopListening, supportsSpeechRecognition } = useVoiceAssistant();

  // Check if we need to clear the chat based on URL params
  useEffect(() => {
    // Log mobile detection for debugging
    console.log('Is mobile device:', isMobile);
  }, [isMobile]);

  // Add event listener for new chat created event
  useEffect(() => {
    const handleNewChat = () => {
      clearChat();
    };

    window.addEventListener('new-chat-created', handleNewChat);
    return () => {
      window.removeEventListener('new-chat-created', handleNewChat);
    };
  }, [clearChat]);

  // Enhanced voice input handler
  const handleVoiceInputToggle = () => {
    if (isListening) {
      stopListening();
      toast.info("Voice input disabled");
    } else {
      if (!supportsSpeechRecognition) {
        toast.error("Your browser doesn't support speech recognition");
        return;
      }
      
      startListening();
      toast.success("Listening...");
    }
  };

  return (
    <div className="flex flex-col h-full relative">
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
        handleVoiceInput={handleVoiceInputToggle}
        isTyping={isTyping}
        isListening={isListening}
      />
    </div>
  );
};

export default HomeChatExperience;
