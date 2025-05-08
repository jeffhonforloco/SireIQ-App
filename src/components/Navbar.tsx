
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
    <header className={`fixed top-0 left-0 w-full z-50 py-3 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-md' : 'bg-black'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Mobile Menu (Left) */}
        {isMobile && (
          <MobileMenu 
            isSheetOpen={isSheetOpen}
            setIsSheetOpen={setIsSheetOpen}
          />
        )}

        {/* Logo - centered on desktop */}
        <div className={`${isMobile ? '' : 'absolute left-1/2 transform -translate-x-1/2'}`}>
          <Link to="/" className="flex items-center">
            <Logo size="md" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center ml-auto">
          <NavLinks />
        </nav>
        
        {/* Auth Buttons and Build Info Toggle */}
        <div className="hidden md:flex items-center space-x-4">
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
      </div>
    </header>
  );
};

export default Navbar;
