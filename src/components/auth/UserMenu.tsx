import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../common/Button';
import { UserCircle, LogOut } from 'lucide-react';

export function UserMenu() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="relative">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || 'User'}
              className="h-8 w-8 rounded-full"
            />
          ) : (
            <UserCircle className="h-8 w-8 text-gray-400" />
          )}
          <span className="text-sm font-medium text-gray-700">
            {user.displayName || user.email}
          </span>
        </div>
        <Button
          variant="outline"
          icon={LogOut}
          onClick={() => logout()}
          className="text-sm"
        >
          Sign out
        </Button>
      </div>
    </div>
  );
}