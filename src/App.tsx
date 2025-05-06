
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { VoiceAssistantProvider } from '@/hooks/useVoiceAssistant';
import { RoleProvider } from '@/contexts/RoleContext';

// Import pages
import Index from '@/pages/Index';
import LandingPage from '@/pages/LandingPage';
import NotFound from '@/pages/NotFound';
import GetStarted from '@/pages/GetStarted';
import Pricing from '@/pages/Pricing';
import Dashboard from '@/pages/Dashboard';
import Features from '@/pages/Features';
import Enterprise from '@/pages/Enterprise';

// Import feature pages
import IdeaGeneration from '@/pages/features/IdeaGeneration';
import PersonalityEngine from '@/pages/features/PersonalityEngine';
import VoiceAssistant from '@/pages/features/VoiceAssistant';
import SimpleVoiceAssistantDemo from '@/pages/features/SimpleVoiceAssistantDemo';
import PerformanceAnalytics from '@/pages/features/PerformanceAnalytics';

import MobileBottomNav from '@/components/MobileBottomNav';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <HelmetProvider>
        <RoleProvider>
          <VoiceAssistantProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/get-started" element={<GetStarted />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/features" element={<Features />} />
                <Route path="/features/idea-generation" element={<IdeaGeneration />} />
                <Route path="/features/personality-engine" element={<PersonalityEngine />} />
                <Route path="/features/voice-assistant" element={<VoiceAssistant />} />
                <Route path="/features/simple-voice" element={<SimpleVoiceAssistantDemo />} />
                <Route path="/features/performance-analytics" element={<PerformanceAnalytics />} />
                <Route path="/enterprise" element={<Enterprise />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <MobileBottomNav />
              <Toaster position="bottom-right" />
            </Router>
          </VoiceAssistantProvider>
        </RoleProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
