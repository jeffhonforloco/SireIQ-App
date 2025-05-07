
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
      className="flex justify-start items-center py-5 px-4 rounded-xl border-gray-700 bg-gray-800/70 hover:bg-gray-700/80 hover:border-sireiq-accent/50 text-left h-auto"
      onClick={onClick}
    >
      <span className="text-gray-300">{text}</span>
    </Button>
  );
};

export default QuickSuggestionButton;
