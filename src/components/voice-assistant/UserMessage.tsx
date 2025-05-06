
import React from 'react';
import { Avatar } from '@/components/ui/avatar';

interface UserMessageProps {
  text: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ text }) => {
  return (
    <div className="flex flex-row-reverse space-x-reverse space-x-3">
      <Avatar className="h-8 w-8 bg-sireiq-cyan/40 border border-sireiq-cyan/50 flex items-center justify-center">
        <span className="text-sm">👤</span>
      </Avatar>
      <div className="bg-sireiq-cyan/20 border border-sireiq-cyan/30 rounded-lg p-3 max-w-[80%]">
        <p className="text-sireiq-light">{text}</p>
      </div>
    </div>
  );
};

export default UserMessage;
