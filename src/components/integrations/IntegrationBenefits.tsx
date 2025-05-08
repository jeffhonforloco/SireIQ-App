
import React from 'react';

const IntegrationBenefits: React.FC = () => {
  return (
    <div className="mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        <span className="text-gradient">Why Integrate</span> with SireIQ?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-effect rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3 text-sireiq-cyan">Streamlined Workflow</h3>
          <p className="text-sireiq-light/70">
            Eliminate context switching by integrating SireIQ directly with the tools your team already uses.
          </p>
        </div>
        
        <div className="glass-effect rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3 text-sireiq-cyan">Enhanced Productivity</h3>
          <p className="text-sireiq-light/70">
            Automate repetitive tasks and focus on creative work by connecting SireIQ to your workflow.
          </p>
        </div>
        
        <div className="glass-effect rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3 text-sireiq-cyan">Seamless Collaboration</h3>
          <p className="text-sireiq-light/70">
            Share and collaborate on AI-generated content with your team across all your platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntegrationBenefits;
