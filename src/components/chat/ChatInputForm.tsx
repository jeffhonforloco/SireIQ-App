
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
    <div className="sticky bottom-0 p-1.5 sm:p-2 md:p-3 border-t border-gray-800 bg-black/30 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="relative">
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask SireIQ anything..."
          className="pr-14 sm:pr-16 resize-none min-h-[32px] sm:min-h-[36px] md:min-h-[42px] max-h-[80px] sm:max-h-[100px] md:max-h-[150px] text-xs sm:text-sm md:text-base bg-gray-800/80 border-gray-700 rounded-xl placeholder:text-gray-400 focus-visible:ring-sireiq-accent py-1.5 px-2.5 sm:py-2 sm:px-3"
          rows={1}
        />
        <div className="absolute bottom-0.5 sm:bottom-1 md:bottom-1.5 right-0.5 sm:right-1 md:right-1.5 flex items-center space-x-1">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-full h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
            onClick={handleVoiceInput}
          >
            <Mic className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
          </Button>
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim()}
            className={`rounded-full h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 ${
              input.trim() ? 'bg-gradient-to-r from-sireiq-cyan to-blue-500 text-sireiq-darker hover:opacity-90' : 'bg-gray-700 text-gray-400'
            }`}
          >
            <Send className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInputForm;
