
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { VoiceAssistantProvider } from '@/hooks/useVoiceAssistant';
import { RoleProvider } from '@/contexts/RoleContext';
import NewChatButton from '@/components/chat/NewChatButton';

// Import pages
import Index from '@/pages/Index';
import LandingPage from '@/pages/LandingPage';
import NotFound from '@/pages/NotFound';
import GetStarted from '@/pages/GetStarted';
import Dashboard from '@/pages/Dashboard';
import Features from '@/pages/Features';
import Enterprise from '@/pages/Enterprise';
import SignIn from '@/pages/SignIn';
import ForgotPassword from '@/pages/ForgotPassword';

// Company pages
import AboutUs from '@/pages/AboutUs';
import Careers from '@/pages/Careers';
import Press from '@/pages/Press';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';

// New resource pages (removed Blog and Tutorials)
import APIReference from '@/pages/APIReference';
import Community from '@/pages/Community';

// Enterprise pages including Integrations
import Integrations from '@/pages/enterprise/Integrations';

// Import admin pages
import AdminDashboard from '@/pages/admin/AdminDashboard';
import UserManagement from '@/pages/admin/UserManagement';
import AnalyticsDashboard from '@/pages/admin/AnalyticsDashboard';
import SystemSettings from '@/pages/admin/SystemSettings';
import SecurityOverview from '@/pages/admin/SecurityOverview';

// Import feature pages
import IdeaGeneration from '@/pages/features/IdeaGeneration';
import PersonalityEngine from '@/pages/features/PersonalityEngine';
import VoiceAssistant from '@/pages/features/VoiceAssistant';
import SimpleVoiceAssistantDemo from '@/pages/features/SimpleVoiceAssistantDemo';
import PerformanceAnalytics from '@/pages/features/PerformanceAnalytics';
import AIPoweredCreation from '@/pages/features/AIPoweredCreation';
import SEOAnalyzer from '@/pages/features/SEOAnalyzer';
import DataAnalysis from '@/pages/features/DataAnalysis';
import ContentCreation from '@/pages/features/ContentCreation';
import CodeAssistance from '@/pages/features/CodeAssistance';
import WorkflowOptimization from '@/pages/features/WorkflowOptimization';
import DecisionSupport from '@/pages/features/DecisionSupport';
import ContentSummarizer from '@/pages/features/ContentSummarizer';
import CodeGenerator from '@/pages/features/CodeGenerator';
import ImageEnhancer from '@/pages/features/ImageEnhancer';
import AIAssistant from '@/pages/features/AIAssistant';

// Import enterprise pages
import EnterpriseSecurity from '@/pages/features/EnterpriseSecurity';
import TeamManagement from '@/pages/enterprise/TeamManagement';
import TeamCollaboration from '@/pages/enterprise/TeamCollaboration';
import PrivateKnowledgeBase from '@/pages/enterprise/PrivateKnowledgeBase';
import CustomTraining from '@/pages/enterprise/CustomTraining';
import CustomWorkflows from '@/pages/enterprise/CustomWorkflows';
import DedicatedInfrastructure from '@/pages/enterprise/DedicatedInfrastructure';
import GlobalDeployment from '@/pages/enterprise/GlobalDeployment';
import ComplianceControls from '@/pages/enterprise/ComplianceControls';
import AdvancedAnalytics from '@/pages/enterprise/AdvancedAnalytics';

import MobileBottomNav from '@/components/MobileBottomNav';

// Component to determine if NewChatButton should be displayed
const NewChatButtonWrapper = () => {
  const location = useLocation();
  
  // Define paths where the button should be shown
  const showOnPaths = [
    '/dashboard',
    '/features/ai-assistant',
    '/features/code-assistance',
    '/features/content-creation'
  ];
  
  // Check if current path starts with any of the paths in the array
  const shouldShowButton = showOnPaths.some(path => 
    location.pathname === path || location.pathname.startsWith(`${path}/`)
  );
  
  return shouldShowButton ? <NewChatButton /> : null;
};

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
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/features" element={<Features />} />
                <Route path="/features/idea-generation" element={<IdeaGeneration />} />
                <Route path="/features/personality-engine" element={<PersonalityEngine />} />
                <Route path="/features/voice-assistant" element={<VoiceAssistant />} />
                <Route path="/features/simple-voice" element={<SimpleVoiceAssistantDemo />} />
                <Route path="/features/performance-analytics" element={<PerformanceAnalytics />} />
                <Route path="/features/ai-powered-creation" element={<AIPoweredCreation />} />
                <Route path="/features/seo-analyzer" element={<SEOAnalyzer />} />
                <Route path="/features/data-analysis" element={<DataAnalysis />} />
                <Route path="/features/content-creation" element={<ContentCreation />} />
                <Route path="/features/code-assistance" element={<CodeAssistance />} />
                <Route path="/features/workflow-optimization" element={<WorkflowOptimization />} />
                <Route path="/features/decision-support" element={<DecisionSupport />} />
                <Route path="/features/content-summarizer" element={<ContentSummarizer />} />
                <Route path="/features/code-generator" element={<CodeGenerator />} />
                <Route path="/features/image-enhancer" element={<ImageEnhancer />} />
                <Route path="/features/ai-assistant" element={<AIAssistant />} />
                <Route path="/features/enterprise-security" element={<EnterpriseSecurity />} />
                <Route path="/enterprise" element={<Enterprise />} />
                <Route path="/enterprise/team-management" element={<TeamManagement />} />
                <Route path="/enterprise/team-collaboration" element={<TeamCollaboration />} />
                <Route path="/enterprise/private-knowledge-base" element={<PrivateKnowledgeBase />} />
                <Route path="/enterprise/custom-training" element={<CustomTraining />} />
                <Route path="/enterprise/custom-workflows" element={<CustomWorkflows />} />
                <Route path="/enterprise/dedicated-infrastructure" element={<DedicatedInfrastructure />} />
                <Route path="/enterprise/global-deployment" element={<GlobalDeployment />} />
                <Route path="/enterprise/compliance-controls" element={<ComplianceControls />} />
                <Route path="/enterprise/advanced-analytics" element={<AdvancedAnalytics />} />
                <Route path="/enterprise/integrations" element={<Integrations />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                {/* Company pages */}
                <Route path="/about" element={<AboutUs />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/press" element={<Press />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                {/* Resource pages - Blog and Tutorials removed */}
                <Route path="/api-reference" element={<APIReference />} />
                <Route path="/community" element={<Community />} />

                {/* Admin Routes */}
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/users" element={<UserManagement />} />
                <Route path="/admin/analytics" element={<AnalyticsDashboard />} />
                <Route path="/admin/settings" element={<SystemSettings />} />
                <Route path="/admin/security" element={<SecurityOverview />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
              <NewChatButtonWrapper />
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
