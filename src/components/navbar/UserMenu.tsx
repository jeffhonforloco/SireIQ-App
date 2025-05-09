
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRole } from '@/contexts/RoleContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Share, Settings, Keyboard, HelpCircle, LogOut, Code, BarChart2, Users, Shield } from 'lucide-react';

const UserMenu = () => {
  const { role, setRole } = useRole();
  const navigate = useNavigate();

  const handleLogout = () => {
    setRole(null);
    navigate('/');
  };
  
  // Get user initials for avatar fallback
  const getUserInitials = () => {
    return role?.substring(0, 2).toUpperCase() || 'U';
  };
  
  // Get role-specific features
  const getRoleFeatures = () => {
    switch(role) {
      case 'developer':
        return (
          <>
            <DropdownMenuItem 
              className="text-sm cursor-pointer hover:bg-sireiq-accent/10"
              onClick={() => navigate('/features/code-assistance')}
            >
              <Code className="mr-2 h-4 w-4 text-blue-400" />
              <span>Code Assistant</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="text-sm cursor-pointer hover:bg-sireiq-accent/10"
              onClick={() => navigate('/features/api-reference')}
            >
              <Code className="mr-2 h-4 w-4 text-blue-400" />
              <span>API Access</span>
            </DropdownMenuItem>
          </>
        );
      case 'enterprise':
        return (
          <>
            <DropdownMenuItem 
              className="text-sm cursor-pointer hover:bg-sireiq-accent/10"
              onClick={() => navigate('/enterprise/team-management')}
            >
              <Users className="mr-2 h-4 w-4 text-blue-400" />
              <span>Team Management</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="text-sm cursor-pointer hover:bg-sireiq-accent/10"
              onClick={() => navigate('/enterprise/advanced-analytics')}
            >
              <BarChart2 className="mr-2 h-4 w-4 text-blue-400" />
              <span>Advanced Analytics</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="text-sm cursor-pointer hover:bg-sireiq-accent/10"
              onClick={() => navigate('/enterprise/security')}
            >
              <Shield className="mr-2 h-4 w-4 text-blue-400" />
              <span>Security Controls</span>
            </DropdownMenuItem>
          </>
        );
      default:
        return null;
    }
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 border border-sireiq-accent/30">
            <AvatarImage src="/lovable-uploads/8e6b4446-3486-45e0-b6f6-b46acd418ac4.png" />
            <AvatarFallback className="bg-sireiq-accent/20 text-sireiq-cyan">
              {getUserInitials()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-black/90 backdrop-blur-md border border-sireiq-accent/30 text-sireiq-light" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none text-gradient glow">
              {role?.charAt(0).toUpperCase() + role?.slice(1) || 'User'} Account
            </p>
            <p className="text-xs leading-none text-sireiq-light/70">
              {role === 'developer' ? 'Access to developer tools & APIs' : 
              role === 'enterprise' ? 'Complete enterprise suite' : 
              'Personal AI assistant access'}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-sireiq-accent/20" />
        
        {/* Role-specific features */}
        {role && role !== 'user' && (
          <DropdownMenuGroup>
            {getRoleFeatures()}
            <DropdownMenuSeparator className="bg-sireiq-accent/20" />
          </DropdownMenuGroup>
        )}
        
        {/* Common settings */}
        <DropdownMenuGroup>
          <DropdownMenuItem 
            className="text-sm cursor-pointer hover:bg-sireiq-accent/10"
            onClick={() => navigate('/get-started')}
          >
            <Share className="mr-2 h-4 w-4" />
            <span>{role ? 'Upgrade Plan' : 'Get Started'}</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="text-sm cursor-pointer hover:bg-sireiq-accent/10"
            onClick={() => navigate('/features/personality-engine')}
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Customize SireIQ</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="text-sm cursor-pointer hover:bg-sireiq-accent/10"
            onClick={() => navigate('/account/settings')}
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Account Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="text-sm cursor-pointer hover:bg-sireiq-accent/10"
            onClick={() => console.log('Keyboard shortcuts clicked')}
          >
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard Shortcuts</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-sireiq-accent/20" />
        <DropdownMenuGroup>
          <DropdownMenuItem 
            className="text-sm cursor-pointer hover:bg-sireiq-accent/10"
            onClick={() => navigate('/help')}
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Help Center</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="text-sm cursor-pointer hover:bg-sireiq-accent/10"
            onClick={() => navigate('/chat/ai-assistant')}
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>AI Support Assistant</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="text-sm cursor-pointer hover:bg-sireiq-accent/10"
            onClick={() => navigate('/docs/release-notes')}
          >
            <Share className="mr-2 h-4 w-4" />
            <span>SireIQ Release Notes</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-sireiq-accent/20" />
        <DropdownMenuItem 
          className="text-sm cursor-pointer text-red-500 hover:bg-red-900/20 hover:text-red-400"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
