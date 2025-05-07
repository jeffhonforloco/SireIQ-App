
import React from 'react';
import { Paperclip, Search, Lightbulb, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <div className="input-buttons-container">
      <div className="left-buttons">
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
      </div>
      
      <div className="right-buttons">
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
