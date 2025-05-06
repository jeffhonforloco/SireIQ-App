
import React from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
    sm: 'h-6 w-6 text-xs',
    md: 'h-8 w-8 text-sm',
    lg: 'h-10 w-10 text-base'
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative">
            <Avatar className={cn(
              `border-2 border-sireiq-darker`,
              sizeClasses[size]
            )}>
              <AvatarFallback className={cn(color, "font-medium")}>
                {initial}
              </AvatarFallback>
            </Avatar>
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
