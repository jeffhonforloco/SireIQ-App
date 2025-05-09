
import React from 'react';
import { Send, Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    <div className="border-t border-sireiq-accent/20 bg-sireiq-darker px-4 py-2">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isTyping ? "Please wait..." : "Ask SireIQ..."}
            className="w-full bg-sireiq-accent/10 rounded-lg py-3 px-4 text-sireiq-light focus:outline-none focus:ring-1 focus:ring-sireiq-cyan/50"
            disabled={isTyping || disabled}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <FeatureButtons 
            handleAttachClick={handleAttachClick}
            handleSearchClick={handleSearchClick}
            handleReasonClick={handleReasonClick}
          />
          
          <div className="flex items-center gap-2">
            <Button
              type="button"
              onClick={handleVoiceInput}
              disabled={isTyping || disabled}
              className="rounded-full bg-white text-black hover:bg-gray-100 px-3 py-1.5 flex items-center gap-1"
              title={isListening ? "Stop listening" : "Start voice input"}
            >
              {isListening ? (
                <>
                  <MicOff className="h-4 w-4 mr-1" />
                  <span className="text-xs font-medium">Stop</span>
                </>
              ) : (
                <>
                  <Mic className="h-4 w-4 mr-1" />
                  <span className="text-xs font-medium">Voice</span>
                </>
              )}
            </Button>
            
            <Button 
              type="submit"
              disabled={!input.trim() || isTyping || disabled}
              className="rounded-full bg-blue-600 hover:bg-blue-500 p-1.5"
            >
              <Send className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
        
        <div className="text-center text-xs text-sireiq-light/60">
          SireIQ helps with AI-powered insights, content creation, and workflow optimization.
        </div>
      </form>
    </div>
  );
};

export default ChatInputForm;
