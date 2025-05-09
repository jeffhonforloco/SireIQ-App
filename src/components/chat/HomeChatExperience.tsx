
import React, { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import ChatHeader from './ChatHeader';
import ChatMessagesContainer from './ChatMessagesContainer';
import ChatInputForm from './ChatInputForm';
import { useChatState } from './hooks/useChatState';
import { toast } from '@/components/ui/sonner';
import { useVoiceAssistant } from '@/hooks/useVoiceAssistant';
import AppKeyboardShortcuts from '../keyboard/AppKeyboardShortcuts';
import KeyboardShortcutsDialog from '../keyboard/KeyboardShortcutsDialog';
import { getShortcutCategories } from '../keyboard/AppKeyboardShortcuts';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';

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
  const { 
    isListening, 
    startListening, 
    stopListening, 
    supportsSpeechRecognition,
    transcript,
    resetTranscript
  } = useVoiceAssistant();

  // Define the handleVoiceInputToggle function before using it in the shortcuts array
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

  // Add chat-specific keyboard shortcuts
  const chatShortcuts = [
    {
      key: 'v',
      ctrlKey: true,
      description: 'Toggle voice input',
      action: handleVoiceInputToggle
    },
    {
      key: 'ArrowUp',
      altKey: true,
      description: 'Navigate to previous message',
      action: () => {
        // Implementation for navigating messages would go here
        toast.info('Previous message');
      }
    },
    {
      key: 'ArrowDown',
      altKey: true,
      description: 'Navigate to next message',
      action: () => {
        // Implementation for navigating messages would go here
        toast.info('Next message');
      }
    }
  ];

  useKeyboardShortcuts(chatShortcuts);

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

  // Process transcript when it changes
  useEffect(() => {
    if (transcript && !isListening) {
      // When speech recognition stops and we have a transcript
      setInput(transcript);
      
      // Auto submit after brief delay
      const timer = setTimeout(() => {
        handleSubmit({
          preventDefault: () => {},
          stopPropagation: () => {}
        } as React.FormEvent);
        resetTranscript();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [transcript, isListening, setInput, handleSubmit, resetTranscript]);

  return (
    <div className="flex flex-col h-full relative">
      <ChatHeader clearChat={clearChat} />
      <AppKeyboardShortcuts />
      
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
