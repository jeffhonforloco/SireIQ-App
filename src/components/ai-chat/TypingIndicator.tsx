
import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] p-3 rounded-lg bg-sireiq-accent/10 border border-sireiq-accent/30">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-sireiq-light/50 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-sireiq-light/50 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-sireiq-light/50 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
