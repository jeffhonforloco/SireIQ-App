
import React from 'react';
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

const Dashboard = () => {
  const { role, isFirstTimeUser, onboardingStep } = useRole();

  // If user is in onboarding process
  if (isFirstTimeUser || !role) {
    return (
      <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
        <Helmet>
          <title>Welcome to SireIQ | Onboarding</title>
          <meta name="description" content="Set up your SireIQ experience with a few quick steps." />
        </Helmet>
        
        <Navbar />
        
        <main className="container mx-auto pt-32 pb-20">
          {onboardingStep === 1 && <RoleSelection />}
          {onboardingStep === 2 && <QuickPreferences />}
          {onboardingStep === 3 && <StartPlatform />}
        </main>
        
        <Footer />
      </div>
    );
  }

  // Render the appropriate dashboard based on role
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>SireIQ Dashboard | {role.charAt(0).toUpperCase() + role.slice(1)}</title>
        <meta name="description" content={`Your personalized SireIQ ${role} dashboard.`} />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto pt-28 pb-20">
        {role === 'user' && <UserDashboard />}
        {role === 'developer' && <DeveloperDashboard />}
        {role === 'enterprise' && <EnterpriseDashboard />}
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
