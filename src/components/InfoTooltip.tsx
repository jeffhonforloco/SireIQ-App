
import React from 'react';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface InfoTooltipProps {
  content: string;
  className?: string;
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({ content, className = '' }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger className={`inline-flex items-center focus:outline-none focus:ring-2 focus:ring-sireiq-cyan focus:ring-offset-2 rounded-full ${className}`} asChild>
          <span className="inline-flex text-sireiq-light/70 hover:text-sireiq-cyan transition-colors">
            <Info className="h-4 w-4" />
            <span className="sr-only">More information</span>
          </span>
        </TooltipTrigger>
        <TooltipContent 
          className="bg-sireiq-accent text-sireiq-light border border-sireiq-cyan/20 p-2"
          sideOffset={5}
        >
          <p className="text-xs">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default InfoTooltip;
