
import React, { useRef, useEffect } from 'react';
import { Send, Paperclip, CornerUpRight } from 'lucide-react';

interface ChatInputFormProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleVoiceInput: () => void;
  isTyping: boolean;
}

const ChatInputForm: React.FC<ChatInputFormProps> = ({
  input,
  setInput,
  handleSubmit,
  handleVoiceInput,
  isTyping
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Auto adjust textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="px-3 pt-2 pb-4">
      <form 
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          return false;
        }} 
        className="relative max-w-3xl mx-auto w-full"
      >
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything"
          disabled={isTyping}
          className="chat-input-textarea"
          rows={1}
        />
        
        <div className="absolute right-2.5 bottom-1.5 flex items-center">
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className={`p-1 rounded-md ${
              input.trim() && !isTyping 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-500'
            }`}
          >
            <CornerUpRight className="h-4 w-4" />
          </button>
        </div>
      </form>
      
      <div className="disclaimer-text">
        By messaging SireIQ, you agree to our <a href="#" className="underline hover:text-gray-400">Terms</a> and have read our <a href="#" className="underline hover:text-gray-400">Privacy Policy</a>.
      </div>
    </div>
  );
};

export default ChatInputForm;
