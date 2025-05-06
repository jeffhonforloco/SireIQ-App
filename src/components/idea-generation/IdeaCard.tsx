
import React from 'react';

interface IdeaCardProps {
  title: string;
  description: string;
  index: number;
}

const IdeaCard = ({ title, description, index }: IdeaCardProps) => {
  return (
    <div 
      className="glass-effect rounded-lg p-4 border border-sireiq-accent/20 animate-fade-in" 
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <h4 className="font-bold text-sireiq-cyan mb-1">"{title}"</h4>
      <p className="text-sm text-sireiq-light/70">{description}</p>
    </div>
  );
};

export default IdeaCard;
