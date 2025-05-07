
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { toast } from '@/components/ui/sonner';
import { Message } from '@/components/ai-chat/types';
import { useIsMobile } from '@/hooks/use-mobile';
import ChatHeader from './ChatHeader';
import ChatMessagesContainer from './ChatMessagesContainer';
import ChatInputForm from './ChatInputForm';

const HomeChatExperience: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const isMobile = useIsMobile();
  
  // SireIQ specific responses
  const sireIQResponses = {
    features: [
      "SireIQ offers advanced data analytics, helping you transform raw data into actionable insights with sophisticated visualization tools and AI-driven pattern recognition.",
      "Our natural language processing capabilities allow SireIQ to understand and generate human-like text, perfect for content creation, summarization, and translation tasks.",
      "SireIQ's voice assistant feature provides hands-free interaction, allowing you to multitask while getting information or completing tasks through simple voice commands.",
      "Our enterprise security features include end-to-end encryption, role-based access controls, and compliance with major security standards like GDPR, HIPAA, and SOC 2."
    ],
    comparisons: [
      "Unlike basic chatbots, SireIQ combines multiple AI technologies including NLP, machine learning, and computer vision to provide more comprehensive solutions to complex problems.",
      "While many AI platforms require technical expertise, SireIQ features an intuitive interface accessible to team members of all technical backgrounds.",
      "SireIQ differentiates itself with domain-specific knowledge across industries, allowing for more relevant and accurate responses compared to general-purpose AI systems."
    ],
    industries: [
      "In healthcare, SireIQ helps analyze patient data, predict outcomes, and streamline administrative tasks while maintaining strict HIPAA compliance.",
      "Financial institutions use SireIQ for fraud detection, market trend analysis, and personalized customer service, all with enterprise-grade security.",
      "Marketing teams leverage SireIQ for content creation, audience analysis, and campaign optimization, increasing engagement while reducing production time.",
      "SireIQ assists software development teams with code generation, bug detection, and documentation, accelerating development cycles."
    ]
  };
  
  const handleSubmit = useCallback((e: React.FormEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (!input.trim() || isTyping) return;
    
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
  }, [input, isTyping]);

  const generateResponse = useCallback((userInput: string) => {
    let responseContent = "";
    
    // Generate appropriate response based on input content
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes("feature") || lowerInput.includes("what can") || lowerInput.includes("capabilities")) {
      responseContent = sireIQResponses.features[Math.floor(Math.random() * sireIQResponses.features.length)];
    } 
    else if (lowerInput.includes("compare") || lowerInput.includes("difference") || lowerInput.includes("better than")) {
      responseContent = sireIQResponses.comparisons[Math.floor(Math.random() * sireIQResponses.comparisons.length)];
    }
    else if (lowerInput.includes("industry") || lowerInput.includes("sector") || lowerInput.includes("business")) {
      responseContent = sireIQResponses.industries[Math.floor(Math.random() * sireIQResponses.industries.length)];
    }
    else {
      const generalResponses = [
        `I've analyzed your question about ${userInput.toLowerCase()}. Based on SireIQ's advanced AI models, here are some insights that might help enhance your understanding.`,
        `That's an interesting point about ${userInput.toLowerCase()}. SireIQ's data analysis tools can help you develop a more comprehensive understanding of this topic.`,
        `When it comes to ${userInput.toLowerCase()}, SireIQ's AI systems detect several optimization opportunities worth exploring. Would you like me to elaborate on specific areas?`,
        `I can provide detailed assistance with ${userInput.toLowerCase()}. SireIQ's neural networks are specifically designed to transform complex questions into actionable intelligence.`
      ];
      responseContent = generalResponses[Math.floor(Math.random() * generalResponses.length)];
    }
    
    const assistantMessage: Message = {
      id: Date.now().toString(),
      content: responseContent,
      role: 'assistant',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, assistantMessage]);
    setIsTyping(false);
  }, []);

  const handleQuickSuggestion = useCallback((suggestion: string) => {
    setInput(suggestion);
    
    // Auto-submit after a brief delay to simulate user typing
    setTimeout(() => {
      const syntheticEvent = { preventDefault: () => {}, stopPropagation: () => {} } as React.FormEvent;
      handleSubmit(syntheticEvent);
    }, 300);
  }, [handleSubmit]);

  const handleVoiceInput = useCallback(() => {
    toast.info("Voice recognition activated. Please speak clearly.");
    // This would integrate with your existing voice assistant functionality
  }, []);

  const clearChat = useCallback(() => {
    setMessages([]);
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
        isTyping={isTyping}
      />
    </div>
  );
};

export default HomeChatExperience;
