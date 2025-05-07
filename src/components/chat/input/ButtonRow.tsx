
import React from 'react';
import { Paperclip, Search, Lightbulb, Mic, MicOff } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  return (
    <div className="input-buttons-container">
      <div className="flex gap-2">
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
      </div>
      
      <div className="flex-grow"></div>
      
      <div className="flex gap-2 items-center">
        <button
          type="button"
          className={`voice-button rounded-full ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-white text-black'} py-2 px-4 flex items-center gap-2 transition-colors`}
          onClick={handleVoiceInput}
        >
          {isListening ? (
            <>
              <MicOff className="h-4 w-4" />
              <span>Stop</span>
            </>
          ) : (
            <>
              <Mic className="h-4 w-4" />
              <span>Voice</span>
            </>
          )}
        </button>
        
        <button
          type="button"
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors text-sm whitespace-nowrap"
          onClick={toggleFeatures}
        >
          {isExpanded ? "Hide Features" : "Show Features"}
        </button>
      </div>
    </div>
  );
};

export default ButtonRow;
