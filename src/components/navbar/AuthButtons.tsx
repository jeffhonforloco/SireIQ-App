
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRole } from '@/contexts/RoleContext';
import { toast } from '@/components/ui/sonner';

const AuthButtons: React.FC = () => {
  const { role, setRole } = useRole();
  const navigate = useNavigate();
  const isAuthenticated = !!role;
  
  const handleSignOut = () => {
    setRole(null);
    toast.success("Signed out successfully!");
    navigate('/');
  };

  if (isAuthenticated) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-sireiq-cyan text-sireiq-cyan bg-transparent hover:bg-sireiq-cyan/10">
            Dashboard <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-sireiq-darker border-sireiq-accent/30">
          <DropdownMenuItem asChild>
            <Link to="/dashboard" className="cursor-pointer">My Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/dashboard')}>
            Account Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  
  return (
    <>
      <Link to="/signin">
        <Button 
          variant="outline"
          className="border-sireiq-cyan text-sireiq-cyan bg-transparent hover:bg-sireiq-cyan/10 px-6 py-2 rounded-md transition-colors"
        >
          Sign In
        </Button>
      </Link>
      
      <Link to="/get-started">
        <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90 px-6 py-2 h-auto">
          Get Started
        </Button>
      </Link>
    </>
  );
};

export default AuthButtons;
