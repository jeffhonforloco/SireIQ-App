import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/components/ThemeProvider';
import LandingPage from '@/pages/LandingPage';
import Pricing from '@/pages/Pricing';
import Features from '@/pages/Features';
import GetStarted from '@/pages/GetStarted';
import SignIn from '@/pages/SignIn';
import Dashboard from '@/pages/Dashboard';
import EnterpriseDashboard from '@/components/dashboards/EnterpriseDashboard';
import { RoleProvider } from '@/contexts/RoleContext';
import { CollaborationProvider } from '@/contexts/CollaborationContext';
import IdeaGeneration from '@/pages/features/IdeaGeneration';
import PersonalityEngine from '@/pages/features/PersonalityEngine';
import { Toaster } from '@/components/ui/sonner';

// Add this import
import VoiceAssistant from './pages/features/VoiceAssistant';
import { VoiceAssistantProvider } from './hooks/useVoiceAssistant';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ThemeProvider>
          <Toaster />
          <RoleProvider>
            <CollaborationProvider>
              <PersonalityEngineProvider>
                <VoiceAssistantProvider>
                  <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/get-started" element={<GetStarted />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/enterprise" element={<EnterpriseDashboard />} />
                    <Route path="/features/idea-generation" element={<IdeaGeneration />} />
                    <Route path="/features/personality-engine" element={<PersonalityEngine />} />
                    
                    {/* Add this new route */}
                    <Route path="/features/voice-assistant" element={<VoiceAssistant />} />
                    
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </VoiceAssistantProvider>
              </PersonalityEngineProvider>
            </CollaborationProvider>
          </RoleProvider>
        </ThemeProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
