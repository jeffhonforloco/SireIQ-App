
import React from 'react';
import { Paperclip, Search, MessageSquare, Mic, MoreHorizontal } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
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
  const isMobile = useIsMobile();
  
  return (
    <div className="input-buttons-container">
      <div className="left-buttons">
        <button
          type="button"
          className="input-button"
          onClick={handleAttachClick}
        >
          <Paperclip className="h-4 w-4" />
        </button>
        
        <button
          type="button"
          className="input-button"
          onClick={handleSearchClick}
        >
          <Search className="h-4 w-4" />
        </button>
        
        <button
          type="button"
          className="input-button"
          onClick={handleReasonClick}
        >
          <MessageSquare className="h-4 w-4" />
        </button>
        
        <button
          type="button"
          className="input-button"
          onClick={() => console.log("More options clicked")}
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
      
      <div className="right-buttons">
        <button
          type="button"
          className="voice-button"
          onClick={handleVoiceInput}
        >
          <Mic className="h-4 w-4" />
        </button>
        
        <Button
          variant="secondary"
          size="sm"
          onClick={toggleFeatures}
          className="features-button"
        >
          {isExpanded ? "Hide Features" : "Show Features"}
        </Button>
      </div>
    </div>
  );
};

export default ButtonRow;
