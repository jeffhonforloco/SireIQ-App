import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRole } from '@/contexts/RoleContext';
import UserDashboard from '@/components/dashboards/UserDashboard';
import DeveloperDashboard from '@/components/dashboards/DeveloperDashboard';
import EnterpriseDashboard from '@/components/dashboards/EnterpriseDashboard';
import RoleSelection from '@/components/onboarding/RoleSelection';
import QuickPreferences from '@/components/onboarding/QuickPreferences';
import StartPlatform from '@/components/onboarding/StartPlatform';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import MemorySnapshot from '@/plugins/memory/MemorySnapshot';
import EdgeSyncIndicator from '@/plugins/edge/EdgeSyncIndicator';
import { SidebarProvider } from '@/components/ui/sidebar';

const Dashboard = () => {
  const { role, isFirstTimeUser, onboardingStep } = useRole();
  const navigate = useNavigate();
  
  useEffect(() => {
    // If there's no role and not in onboarding, redirect to signin
    if (!role && !isFirstTimeUser) {
      navigate('/signin');
    }
  }, [role, isFirstTimeUser, navigate]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  // If user is in onboarding process
  if (isFirstTimeUser || !role) {
    return (
      <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
        <Helmet>
          <title>Welcome to SireIQ | Onboarding</title>
          <meta name="description" content="Set up your SireIQ experience with a few quick steps." />
        </Helmet>
        
        <Navbar />
        
        <motion.main 
          className="container mx-auto pt-32 pb-20 px-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {onboardingStep === 1 && <RoleSelection />}
          {onboardingStep === 2 && <QuickPreferences />}
          {onboardingStep === 3 && <StartPlatform />}
        </motion.main>
        
        <Footer />
      </div>
    );
  }

  // Get the title based on role
  const getDashboardTitle = () => {
    switch(role) {
      case 'developer':
        return 'Developer Dashboard';
      case 'enterprise':
        return 'Enterprise Dashboard';
      default:
        return 'My Dashboard';
    }
  };

  // Render the appropriate dashboard based on role
  return (
    <SidebarProvider collapsedWidth={56}>
      <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
        <Helmet>
          <title>SireIQ | {getDashboardTitle()}</title>
          <meta name="description" content={`Your personalized SireIQ ${role} dashboard.`} />
        </Helmet>
        
        <Navbar />
        
        <div className="flex w-full">
          <motion.main 
            className="container mx-auto pt-28 pb-20 px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-sireiq-accent/20">
              <h1 className="text-2xl font-bold text-gradient">{getDashboardTitle()}</h1>
              
              <div className="flex items-center gap-3">
                <EdgeSyncIndicator />
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
              {/* Main content area - 5 columns */}
              <div className="lg:col-span-5 space-y-6">
                {role === 'user' && <UserDashboard />}
                {role === 'developer' && <DeveloperDashboard />}
                {role === 'enterprise' && <EnterpriseDashboard />}
              </div>
              
              {/* Sidebar - 2 columns */}
              <div className="lg:col-span-2 space-y-6">
                {/* Memory Snapshot is added here */}
                <MemorySnapshot />
                
                {/* Keep original sidebar content */}
                {/* User stats */}
                {/* Premium features */}
              </div>
            </div>
          </motion.main>
        </div>
        
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
