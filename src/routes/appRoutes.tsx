
import React from 'react';
import { RouteObject } from 'react-router-dom';

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
import AccountSettings from '@/pages/AccountSettings';
import Marketplace from '@/pages/Marketplace';  

// Company pages
import AboutUs from '@/pages/AboutUs';
import Careers from '@/pages/Careers';
import Press from '@/pages/Press';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';

// New resource pages
import APIReference from '@/pages/APIReference';
import Community from '@/pages/Community';

// Enterprise pages including Integrations
import Integrations from '@/pages/enterprise/Integrations';

// Admin pages
import AdminDashboard from '@/pages/admin/AdminDashboard';
import UserManagement from '@/pages/admin/UserManagement';
import AnalyticsDashboard from '@/pages/admin/AnalyticsDashboard';
import SystemSettings from '@/pages/admin/SystemSettings';
import SecurityOverview from '@/pages/admin/SecurityOverview';

// Feature pages
import IdeaGeneration from '@/pages/features/IdeaGeneration';
import PersonalityEngine from '@/pages/features/PersonalityEngine';
import CustomizePersonality from '@/pages/features/CustomizePersonality';
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
import NeuralComposer from '@/pages/features/NeuralComposer';
import AIWorkflows from '@/pages/AIWorkflows';

// Enterprise feature pages
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

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/landing',
    element: <LandingPage />
  },
  {
    path: '/get-started',
    element: <GetStarted />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/features',
    element: <Features />
  },
  {
    path: '/marketplace',
    element: <Marketplace />
  },
  {
    path: '/features/idea-generation',
    element: <IdeaGeneration />
  },
  {
    path: '/features/personality-engine',
    element: <PersonalityEngine />
  },
  {
    path: '/features/customize-personality',
    element: <CustomizePersonality />
  },
  {
    path: '/features/voice-assistant',
    element: <VoiceAssistant />
  },
  {
    path: '/features/simple-voice',
    element: <SimpleVoiceAssistantDemo />
  },
  {
    path: '/features/performance-analytics',
    element: <PerformanceAnalytics />
  },
  {
    path: '/features/ai-powered-creation',
    element: <AIPoweredCreation />
  },
  {
    path: '/features/seo-analyzer',
    element: <SEOAnalyzer />
  },
  {
    path: '/features/data-analysis',
    element: <DataAnalysis />
  },
  {
    path: '/features/content-creation',
    element: <ContentCreation />
  },
  {
    path: '/features/code-assistance',
    element: <CodeAssistance />
  },
  {
    path: '/features/workflow-optimization',
    element: <WorkflowOptimization />
  },
  {
    path: '/features/decision-support',
    element: <DecisionSupport />
  },
  {
    path: '/features/content-summarizer',
    element: <ContentSummarizer />
  },
  {
    path: '/features/code-generator',
    element: <CodeGenerator />
  },
  {
    path: '/features/image-enhancer',
    element: <ImageEnhancer />
  },
  {
    path: '/features/ai-assistant',
    element: <AIAssistant />
  },
  {
    path: '/features/neural-composer',
    element: <NeuralComposer />
  },
  {
    path: '/features/enterprise-security',
    element: <EnterpriseSecurity />
  },
  {
    path: '/enterprise',
    element: <Enterprise />
  },
  {
    path: '/enterprise/team-management',
    element: <TeamManagement />
  },
  {
    path: '/enterprise/team-collaboration',
    element: <TeamCollaboration />
  },
  {
    path: '/enterprise/private-knowledge-base',
    element: <PrivateKnowledgeBase />
  },
  {
    path: '/enterprise/custom-training',
    element: <CustomTraining />
  },
  {
    path: '/enterprise/custom-workflows',
    element: <CustomWorkflows />
  },
  {
    path: '/enterprise/dedicated-infrastructure',
    element: <DedicatedInfrastructure />
  },
  {
    path: '/enterprise/global-deployment',
    element: <GlobalDeployment />
  },
  {
    path: '/enterprise/compliance-controls',
    element: <ComplianceControls />
  },
  {
    path: '/enterprise/advanced-analytics',
    element: <AdvancedAnalytics />
  },
  {
    path: '/enterprise/integrations',
    element: <Integrations />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/account/settings',
    element: <AccountSettings />
  },
  {
    path: '/ai-workflows',
    element: <AIWorkflows />
  },

  // Company pages
  {
    path: '/about',
    element: <AboutUs />
  },
  {
    path: '/careers',
    element: <Careers />
  },
  {
    path: '/press',
    element: <Press />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />
  },

  // Resource pages
  {
    path: '/api-reference',
    element: <APIReference />
  },
  {
    path: '/community',
    element: <Community />
  },

  // Admin Routes
  {
    path: '/admin',
    element: <AdminDashboard />
  },
  {
    path: '/admin/users',
    element: <UserManagement />
  },
  {
    path: '/admin/analytics',
    element: <AnalyticsDashboard />
  },
  {
    path: '/admin/settings',
    element: <SystemSettings />
  },
  {
    path: '/admin/security',
    element: <SecurityOverview />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default appRoutes;
