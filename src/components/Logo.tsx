
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-20 w-20'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/207b3383-58aa-491c-8000-d56fca868602.png" 
        alt="SireIQ Logo" 
        className={sizeClasses[size]} 
      />
      {showText && (
        <span className={`ml-2 font-bold text-sireiq-cyan ${textSizeClasses[size]}`}>
          SireIQ
        </span>
      )}
    </div>
  );
};

export default Logo;
