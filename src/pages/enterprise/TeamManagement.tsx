
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import DemoRequestModal from '@/components/enterprise/DemoRequestModal';

import HeroSection from '@/components/enterprise/TeamManagement/HeroSection';
import TeamManagementTabs from '@/components/enterprise/TeamManagement/TeamManagementTabs';
import FeaturesGrid from '@/components/enterprise/TeamManagement/FeaturesGrid';
import TeamManagementCta from '@/components/enterprise/TeamManagement/TeamManagementCta';

const TeamManagement = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  
  const teamMembers = [
    { id: 1, name: "Alex Johnson", role: "Admin", email: "alex@example.com", avatar: "AJ" },
    { id: 2, name: "Sarah Williams", role: "Editor", email: "sarah@example.com", avatar: "SW" },
    { id: 3, name: "Michael Chen", role: "Viewer", email: "michael@example.com", avatar: "MC" },
    { id: 4, name: "Emma Davis", role: "Editor", email: "emma@example.com", avatar: "ED" },
  ];
  
  const teamRoles = [
    { name: "Admin", description: "Full access to all features and settings", color: "bg-red-500" },
    { name: "Editor", description: "Can edit content but not manage team or settings", color: "bg-blue-500" },
    { name: "Viewer", description: "Read-only access to content", color: "bg-green-500" },
  ];

  const features = [
    {
      title: "Role-Based Access Control",
      description: "Define custom roles with granular permissions tailored to your organization's structure."
    },
    {
      title: "Audit Logging",
      description: "Track all user activities with detailed logs for security and compliance purposes."
    },
    {
      title: "Team Onboarding",
      description: "Streamlined onboarding flows to get new team members up and running quickly."
    },
    {
      title: "Usage Analytics",
      description: "Monitor user activity and resource usage across your organization."
    },
    {
      title: "Team Collaboration",
      description: "Enable seamless collaboration with shared workspaces and controlled access."
    },
    {
      title: "Custom Permissions",
      description: "Create custom permission sets for specialized roles within your team."
    }
  ];

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Team Management | SireIQ Enterprise</title>
        <meta name="description" content="Centralized controls and permissions for your entire creative team with SireIQ's enterprise team management." />
      </Helmet>
      
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <HeroSection />
        <TeamManagementTabs teamMembers={teamMembers} teamRoles={teamRoles} />
        <FeaturesGrid features={features} />
        <TeamManagementCta onDemoRequest={() => setDemoModalOpen(true)} />
      </main>
      
      <CTASection />
      <Footer />
      
      <DemoRequestModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  );
};

export default TeamManagement;
