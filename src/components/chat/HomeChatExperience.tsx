
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Mic, X, Sparkles, Zap, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';
import { Message } from '@/components/ai-chat/types';
import QuickSuggestionButton from './QuickSuggestionButton';
import ChatMessage from './ChatMessage';
import ChatTypingIndicator from './ChatTypingIndicator';

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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const quickSuggestions = [
    "How can you enhance my workflow?",
    "Analyze my content strategy",
    "Generate creative ideas",
    "Optimize my decision-making process"
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Auto adjust textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
    
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    
    // Simulate AI response
    setTimeout(() => {
      generateResponse(input);
    }, 1000);
  };

  const generateResponse = (userInput: string) => {
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
  };

  const handleQuickSuggestion = (suggestion: string) => {
    setInput(suggestion);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleVoiceInput = () => {
    toast.info("Voice recognition activated. Please speak clearly.");
    // This would integrate with your existing voice assistant functionality
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        content: "Chat cleared. How else can I help you today?",
        role: 'assistant',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-7rem)] max-w-4xl w-full relative bg-gradient-to-br from-gray-900 via-black to-sireiq-darker rounded-xl border border-gray-800 overflow-hidden backdrop-blur-sm shadow-glow">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-black/50">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-sireiq-cyan to-blue-500 rounded-full p-2 mr-3 shadow-lg">
            <BrainCircuit className="h-5 w-5 text-sireiq-darker" />
          </div>
          <div>
            <h2 className="text-lg font-medium text-white">Chat with SireIQ</h2>
            <p className="text-xs text-gray-400">Your intelligent AI assistant</p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={clearChat}
          className="text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Messages container */}
      <div className="flex-grow overflow-y-auto p-6 space-y-6">
        {/* Welcome section with quick suggestions */}
        {messages.length === 1 && messages[0].id.includes('welcome') && (
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 glow-text">
              Unleash your potential with intelligent AI
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {quickSuggestions.map((suggestion, index) => (
                <QuickSuggestionButton 
                  key={index}
                  text={suggestion}
                  onClick={() => handleQuickSuggestion(suggestion)}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Chat messages */}
        <div className="space-y-6">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isTyping && <ChatTypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Input area */}
      <div className="p-4 border-t border-gray-800 bg-black/30">
        <form onSubmit={handleSubmit} className="relative">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask SireIQ anything..."
            className="pr-24 resize-none min-h-[50px] max-h-[200px] bg-gray-800/80 border-gray-700 rounded-xl placeholder:text-gray-400 focus-visible:ring-sireiq-accent"
            rows={1}
          />
          <div className="absolute bottom-2 right-2 flex items-center space-x-2">
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-full h-8 w-8"
              onClick={handleVoiceInput}
            >
              <Mic className="h-4 w-4" />
            </Button>
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim()}
              className={`rounded-full h-8 w-8 ${
                input.trim() ? 'bg-gradient-to-r from-sireiq-cyan to-blue-500 text-sireiq-darker hover:opacity-90' : 'bg-gray-700 text-gray-400'
              }`}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
        <p className="text-xs text-gray-500 mt-2 text-center">
          SireIQ helps with AI-powered insights, content creation, and workflow optimization. Your conversations may be reviewed to improve our services.
        </p>
      </div>
    </div>
  );
};

export default HomeChatExperience;
