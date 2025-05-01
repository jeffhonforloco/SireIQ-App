
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/650ef573-eb4d-4913-8d70-592d1b24760a.png" 
        alt="SireIQ Logo" 
        className="h-8 w-8" 
      />
    </div>
  );
};

export default Logo;
