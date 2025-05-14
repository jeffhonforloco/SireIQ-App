
import React from 'react';
import { RouteObject } from 'react-router-dom';
import TeamManagement from '@/pages/enterprise/TeamManagement';
import TeamCollaboration from '@/pages/enterprise/TeamCollaboration';
import PrivateKnowledgeBase from '@/pages/enterprise/PrivateKnowledgeBase';
import CustomTraining from '@/pages/enterprise/CustomTraining';
import CustomWorkflows from '@/pages/enterprise/CustomWorkflows';
import DedicatedInfrastructure from '@/pages/enterprise/DedicatedInfrastructure';
import GlobalDeployment from '@/pages/enterprise/GlobalDeployment';
import ComplianceControls from '@/pages/enterprise/ComplianceControls';
import AdvancedAnalytics from '@/pages/enterprise/AdvancedAnalytics';
import Integrations from '@/pages/enterprise/Integrations';

// Enterprise-specific routes
const enterpriseRoutes: RouteObject[] = [
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
  }
];

export default enterpriseRoutes;
