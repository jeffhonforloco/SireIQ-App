
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinksProps {
  orientation?: 'horizontal' | 'vertical';
}

const NavLinks: React.FC<NavLinksProps> = ({ orientation = 'horizontal' }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // Adjust classes based on orientation
  const containerClass = orientation === 'vertical' 
    ? "navbar-links flex flex-col space-y-2 border-0 border-none" 
    : "navbar-links flex space-x-1 md:space-x-2 lg:space-x-6 border-0 border-none";
  
  return (
    <div className={containerClass}>
      <Link 
        to="/" 
        className={`px-3 py-2 text-sm lg:text-base border-0 border-none ${isActive('/') ? 'text-sireiq-cyan' : 'text-sireiq-light hover:text-sireiq-cyan'}`}
      >
        Home
      </Link>
      <Link 
        to="/features" 
        className={`px-3 py-2 text-sm lg:text-base border-0 border-none ${isActive('/features') ? 'text-sireiq-cyan' : 'text-sireiq-light hover:text-sireiq-cyan'}`}
      >
        Features
      </Link>
      <Link 
        to="/pricing" 
        className={`px-3 py-2 text-sm lg:text-base border-0 border-none ${isActive('/pricing') ? 'text-sireiq-cyan' : 'text-sireiq-light hover:text-sireiq-cyan'}`}
      >
        Pricing
      </Link>
      <Link 
        to="/enterprise" 
        className={`px-3 py-2 text-sm lg:text-base border-0 border-none ${isActive('/enterprise') ? 'text-sireiq-cyan' : 'text-sireiq-light hover:text-sireiq-cyan'}`}
      >
        Enterprise
      </Link>
    </div>
  );
};

export default NavLinks;
