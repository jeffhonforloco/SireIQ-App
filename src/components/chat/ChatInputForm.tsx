
import React from 'react';
import { Send } from 'lucide-react';
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
            placeholder={isTyping ? "Please wait..." : "Ask SireIQ..."}
            className="w-full bg-[#1A202C] rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            disabled={isTyping || disabled}
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <button
              type="submit"
              disabled={!input.trim() || isTyping || disabled}
              className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-600 disabled:bg-gray-700 disabled:text-gray-500"
            >
              <Send className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <FeatureButtons />
          
          <div>
            <button
              type="button"
              onClick={handleVoiceInput}
              disabled={isTyping || disabled}
              className="bg-white text-black hover:bg-gray-100 py-1.5 px-4 rounded-full flex items-center gap-1.5 text-sm"
              title={isListening ? "Stop listening" : "Start voice input"}
            >
              <span className="font-medium">Voice</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatInputForm;
