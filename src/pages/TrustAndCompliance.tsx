
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, CheckCircle, FileCheck } from 'lucide-react';
import InfoTooltip from '@/components/InfoTooltip';
import ParticleBackground from '@/components/ParticleBackground';

const TrustAndCompliance = () => {
  const complianceCertifications = [
    {
      title: 'SOC 2 Type 2',
      description: 'SireIQ has successfully completed SOC 2 Type 2 examination, verifying our security, availability, and confidentiality practices.',
      icon: Shield,
      tooltip: 'Service Organization Control report'
    },
    {
      title: 'ISO 27001',
      description: 'Our information security management system (ISMS) is certified against the ISO 27001 standard, demonstrating our commitment to best practices.',
      icon: CheckCircle,
      tooltip: 'Information security management'
    },
    {
      title: 'GDPR Compliant',
      description: 'SireIQ adheres to all applicable requirements under the General Data Protection Regulation for EU data subjects.',
      icon: FileCheck,
      tooltip: 'EU data protection regulation'
    }
  ];

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <ParticleBackground />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trust & <span className="text-gradient">Compliance</span>
            </h1>
            <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto">
              Secure, transparent, and compliant. Your data and creative assets are protected with enterprise-grade security.
            </p>
          </header>

          {/* Certifications Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Industry-Leading Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {complianceCertifications.map((cert, index) => (
                <div key={index} className="glass-effect rounded-xl p-6 relative">
                  <div className="absolute top-6 right-6">
                    <InfoTooltip content={cert.tooltip} />
                  </div>
                  <div className="mb-4 text-sireiq-cyan">
                    <cert.icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-sireiq-light/70">{cert.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Security Overview */}
          <section className="mb-16">
            <div className="glass-effect rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Security Overview</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    Data Encryption
                    <InfoTooltip content="AES-256 encryption" className="ml-2" />
                  </h3>
                  <p className="text-sireiq-light/70">
                    All data is encrypted at rest and in transit using industry-standard encryption protocols.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    Access Controls
                    <InfoTooltip content="Role-based access control" className="ml-2" />
                  </h3>
                  <p className="text-sireiq-light/70">
                    Strict role-based access controls and multi-factor authentication protect your account and creative assets.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    Regular Audits
                    <InfoTooltip content="Quarterly security audits" className="ml-2" />
                  </h3>
                  <p className="text-sireiq-light/70">
                    We conduct regular security audits and vulnerability assessments to identify and address potential risks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Documents */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-center">Compliance Documentation</h2>
            <div className="glass-effect rounded-xl p-8">
              <p className="text-center mb-6">
                Request access to our detailed compliance reports and documentation.
              </p>
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  Request Documentation
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrustAndCompliance;
