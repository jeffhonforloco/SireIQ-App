
import React, { useRef, useEffect } from 'react';
import { ArrowUp, Paperclip, Globe, Lightbulb } from 'lucide-react';

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
    <div className="px-4 pt-2 pb-4 sticky bottom-0 bg-black">
      <form 
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          return false;
        }} 
        className="relative max-w-3xl mx-auto w-full"
      >
        <div className="chat-input-container">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message SireIQ..."
            disabled={isTyping}
            className="chat-input-textarea"
            rows={1}
          />
          
          <div className="input-buttons-container">
            <button
              type="button"
              className="input-icon-button"
              onClick={() => console.log("Paperclip clicked")}
              aria-label="Attach file"
              title="Attach file"
            >
              <Paperclip className="h-5 w-5 text-gray-400" />
            </button>
            
            <button
              type="button"
              className="input-icon-button"
              onClick={() => console.log("Globe clicked")}
              aria-label="Language settings"
              title="Language settings"
            >
              <Globe className="h-5 w-5 text-gray-400" />
            </button>
            
            <button
              type="button"
              className="input-icon-button"
              onClick={() => console.log("Lightbulb clicked")}
              aria-label="Get suggestions"
              title="Get suggestions"
            >
              <Lightbulb className="h-5 w-5 text-gray-400" />
            </button>
          </div>
          
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            aria-label="Send message"
            className={`submit-button ${
              input.trim() && !isTyping ? 'active' : 'inactive'
            }`}
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </form>
      
      <div className="disclaimer-text">
        SireIQ may display inaccurate info, including about people, places, or facts. By messaging SireIQ, you agree to our <a href="#" className="underline hover:text-gray-400">Terms</a> and <a href="#" className="underline hover:text-gray-400">Privacy Policy</a>.
      </div>
    </div>
  );
};

export default ChatInputForm;
