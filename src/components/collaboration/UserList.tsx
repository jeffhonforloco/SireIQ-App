
import React from 'react';
import { useCollaboration } from '@/contexts/CollaborationContext';
import UserAvatar from './UserAvatar';

const UserList: React.FC = () => {
  const { activeUsers } = useCollaboration();
  
  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {activeUsers.map((user) => (
          <UserAvatar
            key={user.id}
            name={user.name}
            initial={user.avatar}
            color={user.color}
            isActive={user.isActive}
          />
        ))}
      </div>
      <span className="ml-3 text-sm text-sireiq-light/70">
        {activeUsers.length} team members online
      </span>
    </div>
  );
};

export default UserList;
