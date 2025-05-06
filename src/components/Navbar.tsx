
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { useRole } from '@/contexts/RoleContext';
import { toast } from './ui/sonner';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Navbar = () => {
  const isMobile = useIsMobile();
  const { role, setRole } = useRole();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const isAuthenticated = !!role;
  
  // Add scroll detection for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = () => {
    setRole(null);
    toast.success("Signed out successfully!");
    navigate('/');
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const NavLinks = () => (
    <>
      <Link 
        to="/features" 
        className={`text-sireiq-light hover:text-sireiq-cyan transition-colors ${isActive('/features') ? 'text-sireiq-cyan' : ''}`}
      >
        Features
      </Link>
      
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

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${isScrolled ? 'bg-sireiq-darker/90 backdrop-blur-md shadow-md' : 'bg-sireiq-darker'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo className="mr-0" showText={true} />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8 items-center">
          <NavLinks />
        </nav>
        
        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
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
          ) : (
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
          )}
        </div>
        
        {/* Mobile Navigation */}
        {isMobile && (
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
                  <button onClick={() => setIsSheetOpen(false)}>
                    <X className="h-5 w-5 text-sireiq-light" />
                  </button>
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
                  {isAuthenticated ? (
                    <>
                      <Link 
                        to="/dashboard"
                        className="block w-full py-3 px-4 mb-3 bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-md text-center text-sireiq-cyan"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Button 
                        onClick={() => {
                          handleSignOut();
                          setIsSheetOpen(false);
                        }}
                        className="w-full bg-transparent border border-red-500/50 hover:bg-red-500/10 text-red-400"
                        variant="outline"
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link 
                        to="/signin"
                        className="block w-full py-3 px-4 mb-3 bg-transparent border border-sireiq-cyan text-center text-sireiq-cyan rounded-md"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link 
                        to="/get-started"
                        className="block w-full py-3 px-4 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker text-center rounded-md font-medium"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        Get Started
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Navbar;
