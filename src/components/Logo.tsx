
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-24 w-24',
    xl: 'h-32 w-32'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-5xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/632c4f0b-ba29-449a-b90e-7f8516581db2.png" 
        alt="Logo" 
        className={`${sizeClasses[size]}`} 
      />
      {showText && (
        <span className={`ml-3 font-bold text-white ${textSizeClasses[size]}`}>
          SireIQ
        </span>
      )}
    </div>
  );
};

export default Logo;
