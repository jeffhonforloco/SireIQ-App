
import React from 'react';
import { Network } from 'lucide-react';

interface IdeaVisualizationProps {
  ideas: Array<{ title: string; description: string }>;
}

const IdeaVisualization = ({ ideas = [] }: IdeaVisualizationProps) => {
  // Use provided ideas or fallback to empty array
  const displayIdeas = ideas.length > 0 ? ideas : [];
  
  return (
    <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Network className="h-5 w-5 mr-2 text-sireiq-cyan" />
        Idea Web Visualization
      </h3>
      <div className="aspect-square bg-sireiq-darker rounded-lg flex items-center justify-center p-6">
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-sireiq-cyan/20 rounded-full flex items-center justify-center">
            <span className="font-bold text-sireiq-cyan text-center">Main Concept</span>
          </div>
          
          {displayIdeas.slice(0, 5).map((idea, index) => {
            // Calculate positions in a circle around the main concept
            const angle = (index / 5) * Math.PI * 2;
            const top = 50 + 35 * Math.sin(angle);
            const left = 50 + 35 * Math.cos(angle);
            
            return (
              <React.Fragment key={index}>
                <div 
                  className="absolute w-16 h-16 bg-sireiq-accent/30 rounded-full flex items-center justify-center transition-all hover:bg-sireiq-accent/50"
                  style={{ 
                    top: `${top}%`, 
                    left: `${left}%`,
                    transform: 'translate(-50%, -50%)',
                    animation: `fade-in 0.5s ease-out forwards ${index * 0.2}s`
                  }}
                >
                  <span className="text-sm text-center p-1 leading-tight">{idea.title.split(' ')[0]}</span>
                </div>
                <div 
                  className="absolute border-t border-sireiq-cyan/30"
                  style={{ 
                    top: `${(top + 50) / 2}%`, 
                    left: `${(left + 50) / 2}%`,
                    width: '50px',
                    transform: `rotate(${angle + Math.PI / 2}rad)`,
                    transformOrigin: 'center',
                    opacity: 0,
                    animation: `fade-in 0.3s ease-out forwards ${(index * 0.2) + 0.3}s`
                  }}
                ></div>
              </React.Fragment>
            );
          })}
          
          {displayIdeas.length === 0 && (
            <div className="text-center text-sireiq-light/50 absolute top-3/4 left-1/2 transform -translate-x-1/2">
              Generate ideas to visualize them
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IdeaVisualization;
