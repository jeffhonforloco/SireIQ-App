
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
  
  // Prevent page scroll and handling
  useEffect(() => {
    const preventDefaultScroll = (e: TouchEvent) => {
      if (
        e.target instanceof Element && 
        !['INPUT', 'TEXTAREA'].includes(e.target.tagName) &&
        !e.target.closest('textarea') &&
        !e.target.closest('input')
      ) {
        e.preventDefault();
      }
    };
    
    const preventDefaultClick = (e: MouseEvent) => {
      if (e.target instanceof HTMLAnchorElement) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('touchmove', preventDefaultScroll, { passive: false });
    document.addEventListener('click', preventDefaultClick);
    
    // Disable pull-to-refresh and browser navigation gestures on mobile
    document.body.style.overscrollBehavior = 'none';
    
    return () => {
      document.removeEventListener('touchmove', preventDefaultScroll);
      document.removeEventListener('click', preventDefaultClick);
      document.body.style.overscrollBehavior = '';
    };
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

  return (
    <div className="chat-container">
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
