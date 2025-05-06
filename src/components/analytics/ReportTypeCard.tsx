
import React from 'react';

interface ReportTypeCardProps {
  title: string;
  description: string;
}

const ReportTypeCard = ({ title, description }: ReportTypeCardProps) => {
  return (
    <div className="glass-effect rounded-lg p-6 border border-sireiq-accent/20 transition-all hover:border-sireiq-cyan/30 hover:translate-y-[-5px]">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sireiq-light/70">{description}</p>
    </div>
  );
};

export default ReportTypeCard;
