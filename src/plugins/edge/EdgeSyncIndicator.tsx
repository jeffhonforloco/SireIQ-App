
import React, { useState, useEffect } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Wifi, WifiOff, Square } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

type SyncStatus = 'online' | 'offline' | 'syncing';

const EdgeSyncIndicator: React.FC = () => {
  const [status, setStatus] = useState<SyncStatus>('online');
  const [isEnabled] = useLocalStorage('edge-sync-enabled', true);
  
  // Simulate status changes
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly change status sometimes
      if (Math.random() > 0.9) {
        const statuses: SyncStatus[] = ['online', 'offline', 'syncing'];
        const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
        setStatus(newStatus);
      }
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  if (!isEnabled) return null;

  const getStatusConfig = () => {
    switch(status) {
      case 'online':
        return {
          icon: <Wifi size={14} />,
          label: 'Cloud sync live',
          description: 'All agents running in cloud mode with full capabilities',
          color: 'text-green-400'
        };
      case 'offline':
        return {
          icon: <WifiOff size={14} />,
          label: 'Offline cache active',
          description: 'Using local ONNX models for agent execution',
          color: 'text-amber-400'
        };
      case 'syncing':
        return {
          icon: <Square size={14} className="animate-pulse" />,
          label: 'Syncing data',
          description: 'Uploading local changes to cloud',
          color: 'text-blue-400'
        };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs ${statusConfig.color} cursor-help`}>
            {statusConfig.icon}
            <span className="hidden sm:inline">{statusConfig.label}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <div className="text-xs">
            <div className="font-medium">{statusConfig.label}</div>
            <div className="text-sireiq-light/70">{statusConfig.description}</div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default EdgeSyncIndicator;
