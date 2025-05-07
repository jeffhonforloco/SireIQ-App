
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { User } from 'lucide-react';

interface UserMessageProps {
  text: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ text }) => {
  return (
    <div className="flex flex-row-reverse space-x-reverse space-x-3 mb-4">
      <Avatar className="h-8 w-8 bg-gray-700 border border-gray-600 flex items-center justify-center shadow-md">
        <User className="h-4 w-4 text-gray-300" />
      </Avatar>
      <div className="bg-gray-700 rounded-2xl rounded-tr-sm p-4 max-w-[80%] shadow-sm">
        <p className="text-gray-100">{text}</p>
      </div>
    </div>
  );
};

export default UserMessage;
