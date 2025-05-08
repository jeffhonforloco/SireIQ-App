
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import NavLinks from './navbar/NavLinks';
import AuthButtons from './navbar/AuthButtons';
import MobileMenu from './navbar/MobileMenu';
import { ThemeToggle } from './ui/theme-toggle';
import BuildInfoSection from './navbar/BuildInfoSection';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
} from "@/components/ui/menubar";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [showBuildInfo, setShowBuildInfo] = useState(false);
  
  // Add scroll detection for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-3 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-black'}`}>
      <div className="w-full px-4 md:px-10 lg:px-16 mx-auto flex items-center justify-between">
        {/* Logo - Pushed all the way to the left edge */}
        <Link to="/" className="flex items-center pl-0">
          <Logo size="md" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center border-b-0">
          <NavLinks />
        </nav>
        
        {/* Auth Buttons and Build Info Toggle - Pushed all the way to the right edge */}
        <div className="hidden md:flex items-center space-x-4 pr-0">
          <ThemeToggle />
          
          {/* "Build it" menu item */}
          <Menubar className="bg-transparent border-0">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer px-4 py-2 text-sireiq-light hover:text-sireiq-cyan focus:text-sireiq-cyan data-[state=open]:text-sireiq-cyan">
                Build it
              </MenubarTrigger>
              <MenubarContent className="bg-black border-gray-800 w-[400px] p-0">
                <BuildInfoSection />
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          
          <AuthButtons />
        </div>
        
        {/* Mobile Navigation - No changes for mobile */}
        {isMobile && (
          <MobileMenu 
            isSheetOpen={isSheetOpen}
            setIsSheetOpen={setIsSheetOpen}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
