
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Lock, FileCheck, Search, AlertTriangle, ClipboardCheck, Shield, Check, FileWarning } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const ComplianceControls = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Compliance Controls | SireIQ Enterprise</title>
        <meta name="description" content="Ensure all AI-generated content meets your regulatory and compliance requirements with SireIQ's powerful compliance tools." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <ShieldCheck className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Compliance</span> Controls
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Ensure all AI-generated content meets your regulatory and compliance requirements.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: FileCheck,
                  title: "Content Policies",
                  description: "Create custom policies to ensure compliance with regulations"
                },
                {
                  icon: Search,
                  title: "Content Scanning",
                  description: "Automatically scan content for compliance issues before publishing"
                },
                {
                  icon: ClipboardCheck,
                  title: "Audit Trail",
                  description: "Comprehensive logs of all content creation and approval processes"
                }
              ].map((feature, index) => (
                <div key={index} className="glass-effect rounded-lg p-6 border border-sireiq-accent/20 text-center">
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
        
        {/* Compliance dashboard */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
              <div className="bg-sireiq-darker rounded-lg p-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-xl text-sireiq-cyan">Compliance Dashboard</h3>
                  <Button size="sm" className="bg-sireiq-cyan text-sireiq-darker text-xs h-8">
                    Generate Report
                  </Button>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-sireiq-accent/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold mb-1 text-green-400">98%</div>
                    <div className="text-xs text-sireiq-light/70">Compliance Rate</div>
                  </div>
                  <div className="bg-sireiq-accent/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold mb-1">243</div>
                    <div className="text-xs text-sireiq-light/70">Items Reviewed</div>
                  </div>
                  <div className="bg-sireiq-accent/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold mb-1 text-yellow-400">5</div>
                    <div className="text-xs text-sireiq-light/70">Pending Reviews</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-sireiq-accent/5 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center mr-2">
                          <Check className="h-3 w-3 text-green-400" />
                        </div>
                        <span className="font-medium text-sm">GDPR Compliance</span>
                      </div>
                      <span className="text-xs text-green-400">Passed</span>
                    </div>
                    <div className="w-full h-1.5 bg-sireiq-accent/10 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-sireiq-accent/5 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center mr-2">
                          <Check className="h-3 w-3 text-green-400" />
                        </div>
                        <span className="font-medium text-sm">Brand Guidelines</span>
                      </div>
                      <span className="text-xs text-green-400">Passed</span>
                    </div>
                    <div className="w-full h-1.5 bg-sireiq-accent/10 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-sireiq-accent/5 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-yellow-400/20 flex items-center justify-center mr-2">
                          <AlertTriangle className="h-3 w-3 text-yellow-400" />
                        </div>
                        <span className="font-medium text-sm">Legal Disclaimer Usage</span>
                      </div>
                      <span className="text-xs text-yellow-400">Review Needed</span>
                    </div>
                    <div className="w-full h-1.5 bg-sireiq-accent/10 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-sireiq-accent/5 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center mr-2">
                          <Check className="h-3 w-3 text-green-400" />
                        </div>
                        <span className="font-medium text-sm">Industry Regulations</span>
                      </div>
                      <span className="text-xs text-green-400">Passed</span>
                    </div>
                    <div className="w-full h-1.5 bg-sireiq-accent/10 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">AI-Powered</span> Compliance
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                SireIQ's compliance controls ensure that all content generated through the platform adheres to your organization's policies and regulatory requirements, reducing risk and saving time on manual reviews.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Define custom content policies and compliance guardrails",
                  "Automated scanning against regulatory requirements",
                  "Alert system for potential compliance issues",
                  "Enforce mandatory disclaimers and legal language",
                  "Detailed audit trails for regulatory reporting"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-sireiq-cyan/20 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-sireiq-cyan rounded-full"></div>
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                Explore Compliance Features <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Regulatory compliance */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Regulatory</span> Compliance
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="glass-effect rounded-xl p-8 border border-sireiq-accent/30 mb-8">
              <h3 className="text-xl font-bold mb-6 text-center">Industry & Regional Regulations</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Financial Services",
                    regulations: ["SEC", "FINRA", "Basel III", "MiFID II"],
                    icon: Shield
                  },
                  {
                    name: "Healthcare",
                    regulations: ["HIPAA", "HITECH", "FDA", "EMA"],
                    icon: Shield
                  },
                  {
                    name: "Privacy & Data",
                    regulations: ["GDPR", "CCPA", "CPRA", "LGPD"],
                    icon: Lock
                  }
                ].map((industry, index) => (
                  <div key={index} className="bg-sireiq-darker rounded-lg p-4 border border-sireiq-accent/20">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-sireiq-accent/20 flex items-center justify-center mr-3">
                        <industry.icon className="h-5 w-5 text-sireiq-cyan" />
                      </div>
                      <h4 className="font-bold">{industry.name}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {industry.regulations.map((reg, i) => (
                        <div key={i} className="px-3 py-1 bg-sireiq-accent/10 rounded-full text-xs">
                          {reg}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-sireiq-darker rounded-lg p-6 border border-sireiq-accent/20">
                <div className="flex items-center mb-4">
                  <FileWarning className="h-6 w-6 text-sireiq-cyan mr-3" />
                  <h3 className="text-xl font-bold">Content Guardrails</h3>
                </div>
                <p className="text-sireiq-light/70 mb-4">
                  Configure content guardrails to automatically enforce compliance with industry regulations and company policies.
                </p>
                <div className="space-y-2">
                  {[
                    "Required disclosure detection",
                    "Restricted language identification",
                    "Claims verification requirements",
                    "Custom terminology enforcement"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-sireiq-cyan mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-sireiq-darker rounded-lg p-6 border border-sireiq-accent/20">
                <div className="flex items-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-sireiq-cyan mr-3" />
                  <h3 className="text-xl font-bold">Audit & Reporting</h3>
                </div>
                <p className="text-sireiq-light/70 mb-4">
                  Comprehensive audit trails and reporting capabilities for regulatory compliance and internal governance.
                </p>
                <div className="space-y-2">
                  {[
                    "Content creation activity logs",
                    "User access reports",
                    "Compliance review history",
                    "Exportable reports for auditors"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-sireiq-cyan mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default ComplianceControls;
