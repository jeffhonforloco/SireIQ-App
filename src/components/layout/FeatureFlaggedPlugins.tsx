
import React from 'react';
import GovernancePanel from '@/plugins/governance';
import MemoryBrowser from '@/plugins/memory';
import WorkflowLauncher from '@/plugins/workflow';

interface FeatureFlaggedPluginsProps {
  enableGovernance: boolean;
  enableMemory: boolean;
  enableWorkflow: boolean;
}

const FeatureFlaggedPlugins: React.FC<FeatureFlaggedPluginsProps> = ({
  enableGovernance,
  enableMemory,
  enableWorkflow
}) => {
  return (
    <>
      {enableGovernance && (
        <div className="fixed bottom-4 left-4 z-50 max-w-xs">
          <GovernancePanel />
        </div>
      )}
      
      {enableMemory && (
        <div className="fixed top-20 right-4 z-50 max-w-xs">
          <MemoryBrowser />
        </div>
      )}
      
      {enableWorkflow && (
        <div className="fixed bottom-4 right-4 z-50 max-w-xs">
          <WorkflowLauncher />
        </div>
      )}
    </>
  );
};

export default FeatureFlaggedPlugins;
