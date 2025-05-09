
import React from 'react';
import { Paperclip, Search, BrainCircuit } from 'lucide-react';

interface FeatureButtonsProps {
  handleAttachClick: () => void;
  handleSearchClick: () => void;
  handleReasonClick: () => void;
}

const FeatureButtons: React.FC<FeatureButtonsProps> = ({
  handleAttachClick,
  handleSearchClick,
  handleReasonClick
}) => {
  return (
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
  );
};

export default FeatureButtons;
