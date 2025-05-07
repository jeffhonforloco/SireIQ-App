
import React from 'react';
import { Paperclip, Search, Lightbulb } from 'lucide-react';

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
    <div className="input-buttons-container flex flex-wrap items-center gap-2">
      <button
        type="button"
        className="input-button"
        onClick={handleAttachClick}
      >
        <Paperclip className="h-4 w-4" />
        <span>Attach</span>
      </button>
      
      <button
        type="button"
        className="input-button"
        onClick={handleSearchClick}
      >
        <Search className="h-4 w-4" />
        <span>Search</span>
      </button>
      
      <button
        type="button"
        className="input-button"
        onClick={handleReasonClick}
      >
        <Lightbulb className="h-4 w-4" />
        <span>Reason</span>
      </button>
      
      <div className="flex-grow"></div>
      
      <button
        type="button"
        className="voice-button"
        onClick={handleVoiceInput}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" x2="12" y1="19" y2="22"></line>
        </svg>
        <span>Voice</span>
      </button>
      
      <button
        type="button"
        className="ml-2 px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors text-sm"
        onClick={toggleFeatures}
      >
        {isExpanded ? "Hide Features" : "Show Features"}
      </button>
    </div>
  );
};

export default ButtonRow;
