
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import SignupPrompt from './SignupPrompt';
import ChatInput from './ChatInput';
import { MessageSquare } from 'lucide-react';
import { Message } from './types';

const MAX_FREE_MESSAGES = 3;

const HomepageChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm SireIQ, your AI assistant. How can I help you today?",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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
    
    // Increment message count
    const newCount = messageCount + 1;
    setMessageCount(newCount);
    
    // Check if we should show signup prompt
    if (newCount >= MAX_FREE_MESSAGES) {
      setTimeout(() => {
        setShowSignupPrompt(true);
        setIsTyping(false);
      }, 1000);
      return;
    }
    
    // Simulate AI response after a short delay
    simulateAIResponse();
  };

  const simulateAIResponse = () => {
    setTimeout(() => {
      const responses = [
        "I'm analyzing your request. SireIQ can help with that by leveraging our advanced AI tools.",
        "Great question! SireIQ's platform is designed to handle these types of scenarios efficiently.",
        "That's an interesting challenge. Our AI systems can provide insights to help you solve it.",
        "I understand what you're looking for. SireIQ's technology can streamline this process for you.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleSignUp = () => {
    navigate('/get-started');
  };
  
  const handleSignIn = () => {
    navigate('/signin');
  };
  
  return (
    <Card className="w-full max-w-3xl border-0 bg-gray-900 shadow-lg overflow-hidden">
      <CardHeader className="bg-gray-800 border-b border-gray-700">
        <CardTitle className="text-xl flex items-center">
          <div className="bg-blue-600 p-2 rounded-full mr-3">
            <MessageSquare className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-white">Chat with SireIQ</span>
            <p className="text-xs font-normal text-gray-400 mt-1">Ask me anything about our platform</p>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="space-y-4 h-[400px] overflow-y-auto p-4 bg-gray-900">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {isTyping && <TypingIndicator />}
          
          {showSignupPrompt && (
            <SignupPrompt 
              onSignUp={handleSignUp} 
              onSignIn={handleSignIn} 
            />
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-800 border-t border-gray-700 p-4">
        <ChatInput 
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
          disabled={showSignupPrompt}
        />
      </CardFooter>
    </Card>
  );
};

export default HomepageChat;
