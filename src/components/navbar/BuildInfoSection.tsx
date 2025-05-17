
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import FeaturedAgents from '@/plugins/marketplace/FeaturedAgents';

const BuildInfoSection = () => {
  const isMobile = useIsMobile();
  const [showFeaturedAgents, setShowFeaturedAgents] = useState(false);
  
  return (
    <div className="bg-black border-t border-gray-800">
      <div className="p-4 md:p-6">
        <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3 md:mb-4`}>
          Build it.<br />
          With SireIQ.
        </h2>
        
        <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-8 max-w-xs md:max-w-none">
          Our advanced AI platform amplifies your creativity, analyzes your data, and supercharges your productivity.
        </p>
        
        <div className="space-y-3 md:space-y-6">
          <Link to="/features/ai-powered-creation" className="flex items-center gap-3 md:gap-4 hover:bg-blue-500/10 rounded-lg p-2 transition-colors">
            <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <span className="text-cyan-400">✦</span>
            </div>
            <div className="text-white text-sm md:text-base">Advanced neural networks</div>
          </Link>
          
          <Link to="/features/performance-analytics" className="flex items-center gap-3 md:gap-4 hover:bg-purple-500/10 rounded-lg p-2 transition-colors">
            <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <span className="text-purple-400">✦</span>
            </div>
            <div className="text-white text-sm md:text-base">Real-time insights</div>
          </Link>
          
          <Link to="/features/idea-generation" className="flex items-center gap-3 md:gap-4 hover:bg-blue-500/10 rounded-lg p-2 transition-colors">
            <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <span className="text-blue-400">✦</span>
            </div>
            <div className="text-white text-sm md:text-base">Workflow optimization</div>
          </Link>
        </div>
      </div>
      
      <button 
        onClick={() => setShowFeaturedAgents(!showFeaturedAgents)}
        className="w-full text-center py-3 border-t border-gray-800 text-sireiq-cyan hover:bg-sireiq-accent/10 transition-colors"
      >
        {showFeaturedAgents ? "Hide Featured Agents" : "Show Featured Agents"}
      </button>
      
      {showFeaturedAgents && <FeaturedAgents containerClassName="border-t border-gray-800" />}
    </div>
  );
};

export default BuildInfoSection;
