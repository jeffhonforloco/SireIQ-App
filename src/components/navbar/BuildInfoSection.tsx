
import React from 'react';

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
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <span className="text-cyan-400">✦</span>
          </div>
          <div className="text-white">Advanced neural networks</div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <span className="text-purple-400">✦</span>
          </div>
          <div className="text-white">Real-time insights</div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <span className="text-blue-400">✦</span>
          </div>
          <div className="text-white">Workflow optimization</div>
        </div>
      </div>
    </div>
  );
};

export default BuildInfoSection;
