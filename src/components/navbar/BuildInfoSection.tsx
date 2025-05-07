
import React from 'react';
import { Link } from 'react-router-dom';

const BuildInfoSection = () => {
  return (
    <div className="p-6 bg-black border-t border-gray-800">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
        Build it.<br />
        With SireIQ.
      </h2>
      
      <p className="text-gray-300 mb-8">
        Our advanced AI platform amplifies your creativity, analyzes your data, and supercharges your productivity.
      </p>
      
      <div className="space-y-6">
        <Link to="/features/ai-powered-creation" className="flex items-center gap-4 hover:bg-blue-500/10 rounded-lg p-2 transition-colors">
          <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <span className="text-cyan-400">✦</span>
          </div>
          <div className="text-white">Advanced neural networks</div>
        </Link>
        
        <Link to="/features/performance-analytics" className="flex items-center gap-4 hover:bg-purple-500/10 rounded-lg p-2 transition-colors">
          <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <span className="text-purple-400">✦</span>
          </div>
          <div className="text-white">Real-time insights</div>
        </Link>
        
        <Link to="/features/idea-generation" className="flex items-center gap-4 hover:bg-blue-500/10 rounded-lg p-2 transition-colors">
          <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <span className="text-blue-400">✦</span>
          </div>
          <div className="text-white">Workflow optimization</div>
        </Link>
      </div>
    </div>
  );
};

export default BuildInfoSection;
