
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import PageHeader from '@/components/trust/PageHeader';
import CertificationsSection from '@/components/trust/CertificationsSection';
import SecurityOverviewSection from '@/components/trust/SecurityOverviewSection';
import FAQSection from '@/components/trust/FAQSection';
import DocumentRequestSection from '@/components/trust/DocumentRequestSection';
import DocumentsTableSection from '@/components/trust/DocumentsTableSection';

const TrustAndCompliance = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>SireIQ Trust & Compliance | Security You Can Count On</title>
        <meta name="description" content="Learn about SireIQ's commitment to security, compliance, and data protection standards that keep your creative projects and business data safe." />
      </Helmet>
      
      <ParticleBackground />
      <Navbar />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader />
          <CertificationsSection />
          <SecurityOverviewSection />
          <FAQSection />
          <DocumentRequestSection />
          <DocumentsTableSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrustAndCompliance;
