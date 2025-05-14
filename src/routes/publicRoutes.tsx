
import React from 'react';
import { RouteObject } from 'react-router-dom';
import Index from '@/pages/Index';
import LandingPage from '@/pages/LandingPage';
import Features from '@/pages/Features';
import Enterprise from '@/pages/Enterprise';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Marketplace from '@/pages/Marketplace';
import NotFound from '@/pages/NotFound';
import SignIn from '@/pages/SignIn';
import ForgotPassword from '@/pages/ForgotPassword';
import GetStarted from '@/pages/GetStarted';
import APIReference from '@/pages/APIReference';
import Community from '@/pages/Community';
import Careers from '@/pages/Careers';
import Press from '@/pages/Press';

// Public routes that don't require authentication
const publicRoutes: RouteObject[] = [
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
    path: '/features',
    element: <Features />
  },
  {
    path: '/enterprise',
    element: <Enterprise />
  },
  {
    path: '/marketplace',
    element: <Marketplace />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
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
  
  // 404 route
  {
    path: '*',
    element: <NotFound />
  }
];

export default publicRoutes;
