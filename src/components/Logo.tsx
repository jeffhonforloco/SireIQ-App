
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-end ${className}`}>
      <img 
        src="/lovable-uploads/207b3383-58aa-491c-8000-d56fca868602.png" 
        alt="SireIQ Logo" 
        className="h-20 w-20" 
      />
    </div>
  );
};

export default Logo;
