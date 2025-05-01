
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/2ffbab81-0de1-410b-9a14-c7c0446680d9.png" 
        alt="SireIQ Logo" 
        className="h-12 w-12" 
      />
    </div>
  );
};

export default Logo;
