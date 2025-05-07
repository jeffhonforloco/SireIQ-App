
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
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Auto adjust textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 60)}px`;
    }
    
    // Ensure the form doesn't trigger page reloads
    if (formRef.current) {
      const form = formRef.current;
      
      const preventFormSubmission = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      
      form.addEventListener('submit', preventFormSubmission);
      
      return () => {
        form.removeEventListener('submit', preventFormSubmission);
      };
    }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit(e);
    }
  };

  const preventDefault = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div 
      className="p-1.5 border-t border-gray-800 bg-black/30 backdrop-blur-sm" 
      onClick={preventDefault}
      onTouchStart={preventDefault}
    >
      <form 
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSubmit(e);
          return false;
        }} 
        className="relative"
      >
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask SireIQ anything..."
          className="pr-14 resize-none min-h-[32px] max-h-[60px] text-xs sm:text-sm bg-gray-800/80 border-gray-700 rounded-xl placeholder:text-gray-400 focus-visible:ring-sireiq-accent py-1.5 px-2.5"
          rows={1}
          onClick={preventDefault}
          onTouchStart={preventDefault}
        />
        <div className="absolute bottom-0.5 right-0.5 flex items-center space-x-1">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-full h-5 w-5"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleVoiceInput();
              return false;
            }}
          >
            <Mic className="h-2.5 w-2.5" />
          </Button>
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim()}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (input.trim()) handleSubmit(e);
              return false;
            }}
            className={`rounded-full h-5 w-5 ${
              input.trim() ? 'bg-gradient-to-r from-sireiq-cyan to-blue-500 text-sireiq-darker hover:opacity-90' : 'bg-gray-700 text-gray-400'
            }`}
          >
            <Send className="h-2.5 w-2.5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInputForm;
