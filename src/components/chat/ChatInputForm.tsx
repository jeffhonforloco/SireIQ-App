
import React from 'react';
import { Button } from '@/components/ui/button';
import { Send, Mic, MicOff } from 'lucide-react';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ChatInputFormProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleVoiceInput: () => void;
  isTyping: boolean;
  isListening: boolean;
  voiceResponseButton?: React.ReactNode;
}

const ChatInputForm: React.FC<ChatInputFormProps> = ({
  input,
  setInput,
  handleSubmit,
  handleVoiceInput,
  isTyping,
  isListening,
  voiceResponseButton
}) => {
  return (
    <div className="p-4 border-t border-gray-700 bg-gray-800">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-3 pr-10 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-sireiq-cyan focus:outline-none"
            disabled={isTyping}
          />
        </div>
        
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  onClick={handleVoiceInput}
                  size="icon"
                  variant="outline"
                  className="bg-gray-800 border-gray-700 hover:bg-gray-700 rounded-full"
                >
                  {isListening ? <MicOff className="h-5 w-5 text-sireiq-cyan" /> : <Mic className="h-5 w-5 text-gray-400" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isListening ? "Stop voice input" : "Start voice input"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <Button
            type="submit"
            size="icon"
            disabled={isTyping || !input.trim()}
            className="bg-sireiq-cyan hover:bg-sireiq-cyan/90 rounded-full"
          >
            <Send className="h-5 w-5 text-gray-900" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInputForm;
