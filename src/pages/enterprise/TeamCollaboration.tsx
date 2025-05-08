
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Share2, MessageSquare, Calendar, History, RotateCcw } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

// Import our new component sections
import HeroSection from '@/components/enterprise/team-collaboration/HeroSection';
import CollaborationFeaturesSection from '@/components/enterprise/team-collaboration/CollaborationFeaturesSection';
import TeamWorkspacesSection from '@/components/enterprise/team-collaboration/TeamWorkspacesSection';

const TeamCollaboration = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Team Collaboration | SireIQ Enterprise</title>
        <meta name="description" content="Foster seamless collaboration across your creative teams with SireIQ's powerful team features and real-time editing capabilities." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <HeroSection />
        
        {/* Collaboration features */}
        <CollaborationFeaturesSection />
        
        {/* Team workspace section */}
        <TeamWorkspacesSection />
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default TeamCollaboration;
