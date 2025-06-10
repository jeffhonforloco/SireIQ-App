import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { RoleProvider } from '@/contexts/RoleContext';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { VoiceAssistantProvider } from '@/hooks/useVoiceAssistant';

// Pages
import Index from '@/pages/Index';
import LandingPage from '@/pages/LandingPage';
import GetStarted from '@/pages/GetStarted';
import SignIn from '@/pages/SignIn';
import Dashboard from '@/pages/Dashboard';
import Features from '@/pages/Features';
import Pricing from '@/pages/Pricing';
import Contact from '@/pages/Contact';
import HowItWorks from '@/pages/HowItWorks';
import AboutUs from '@/pages/AboutUs';
import Blog from '@/pages/Blog';
import Careers from '@/pages/Careers';
import Press from '@/pages/Press';
import Documentation from '@/pages/Documentation';
import Community from '@/pages/Community';
import AccountSettings from '@/pages/AccountSettings';
import NotFound from '@/pages/NotFound';
import ForgotPassword from '@/pages/ForgotPassword';
import TrustAndCompliance from '@/pages/TrustAndCompliance';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Integrations from '@/pages/Integrations';
import Tutorials from '@/pages/Tutorials';
import TryAdvancedAI from '@/pages/TryAdvancedAI';
import Marketplace from '@/pages/Marketplace';
import FeaturedAgents from '@/pages/FeaturedAgents';
import AIWorkflows from '@/pages/AIWorkflows';
import APIReference from '@/pages/APIReference';
import DesignSystemPage from '@/pages/DesignSystemPage';
import Enterprise from '@/pages/Enterprise';

// Admin Pages
import AdminPanel from '@/pages/admin/AdminPanel';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import UserManagement from '@/pages/admin/UserManagement';
import SecurityOverview from '@/pages/admin/SecurityOverview';
import SystemSettings from '@/pages/admin/SystemSettings';
import AnalyticsDashboard from '@/pages/admin/AnalyticsDashboard';
import EnhancedSecurityFramework from '@/pages/admin/EnhancedSecurityFramework';

// Enterprise Pages
import AdvancedAnalytics from '@/pages/enterprise/AdvancedAnalytics';
import ComplianceControls from '@/pages/enterprise/ComplianceControls';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RoleProvider>
            <VoiceAssistantProvider>
              <Router>
                <div className="App">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/landing" element={<LandingPage />} />
                    <Route path="/get-started" element={<GetStarted />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/features/*" element={<Features />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/press" element={<Press />} />
                    <Route path="/docs" element={<Documentation />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/settings" element={<AccountSettings />} />
                    <Route path="/settings/*" element={<AccountSettings />} />
                    <Route path="/trust-compliance" element={<TrustAndCompliance />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/integrations" element={<Integrations />} />
                    <Route path="/tutorials" element={<Tutorials />} />
                    <Route path="/try-advanced-ai" element={<TryAdvancedAI />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/featured-agents" element={<FeaturedAgents />} />
                    <Route path="/ai-workflows" element={<AIWorkflows />} />
                    <Route path="/api-reference" element={<APIReference />} />
                    <Route path="/design-system" element={<DesignSystemPage />} />
                    <Route path="/enterprise" element={<Enterprise />} />
                    <Route path="/enterprise/advanced-analytics" element={<AdvancedAnalytics />} />
                    <Route path="/enterprise/compliance-controls" element={<ComplianceControls />} />
                    
                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/users" element={<UserManagement />} />
                    <Route path="/admin/security" element={<SecurityOverview />} />
                    <Route path="/admin/security/framework" element={<EnhancedSecurityFramework />} />
                    <Route path="/admin/settings" element={<SystemSettings />} />
                    <Route path="/admin/analytics" element={<AnalyticsDashboard />} />
                    
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Toaster />
                </div>
              </Router>
            </VoiceAssistantProvider>
          </RoleProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
