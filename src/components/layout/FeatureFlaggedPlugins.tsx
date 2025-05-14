
import React from 'react';
import GovernanceWrapper from '@/components/layout/plugins/GovernanceWrapper';
import MemoryWrapper from '@/components/layout/plugins/MemoryWrapper';
import WorkflowWrapper from '@/components/layout/plugins/WorkflowWrapper';

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
      {enableGovernance && <GovernanceWrapper />}
      {enableMemory && <MemoryWrapper />}
      {enableWorkflow && <WorkflowWrapper />}
    </>
  );
};

export default FeatureFlaggedPlugins;
