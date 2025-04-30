
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="text-sireiq-cyan"
      >
        <path d="M12 2L2 12l10 10 10-10-10-10z" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    </div>
  );
};

export default Logo;
