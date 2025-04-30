
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-10 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-sireiq-light flex items-center">
          <Logo className="mr-2" />
          SireIQ
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/features" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">Features</Link>
          <a href="#how-it-works" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">How it Works</a>
          <a href="#enterprise" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">Enterprise</a>
          <Link to="/ai-workflows" className="text-sireiq-light hover:text-sireiq-cyan transition-colors">AI Workflows</Link>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-sireiq-light hover:text-sireiq-cyan focus:outline-none">
            <Menu className="h-6 w-6" />
          </button>
          
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-sireiq-darker border border-sireiq-accent/30 rounded-md shadow-lg py-2 px-3">
              <Link to="/features" className="block py-2 text-sireiq-light hover:text-sireiq-cyan transition-colors">Features</Link>
              <a href="#how-it-works" className="block py-2 text-sireiq-light hover:text-sireiq-cyan transition-colors">How it Works</a>
              <a href="#enterprise" className="block py-2 text-sireiq-light hover:text-sireiq-cyan transition-colors">Enterprise</a>
              <Link to="/ai-workflows" className="block py-2 text-sireiq-light hover:text-sireiq-cyan transition-colors">AI Workflows</Link>
            </div>
          )}
        </div>
        
        {/* CTA Button */}
        <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 h-auto">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
