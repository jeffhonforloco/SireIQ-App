
import React from 'react';
import { Toaster } from '@/components/ui/sonner';
import MobileBottomNav from '@/components/MobileBottomNav';
import NewChatButtonWrapper from './NewChatButtonWrapper';
import FeatureFlaggedPlugins from './FeatureFlaggedPlugins';
import AppRoutes from '@/components/routing/AppRoutes';

interface AppLayoutProps {
  enableGovernance: boolean;
  enableMemory: boolean;
  enableWorkflow: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  enableGovernance,
  enableMemory,
  enableWorkflow
}) => {
  return (
    <>
      <AppRoutes />
      
      <NewChatButtonWrapper />
      <MobileBottomNav />
      
      <FeatureFlaggedPlugins
        enableGovernance={enableGovernance}
        enableMemory={enableMemory}
        enableWorkflow={enableWorkflow}
      />
      
      <Toaster position="bottom-right" />
    </>
  );
};

export default AppLayout;
