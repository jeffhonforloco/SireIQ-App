
import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { ProtectedRoute, PublicRoute, RoleBasedRoute, RouteWithLayout, LazyRoute } from '@/components/routing';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import SignIn from '@/pages/SignIn';
import GetStarted from '@/pages/GetStarted';
import Dashboard from '@/pages/Dashboard';

// Feature Pages
const Features = lazy(() => import('@/pages/Features'));
const Enterprise = lazy(() => import('@/pages/Enterprise'));
const LandingPage = lazy(() => import('@/pages/LandingPage'));
const AboutUs = lazy(() => import('@/pages/AboutUs'));
const Contact = lazy(() => import('@/pages/Contact'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const AccountSettings = lazy(() => import('@/pages/AccountSettings'));
const ForgotPassword = lazy(() => import('@/pages/ForgotPassword'));
const Marketplace = lazy(() => import('@/pages/Marketplace'));
const AIWorkflows = lazy(() => import('@/pages/AIWorkflows'));

// Advanced Feature Pages - protected by role
const CodeAssistance = lazy(() => import('@/pages/features/CodeAssistance'));
const ContentCreation = lazy(() => import('@/pages/features/ContentCreation'));
const VoiceAssistant = lazy(() => import('@/pages/features/VoiceAssistant'));
const CustomizePersonality = lazy(() => import('@/pages/features/CustomizePersonality'));

// Admin Pages
const AdminDashboard = lazy(() => import('@/pages/admin/AdminDashboard'));
const UserManagement = lazy(() => import('@/pages/admin/UserManagement'));
const SystemSettings = lazy(() => import('@/pages/admin/SystemSettings'));

/**
 * Main component that defines and returns all application routes
 */
const AppRoutes: React.FC = () => {
  const routes = useRoutes([
    // Public Routes
    {
      path: '/',
      element: <RouteWithLayout title="SireIQ | AI-Powered Platform" />,
      children: [
        { index: true, element: <Index /> },
        { path: 'landing', element: <LazyRoute><LandingPage /></LazyRoute> },
      ]
    },
    
    // Authentication Routes
    {
      element: <PublicRoute restrictAfterAuth />,
      children: [
        {
          path: '/signin',
          element: <RouteWithLayout title="Sign In | SireIQ" />,
          children: [{ index: true, element: <SignIn /> }]
        },
        {
          path: '/forgot-password',
          element: <RouteWithLayout title="Forgot Password | SireIQ" />,
          children: [{ index: true, element: <LazyRoute><ForgotPassword /></LazyRoute> }]
        },
        {
          path: '/get-started',
          element: <RouteWithLayout title="Get Started | SireIQ" />,
          children: [{ index: true, element: <GetStarted /> }]
        }
      ]
    },
    
    // Protected Routes (require auth)
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/account/settings',
          element: <RouteWithLayout title="Account Settings | SireIQ" />,
          children: [{ index: true, element: <LazyRoute><AccountSettings /></LazyRoute> }]
        }
      ]
    },
    
    // Developer-only routes
    {
      element: <ProtectedRoute requiredRole="developer" />,
      children: [
        {
          path: '/features/code-assistance',
          element: <RouteWithLayout title="Code Assistance | SireIQ" />,
          children: [{ index: true, element: <LazyRoute><CodeAssistance /></LazyRoute> }]
        }
      ]
    },
    
    // Role-based feature routes
    {
      element: <RoleBasedRoute requiredFeature="ai_assistant_basic" />,
      children: [
        {
          path: '/features/ai-assistant',
          element: <RouteWithLayout title="AI Assistant | SireIQ" />,
          children: [{ index: true, element: <LazyRoute><ContentCreation /></LazyRoute> }]
        }
      ]
    },
    
    // Admin routes
    {
      element: <ProtectedRoute requiredRole="admin" />,
      children: [
        {
          path: '/admin',
          element: <LazyRoute><AdminDashboard /></LazyRoute>
        },
        {
          path: '/admin/users',
          element: <LazyRoute><UserManagement /></LazyRoute>
        },
        {
          path: '/admin/settings',
          element: <LazyRoute><SystemSettings /></LazyRoute>
        }
      ]
    },
    
    // General content routes
    {
      path: '/features',
      element: <RouteWithLayout title="Features | SireIQ" />,
      children: [{ index: true, element: <LazyRoute><Features /></LazyRoute> }]
    },
    {
      path: '/enterprise',
      element: <RouteWithLayout title="Enterprise Solutions | SireIQ" />,
      children: [{ index: true, element: <LazyRoute><Enterprise /></LazyRoute> }]
    },
    {
      path: '/marketplace',
      element: <RouteWithLayout title="Marketplace | SireIQ" />,
      children: [{ index: true, element: <LazyRoute><Marketplace /></LazyRoute> }]
    },
    {
      path: '/about',
      element: <RouteWithLayout title="About Us | SireIQ" />,
      children: [{ index: true, element: <LazyRoute><AboutUs /></LazyRoute> }]
    },
    {
      path: '/contact',
      element: <RouteWithLayout title="Contact Us | SireIQ" />,
      children: [{ index: true, element: <LazyRoute><Contact /></LazyRoute> }]
    },
    {
      path: '/privacy-policy',
      element: <RouteWithLayout title="Privacy Policy | SireIQ" />,
      children: [{ index: true, element: <LazyRoute><PrivacyPolicy /></LazyRoute> }]
    },
    {
      path: '/ai-workflows',
      element: <ProtectedRoute />,
      children: [
        { 
          path: '', 
          element: <RouteWithLayout title="AI Workflows | SireIQ" />,
          children: [{ index: true, element: <LazyRoute><AIWorkflows /></LazyRoute> }]
        }
      ]
    },
    
    // 404 - Not Found
    {
      path: '*',
      element: <RouteWithLayout title="Page Not Found | SireIQ" />,
      children: [{ index: true, element: <NotFound /> }]
    }
  ]);

  return routes;
};

export default AppRoutes;
