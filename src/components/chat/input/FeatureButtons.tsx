
import React from 'react';

interface FeatureButtonsProps {
  isExpanded: boolean;
  handleFeatureClick: (featurePrompt: string) => void;
}

const FeatureButtons: React.FC<FeatureButtonsProps> = ({
  isExpanded,
  handleFeatureClick
}) => {
  if (!isExpanded) return null;
  
  return (
    <div className="feature-buttons-container">
      <button 
        className="feature-button"
        onClick={() => handleFeatureClick("Create a strategic roadmap for ")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" x2="12" y1="8" y2="12"></line>
          <line x1="12" x2="12.01" y1="16" y2="16"></line>
        </svg>
        Strategic Roadmap
      </button>
      
      <button 
        className="feature-button"
        onClick={() => handleFeatureClick("Distill this content: ")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
        </svg>
        Content Distiller
      </button>
      
      <button 
        className="feature-button"
        onClick={() => handleFeatureClick("Write creative content about ")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 8v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8"></path>
          <path d="M11 2H9a2 2 0 0 0-2 2v4h10V4a2 2 0 0 0-2-2h-2"></path>
          <path d="M14 14a2 2 0 0 1-4 0"></path>
        </svg>
        Neural Composer
      </button>
      
      <button 
        className="feature-button"
        onClick={() => handleFeatureClick("Generate innovative ideas for ")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <path d="M12 17h.01"></path>
        </svg>
        Idea Accelerator
      </button>
      
      <button 
        className="feature-button"
        onClick={() => handleFeatureClick("Analyze this dataset: ")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="2" y2="22"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
        Data Architect
      </button>
      
      <button 
        className="feature-button"
        onClick={() => handleFeatureClick("Generate code for ")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        CodeCraft Pro
      </button>
      
      <button 
        className="feature-button"
        onClick={() => handleFeatureClick("Analyze this image: ")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v.01"></path>
          <path d="M12 13a2 2 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483 1.988 1.988 0 0 0-.371 1.313"></path>
        </svg>
        Vision Insights
      </button>
      
      <button 
        className="feature-button"
        onClick={() => handleFeatureClick("Surprise me with creative insights about ")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c-.1 0-.2-.1-.3-.1-.8-.5-1.7-1-2.5-1.5-1.1-.7-2.3-1.3-3.3-2.2-1.8-1.5-2.9-3.3-2.9-5.6.1-2.3 1.3-4.1 3.4-5.2 2.1-1.2 4.3-.9 6.2.5 1.1-.8 2.3-1.4 3.7-1.5 1.3-.1 2.6.2 3.8.9 1.1.7 1.9 1.6 2.3 2.9.4 1.4.4 2.8.1 4.1-.4 1.8-1.2 3.3-2.4 4.6-.9 1-2 1.8-3.1 2.5-.8.5-1.7 1-2.5 1.5-.2.1-.3.1-.5.1zm-7.3-9.6c.1.8.3 1.5.8 2.1.7.9 1.6 1.6 2.5 2.3.5.3 1 .7 1.5 1 .7.4 1.1.4 1.8 0l1.5-1c.8-.5 1.5-1.1 2.2-1.7 1-.9 1.8-2 2.1-3.4.3-1.2.3-2.4 0-3.5-.8-2.9-3.8-4-6.4-2.6-.4.2-.4.2-.8-.1-1.3-.8-2.6-1-4.1-.5-1.3.5-2.1 1.4-2.5 2.8-.4 1.1-.3 2.3.1 3.4.2.4.2.8.3 1.2z"></path>
        </svg>
        Neural Spark
      </button>
    </div>
  );
};

export default FeatureButtons;
