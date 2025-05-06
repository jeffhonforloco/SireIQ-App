
import React, { useState } from 'react';
import { useCollaboration } from '@/contexts/CollaborationContext';
import UserAvatar from './UserAvatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const UserList: React.FC = () => {
  const { activeUsers, users } = useCollaboration();
  const [isOpen, setIsOpen] = useState(false);
  
  // Limit visible avatars in main view
  const visibleUsers = activeUsers.slice(0, 4);
  const hiddenCount = Math.max(0, activeUsers.length - 4);

  const handleInvite = () => {
    toast({
      title: "Invitation sent",
      description: "Team members will receive an email invitation to collaborate."
    });
    setIsOpen(false);
  };
  
  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {visibleUsers.map((user) => (
          <UserAvatar
            key={user.id}
            name={user.name}
            initial={user.avatar}
            color={user.color}
            isActive={user.isActive}
          />
        ))}
        
        {hiddenCount > 0 && (
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <div className="cursor-pointer">
                <UserAvatar
                  name={`${hiddenCount} more`}
                  initial={`+${hiddenCount}`}
                  color="bg-sireiq-accent/50"
                  isActive={true}
                  showStatus={false}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-2 bg-sireiq-darker border-sireiq-accent/30">
              <h4 className="text-sm font-medium mb-2">All Team Members</h4>
              <div className="space-y-2">
                {users.map(user => (
                  <div key={user.id} className="flex items-center gap-2 p-1">
                    <UserAvatar
                      name={user.name}
                      initial={user.avatar}
                      color={user.color}
                      isActive={user.isActive}
                      size="sm"
                    />
                    <span className="text-sm">{user.name}</span>
                    <span className={`ml-auto text-xs ${user.isActive ? 'text-green-500' : 'text-gray-400'}`}>
                      {user.isActive ? 'Online' : 'Away'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-sireiq-accent/20">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs"
                  onClick={handleInvite}
                >
                  <Users className="h-3 w-3 mr-1" />
                  Invite Team Members
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
      <span className="ml-3 text-sm text-sireiq-light/70">
        {activeUsers.length} team {activeUsers.length === 1 ? 'member' : 'members'} online
      </span>
    </div>
  );
};

export default UserList;
