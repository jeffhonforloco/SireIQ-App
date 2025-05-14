
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

interface RouteWithLayoutProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
}

/**
 * A component that wraps routes with common layout elements
 */
const RouteWithLayout: React.FC<RouteWithLayoutProps> = ({
  title = 'SireIQ',
  description = 'AI-powered platform for content creation and workflows',
  children,
  hideNavbar = false,
  hideFooter = false
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      
      {!hideNavbar && <Navbar />}
      
      <main className={`min-h-screen bg-sireiq-dark text-sireiq-light ${!hideNavbar ? 'pt-20' : ''}`}>
        {children || <Outlet />}
      </main>
      
      {!hideFooter && <Footer />}
    </>
  );
};

export default RouteWithLayout;
