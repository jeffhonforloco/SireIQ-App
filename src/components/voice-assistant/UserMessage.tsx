
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { User } from 'lucide-react';

interface UserMessageProps {
  text: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ text }) => {
  return (
    <div className="flex flex-row-reverse space-x-reverse space-x-3">
      <Avatar className="h-8 w-8 bg-sireiq-accent border border-sireiq-accent/70 flex items-center justify-center shadow-md">
        <User className="h-4 w-4 text-sireiq-light" />
      </Avatar>
      <div className="bg-sireiq-accent/30 border border-sireiq-accent/50 rounded-lg p-3 max-w-[80%] shadow-sm">
        <p className="text-sireiq-light">{text}</p>
      </div>
    </div>
  );
};

export default UserMessage;
