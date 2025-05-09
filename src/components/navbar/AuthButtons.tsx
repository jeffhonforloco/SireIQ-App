
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useRole } from '@/contexts/RoleContext';

const AuthButtons = () => {
  const { role } = useRole();
  
  if (role) {
    return (
      <Link to="/dashboard">
        <Button className="rounded-full px-6">
          Dashboard
        </Button>
      </Link>
    );
  }

  return (
    <div className="flex items-center space-x-3">
      <Link to="/signin">
        <Button 
          variant="ghost" 
          className="text-gray-300 hover:text-gray-100 hover:bg-gray-800/50 transition-colors"
        >
          Sign In
        </Button>
      </Link>
      <Link to="/get-started">
        <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default AuthButtons;
