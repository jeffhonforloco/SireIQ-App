
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Lightbulb, Code, BrainCircuit, ChevronDown, SendHorizontal, Mic, Image } from 'lucide-react';

const HeroChat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle chat submission
      navigate('/get-started');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleQuickActionClick = (action: string) => {
    navigate('/get-started');
  };

  // Automatically adjust textarea height based on content
  const adjustTextareaHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] max-w-3xl mx-auto relative">
      {/* App name with chevron */}
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-2xl font-medium">AI Assistant</h1>
        <ChevronDown className="h-5 w-5 ml-1 text-gray-400" />
      </div>

      {/* Main prompt heading */}
      <div className="flex flex-col items-center justify-center flex-grow mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-16 text-center">
          What can I help with?
        </h1>

        {/* Quick action buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-xl px-4">
          <Button 
            variant="outline" 
            className="flex justify-start items-center py-6 px-5 rounded-2xl border-gray-700 bg-gray-800/50 hover:bg-gray-700/70"
            onClick={() => handleQuickActionClick('summarize')}
          >
            <FileText className="mr-3 h-5 w-5 text-orange-500" />
            <span className="text-gray-300">Summarize text</span>
          </Button>

          <Button 
            variant="outline" 
            className="flex justify-start items-center py-6 px-5 rounded-2xl border-gray-700 bg-gray-800/50 hover:bg-gray-700/70"
            onClick={() => handleQuickActionClick('surprise')}
          >
            <Lightbulb className="mr-3 h-5 w-5 text-blue-400" />
            <span className="text-gray-300">Surprise me</span>
          </Button>

          <Button 
            variant="outline" 
            className="flex justify-start items-center py-6 px-5 rounded-2xl border-gray-700 bg-gray-800/50 hover:bg-gray-700/70"
            onClick={() => handleQuickActionClick('code')}
          >
            <Code className="mr-3 h-5 w-5 text-purple-400" />
            <span className="text-gray-300">Code</span>
          </Button>

          <Button 
            variant="outline" 
            className="flex justify-start items-center py-6 px-5 rounded-2xl border-gray-700 bg-gray-800/50 hover:bg-gray-700/70"
            onClick={() => handleQuickActionClick('brainstorm')}
          >
            <BrainCircuit className="mr-3 h-5 w-5 text-amber-400" />
            <span className="text-gray-300">Brainstorm</span>
          </Button>
        </div>
      </div>

      {/* Input area */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-8">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative rounded-2xl bg-gray-800 border border-gray-700 overflow-hidden">
            <textarea
              ref={inputRef}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                adjustTextareaHeight();
              }}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything"
              className="w-full py-4 px-4 pr-20 bg-transparent border-none focus:outline-none resize-none min-h-[56px] max-h-[200px] text-gray-200"
              style={{ overflow: 'hidden' }}
              rows={1}
            />
            
            <div className="absolute bottom-2 right-2 flex items-center space-x-1">
              <Button
                type="button" 
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full text-gray-400 hover:bg-gray-700 hover:text-gray-300"
              >
                <Mic className="h-4 w-4" />
              </Button>
              <Button
                type="submit"
                size="icon"
                disabled={!message.trim()}
                className={`h-8 w-8 rounded-full ${
                  message.trim() ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-700 text-gray-500'
                }`}
              >
                <SendHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
        
        {/* Terms text */}
        <p className="text-center text-xs text-gray-500 mt-4">
          By using AI Assistant, you agree to our <a href="#" className="underline">Terms</a> and have read our <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default HeroChat;
