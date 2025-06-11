
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, User, Send, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DemoMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const InteractiveDemo: React.FC = () => {
  const [messages, setMessages] = useState<DemoMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your AI assistant. Try asking me something to see how I can help you.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const demoResponses = [
    "I can help you create content, analyze data, generate code, and provide insights for your business needs.",
    "That's a great question! I can assist with research, writing, problem-solving, and creative tasks.",
    "I'm designed to understand context and provide detailed, helpful responses tailored to your specific needs.",
    "Let me help you with that. I can break down complex problems and provide step-by-step solutions.",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: DemoMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: DemoMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: demoResponses[Math.floor(Math.random() * demoResponses.length)],
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const resetDemo = () => {
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: "Hello! I'm your AI assistant. Try asking me something to see how I can help you.",
        timestamp: new Date()
      }
    ]);
    setInput('');
    setIsTyping(false);
  };

  return (
    <Card className="glass-effect border border-sireiq-accent/30 max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Interactive AI Demo</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={resetDemo}
            className="text-sireiq-light/60 hover:text-sireiq-light"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="bg-sireiq-darker/50 rounded-lg p-4 h-80 overflow-y-auto mb-4 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-8 h-8 rounded-full bg-sireiq-cyan/20 flex items-center justify-center flex-shrink-0">
                    {message.role === 'user' ? (
                      <User className="h-4 w-4 text-sireiq-cyan" />
                    ) : (
                      <Bot className="h-4 w-4 text-sireiq-cyan" />
                    )}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-sireiq-cyan/20 text-sireiq-light' 
                      : 'bg-sireiq-accent/20 text-sireiq-light'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-sireiq-cyan/20 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-sireiq-cyan" />
                </div>
                <div className="bg-sireiq-accent/20 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-sireiq-cyan rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-sireiq-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-sireiq-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 p-3 bg-sireiq-darker/50 border border-sireiq-accent/20 rounded-lg text-sireiq-light placeholder:text-sireiq-light/50 focus:outline-none focus:border-sireiq-cyan/50"
          />
          <Button 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="bg-sireiq-cyan hover:bg-sireiq-cyan/90 text-sireiq-darker"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveDemo;
