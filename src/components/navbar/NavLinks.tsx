
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
    : "navbar-links flex justify-center space-x-4 md:space-x-6 lg:space-x-8 border-0 border-none";
  
  // All menu links have been removed as requested
  return (
    <div className={containerClass}>
      {/* Links removed as requested by user */}
    </div>
  );
};

export default NavLinks;
