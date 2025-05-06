
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import NavLinks from './navbar/NavLinks';
import AuthButtons from './navbar/AuthButtons';
import MobileMenu from './navbar/MobileMenu';
import { ThemeToggle } from './ui/theme-toggle';

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
        
        {/* Auth Buttons and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
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
