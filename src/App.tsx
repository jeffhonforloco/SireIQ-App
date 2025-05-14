
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { HelmetProvider } from 'react-helmet-async';
import { VoiceAssistantProvider } from '@/hooks/useVoiceAssistant';
import { RoleProvider } from '@/contexts/RoleContext';
import AppLayout from '@/components/layout/AppLayout';

function App() {
  // Feature flags - using import.meta.env instead of process.env
  const enableGovernance = import.meta.env.VITE_ENABLE_GOVERNANCE === 'true';
  const enableMemory = import.meta.env.VITE_ENABLE_MEMORY === 'true';
  const enableWorkflow = import.meta.env.VITE_ENABLE_WORKFLOW === 'true';
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <HelmetProvider>
        <RoleProvider>
          <VoiceAssistantProvider>
            <Router>
              <AppLayout 
                enableGovernance={enableGovernance}
                enableMemory={enableMemory}
                enableWorkflow={enableWorkflow}
              />
            </Router>
          </VoiceAssistantProvider>
        </RoleProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
