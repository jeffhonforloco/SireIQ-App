
import React, { useState, useCallback } from 'react';
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
    workflow: [
      "I can enhance your workflow by analyzing your current processes and identifying bottlenecks. SireIQ's AI can streamline repetitive tasks, automate document processing, and provide intelligent suggestions for task prioritization.",
      "Let me optimize your workflow with SireIQ's smart scheduling tools, automated follow-ups, and intelligent task delegation. Our platform reduces manual effort by up to 40% through AI-driven automation."
    ],
    content: [
      "Looking at your content strategy, I'd recommend focusing on more interactive elements and data visualization. SireIQ's analysis shows that your audience engages 37% more with visual content compared to text-only posts.",
      "Based on SireIQ's trend analysis, your content would benefit from more industry-specific case studies. Our AI detects increasing search volume for practical applications rather than theoretical discussions in your field."
    ],
    ideas: [
      "Here are some creative ideas SireIQ generated: 1) Interactive webinar series that transforms into modular content, 2) AI-powered customer journey visualization tool, 3) Collaborative industry benchmark report with complementary businesses.",
      "SireIQ suggests these creative concepts: 1) Develop a predictive market analysis dashboard, 2) Create an AI-assisted decision tree for customer support, 3) Launch a personal productivity score tool that integrates with existing workflows."
    ],
    decisions: [
      "To optimize your decision-making process, SireIQ recommends implementing a structured framework that quantifies both objective metrics and subjective factors. Our AI can help weight these elements based on your organizational priorities.",
      "SireIQ's decision optimization tool can integrate data from multiple sources to provide comprehensive scenario analysis. This reduces decision fatigue and ensures consistent quality across your organization."
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
    
    if (lowerInput.includes("workflow") || lowerInput.includes("enhance") || lowerInput.includes("process")) {
      responseContent = sireIQResponses.workflow[Math.floor(Math.random() * sireIQResponses.workflow.length)];
    } 
    else if (lowerInput.includes("content") || lowerInput.includes("strategy") || lowerInput.includes("analyze")) {
      responseContent = sireIQResponses.content[Math.floor(Math.random() * sireIQResponses.content.length)];
    }
    else if (lowerInput.includes("idea") || lowerInput.includes("creative") || lowerInput.includes("generate")) {
      responseContent = sireIQResponses.ideas[Math.floor(Math.random() * sireIQResponses.ideas.length)];
    }
    else if (lowerInput.includes("decision") || lowerInput.includes("optimize") || lowerInput.includes("process")) {
      responseContent = sireIQResponses.decisions[Math.floor(Math.random() * sireIQResponses.decisions.length)];
    }
    else {
      const generalResponses = [
        `I'm SireIQ, your intelligent AI assistant. Looking at your question about ${userInput.toLowerCase()}, I can provide advanced analytics and insights to help you make better decisions.`,
        `As SireIQ, I can analyze your needs around ${userInput.toLowerCase()} and provide AI-powered recommendations that integrate with your existing workflow.`,
        `SireIQ's neural networks are designed to help with challenges like ${userInput.toLowerCase()}. Our platform combines machine learning with industry-specific knowledge to deliver personalized solutions.`,
        `I've analyzed your question about ${userInput.toLowerCase()} using SireIQ's advanced language processing. Would you like me to generate a comprehensive report, provide quick insights, or suggest optimization strategies?`
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
      <ChatHeader clearChat={clearChat} />
      
      <ChatMessagesContainer 
        messages={messages} 
        isTyping={isTyping} 
        handleQuickSuggestion={handleQuickSuggestion} 
        isMobile={isMobile} 
      />
      
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
