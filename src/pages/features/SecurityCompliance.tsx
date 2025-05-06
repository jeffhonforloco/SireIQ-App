
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Shield, FileText, CheckCircle, AlertTriangle, Download, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import DocumentsTableSection from '@/components/trust/DocumentsTableSection';
import ComplianceStatusCard from '@/components/enterprise/ComplianceStatusCard';
import DisclosureAccordion from '@/components/DisclosureAccordion';

const SecurityCompliance = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleDownload = (reportName: string) => {
    setIsLoading(true);
    
    // Simulate download delay
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`${reportName} downloaded successfully`);
    }, 1500);
  };
  
  const handleScheduleAudit = () => {
    toast.success('Security audit scheduled. You will be contacted by our team within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Security Compliance | SireIQ</title>
        <meta name="description" content="Comprehensive security compliance information, certifications, and documentation for SireIQ's enterprise platform." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero section */}
          <section className="mb-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Security <span className="text-gradient">Compliance</span> Center
            </h1>
            <p className="text-lg text-sireiq-light/70 max-w-3xl mx-auto">
              Access detailed compliance information, download certificates, and monitor your organization's security posture in real-time.
            </p>
          </section>
          
          {/* Main tabs navigation */}
          <Tabs 
            defaultValue="overview" 
            className="w-full mb-16" 
            value={activeTab}
            onValueChange={(value) => {
              setActiveTab(value);
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 800);
            }}
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-sireiq-accent/10">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="reports">Compliance Reports</TabsTrigger>
                <TabsTrigger value="documents">Documentation</TabsTrigger>
                <TabsTrigger value="status">Real-time Status</TabsTrigger>
              </TabsList>
            </div>
            
            <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
              {/* Overview tab */}
              <TabsContent value="overview" className="space-y-6">
                <Card className="bg-sireiq-darker border-sireiq-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-6 w-6 text-sireiq-cyan" />
                      Compliance Overview
                    </CardTitle>
                    <CardDescription>
                      Current compliance status and certifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Compliance status card */}
                    <ComplianceStatusCard />
                    
                    {/* Key certifications */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { name: 'SOC 2 Type II', status: 'Active', expiry: 'September 15, 2025', icon: Shield },
                        { name: 'ISO 27001', status: 'Active', expiry: 'August 10, 2025', icon: CheckCircle },
                        { name: 'HIPAA Compliance', status: 'Active', expiry: 'July 20, 2025', icon: FileText }
                      ].map((cert, i) => (
                        <div key={i} className="glass-effect p-4 rounded-lg border border-sireiq-accent/30">
                          <div className="flex items-center gap-2 mb-2">
                            <cert.icon className="h-5 w-5 text-sireiq-cyan" />
                            <h3 className="font-bold">{cert.name}</h3>
                          </div>
                          <p className="text-sm flex items-center text-green-400 mb-1">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            {cert.status}
                          </p>
                          <p className="text-xs text-sireiq-light/70 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            Valid until: {cert.expiry}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Compliance Reports tab */}
              <TabsContent value="reports" className="space-y-6">
                <Card className="bg-sireiq-darker border-sireiq-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-6 w-6 text-sireiq-cyan" />
                      Interactive Compliance Reports
                    </CardTitle>
                    <CardDescription>
                      Access detailed compliance reports and analytics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          title: 'Security Posture Report',
                          description: 'Comprehensive analysis of your organization\'s security posture with actionable insights.',
                          updated: 'May 2, 2025',
                          type: 'Interactive Dashboard'
                        },
                        {
                          title: 'Risk Assessment',
                          description: 'Detailed evaluation of potential security risks and mitigation strategies.',
                          updated: 'April 28, 2025',
                          type: 'PDF Report'
                        },
                        {
                          title: 'Compliance Audit Results',
                          description: 'Results from the latest compliance audit including findings and recommendations.',
                          updated: 'April 15, 2025',
                          type: 'Interactive Dashboard'
                        },
                        {
                          title: 'Data Processing Assessment',
                          description: 'Analysis of data processing activities and compliance with relevant regulations.',
                          updated: 'March 30, 2025',
                          type: 'PDF Report'
                        }
                      ].map((report, i) => (
                        <div key={i} className="glass-effect p-6 rounded-lg border border-sireiq-accent/30 hover:border-sireiq-cyan/40 transition-colors">
                          <h3 className="text-xl font-bold mb-2">{report.title}</h3>
                          <p className="text-sm text-sireiq-light/70 mb-4">{report.description}</p>
                          <div className="flex justify-between items-center text-xs text-sireiq-light/50 mb-4">
                            <span>Updated: {report.updated}</span>
                            <span>{report.type}</span>
                          </div>
                          <Button 
                            className="w-full bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90"
                            onClick={() => handleDownload(report.title)}
                            disabled={isLoading}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            {isLoading ? 'Downloading...' : 'Download Report'}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Documentation tab */}
              <TabsContent value="documents" className="space-y-6">
                <DocumentsTableSection />
                
                <Card className="bg-sireiq-darker border-sireiq-accent/20 mt-8">
                  <CardHeader>
                    <CardTitle>Compliance Frameworks</CardTitle>
                    <CardDescription>
                      Detailed information about the compliance frameworks we adhere to
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <DisclosureAccordion title="GDPR Compliance">
                      <div className="space-y-4">
                        <p>
                          The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy in the European Union and the European Economic Area. SireIQ implements the following measures to ensure GDPR compliance:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Data minimization and purpose limitation</li>
                          <li>Robust data subject access rights implementation</li>
                          <li>Privacy by design and default in all services</li>
                          <li>Comprehensive data processing records</li>
                          <li>Regular Data Protection Impact Assessments (DPIAs)</li>
                        </ul>
                        <Button 
                          variant="outline" 
                          className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
                          onClick={() => handleDownload('GDPR Compliance Statement')}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download Full GDPR Documentation
                        </Button>
                      </div>
                    </DisclosureAccordion>
                    
                    <DisclosureAccordion title="SOC 2 Compliance">
                      <div className="space-y-4">
                        <p>
                          SOC 2 is an auditing procedure that ensures service providers securely manage data to protect the interests of your organization and the privacy of its clients. SireIQ has implemented controls for the following trust service criteria:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Security - Systems are protected against unauthorized access</li>
                          <li>Availability - Systems are available for operation and use</li>
                          <li>Processing Integrity - System processing is complete, valid, accurate, timely, and authorized</li>
                          <li>Confidentiality - Information designated as confidential is protected</li>
                          <li>Privacy - Personal information is collected, used, retained, disclosed, and disposed of properly</li>
                        </ul>
                        <Button 
                          variant="outline" 
                          className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
                          onClick={() => handleDownload('SOC 2 Executive Summary')}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download SOC 2 Executive Summary
                        </Button>
                      </div>
                    </DisclosureAccordion>
                    
                    <DisclosureAccordion title="HIPAA Compliance">
                      <div className="space-y-4">
                        <p>
                          The Health Insurance Portability and Accountability Act (HIPAA) sets the standard for protecting sensitive patient data. SireIQ ensures HIPAA compliance through:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>End-to-end encryption for all PHI (Protected Health Information)</li>
                          <li>Role-based access controls and extensive audit logging</li>
                          <li>Business Associate Agreements (BAAs) with all relevant partners</li>
                          <li>Regular HIPAA-focused security assessments</li>
                          <li>Comprehensive incident response planning specific to PHI</li>
                        </ul>
                        <Button 
                          variant="outline" 
                          className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
                          onClick={() => handleDownload('HIPAA Compliance Documentation')}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download HIPAA Documentation
                        </Button>
                      </div>
                    </DisclosureAccordion>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Real-time Status tab */}
              <TabsContent value="status" className="space-y-6">
                <Card className="bg-sireiq-darker border-sireiq-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-6 w-6 text-sireiq-cyan" />
                      Real-time Compliance Status
                    </CardTitle>
                    <CardDescription>
                      Monitor your compliance status and any active issues
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Overall security health */}
                    <div className="glass-effect p-6 rounded-lg border border-sireiq-accent/30">
                      <h3 className="font-bold mb-4">Overall Security Health</h3>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-full bg-sireiq-accent/20 rounded-full h-4">
                          <div 
                            className="bg-gradient-to-r from-sireiq-cyan to-green-500 h-4 rounded-full" 
                            style={{ width: '92%' }}
                          ></div>
                        </div>
                        <span className="font-bold text-lg">92%</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        {[
                          { label: 'Controls Implemented', value: '48/52', color: 'text-green-400' },
                          { label: 'Action Items', value: '2', color: 'text-yellow-400' },
                          { label: 'Critical Issues', value: '0', color: 'text-green-400' }
                        ].map((stat, i) => (
                          <div key={i} className="p-3 bg-sireiq-accent/5 rounded-md">
                            <p className="text-xs text-sireiq-light/70 mb-1">{stat.label}</p>
                            <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Compliance issues */}
                    <div>
                      <h3 className="font-bold mb-4">Active Compliance Items</h3>
                      <div className="space-y-4">
                        {[
                          { 
                            title: 'Password Policy Update Required',
                            description: 'Update password policy to require 14+ characters with special requirements.',
                            severity: 'Medium',
                            dueDate: 'May 20, 2025',
                            icon: AlertTriangle,
                            iconColor: 'text-yellow-400'
                          },
                          { 
                            title: 'Access Review Needed',
                            description: 'Quarterly access review is due for all production systems.',
                            severity: 'Low',
                            dueDate: 'May 30, 2025',
                            icon: Clock,
                            iconColor: 'text-blue-400'
                          }
                        ].map((issue, i) => (
                          <div key={i} className="flex items-start gap-4 p-4 border border-sireiq-accent/20 rounded-md bg-sireiq-accent/5">
                            <div className={issue.iconColor}>
                              <issue.icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <h4 className="font-medium">{issue.title}</h4>
                                <span className={`text-xs px-2 py-1 rounded ${
                                  issue.severity === 'High' ? 'bg-red-500/20 text-red-400' :
                                  issue.severity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                  'bg-blue-500/20 text-blue-400'
                                }`}>
                                  {issue.severity}
                                </span>
                              </div>
                              <p className="text-sm text-sireiq-light/70 my-1">{issue.description}</p>
                              <div className="text-xs text-sireiq-light/50">
                                Due by: {issue.dueDate}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90"
                        onClick={handleScheduleAudit}
                      >
                        <Shield className="h-4 w-4 mr-2" />
                        Schedule Security Audit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default SecurityCompliance;
