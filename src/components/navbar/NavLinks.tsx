
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const NavLinks: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center text-sireiq-light hover:text-sireiq-cyan transition-colors">
            Features <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-sireiq-darker border-sireiq-accent/30 w-48">
          <DropdownMenuItem asChild>
            <Link to="/features" className="cursor-pointer">All Features</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/features/idea-generation" className="cursor-pointer">Idea Generation</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/features/personality-engine" className="cursor-pointer">Personality Engine</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/features/voice-assistant" className="cursor-pointer">Voice Assistant</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/features/performance-analytics" className="cursor-pointer">Performance Analytics</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center text-sireiq-light hover:text-sireiq-cyan transition-colors">
            Solutions <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-sireiq-darker border-sireiq-accent/30 w-48">
          <DropdownMenuItem asChild>
            <Link to="/features/idea-generation" className="cursor-pointer">Idea Generation</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/features/personality-engine" className="cursor-pointer">Personality Engine</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/features/voice-assistant" className="cursor-pointer">Voice Assistant</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Link 
        to="/pricing" 
        className={`text-sireiq-light hover:text-sireiq-cyan transition-colors ${isActive('/pricing') ? 'text-sireiq-cyan' : ''}`}
      >
        Pricing
      </Link>
      
      <Link 
        to="/enterprise" 
        className={`text-sireiq-light hover:text-sireiq-cyan transition-colors ${isActive('/enterprise') ? 'text-sireiq-cyan' : ''}`}
      >
        Enterprise
      </Link>
    </>
  );
};

export default NavLinks;
