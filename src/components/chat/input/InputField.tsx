
import React, { useRef, useEffect, KeyboardEvent } from 'react';

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
    <div className="chat-input-container">
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask anything..."
        disabled={isTyping}
        className="chat-input"
      />
    </div>
  );
};

export default InputField;
