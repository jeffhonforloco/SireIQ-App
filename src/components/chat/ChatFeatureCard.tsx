
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ChatFeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

const ChatFeatureCard: React.FC<ChatFeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  path
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(path);
  };
  
  return (
    <div 
      className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 cursor-pointer hover:bg-gray-700/50 transition-colors"
      onClick={handleClick}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-4 w-4 text-blue-400" />
        <span className="font-medium text-gray-200">{title}</span>
      </div>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  );
};

export default ChatFeatureCard;
