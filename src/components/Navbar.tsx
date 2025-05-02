
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';

const Navbar = () => {
  const isMobile = useIsMobile();
  
  const NavLinks = () => (
    <>
      <Link to="/features" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">Features</Link>
      <Link to="/how-it-works" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">How it Works</Link>
      <Link to="/enterprise" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">Enterprise</Link>
      <Link to="/integrations" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">Integrations</Link>
      <Link to="/ai-workflows" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">AI Workflows</Link>
      <Link to="/trust-and-compliance" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">Trust & Compliance</Link>
      <Link to="/try-advanced-ai" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">Try Advanced AI</Link>
    </>
  );

  return (
    <header className="absolute top-0 left-0 w-full z-10 py-4 bg-sireiq-darker">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLinks />
          
          {/* Auth Buttons */}
          <div className="flex items-center ml-6 space-x-4">
            <Link 
              to="/signin" 
              className="text-sireiq-cyan border border-sireiq-cyan hover:bg-sireiq-cyan/10 px-6 py-2 rounded-md transition-colors"
            >
              Sign In
            </Link>
            
            <Link to="/get-started">
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-2 h-auto">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden text-sireiq-light hover:text-sireiq-cyan focus:outline-none">
                <Menu className="h-8 w-8" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-sireiq-darker border-sireiq-accent/30 w-[250px] p-6">
              <nav className="flex flex-col space-y-4 mt-8">
                <NavLinks />
                
                {/* Mobile Auth Buttons */}
                <div className="flex flex-col space-y-4 pt-4 mt-4 border-t border-sireiq-accent/30">
                  <Link 
                    to="/signin" 
                    className="text-sireiq-cyan border border-sireiq-cyan hover:bg-sireiq-cyan/10 px-6 py-2 rounded-md transition-colors text-center"
                  >
                    Sign In
                  </Link>
                  
                  <Link to="/get-started" className="w-full">
                    <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-2 h-auto w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Navbar;
