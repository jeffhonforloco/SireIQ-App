
import React from 'react';
import MemoryBrowser from '@/plugins/memory';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const MemoryWrapper: React.FC = () => {
  const [isEnabled] = useLocalStorage('memory-snapshot-enabled', true);
  
  if (!isEnabled) return null;
  
  return (
    <div className="fixed top-20 right-4 z-50 max-w-xs">
      <MemoryBrowser />
    </div>
  );
};

export default MemoryWrapper;
