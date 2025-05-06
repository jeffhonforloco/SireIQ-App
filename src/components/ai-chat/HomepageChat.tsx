
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Send, User } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  timestamp: Date;
}

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
    <Card className="w-full max-w-3xl border border-sireiq-accent/30 glass-effect">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <div className="bg-sireiq-accent/20 p-2 rounded-full mr-3">
            <span className="text-2xl">🤖</span>
          </div>
          Chat with SireIQ
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4 h-[400px] overflow-y-auto p-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-sireiq-cyan/20 border border-sireiq-cyan/30 ml-12'
                    : 'bg-sireiq-accent/10 border border-sireiq-accent/30 mr-12'
                }`}
              >
                <div className="flex items-start gap-3">
                  {message.role !== 'user' && (
                    <div className="w-8 h-8 rounded-full bg-sireiq-cyan/20 border border-sireiq-cyan/30 flex items-center justify-center">
                      <span className="text-sm">🤖</span>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <p className="text-sm text-sireiq-light">{message.content}</p>
                  </div>
                  
                  {message.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-sireiq-darker flex items-center justify-center">
                      <User className="h-4 w-4 text-sireiq-light" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-lg bg-sireiq-accent/10 border border-sireiq-accent/30">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sireiq-light/50 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-sireiq-light/50 rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-2 bg-sireiq-light/50 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          )}
          
          {showSignupPrompt && (
            <div className="bg-sireiq-accent/10 border border-sireiq-cyan/30 p-4 rounded-lg text-center">
              <h4 className="text-lg font-medium mb-2">Continue the conversation</h4>
              <p className="text-sm text-sireiq-light/80 mb-4">
                You've reached the limit of free messages. Sign up to continue chatting with SireIQ and unlock all features.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  onClick={handleSignUp}
                  className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                >
                  Sign Up
                </Button>
                <Button 
                  onClick={handleSignIn}
                  variant="outline"
                  className="border-sireiq-cyan text-sireiq-cyan hover:bg-sireiq-cyan/10"
                >
                  Sign In
                </Button>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      
      <CardFooter>
        <form onSubmit={handleSubmit} className="w-full flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask SireIQ something..."
            disabled={showSignupPrompt}
            className="flex-1 p-3 rounded-md bg-sireiq-accent/10 border border-sireiq-accent/30 text-sireiq-light focus:ring-1 focus:ring-sireiq-cyan focus:border-sireiq-cyan"
          />
          <Button 
            type="submit" 
            disabled={!input.trim() || showSignupPrompt}
            className="bg-sireiq-cyan hover:bg-sireiq-cyan/80 text-sireiq-darker"
          >
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default HomepageChat;
