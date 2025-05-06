
import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Volume, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { useVoiceAssistant } from '@/hooks/useVoiceAssistant';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import VoiceSettingsPanel from './VoiceSettingsPanel';
import AssistantMessage from './AssistantMessage';
import UserMessage from './UserMessage';
import WelcomeMessage from './WelcomeMessage';

interface Message {
  id: string;
  type: 'system' | 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

const VoiceAssistantComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const {
    isListening,
    isSpeaking,
    transcript,
    startListening,
    stopListening,
    stopSpeaking,
    speakText,
    resetTranscript,
    supportsSpeechRecognition
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
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (transcript && !isListening && transcript.trim() !== '') {
      // When speech recognition stops and we have a transcript
      handleUserInput(transcript);
      resetTranscript();
    }
  }, [transcript, isListening]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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

  const handleToggleMic = () => {
    if (isListening) {
      stopListening();
    } else {
      if (!supportsSpeechRecognition) {
        toast.error("Your browser doesn't support speech recognition.");
        return;
      }
      startListening();
      toast.info("Listening...");
    }
  };

  const handleToggleSound = () => {
    if (isSpeaking) {
      stopSpeaking();
      toast.info("Voice output muted");
    } else {
      speakText("Voice output enabled");
      toast.info("Voice output enabled");
    }
  };

  return (
    <div className={`glass-effect border border-sireiq-accent/30 rounded-2xl p-6 transition-all ${
      isFullScreen ? 'fixed inset-4 z-50 flex flex-col' : 'max-w-3xl w-full'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="bg-sireiq-accent/20 p-2 rounded-full mr-3">
            <span className="text-2xl">🤖</span>
          </div>
          <h2 className="text-xl font-semibold">Sire Voice Assistant</h2>
        </div>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
            onClick={handleToggleSound}
          >
            {isSpeaking ? <Volume className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </Button>
          
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-sireiq-darker border-sireiq-accent/30">
              <VoiceSettingsPanel />
            </DrawerContent>
          </Drawer>
          
          <Button
            variant="outline"
            size="icon"
            className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
            onClick={() => setIsFullScreen(!isFullScreen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isFullScreen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
              )}
            </svg>
          </Button>
        </div>
      </div>
      
      <ScrollArea className={`flex-grow pr-4 ${isFullScreen ? 'h-full' : 'h-80'}`}>
        <div className="space-y-4">
          <WelcomeMessage />
          
          {messages.map(message => (
            message.type === 'user' ? (
              <UserMessage key={message.id} text={message.text} />
            ) : message.type === 'assistant' ? (
              <AssistantMessage key={message.id} text={message.text} />
            ) : null
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      <div className="pt-4 mt-4 border-t border-sireiq-accent/30">
        <div className="flex items-center">
          <Button
            className={`rounded-full p-3 mr-3 ${
              isListening 
                ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                : 'bg-sireiq-cyan hover:bg-sireiq-cyan/80'
            }`}
            size="icon"
            onClick={handleToggleMic}
          >
            {isListening ? (
              <MicOff className="h-6 w-6" />
            ) : (
              <Mic className="h-6 w-6" />
            )}
          </Button>
          
          <Card className="flex-grow bg-sireiq-accent/10 border-sireiq-accent/20">
            <div className="p-3 text-sireiq-light/70">
              {isListening ? (
                transcript || "Listening..."
              ) : (
                "Click the microphone to start speaking"
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistantComponent;
