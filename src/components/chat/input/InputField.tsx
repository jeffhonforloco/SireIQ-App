
import React, { useRef, useEffect, KeyboardEvent } from 'react';
import { ArrowUp } from 'lucide-react';

interface InputFieldProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isTyping: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  input,
  setInput,
  handleSubmit,
  isTyping
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Focus input on component mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  
  return (
    <div className="chat-input-container mb-2">
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask anything"
        disabled={isTyping}
        className="chat-input w-full rounded-full bg-gray-900 border border-gray-700 py-3 px-4"
      />
      
      <button
        type="submit"
        disabled={!input.trim() || isTyping}
        aria-label="Send message"
        className={`chat-input-button absolute right-2 top-[45%] transform -translate-y-1/2 rounded-full p-2 ${
          input.trim() && !isTyping ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700'
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default InputField;
