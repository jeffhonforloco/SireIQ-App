
import React, { useState, useEffect } from 'react';
import { toast } from '@/components/ui/sonner';
import { useVoiceAssistant } from '@/hooks/useVoiceAssistant';
import VoiceAssistantHeader from './VoiceAssistantHeader';
import MessagesList from './MessagesList';
import VoiceInputBar from './VoiceInputBar';

interface Message {
  id: string;
  type: 'system' | 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

const VoiceAssistantComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  const {
    transcript,
    isListening,
    resetTranscript,
    speakText
  } = useVoiceAssistant();

  useEffect(() => {
    // Add welcome message when component mounts
    setMessages([
      {
        id: 'welcome',
        type: 'system',
        text: 'Welcome to Sire Voice Assistant. How can I help you today?',
        timestamp: new Date()
      }
    ]);
  }, []);

  useEffect(() => {
    if (transcript && !isListening && transcript.trim() !== '') {
      // When speech recognition stops and we have a transcript
      handleUserInput(transcript);
      resetTranscript();
    }
  }, [transcript, isListening]);

  const generateAssistantResponse = async (userInput: string) => {
    // In a real app, this would call an API
    // For now, we'll simulate a response
    const responses = [
      "I found some information about that. Would you like me to continue?",
      "Based on my analysis, there are several options to consider.",
      "Let me help you with that. Here's what I found.",
      "That's an interesting question. Let me provide some insights.",
      "I've analyzed this for you and here are my findings."
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    return new Promise<string>(resolve => {
      setTimeout(() => {
        resolve(randomResponse);
      }, 1500);
    });
  };

  const handleUserInput = async (input: string) => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Start thinking
    toast.info("Thinking...");
    
    try {
      // Get response from AI
      const response = await generateAssistantResponse(input);
      
      // Add assistant message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        text: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      
      // Speak the response
      speakText(response);
    } catch (error) {
      console.error('Error generating response:', error);
      toast.error('Sorry, I had trouble processing that request.');
    }
  };

  return (
    <div className={`bg-gray-900 border border-gray-800 rounded-2xl ${
      isFullScreen ? 'fixed inset-4 z-50 flex flex-col' : 'max-w-3xl w-full'
    }`}>
      <VoiceAssistantHeader 
        isFullScreen={isFullScreen} 
        setIsFullScreen={setIsFullScreen} 
      />
      
      <MessagesList 
        messages={messages} 
        isFullScreen={isFullScreen} 
      />
      
      <VoiceInputBar />
    </div>
  );
};

export default VoiceAssistantComponent;
