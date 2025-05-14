
import React from 'react';
import WorkflowLauncher from '@/plugins/workflow';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const WorkflowWrapper: React.FC = () => {
  const [isEnabled] = useLocalStorage('edge-sync-enabled', true);
  
  if (!isEnabled) return null;
  
  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xs">
      <WorkflowLauncher />
    </div>
  );
};

export default WorkflowWrapper;
