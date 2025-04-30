
import React from 'react';

export const AdobeIcon: React.FC<{ className?: string; size?: number }> = ({ className, size = 24 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M14.58 3H22v18h-7.42L14.58 3z" />
      <path d="M2 3h7.42L9.42 21H2V3z" />
      <path d="M9.42 11.5H14.58" />
    </svg>
  );
};

export const TeamsIcon: React.FC<{ className?: string; size?: number }> = ({ className, size = 24 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M18 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z" />
      <path d="M8 15v2" />
      <path d="M12 9v8" />
      <path d="M16 12v5" />
      <circle cx="7.5" cy="7.5" r="2.5" />
      <circle cx="16.5" cy="7.5" r="2.5" />
    </svg>
  );
};
