
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useRole } from '@/contexts/RoleContext';

const MobileAuthButtons = () => {
  const { role } = useRole();
  
  if (role) {
    return (
      <Link to="/dashboard" className="w-full">
        <Button className="w-full">
          Dashboard
        </Button>
      </Link>
    );
  }

  return (
    <div className="flex flex-col space-y-2 w-full">
      <Link to="/signin" className="w-full">
        <Button 
          variant="ghost" 
          className="w-full text-gray-300 hover:text-gray-100 hover:bg-gray-800/50 transition-colors"
        >
          Sign In
        </Button>
      </Link>
      <Link to="/get-started" className="w-full">
        <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-full">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default MobileAuthButtons;
