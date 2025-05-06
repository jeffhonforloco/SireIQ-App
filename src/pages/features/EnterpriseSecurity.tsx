
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import DemoRequestModal from '@/components/enterprise/DemoRequestModal';
import { toast } from 'sonner';

// Import our new components
import HeroSection from '@/components/enterprise/security/HeroSection';
import CertificationSection from '@/components/enterprise/security/CertificationSection';
import SecurityDashboardTabs from '@/components/enterprise/security/SecurityDashboardTabs';
import EnterpriseProtection from '@/components/enterprise/security/EnterpriseProtection';
import ComplianceSection from '@/components/enterprise/security/ComplianceSection';

const EnterpriseSecurity = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleCertificateClick = (cert: string) => {
    toast.info(`${cert} details`, {
      description: `Viewing detailed information about ${cert} certification.`
    });
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Enterprise Security | SireIQ</title>
        <meta name="description" content="Rest easy with bank-level encryption and robust privacy controls protecting your creative assets." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <HeroSection />
        
        {/* Security certifications */}
        <CertificationSection handleCertificateClick={handleCertificateClick} />
        
        {/* Security Dashboard Tabs */}
        <SecurityDashboardTabs />
        
        {/* Features grid */}
        <EnterpriseProtection setDemoModalOpen={setDemoModalOpen} />
        
        {/* Compliance section */}
        <ComplianceSection />
      </main>
      
      <CTASection />
      
      <Footer />
      
      {/* Demo Request Modal */}
      <DemoRequestModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  );
};

export default EnterpriseSecurity;
