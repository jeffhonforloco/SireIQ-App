
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-20 w-20'
  };

  return (
    <div className={`flex items-end ${className}`}>
      <img 
        src="/lovable-uploads/207b3383-58aa-491c-8000-d56fca868602.png" 
        alt="SireIQ Logo" 
        className={sizeClasses[size]} 
      />
    </div>
  );
};

export default Logo;
