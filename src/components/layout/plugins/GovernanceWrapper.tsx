
import React from 'react';
import GovernancePanel from '@/plugins/governance';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const GovernanceWrapper: React.FC = () => {
  const [isEnabled] = useLocalStorage('governance-panel-enabled', true);
  
  if (!isEnabled) return null;
  
  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-xs">
      <GovernancePanel />
    </div>
  );
};

export default GovernanceWrapper;
