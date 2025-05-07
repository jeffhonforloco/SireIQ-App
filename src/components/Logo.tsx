
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'h-7 w-7',
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
        src="/lovable-uploads/632c4f0b-ba29-449a-b90e-7f8516581db2.png" 
        alt="Logo" 
        className={sizeClasses[size]} 
      />
      {showText && (
        <span className={`ml-2 font-bold text-white ${textSizeClasses[size]}`}>
          SireIQ
        </span>
      )}
    </div>
  );
};

export default Logo;
