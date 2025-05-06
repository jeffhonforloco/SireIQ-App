
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useRole } from '@/contexts/RoleContext';
import { toast } from '@/components/ui/sonner';
import { useNavigate } from 'react-router-dom';

interface MobileAuthButtonsProps {
  onClose?: () => void;
}

const MobileAuthButtons: React.FC<MobileAuthButtonsProps> = ({ onClose }) => {
  const { role, setRole } = useRole();
  const navigate = useNavigate();
  const isAuthenticated = !!role;
  
  const handleSignOut = () => {
    setRole(null);
    toast.success("Signed out successfully!");
    navigate('/');
    if (onClose) onClose();
  };

  if (isAuthenticated) {
    return (
      <>
        <Link 
          to="/dashboard"
          className="block w-full py-3 px-4 mb-3 bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-md text-center text-sireiq-cyan"
          onClick={onClose}
        >
          Dashboard
        </Link>
        <Button 
          onClick={handleSignOut}
          className="w-full bg-transparent border border-red-500/50 hover:bg-red-500/10 text-red-400"
          variant="outline"
        >
          Sign Out
        </Button>
      </>
    );
  }
  
  return (
    <>
      <Link 
        to="/signin"
        className="block w-full py-3 px-4 mb-3 bg-transparent border border-sireiq-cyan text-center text-sireiq-cyan rounded-md"
        onClick={onClose}
      >
        Sign In
      </Link>
      <Link 
        to="/get-started"
        className="block w-full py-3 px-4 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker text-center rounded-md font-medium"
        onClick={onClose}
      >
        Get Started
      </Link>
    </>
  );
};

export default MobileAuthButtons;
