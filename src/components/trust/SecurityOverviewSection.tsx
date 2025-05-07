
import React from 'react';
import InfoTooltip from '@/components/InfoTooltip';

interface SecurityMeasureProps {
  title: string;
  description: string;
  tooltip: string;
}

const SecurityOverviewSection = () => {
  const securityMeasures: SecurityMeasureProps[] = [
    {
      title: 'Data Encryption',
      description: 'All data is encrypted at rest and in transit using AES-256 encryption, ensuring your information remains secure at all times.',
      tooltip: 'AES-256 encryption'
    },
    {
      title: 'Access Controls',
      description: 'Our platform implements strict role-based access controls and multi-factor authentication to protect accounts and creative assets.',
      tooltip: 'Role-based access control'
    },
    {
      title: 'Regular Security Audits',
      description: 'We conduct quarterly security audits and vulnerability assessments to identify and address potential risks before they become issues.',
      tooltip: 'Quarterly security audits'
    },
    {
      title: 'Intrusion Detection',
      description: 'Our advanced intrusion detection and prevention systems monitor for and block suspicious activities in real-time.',
      tooltip: '24/7 monitoring systems'
    }
  ];

  return (
    <section className="mb-16">
      <div className="glass-effect rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Security Overview</h2>
        <div className="space-y-6">
          {securityMeasures.map((measure, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                {measure.title}
                <InfoTooltip content={measure.tooltip} className="ml-2" />
              </h3>
              <p className="text-sireiq-light/70">
                {measure.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityOverviewSection;
