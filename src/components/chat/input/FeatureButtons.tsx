
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
    <div className="flex space-x-4">
      <button
        type="button"
        onClick={handleAttachClick}
        className="flex items-center text-gray-500 hover:text-gray-300 text-sm"
      >
        <Paperclip className="h-5 w-5 mr-2" />
        <span>Attach</span>
      </button>
      
      <button
        type="button"
        onClick={handleSearchClick}
        className="flex items-center text-gray-500 hover:text-gray-300 text-sm"
      >
        <Search className="h-5 w-5 mr-2" />
        <span>Search</span>
      </button>
      
      <button
        type="button"
        onClick={handleReasonClick}
        className="flex items-center text-gray-500 hover:text-gray-300 text-sm"
      >
        <BrainCircuit className="h-5 w-5 mr-2" />
        <span>Reason</span>
      </button>
    </div>
  );
};

export default FeatureButtons;
