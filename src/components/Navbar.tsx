import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import NavLinks from './navbar/NavLinks';
import AuthButtons from './navbar/AuthButtons';
import MobileMenu from './navbar/MobileMenu';
import { ThemeToggle } from './ui/theme-toggle';
import BuildInfoSection from './navbar/BuildInfoSection';
import EdgeSyncIndicator from '@/plugins/edge/EdgeSyncIndicator';
import MemoryMenuItem from './navbar/MemoryMenuItem';
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
  
  // Add scroll detection for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 py-3 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-black'} border-0 border-none border-b-0 shadow-none`} 
      style={{
        borderBottom: "none", 
        boxShadow: "none",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none"
      }}
    >
      <div className="w-full px-2 md:px-3 lg:px-4 mx-auto flex items-center justify-between border-0 border-none">
        {/* Logo - Left side */}
        <div className="flex-none">
          <Link to="/" className="flex items-center pl-0 border-0 border-none">
            <Logo size="md" />
          </Link>
        </div>
        
        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex flex-1 justify-center items-center border-0 border-none">
          <NavLinks />
        </nav>
        
        {/* Auth Buttons and Build Info Toggle - Right side */}
        <div className="hidden md:flex items-center space-x-4 pr-0 border-0 border-none flex-none">
          <EdgeSyncIndicator />
          <ThemeToggle />
          
          {/* Memory menu item */}
          <MemoryMenuItem />
          
          {/* "Build it" menu item */}
          <Menubar className="bg-transparent border-0 border-none">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer px-4 py-2 text-sireiq-light hover:text-sireiq-cyan focus:text-sireiq-cyan data-[state=open]:text-sireiq-cyan border-0 border-none">
                Build it
              </MenubarTrigger>
              <MenubarContent className="bg-black border-gray-800 w-[400px] p-0">
                <BuildInfoSection />
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          
          <AuthButtons />
        </div>
        
        {/* Mobile Navigation */}
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
