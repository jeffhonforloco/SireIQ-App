
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRole } from '@/contexts/RoleContext';
import UserDashboard from '@/components/dashboards/UserDashboard';
import DeveloperDashboard from '@/components/dashboards/DeveloperDashboard';
import EnterpriseDashboard from '@/components/dashboards/EnterpriseDashboard';
import RoleSelection from '@/components/onboarding/RoleSelection';

const Dashboard = () => {
  const { role, isFirstTimeUser } = useRole();

  // If user hasn't selected a role yet, show role selection
  if (isFirstTimeUser || !role) {
    return (
      <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
        <Helmet>
          <title>Welcome to SireIQ | Select Your Role</title>
          <meta name="description" content="Choose how you'd like to use SireIQ to customize your experience." />
        </Helmet>
        
        <Navbar />
        
        <main className="container mx-auto pt-32 pb-20">
          <RoleSelection />
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
