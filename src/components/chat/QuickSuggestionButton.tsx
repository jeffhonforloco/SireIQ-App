
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
      className="flex justify-start items-center py-3 md:py-5 px-3 md:px-4 rounded-xl border-gray-700 bg-gradient-to-br from-gray-800/70 to-gray-900/70 hover:bg-gray-700/80 hover:border-sireiq-accent/50 text-left h-auto group transition-all duration-300 text-sm md:text-base w-full"
      onClick={onClick}
    >
      <span className="text-gray-300 group-hover:text-white transition-colors line-clamp-2">{text}</span>
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="h-4 w-4 md:h-5 md:w-5 bg-sireiq-cyan/20 rounded-full flex items-center justify-center">
          <span className="text-xs text-sireiq-cyan">→</span>
        </div>
      </div>
    </Button>
  );
};

export default QuickSuggestionButton;
