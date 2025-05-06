
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, CheckCircle, FileCheck, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import InfoTooltip from '@/components/InfoTooltip';
import ParticleBackground from '@/components/ParticleBackground';
import DisclosureAccordion from '@/components/DisclosureAccordion';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { toast } from "sonner";

const TrustAndCompliance = () => {
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  
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

  const securityMeasures = [
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

  const complianceDocuments = [
    { name: 'Security Whitepaper', type: 'PDF', size: '4.2 MB' },
    { name: 'Privacy Policy', type: 'PDF', size: '1.8 MB' },
    { name: 'GDPR Compliance Statement', type: 'PDF', size: '2.1 MB' },
    { name: 'Penetration Test Summary', type: 'PDF', size: '3.5 MB' },
    { name: 'Incident Response Plan', type: 'PDF', size: '2.3 MB' }
  ];
  
  const handleDocumentRequest = () => {
    setRequestSubmitted(true);
    toast.success("Document request submitted. Our team will contact you shortly.");
  };
  
  const handleDocumentDownload = (documentName) => {
    toast("This is a sample document. In production, this would download the actual file.", {
      description: `You selected: ${documentName}`,
      action: {
        label: "Dismiss",
        onClick: () => console.log("Dismissed")
      }
    });
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>SireIQ Trust & Compliance | Security You Can Count On</title>
        <meta name="description" content="Learn about SireIQ's commitment to security, compliance, and data protection standards that keep your creative projects and business data safe." />
      </Helmet>
      
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

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <DisclosureAccordion title="How does SireIQ handle user data?">
                <p className="text-sireiq-light/70">
                  SireIQ follows strict data handling protocols in compliance with international standards. 
                  We collect only necessary data, encrypt all sensitive information, and never sell user data to third parties. 
                  Our comprehensive Data Processing Agreement details exactly how your data is used and protected.
                </p>
              </DisclosureAccordion>
              
              <DisclosureAccordion title="What happens if there's a security breach?">
                <p className="text-sireiq-light/70">
                  We maintain a robust Incident Response Plan that includes immediate notification to affected users, 
                  containment measures, comprehensive investigation, and transparent communication throughout the process. 
                  Our security team conducts regular drills to ensure rapid response to any potential incidents.
                </p>
              </DisclosureAccordion>
              
              <DisclosureAccordion title="How do you ensure compliance with different regional regulations?">
                <p className="text-sireiq-light/70">
                  Our legal and compliance team continuously monitors regulatory changes across all regions where we operate. 
                  We maintain region-specific data handling processes where required (such as EU data remaining in EU data centers) 
                  and regularly update our practices to accommodate emerging compliance requirements.
                </p>
              </DisclosureAccordion>
              
              <DisclosureAccordion title="Can I get a copy of your security certifications?">
                <p className="text-sireiq-light/70">
                  Yes, we provide security documentation to customers under NDA. Please use the "Request Documentation" 
                  section below to submit your request, and our compliance team will contact you with the necessary 
                  paperwork and process to share our detailed security reports and certifications.
                </p>
              </DisclosureAccordion>
            </div>
          </section>

          {/* Compliance Documents */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Compliance Documentation</h2>
            <div className="glass-effect rounded-xl p-8">
              {!requestSubmitted ? (
                <>
                  <p className="text-center mb-6">
                    Request access to our detailed compliance reports and documentation.
                  </p>
                  <div className="flex justify-center">
                    <Button 
                      onClick={handleDocumentRequest}
                      className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Request Documentation
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Request Submitted</h3>
                  <p className="mb-4">
                    Thank you for your interest in our compliance documentation.
                    <br />Our security team will contact you within 1 business day.
                  </p>
                </div>
              )}
            </div>
          </section>
          
          {/* Available Documents */}
          <section>
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Available Public Documents</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {complianceDocuments.map((doc, i) => (
                      <TableRow key={i}>
                        <TableCell>{doc.name}</TableCell>
                        <TableCell>{doc.type}</TableCell>
                        <TableCell>{doc.size}</TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-sireiq-cyan border-sireiq-cyan/30 hover:bg-sireiq-cyan/10"
                            onClick={() => handleDocumentDownload(doc.name)}
                          >
                            <Download className="h-4 w-4 mr-1" /> Download
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrustAndCompliance;
