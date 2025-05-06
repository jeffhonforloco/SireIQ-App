
import React from 'react';
import { Network } from 'lucide-react';

const IdeaVisualization = () => {
  return (
    <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Network className="h-5 w-5 mr-2 text-sireiq-cyan" />
        Idea Web Visualization
      </h3>
      <div className="aspect-square bg-sireiq-darker rounded-lg flex items-center justify-center p-6">
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-sireiq-cyan/20 rounded-full flex items-center justify-center">
            <span className="font-bold text-sireiq-cyan">Main Concept</span>
          </div>
          
          {[
            { top: '15%', left: '25%', label: 'Idea 1' },
            { top: '75%', left: '30%', label: 'Idea 2' },
            { top: '60%', left: '70%', label: 'Idea 3' },
            { top: '25%', left: '80%', label: 'Idea 4' },
            { top: '40%', left: '50%', label: 'Idea 5' },
          ].map((node, index) => (
            <React.Fragment key={index}>
              <div className="absolute w-16 h-16 bg-sireiq-accent/30 rounded-full flex items-center justify-center" style={{ top: node.top, left: node.left }}>
                <span className="text-sm">{node.label}</span>
              </div>
              <div className="absolute border-t border-sireiq-cyan/30 w-16" style={{ 
                top: `calc(${node.top} + 8px)`, 
                left: `calc(${node.left} + 8px)`, 
                width: '60px',
                transform: `rotate(${45 * index}deg)`,
                transformOrigin: '0 0'
              }}></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdeaVisualization;
