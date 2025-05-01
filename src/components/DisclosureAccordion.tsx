
import React, { ReactNode } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

interface DisclosureAccordionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const DisclosureAccordion: React.FC<DisclosureAccordionProps> = ({ 
  title, 
  children, 
  className = '' 
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={`w-full border border-sireiq-accent/30 rounded-lg overflow-hidden ${className}`}
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left hover:bg-sireiq-accent/20 transition-colors">
        <span className="font-medium text-sireiq-light">{title}</span>
        <ChevronDown 
          className={`h-5 w-5 text-sireiq-light/70 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 border-t border-sireiq-accent/30 bg-sireiq-accent/10">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default DisclosureAccordion;
