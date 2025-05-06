
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lock, Check, Shield, Key } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import DemoRequestModal from '@/components/enterprise/DemoRequestModal';
import SecurityDashboardCard from '@/components/enterprise/SecurityDashboardCard';
import SecurityEventsCard from '@/components/enterprise/SecurityEventsCard';
import SecurityHealthCard from '@/components/enterprise/SecurityHealthCard';
import ComplianceStatusCard from '@/components/enterprise/ComplianceStatusCard';
import { toast } from 'sonner';

const EnterpriseSecurity = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

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
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Lock className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Enterprise</span> Security
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Rest easy with bank-level encryption and robust privacy controls protecting your creative assets.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "End-to-End Encryption",
                  description: "AES-256 encryption for all data at rest and in transit"
                },
                {
                  icon: Lock,
                  title: "Private AI Processing",
                  description: "Your data never trains our models or gets shared with third parties"
                },
                {
                  icon: Key,
                  title: "Role-Based Access",
                  description: "Granular permission controls for team security"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-effect rounded-lg p-6 border border-sireiq-accent/20 text-center hover:border-sireiq-cyan/30 hover:translate-y-[-5px] transition-all cursor-pointer"
                  onClick={() => toast.info(feature.title, { description: feature.description })}
                >
                  <div className="w-12 h-12 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-sireiq-light/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Security certifications */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Security</span> Certifications
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {["SOC 2 Type II", "GDPR Compliant", "HIPAA Compliant", "ISO 27001", "CCPA Compliant"].map((cert, index) => (
              <div 
                key={index} 
                className="glass-effect rounded-lg px-5 py-3 border border-sireiq-accent/20 cursor-pointer hover:border-sireiq-cyan/40 hover:bg-sireiq-accent/10 transition-all"
                onClick={() => handleCertificateClick(cert)}
              >
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </section>
        
        {/* Security Dashboard Tabs */}
        <section className="container mx-auto px-4 mb-20">
          <Tabs 
            defaultValue="overview" 
            className="w-full" 
            value={activeTab}
            onValueChange={(value) => {
              setActiveTab(value);
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 800);
            }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="text-gradient">Security</span> Dashboard
              </h2>
              
              <TabsList className="bg-sireiq-accent/10">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
            </div>
            
            <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <SecurityDashboardCard />
                  <SecurityEventsCard />
                </div>
              </TabsContent>
              
              <TabsContent value="compliance" className="space-y-6">
                <ComplianceStatusCard />
                <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30">
                  <h3 className="text-xl font-bold mb-6">Regulatory Documentation</h3>
                  <p className="mb-4 text-sireiq-light/70">
                    Access and download our latest regulatory compliance documentation and certifications.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "GDPR Compliance Statement", date: "Updated May 2025" },
                      { name: "HIPAA Security Assessment", date: "Updated March 2025" },
                      { name: "SOC 2 Type II Report", date: "Updated January 2025" },
                      { name: "ISO 27001 Certification", date: "Valid until December 2026" }
                    ].map((doc, i) => (
                      <div key={i} className="p-4 border border-sireiq-accent/20 rounded-md hover:bg-sireiq-accent/5 cursor-pointer transition-colors" onClick={() => toast.success(`Downloading ${doc.name}...`)}>
                        <h4 className="font-medium">{doc.name}</h4>
                        <p className="text-xs text-sireiq-light/50">{doc.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="activity" className="space-y-6">
                <SecurityHealthCard />
                <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30">
                  <h3 className="text-xl font-bold mb-4">Security Alerts</h3>
                  <div className="space-y-4">
                    {[
                      { title: "System update scheduled", message: "Security patches will be applied on May 15", severity: "info" },
                      { title: "New login location detected", message: "If this wasn't you, contact support immediately", severity: "warning" },
                      { title: "Data backup completed", message: "Automatic backup completed successfully", severity: "success" }
                    ].map((alert, i) => (
                      <div 
                        key={i} 
                        className={`p-4 rounded-md ${
                          alert.severity === 'warning' ? 'bg-yellow-500/10 border border-yellow-500/30' : 
                          alert.severity === 'info' ? 'bg-blue-500/10 border border-blue-500/30' : 
                          'bg-green-500/10 border border-green-500/30'
                        }`}
                      >
                        <h4 className="font-medium mb-1">{alert.title}</h4>
                        <p className="text-sm text-sireiq-light/70">{alert.message}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full border-sireiq-accent/30 hover:bg-sireiq-accent/10"
                    onClick={() => toast.info("Security alert settings opened")}
                  >
                    Configure Alert Settings
                  </Button>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </section>
        
        {/* Features grid */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Enterprise-Grade</span> Protection
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                SireIQ provides the highest level of security for your content and data. Our enterprise security features are designed to meet the needs of even the most security-conscious organizations, with robust protections at every level.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "SOC 2 Type II certified infrastructure", 
                  "Custom data retention policies", 
                  "Single Sign-On (SSO) integration", 
                  "Detailed security audit logs",
                  "Customer-managed encryption keys"
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <Check className="h-6 w-6 text-sireiq-cyan mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                onClick={() => setDemoModalOpen(true)}
              >
                Request Security Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 border border-sireiq-accent/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-sireiq-cyan/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-sireiq-cyan/10 rounded-full blur-3xl"></div>
              
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Shield className="h-5 w-5 text-sireiq-cyan mr-2" />
                Enterprise Security Features
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Private Cloud Deployment",
                    description: "Dedicated infrastructure isolated from other clients with enhanced security measures."
                  },
                  {
                    title: "Advanced Data Protection",
                    description: "Multiple encryption layers with customer-managed keys for maximum data security."
                  },
                  {
                    title: "Continuous Monitoring",
                    description: "24/7 security monitoring with automated threat detection and response."
                  },
                  {
                    title: "Custom Security Policies",
                    description: "Tailor security controls to match your organization's specific requirements."
                  }
                ].map((feature, i) => (
                  <div key={i} className="p-4 border border-sireiq-accent/20 rounded-lg hover:bg-sireiq-accent/5 transition-colors cursor-pointer" onClick={() => toast.info(feature.title, { description: feature.description })}>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-sireiq-light/70">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Compliance section */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Regulatory</span> Compliance
          </h2>
          
          <div className="max-w-3xl mx-auto glass-effect rounded-xl p-8 border border-sireiq-accent/30">
            <p className="text-center text-lg text-sireiq-light/70 mb-8">
              SireIQ helps you maintain compliance with major data protection regulations worldwide
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  regulation: "GDPR",
                  description: "Full compliance with European data protection regulations including data subject rights and processing records."
                },
                {
                  regulation: "CCPA/CPRA",
                  description: "Tools to help you fulfill California consumer privacy requirements and data deletion requests."
                },
                {
                  regulation: "HIPAA",
                  description: "Enhanced security controls for handling protected health information in healthcare communications."
                },
                {
                  regulation: "FERPA",
                  description: "Appropriate safeguards for educational institutions working with student data and records."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-sireiq-darker rounded-lg p-4 border border-sireiq-accent/20 hover:border-sireiq-cyan/30 hover:bg-sireiq-accent/5 transition-all cursor-pointer"
                  onClick={() => toast.info(`${item.regulation} Compliance Details`, { description: item.description })}
                >
                  <h3 className="font-bold mb-2">{item.regulation}</h3>
                  <p className="text-sm text-sireiq-light/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
      
      {/* Demo Request Modal */}
      <DemoRequestModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  );
};

export default EnterpriseSecurity;
