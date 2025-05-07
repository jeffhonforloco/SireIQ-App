
import React from 'react';
import { Paperclip, Search, BrainCircuit, Mic, ChevronUp, ChevronDown } from 'lucide-react';

interface ButtonRowProps {
  handleAttachClick: () => void;
  handleSearchClick: () => void;
  handleReasonClick: () => void;
  handleVoiceInput: () => void;
  toggleFeatures: () => void;
  isExpanded: boolean;
  isListening: boolean;
}

const ButtonRow: React.FC<ButtonRowProps> = ({
  handleAttachClick,
  handleSearchClick,
  handleReasonClick,
  handleVoiceInput,
  toggleFeatures,
  isExpanded,
  isListening
}) => {
  return (
    <div className="flex items-center justify-between mt-2">
      <div className="flex space-x-2">
        <button
          type="button"
          onClick={handleAttachClick}
          className="flex items-center text-gray-400 hover:text-gray-300 text-xs"
        >
          <Paperclip className="h-4 w-4 mr-1" />
          <span className="hidden sm:inline">Attach</span>
        </button>
        
        <button
          type="button"
          onClick={handleSearchClick}
          className="flex items-center text-gray-400 hover:text-gray-300 text-xs"
        >
          <Search className="h-4 w-4 mr-1" />
          <span className="hidden sm:inline">Search</span>
        </button>
        
        <button
          type="button"
          onClick={handleReasonClick}
          className="flex items-center text-gray-400 hover:text-gray-300 text-xs"
        >
          <BrainCircuit className="h-4 w-4 mr-1" />
          <span className="hidden sm:inline">Reason</span>
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={handleVoiceInput}
          className={`voice-button rounded-full p-1.5 ${
            isListening
              ? 'bg-red-500 animate-pulse'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          <Mic className="h-4 w-4" />
        </button>
        
        <button
          type="button"
          onClick={toggleFeatures}
          className="rounded-full p-1.5 bg-blue-600 hover:bg-blue-500"
          aria-label={isExpanded ? "Close features" : "Show features"}
        >
          {isExpanded ? (
            <ChevronDown className="h-4 w-4 text-white" />
          ) : (
            <ChevronUp className="h-4 w-4 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ButtonRow;
