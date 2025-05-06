
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
import AccountTypeSwitcher from '@/components/AccountTypeSwitcher';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
          variants={containerVariants}
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
        return 'User Dashboard';
    }
  };

  // Render the appropriate dashboard based on role
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>SireIQ Dashboard | {role.charAt(0).toUpperCase() + role.slice(1)}</title>
        <meta name="description" content={`Your personalized SireIQ ${role} dashboard.`} />
      </Helmet>
      
      <Navbar />
      
      <motion.main 
        className="container mx-auto pt-28 pb-20 px-4 md:px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-sireiq-accent/20"
          variants={itemVariants}
        >
          <div>
            <h1 className="text-2xl font-bold text-gradient">{getDashboardTitle()}</h1>
            <p className="text-sireiq-light/70">Welcome back! Manage your projects and settings here.</p>
          </div>
          <AccountTypeSwitcher />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          {role === 'user' && <UserDashboard />}
          {role === 'developer' && <DeveloperDashboard />}
          {role === 'enterprise' && <EnterpriseDashboard />}
        </motion.div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
