import React from 'react';
import { Send, Mic, MicOff } from 'lucide-react';

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
    <div className="border-t border-sireiq-accent/20 bg-sireiq-darker px-4 py-2">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isTyping ? "Please wait..." : "Ask anything..."}
          className="w-full bg-sireiq-accent/10 rounded-lg py-3 px-4 pr-24 text-sireiq-light focus:outline-none focus:ring-1 focus:ring-sireiq-cyan/50"
          disabled={isTyping || disabled}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <button 
            type="button" 
            onClick={handleVoiceInput}
            disabled={isTyping || disabled}
            className="p-2 hover:bg-sireiq-accent/20 rounded-md transition-colors disabled:opacity-50"
            title={isListening ? "Stop listening" : "Start voice input"}
          >
            {isListening ? 
              <MicOff className="h-5 w-5 text-red-400" /> : 
              <Mic className="h-5 w-5 text-sireiq-light/70" />
            }
          </button>
          <button 
            type="submit"
            disabled={!input.trim() || isTyping || disabled}
            className="p-2 bg-sireiq-cyan text-sireiq-darker rounded-md hover:opacity-90 transition-colors disabled:opacity-50 disabled:bg-sireiq-accent/20 disabled:text-sireiq-light/50"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInputForm;
