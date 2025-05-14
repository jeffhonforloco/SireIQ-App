
import React from 'react';
import { Routes, Route, useRoutes } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import MobileBottomNav from '@/components/MobileBottomNav';
import NewChatButtonWrapper from './NewChatButtonWrapper';
import FeatureFlaggedPlugins from './FeatureFlaggedPlugins';
import appRoutes from '@/routes/appRoutes';

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
      <Routes>
        {appRoutes.map((route, index) => (
          <Route 
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
      
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
