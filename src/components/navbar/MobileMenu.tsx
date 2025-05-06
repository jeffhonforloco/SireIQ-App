
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
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
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  
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
            
            {/* Features Section with Collapsible Menu */}
            <div className="rounded-md">
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className={`w-full flex justify-between items-center py-3 px-4 rounded-md ${location.pathname.startsWith('/features') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light'}`}
              >
                <span>Features</span>
                {featuresOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
              
              {featuresOpen && (
                <div className="mt-1 space-y-1">
                  <Link 
                    to="/features"
                    className={`py-2 px-4 rounded-md ml-4 block text-sm ${isActive('/features') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light/80'}`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    All Features
                  </Link>
                  <Link 
                    to="/features/idea-generation"
                    className={`py-2 px-4 rounded-md ml-4 block text-sm ${isActive('/features/idea-generation') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light/80'}`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Idea Generation
                  </Link>
                  <Link 
                    to="/features/personality-engine"
                    className={`py-2 px-4 rounded-md ml-4 block text-sm ${isActive('/features/personality-engine') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light/80'}`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Personality Engine
                  </Link>
                  <Link 
                    to="/features/voice-assistant"
                    className={`py-2 px-4 rounded-md ml-4 block text-sm ${isActive('/features/voice-assistant') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light/80'}`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Voice Assistant
                  </Link>
                  <Link 
                    to="/features/performance-analytics"
                    className={`py-2 px-4 rounded-md ml-4 block text-sm ${isActive('/features/performance-analytics') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light/80'}`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Performance Analytics
                  </Link>
                </div>
              )}
            </div>
            
            {/* Solutions Section with Collapsible Menu */}
            <div className="rounded-md">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`w-full flex justify-between items-center py-3 px-4 rounded-md ${location.pathname.startsWith('/solutions') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light'}`}
              >
                <span>Solutions</span>
                {solutionsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
              
              {solutionsOpen && (
                <div className="mt-1 space-y-1">
                  <Link 
                    to="/features/idea-generation"
                    className={`py-2 px-4 rounded-md ml-4 block text-sm ${isActive('/features/idea-generation') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light/80'}`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Idea Generation
                  </Link>
                  <Link 
                    to="/features/personality-engine"
                    className={`py-2 px-4 rounded-md ml-4 block text-sm ${isActive('/features/personality-engine') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light/80'}`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Personality Engine
                  </Link>
                  <Link 
                    to="/features/voice-assistant"
                    className={`py-2 px-4 rounded-md ml-4 block text-sm ${isActive('/features/voice-assistant') ? 'bg-sireiq-accent/20 text-sireiq-cyan' : 'text-sireiq-light/80'}`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Voice Assistant
                  </Link>
                </div>
              )}
            </div>
            
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
