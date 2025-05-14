
import React from 'react';
import { RouteObject } from 'react-router-dom';
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
import EnterpriseSecurity from '@/pages/features/EnterpriseSecurity';
import AIWorkflows from '@/pages/AIWorkflows';

// Feature-related routes
const featureRoutes: RouteObject[] = [
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
    path: '/ai-workflows',
    element: <AIWorkflows />
  }
];

export default featureRoutes;
