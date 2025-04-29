
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-md bg-sireiq-darker/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/c3e0c182-65f5-4612-a523-35da753a98a4.png" 
              alt="SireIQ Logo" 
              className="h-10 w-10 glow-image"
            />
            <span className="text-2xl font-display font-bold text-gradient">SireIQ</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sireiq-light/90 hover:text-sireiq-cyan transition-colors">Features</a>
            <a href="#how-it-works" className="text-sireiq-light/90 hover:text-sireiq-cyan transition-colors">How It Works</a>
            <a href="#enterprise" className="text-sireiq-light/90 hover:text-sireiq-cyan transition-colors">Enterprise</a>
            <a href="#pricing" className="text-sireiq-light/90 hover:text-sireiq-cyan transition-colors">Pricing</a>
            <a href="#about" className="text-sireiq-light/90 hover:text-sireiq-cyan transition-colors">About</a>
            <Button 
              variant="outline" 
              className="bg-transparent border border-sireiq-cyan hover:bg-sireiq-cyan/10 text-sireiq-cyan"
            >
              Sign In
            </Button>
            <Button 
              className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90 transition-opacity"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-sireiq-light" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-2 mt-2 glass-effect rounded-lg">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="px-3 py-2 rounded-md hover:bg-sireiq-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="px-3 py-2 rounded-md hover:bg-sireiq-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#enterprise" 
                className="px-3 py-2 rounded-md hover:bg-sireiq-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Enterprise
              </a>
              <a 
                href="#pricing" 
                className="px-3 py-2 rounded-md hover:bg-sireiq-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#about" 
                className="px-3 py-2 rounded-md hover:bg-sireiq-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Button 
                variant="outline" 
                className="bg-transparent border border-sireiq-cyan text-sireiq-cyan hover:bg-sireiq-cyan/10"
              >
                Sign In
              </Button>
              <Button 
                className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90 transition-opacity"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
