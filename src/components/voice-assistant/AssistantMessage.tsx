
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { MessageCircle } from 'lucide-react';

interface AssistantMessageProps {
  text: string;
}

const AssistantMessage: React.FC<AssistantMessageProps> = ({ text }) => {
  return (
    <div className="flex space-x-3 mb-4">
      <Avatar className="h-8 w-8 bg-blue-600 border border-blue-500 flex items-center justify-center shadow-md">
        <MessageCircle className="h-4 w-4 text-white" />
      </Avatar>
      <div className="bg-gray-800 rounded-2xl rounded-tl-sm p-4 max-w-[80%] shadow-sm">
        <p className="text-gray-100">{text}</p>
      </div>
    </div>
  );
};

export default AssistantMessage;
