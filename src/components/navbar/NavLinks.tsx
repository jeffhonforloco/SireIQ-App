
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavLinksProps {
  orientation?: 'horizontal' | 'vertical';
}

const NavLinks: React.FC<NavLinksProps> = ({ orientation = 'horizontal' }) => {
  const location = useLocation();
  const isVertical = orientation === 'vertical';
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const containerClass = isVertical 
    ? "flex flex-col gap-4" 
    : "flex space-x-8 items-center";

  const linkClass = isVertical
    ? "text-sireiq-light hover:text-sireiq-cyan transition-colors py-2"
    : "text-sireiq-light hover:text-sireiq-cyan transition-colors";

  return (
    <div className={containerClass}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className={`flex items-center ${linkClass}`}>
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
            <Link to="/features/simple-voice" className="cursor-pointer">Simple Voice UI</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/features/performance-analytics" className="cursor-pointer">Performance Analytics</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/features/seo-analyzer" className="cursor-pointer">SEO Analyzer</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className={`flex items-center ${linkClass}`}>
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
        className={`${linkClass} ${isActive('/pricing') ? 'text-sireiq-cyan' : ''}`}
      >
        Pricing
      </Link>
      
      <Link 
        to="/enterprise" 
        className={`${linkClass} ${isActive('/enterprise') ? 'text-sireiq-cyan' : ''}`}
      >
        Enterprise
      </Link>
    </div>
  );
};

export default NavLinks;
