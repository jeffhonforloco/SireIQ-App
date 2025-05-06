
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/Logo';
import AuthButtons from './MobileAuthButtons';
import { ThemeToggle } from '@/components/ui/theme-toggle';

interface MobileMenuProps {
  isSheetOpen: boolean;
  setIsSheetOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isSheetOpen, setIsSheetOpen }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden text-sireiq-light hover:text-sireiq-cyan focus:outline-none">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-sireiq-darker border-sireiq-accent/30 w-[280px] p-0">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-sireiq-accent/20">
            <Logo showText={true} className="scale-75 origin-left" />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button onClick={() => setIsSheetOpen(false)}>
                <X className="h-5 w-5 text-sireiq-light" />
              </button>
            </div>
          </div>
          
          <nav className="flex flex-col space-y-1 p-4">
            <Link 
              to="/"
              className={`py-3 px-4 rounded-md ${isActive('/') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light'}`}
              onClick={() => setIsSheetOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features"
              className={`py-3 px-4 rounded-md ${isActive('/features') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light'}`}
              onClick={() => setIsSheetOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/features/idea-generation"
              className={`py-3 px-4 rounded-md ml-4 text-sm ${isActive('/features/idea-generation') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light/80'}`}
              onClick={() => setIsSheetOpen(false)}
            >
              Idea Generation
            </Link>
            <Link 
              to="/features/personality-engine"
              className={`py-3 px-4 rounded-md ml-4 text-sm ${isActive('/features/personality-engine') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light/80'}`}
              onClick={() => setIsSheetOpen(false)}
            >
              Personality Engine
            </Link>
            <Link 
              to="/features/voice-assistant"
              className={`py-3 px-4 rounded-md ml-4 text-sm ${isActive('/features/voice-assistant') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light/80'}`}
              onClick={() => setIsSheetOpen(false)}
            >
              Voice Assistant
            </Link>
            <Link 
              to="/pricing"
              className={`py-3 px-4 rounded-md ${isActive('/pricing') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light'}`}
              onClick={() => setIsSheetOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/enterprise"
              className={`py-3 px-4 rounded-md ${isActive('/enterprise') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light'}`}
              onClick={() => setIsSheetOpen(false)}
            >
              Enterprise
            </Link>
          </nav>
          
          <div className="mt-auto p-4 border-t border-sireiq-accent/20">
            <AuthButtons />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
