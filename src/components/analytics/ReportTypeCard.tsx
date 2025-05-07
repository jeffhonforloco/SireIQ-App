
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReportTypeCardProps {
  title: string;
  description: string;
}

const ReportTypeCard = ({ title, description }: ReportTypeCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
      className="glass-effect rounded-lg p-6 border border-sireiq-accent/20 transition-all hover:border-sireiq-cyan/30 hover:translate-y-[-5px]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sireiq-light/70 mb-4">{description}</p>
      <Button 
        variant="ghost" 
        size="sm" 
        className={`text-sireiq-cyan group p-0 ${isHovering ? 'translate-x-1' : ''} transition-transform`}
      >
        View Report
        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default ReportTypeCard;
