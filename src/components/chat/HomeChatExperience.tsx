
import React, { useState, useCallback, useEffect } from 'react';
import { toast } from '@/components/ui/sonner';
import { Message } from '@/components/ai-chat/types';
import { useIsMobile } from '@/hooks/use-mobile';
import ChatHeader from './ChatHeader';
import ChatMessagesContainer from './ChatMessagesContainer';
import ChatInputForm from './ChatInputForm';

const HomeChatExperience: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      content: "Hi there! I'm SireIQ, your intelligent AI assistant. I can help with content creation, data analysis, workflow optimization, and much more. How can I assist you today?",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const isMobile = useIsMobile();
  
  // Prevent any default browser behaviors
  useEffect(() => {
    const container = document.querySelector('.chat-container');
    if (container) {
      const preventEvent = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      
      // Apply to this specific container
      container.addEventListener('touchstart', preventEvent, { passive: false });
      container.addEventListener('touchmove', preventEvent, { passive: false });
      container.addEventListener('click', preventEvent);
      
      return () => {
        container.removeEventListener('touchstart', preventEvent);
        container.removeEventListener('touchmove', preventEvent);
        container.removeEventListener('click', preventEvent);
      };
    }
  }, []);
  
  const handleSubmit = useCallback((e: React.FormEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      generateResponse(input);
    }, 1000);
  }, [input]);

  const generateResponse = useCallback((userInput: string) => {
    // Add AI assistant message
    const responses = [
      `I've analyzed your question about ${userInput.toLowerCase()}. Based on our advanced AI models, here are some insights that might help you enhance your strategy or workflow.`,
      `That's an interesting point about ${userInput.toLowerCase()}. Our data analysis tools can help you develop a more comprehensive understanding of this topic.`,
      `When it comes to ${userInput.toLowerCase()}, our AI systems detect several optimization opportunities worth exploring. Would you like me to elaborate on specific areas?`,
      `I can provide detailed assistance with ${userInput.toLowerCase()}. SireIQ's advanced neural networks are specifically designed to transform complex questions into actionable intelligence.`
    ];
    
    const assistantMessage: Message = {
      id: Date.now().toString(),
      content: responses[Math.floor(Math.random() * responses.length)],
      role: 'assistant',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, assistantMessage]);
    setIsTyping(false);
  }, []);

  const handleQuickSuggestion = useCallback((suggestion: string) => {
    setInput(suggestion);
  }, []);

  const handleVoiceInput = useCallback(() => {
    toast.info("Voice recognition activated. Please speak clearly.");
    // This would integrate with your existing voice assistant functionality
  }, []);

  const clearChat = useCallback(() => {
    setMessages([
      {
        id: 'welcome-reset',
        content: "Chat cleared. How else can I help you today?",
        role: 'assistant',
        timestamp: new Date(),
      },
    ]);
  }, []);

  const preventPropagation = (e: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div 
      className="flex flex-col w-full h-full max-h-full fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-sireiq-darker border border-gray-800 overflow-hidden shadow-glow chat-container" 
      onClick={preventPropagation}
      onTouchStart={preventPropagation}
      onTouchMove={preventPropagation}
      onContextMenu={preventPropagation}
    >
      {/* Header */}
      <ChatHeader clearChat={clearChat} />
      
      {/* Messages container */}
      <ChatMessagesContainer 
        messages={messages} 
        isTyping={isTyping} 
        handleQuickSuggestion={handleQuickSuggestion} 
        isMobile={isMobile} 
      />
      
      {/* Input area */}
      <ChatInputForm
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        handleVoiceInput={handleVoiceInput}
      />
    </div>
  );
};

export default HomeChatExperience;
