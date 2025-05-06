
import React from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface UserAvatarProps {
  name: string;
  initial: string;
  color: string;
  isActive?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showStatus?: boolean;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ 
  name, 
  initial, 
  color, 
  isActive = true,
  size = 'md',
  showStatus = true
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base'
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative">
            <div className={cn(
              `rounded-full ${color} flex items-center justify-center font-medium border-2 border-sireiq-darker`,
              sizeClasses[size]
            )}>
              {initial}
            </div>
            {showStatus && (
              <div className={cn(
                "absolute bottom-0 right-0 w-2 h-2 rounded-full border border-sireiq-darker",
                isActive ? "bg-green-500" : "bg-gray-400"
              )}></div>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name} {isActive ? '(online)' : '(away)'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default UserAvatar;
