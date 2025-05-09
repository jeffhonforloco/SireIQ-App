
import React, { useState, useCallback } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useRole } from '@/contexts/RoleContext';
import { useRolePermissions } from '@/hooks/useRolePermissions';

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export const useChatState = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();
  const { role } = useRole();
  const { chatMessageLimit } = useRolePermissions();
  const [messageCount, setMessageCount] = useState(0);
  
  // Clear chat functionality
  const clearChat = useCallback(() => {
    setMessages([]);
    setMessageCount(0);
    setInput('');
  }, []);
  
  // Generate a response based on user input
  const generateResponse = useCallback((userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const responses = [
        "I understand your question about " + userMessage.substring(0, 20) + "..., let me help with that.",
        "Thanks for asking. Based on what you're looking for regarding " + userMessage.substring(0, 15) + "..., I can provide some insights.",
        "That's an interesting question about " + userMessage.substring(0, 20) + "..., here's what I think.",
        "I've processed your query about " + userMessage.substring(0, 15) + "... and have some information for you."
      ];
      
      const randomIndex = Math.floor(Math.random() * responses.length);
      const botMessage: ChatMessage = {
        id: Date.now().toString(),
        content: responses[randomIndex],
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  }, []);
  
  // Handle form submission
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!input.trim()) return;
    
    // Check if user has reached their message limit
    const newCount = messageCount + 1;
    
    // Get message limit based on user role
    const messageLimit = role ? chatMessageLimit : 3; // Default 3 for non-authenticated users
    
    if (newCount > messageLimit) {
      toast.error(`You've reached your message limit (${messageLimit}). ${!role ? 'Please sign up' : 'Please upgrade your plan'} to continue.`);
      
      if (!role) {
        // Prompt non-authenticated users to sign up
        setTimeout(() => {
          if (confirm('Would you like to sign up to continue chatting?')) {
            navigate('/get-started');
          }
        }, 500);
      } else if (role === 'user') {
        // Prompt free users to upgrade
        setTimeout(() => {
          if (confirm('Would you like to upgrade your plan to continue chatting?')) {
            navigate('/pricing');
          }
        }, 500);
      }
      return;
    }
    
    // Add user message to chat
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setMessageCount(newCount);
    
    // Generate assistant response
    generateResponse(input);
  }, [input, messageCount, role, chatMessageLimit, generateResponse, navigate]);
  
  // Handle quick suggestions
  const handleQuickSuggestion = useCallback((suggestion: string) => {
    setInput(suggestion);
    
    // Automatically submit after a brief delay
    setTimeout(() => {
      const formEvent = {
        preventDefault: () => {},
        stopPropagation: () => {}
      } as React.FormEvent;
      
      handleSubmit(formEvent);
    }, 300);
  }, [handleSubmit]);
  
  // Handle voice input
  const handleVoiceInput = useCallback((transcription: string) => {
    if (transcription) {
      setInput(transcription);
    }
  }, []);
  
  return {
    messages,
    input,
    isTyping,
    setInput,
    handleSubmit,
    handleQuickSuggestion,
    handleVoiceInput,
    clearChat,
    generateResponse,
    messageCount,
    chatMessageLimit: role ? chatMessageLimit : 3
  };
};
