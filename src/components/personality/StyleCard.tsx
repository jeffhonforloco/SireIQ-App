
import React from 'react';
import { Check } from 'lucide-react';

interface StyleCardProps {
  id: string;
  name: string;
  isSelected: boolean;
  description?: string;
  onClick: () => void;
}

const StyleCard: React.FC<StyleCardProps> = ({
  id,
  name,
  isSelected,
  description,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg p-4 cursor-pointer transition-all duration-200 ${
        isSelected
          ? "bg-gradient-to-r from-sireiq-cyan/20 to-sireiq-cyan2/20 border border-sireiq-cyan/30"
          : "bg-sireiq-darker border border-sireiq-accent/20 hover:border-sireiq-accent/40"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className={`font-bold ${isSelected ? "text-sireiq-cyan" : "text-sireiq-light"}`}>
          {name}
        </h3>
        {isSelected && <Check className="h-5 w-5 text-sireiq-cyan" />}
      </div>
      <p className="text-sm text-sireiq-light/70">
        {isSelected ? "Currently selected" : description || "Available style"}
      </p>
    </div>
  );
};

export default StyleCard;
