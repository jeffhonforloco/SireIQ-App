
import React from 'react';
import { Shield, CheckCircle, FileCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import InfoTooltip from '@/components/InfoTooltip';

interface CertificationProps {
  title: string;
  description: string;
  icon: React.ElementType;
  tooltip: string;
}

const CertificationsSection = () => {
  const complianceCertifications: CertificationProps[] = [
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
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Industry-Leading Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {complianceCertifications.map((cert, index) => (
          <Card 
            key={index} 
            className="glass-effect bg-sireiq-darker border-sireiq-accent/20 relative overflow-visible"
          >
            <CardContent className="p-6">
              <div className="absolute top-6 right-6">
                <InfoTooltip content={cert.tooltip} />
              </div>
              <div className="mb-4 text-sireiq-cyan">
                <cert.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-sireiq-light/70">{cert.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
