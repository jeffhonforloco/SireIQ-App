
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/5a32017e-bddc-4e56-b9a8-8f233099e02a.png" 
        alt="SireIQ Logo" 
        className="h-20 w-20" 
      />
      <span className="text-sireiq-cyan text-3xl font-display font-bold self-center">SireIQ</span>
    </div>
  );
};

export default Logo;
