
import React from 'react';
import { Paperclip, Search, Lightbulb, Mic } from 'lucide-react';

interface ButtonRowProps {
  handleAttachClick: () => void;
  handleSearchClick: () => void;
  handleReasonClick: () => void;
  handleVoiceInput: () => void;
  toggleFeatures: () => void;
  isExpanded: boolean;
}

const ButtonRow: React.FC<ButtonRowProps> = ({
  handleAttachClick,
  handleSearchClick,
  handleReasonClick,
  handleVoiceInput,
  toggleFeatures,
  isExpanded
}) => {
  return (
    <div className="input-buttons-row">
      <div className="left-buttons">
        <button
          type="button"
          className="circle-button"
          onClick={handleAttachClick}
          aria-label="Attach file"
        >
          <Paperclip className="h-5 w-5" />
        </button>
        
        <button
          type="button"
          className="circle-button"
          onClick={handleSearchClick}
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
        
        <button
          type="button"
          className="circle-button"
          onClick={handleReasonClick}
          aria-label="Reason"
        >
          <Lightbulb className="h-5 w-5" />
        </button>
      </div>
      
      <div className="right-buttons">
        <button
          type="button"
          className="voice-button"
          onClick={handleVoiceInput}
          aria-label="Voice input"
        >
          <Mic className="h-5 w-5" />
          <span>Voice</span>
        </button>
        
        <button
          type="button"
          className="features-button"
          onClick={toggleFeatures}
        >
          {isExpanded ? "Hide Features" : "Show Features"}
        </button>
      </div>
    </div>
  );
};

export default ButtonRow;
