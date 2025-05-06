
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { RoleProvider } from "./contexts/RoleContext";
import MobileBottomNav from "./components/MobileBottomNav";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AIWorkflows from "./pages/AIWorkflows";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import Enterprise from "./pages/Enterprise";
import TryAdvancedAI from "./pages/TryAdvancedAI";
import TrustAndCompliance from "./pages/TrustAndCompliance";
import SignIn from "./pages/SignIn";
import GetStarted from "./pages/GetStarted";
import Dashboard from "./pages/Dashboard";
import AIPoweredCreation from "./pages/features/AIPoweredCreation";
import PersonalityEngine from "./pages/features/PersonalityEngine";
import RealTimeCollaboration from "./pages/features/RealTimeCollaboration";
import IdeaGeneration from "./pages/features/IdeaGeneration";
import PerformanceAnalytics from "./pages/features/PerformanceAnalytics";
import EnterpriseSecurity from "./pages/features/EnterpriseSecurity";
import Integrations from "./pages/Integrations";
// Import enterprise solution pages
import TeamCollaboration from "./pages/enterprise/TeamCollaboration";
import CustomWorkflows from "./pages/enterprise/CustomWorkflows";
import DedicatedInfrastructure from "./pages/enterprise/DedicatedInfrastructure";
import PrivateKnowledgeBase from "./pages/enterprise/PrivateKnowledgeBase";
import GlobalDeployment from "./pages/enterprise/GlobalDeployment";
import ComplianceControls from "./pages/enterprise/ComplianceControls";
import AdvancedAnalytics from "./pages/enterprise/AdvancedAnalytics";
// Import new enterprise functionality pages
import TeamManagement from "./pages/enterprise/TeamManagement";
import CustomTraining from "./pages/enterprise/CustomTraining";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <RoleProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ai-workflows" element={<AIWorkflows />} />
              <Route path="/features" element={<Features />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/try-advanced-ai" element={<TryAdvancedAI />} />
              <Route path="/trust-and-compliance" element={<TrustAndCompliance />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Feature detail pages */}
              <Route path="/features/ai-powered-creation" element={<AIPoweredCreation />} />
              <Route path="/features/personality-engine" element={<PersonalityEngine />} />
              <Route path="/features/real-time-collaboration" element={<RealTimeCollaboration />} />
              <Route path="/features/idea-generation" element={<IdeaGeneration />} />
              <Route path="/features/performance-analytics" element={<PerformanceAnalytics />} />
              <Route path="/features/enterprise-security" element={<EnterpriseSecurity />} />
              {/* Enterprise solution pages */}
              <Route path="/enterprise/team-collaboration" element={<TeamCollaboration />} />
              <Route path="/enterprise/enterprise-security" element={<EnterpriseSecurity />} />
              <Route path="/enterprise/custom-workflows" element={<CustomWorkflows />} />
              <Route path="/enterprise/dedicated-infrastructure" element={<DedicatedInfrastructure />} />
              <Route path="/enterprise/private-knowledge-base" element={<PrivateKnowledgeBase />} />
              <Route path="/enterprise/global-deployment" element={<GlobalDeployment />} />
              <Route path="/enterprise/compliance-controls" element={<ComplianceControls />} />
              <Route path="/enterprise/advanced-analytics" element={<AdvancedAnalytics />} />
              {/* New enterprise functionality pages */}
              <Route path="/enterprise/team-management" element={<TeamManagement />} />
              <Route path="/enterprise/custom-training" element={<CustomTraining />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <MobileBottomNav />
          </BrowserRouter>
        </RoleProvider>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
