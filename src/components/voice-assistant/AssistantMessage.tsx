
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { MessageCircle } from 'lucide-react';

interface AssistantMessageProps {
  text: string;
}

const AssistantMessage: React.FC<AssistantMessageProps> = ({ text }) => {
  return (
    <div className="flex space-x-3">
      <Avatar className="h-8 w-8 bg-sireiq-cyan border border-sireiq-cyan/70 flex items-center justify-center shadow-md">
        <MessageCircle className="h-4 w-4 text-sireiq-darker" />
      </Avatar>
      <div className="bg-gradient-to-r from-sireiq-cyan/30 to-sireiq-cyan/10 border border-sireiq-cyan/50 rounded-lg p-3 max-w-[80%] shadow-sm">
        <p className="text-sireiq-light">{text}</p>
      </div>
    </div>
  );
};

export default AssistantMessage;
