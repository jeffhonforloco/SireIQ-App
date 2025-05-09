
import React from 'react';
import { Send, Mic } from 'lucide-react';
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
  // These are placeholder handlers for the feature buttons
  const handleAttachClick = () => {
    console.log('Attach clicked');
  };
  
  const handleSearchClick = () => {
    console.log('Search clicked');
  };
  
  const handleReasonClick = () => {
    console.log('Reason clicked');
  };
  
  return (
    <div className="border-t border-sireiq-accent/20 bg-[#0f1216] px-4 py-2">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isTyping ? "Please wait..." : "Ask SireIQ..."}
            className="w-full bg-[#171c26] rounded-full py-4 px-6 text-gray-200 focus:outline-none"
            disabled={isTyping || disabled}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <button
              type="submit"
              disabled={!input.trim() || isTyping || disabled}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-[#3b82f6] disabled:bg-gray-700 disabled:text-gray-500"
            >
              <Send className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <FeatureButtons 
            handleAttachClick={handleAttachClick}
            handleSearchClick={handleSearchClick}
            handleReasonClick={handleReasonClick}
          />
          
          <div>
            <button
              type="button"
              onClick={handleVoiceInput}
              disabled={isTyping || disabled}
              className="bg-white text-black hover:bg-gray-100 py-2 px-6 rounded-full flex items-center gap-2"
              title={isListening ? "Stop listening" : "Start voice input"}
            >
              <Mic className="h-5 w-5" />
              <span className="font-medium">Voice</span>
            </button>
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-500">
          SireIQ helps with AI-powered insights, content creation, and workflow optimization.
        </div>
      </form>
    </div>
  );
};

export default ChatInputForm;
