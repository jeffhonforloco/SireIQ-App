
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/8e6b4446-3486-45e0-b6f6-b46acd418ac4.png" 
          alt="SireIQ Logo" 
          className="h-14 w-14" 
        />
        <span className="text-4xl font-bold text-sireiq-cyan ml-2">SireIQ</span>
      </div>
    </div>
  );
};

export default Logo;
