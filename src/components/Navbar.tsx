
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="absolute top-0 left-0 w-full z-10 py-4 bg-sireiq-darker">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo className="mr-2" />
          <span className="text-3xl font-bold text-sireiq-cyan">SireIQ</span>
        </Link>
        
        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/features" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">Features</Link>
          <Link to="/how-it-works" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">How it Works</Link>
          <Link to="/enterprise" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">Enterprise</Link>
          <Link to="/ai-workflows" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">AI Workflows</Link>
          <Link to="/trust-and-compliance" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">Trust & Compliance</Link>
        </nav>
        
        {/* Mobile Navigation with Sheet */}
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-sireiq-cyan hover:bg-transparent hover:text-sireiq-cyan focus:outline-none">
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-sireiq-darker border-sireiq-accent/30 pt-16 px-4 h-[100vh]">
              <div className="absolute top-4 left-4 flex items-center">
                <Logo className="mr-2" />
                <span className="text-3xl font-bold text-sireiq-cyan">SireIQ</span>
              </div>
              
              <SheetClose className="absolute top-4 right-4 text-sireiq-cyan hover:text-sireiq-cyan/80">
                <X className="h-8 w-8" />
              </SheetClose>
              
              <div className="flex flex-col space-y-8 mt-12">
                <Link to="/features" className="text-xl text-sireiq-light hover:text-sireiq-cyan py-3">
                  Features
                </Link>
                <Link to="/how-it-works" className="text-xl text-sireiq-light hover:text-sireiq-cyan py-3">
                  How It Works
                </Link>
                <Link to="/enterprise" className="text-xl text-sireiq-light hover:text-sireiq-cyan py-3">
                  Pricing
                </Link>
                <Link to="/trust-and-compliance" className="text-xl text-sireiq-light hover:text-sireiq-cyan py-3">
                  About
                </Link>
                
                <div className="pt-6 flex flex-col space-y-4 w-full">
                  <Button variant="outline" className="w-full border-sireiq-cyan text-sireiq-cyan hover:bg-sireiq-cyan/10">
                    Sign In
                  </Button>
                  <Button className="w-full bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* CTA Button - hidden on mobile */}
        <Button className="hidden md:flex bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 h-auto">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
