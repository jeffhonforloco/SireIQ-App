
import React from 'react';
import { ArrowUp, Paperclip, Search, Zap, Mic } from 'lucide-react';
import FeatureButtons from './input/FeatureButtons';

interface ChatInputFormProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
  handleVoiceInput: () => void;
  isTyping: boolean;
  isListening: boolean;
  disabled?: boolean;
}

const ChatInputForm: React.FC<ChatInputFormProps> = ({
  input,
  setInput,
  handleSubmit,
  handleVoiceInput,
  isTyping,
  isListening,
  disabled = false
}) => {
  return (
    <div className="border-t border-gray-800 bg-[#121620] px-4 py-4">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isTyping ? "Please wait..." : "Ask anything"}
            className="w-full bg-[#1A202C] rounded-full py-3 px-4 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            disabled={isTyping || disabled}
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <button
              type="button"
              disabled={isTyping || disabled}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-700 text-white"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="flex items-center justify-center text-gray-400"
            >
              <Paperclip className="h-6 w-6" />
            </button>
            
            <button
              type="button"
              className="flex items-center justify-center text-gray-400"
            >
              <Search className="h-6 w-6" />
            </button>
            
            <button
              type="button"
              className="flex items-center justify-center text-gray-400"
            >
              <Zap className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={handleVoiceInput}
              disabled={isTyping || disabled}
              className="bg-white text-black hover:bg-gray-100 py-2 px-6 rounded-full flex items-center gap-1.5"
            >
              <Mic className="h-5 w-5" />
              <span className="font-medium">Voice</span>
            </button>
            
            <button
              type="submit"
              disabled={!input.trim() || isTyping || disabled}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-600 disabled:bg-gray-700 disabled:text-gray-500"
            >
              <ArrowUp className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </form>

      <div className="text-center mt-5">
        <p className="text-sm text-gray-500">
          SireIQ helps with AI-powered insights, content creation, and workflow optimization.
        </p>
      </div>
    </div>
  );
};

export default ChatInputForm;
