
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuickSuggestionButtonProps {
  text: string;
  onClick: () => void;
}

const QuickSuggestionButton: React.FC<QuickSuggestionButtonProps> = ({ text, onClick }) => {
  return (
    <Button
      variant="outline"
      className="flex justify-start items-center py-1 px-2 rounded-xl border-gray-700 bg-gradient-to-br from-gray-800/70 to-gray-900/70 hover:bg-gray-700/80 hover:border-sireiq-accent/50 text-left h-auto group transition-all duration-300 text-xs w-full"
      onClick={onClick}
    >
      <span className="text-gray-300 group-hover:text-white transition-colors line-clamp-1">{text}</span>
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="h-3 w-3 bg-sireiq-cyan/20 rounded-full flex items-center justify-center">
          <span className="text-[8px] text-sireiq-cyan">→</span>
        </div>
      </div>
    </Button>
  );
};

export default QuickSuggestionButton;
