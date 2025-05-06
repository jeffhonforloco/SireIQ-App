
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

  const statusSizeClasses = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5'
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <div className="relative">
            <Avatar className={cn(
              `border-2 border-sireiq-darker`,
              sizeClasses[size]
            )}>
              <AvatarFallback className={cn(color, "font-medium text-sireiq-darker")}>
                {initial}
              </AvatarFallback>
            </Avatar>
            {showStatus && (
              <div className={cn(
                "absolute bottom-0 right-0 rounded-full border border-sireiq-darker",
                statusSizeClasses[size],
                isActive ? "bg-green-500" : "bg-gray-400"
              )}></div>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="bg-sireiq-darker border-sireiq-accent/30 text-sireiq-light">
          <p>{name} {isActive ? '(online)' : '(away)'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default UserAvatar;
