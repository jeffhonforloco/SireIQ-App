
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Send } from 'lucide-react';
import QuickActions from './QuickActions';
import { toast } from '@/components/ui/sonner';

const HeroChat = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to SireIQ.", type: 'assistant' },
    { id: 2, text: "How can I help you today?", type: 'assistant' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), text: input, type: 'user' }]);
    setInput('');
    setIsTyping(true);
    
    // Simulate response after a delay
    setTimeout(() => {
      const responses = [
        "I can help you with that. SireIQ specializes in AI-powered solutions for creators and businesses.",
        "Great question! Our platform offers tools for content creation, data analysis, and more.",
        "Let me guide you through what SireIQ can do for your workflow and productivity.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { id: Date.now(), text: randomResponse, type: 'assistant' }]);
      setIsTyping(false);
      
      // Show sign-up prompt after a few messages
      if (messages.length > 5) {
        toast("Want to explore more? Sign up for free to access all features.", {
          action: {
            label: "Sign Up",
            onClick: () => navigate('/get-started')
          }
        });
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full mx-auto text-center mb-10 pt-16"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-gradient glow">SireIQ</span>
        </h1>
      </motion.div>

      <div className="max-w-3xl w-full mx-auto mb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Chat messages */}
          <div className="h-[50vh] max-h-[500px] overflow-y-auto p-6 space-y-6">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  message.type === 'user' 
                    ? 'bg-sireiq-accent/30 rounded-tr-sm text-white'
                    : 'bg-gray-800 rounded-tl-sm text-white'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Quick actions */}
          <QuickActions />
          
          {/* Input area */}
          <div className="border-t border-gray-800 p-4">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask SireIQ something..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-full py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-sireiq-accent"
              />
              <Button 
                type="submit"
                className="rounded-full bg-sireiq-accent hover:bg-sireiq-accent/90 aspect-square"
                size="icon"
                disabled={!input.trim()}
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
            
            <div className="text-xs text-center mt-4 text-gray-500">
              By using SireIQ, you agree to our <a href="#" className="underline hover:text-sireiq-accent">Terms</a> and <a href="#" className="underline hover:text-sireiq-accent">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button 
          onClick={() => navigate('/get-started')}
          className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-6 h-auto text-lg"
        >
          Get Started with SireIQ <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroChat;
