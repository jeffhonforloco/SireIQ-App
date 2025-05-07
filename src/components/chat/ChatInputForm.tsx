
import React, { useRef, useEffect } from 'react';
import { Send, Mic } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface ChatInputFormProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleVoiceInput: () => void;
}

const ChatInputForm: React.FC<ChatInputFormProps> = ({
  input,
  setInput,
  handleSubmit,
  handleVoiceInput
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Auto adjust textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="p-2 sm:p-3 md:p-4 border-t border-gray-800 bg-black/30">
      <form onSubmit={handleSubmit} className="relative">
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask SireIQ anything..."
          className="pr-16 sm:pr-20 resize-none min-h-[36px] sm:min-h-[40px] md:min-h-[50px] max-h-[100px] sm:max-h-[120px] md:max-h-[200px] text-sm md:text-base bg-gray-800/80 border-gray-700 rounded-xl placeholder:text-gray-400 focus-visible:ring-sireiq-accent py-2 px-3 sm:py-3 sm:px-4"
          rows={1}
        />
        <div className="absolute bottom-1 sm:bottom-1.5 md:bottom-2 right-1 sm:right-2 flex items-center space-x-1 md:space-x-2">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-full h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
            onClick={handleVoiceInput}
          >
            <Mic className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim()}
            className={`rounded-full h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 ${
              input.trim() ? 'bg-gradient-to-r from-sireiq-cyan to-blue-500 text-sireiq-darker hover:opacity-90' : 'bg-gray-700 text-gray-400'
            }`}
          >
            <Send className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
        </div>
      </form>
      <p className="text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-2 text-center hidden sm:block">
        SireIQ helps with AI-powered insights, content creation, and workflow optimization.
      </p>
    </div>
  );
};

export default ChatInputForm;
