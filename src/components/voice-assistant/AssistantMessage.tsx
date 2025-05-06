
import React from 'react';
import { Avatar } from '@/components/ui/avatar';

interface AssistantMessageProps {
  text: string;
}

const AssistantMessage: React.FC<AssistantMessageProps> = ({ text }) => {
  return (
    <div className="flex space-x-3">
      <Avatar className="h-8 w-8 bg-sireiq-cyan/20 border border-sireiq-cyan/30 flex items-center justify-center">
        <span className="text-sm">🤖</span>
      </Avatar>
      <div className="bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-lg p-3 max-w-[80%]">
        <p className="text-sireiq-light">{text}</p>
      </div>
    </div>
  );
};

export default AssistantMessage;
