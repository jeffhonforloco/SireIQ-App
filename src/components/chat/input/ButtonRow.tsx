
import React from 'react';
import { Paperclip, Search, Lightbulb, Mic, ArrowUp } from 'lucide-react';

interface ButtonRowProps {
  handleAttachClick: () => void;
  handleSearchClick: () => void;
  handleReasonClick: () => void;
  handleVoiceInput: () => void;
  toggleFeatures: () => void;
  isExpanded: boolean;
  input: string;
  handleSubmit: (e: React.FormEvent) => void;
  isTyping: boolean;
}

const ButtonRow: React.FC<ButtonRowProps> = ({
  handleAttachClick,
  handleSearchClick,
  handleReasonClick,
  handleVoiceInput,
  toggleFeatures,
  isExpanded,
  input,
  handleSubmit,
  isTyping
}) => {
  return (
    <div className="input-buttons-container">
      <button
        type="button"
        className="input-button"
        onClick={handleAttachClick}
      >
        <Paperclip className="h-5 w-5" />
        <span>Attach</span>
      </button>
      
      <button
        type="button"
        className="input-button"
        onClick={handleSearchClick}
      >
        <Search className="h-5 w-5" />
        <span>Search</span>
      </button>
      
      <button
        type="button"
        className="input-button"
        onClick={handleReasonClick}
      >
        <Lightbulb className="h-5 w-5" />
        <span>Reason</span>
      </button>
      
      <button
        type="button"
        className="voice-button"
        onClick={handleVoiceInput}
      >
        <Mic className="h-5 w-5" />
        <span>Voice</span>
      </button>
      
      <button
        type="button"
        className="chat-input-button"
        disabled={!input.trim() || isTyping}
        aria-label="Send message"
        onClick={(e) => handleSubmit(e)}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      
      <button
        type="button"
        className="features-button"
        onClick={toggleFeatures}
      >
        {isExpanded ? "Hide Features" : "Show Features"}
      </button>
    </div>
  );
};

export default ButtonRow;
