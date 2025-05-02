
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lock, Check, Shield, Key } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const EnterpriseSecurity = () => {
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
        
        {/* Security certifications */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Security</span> Certifications
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {["SOC 2 Type II", "GDPR Compliant", "HIPAA Compliant", "ISO 27001", "CCPA Compliant"].map((cert, index) => (
              <div key={index} className="glass-effect rounded-lg px-5 py-3 border border-sireiq-accent/20">
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </section>
        
        {/* Features grid */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Shield className="h-5 w-5 text-sireiq-cyan mr-2" />
                Security Dashboard
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Security Score</span>
                    <span className="text-green-400 font-bold">98/100</span>
                  </div>
                  <div className="w-full h-2 bg-sireiq-accent/20 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "2FA Enabled", status: "Enabled", color: "text-green-400" },
                    { name: "SSO Integration", status: "Active", color: "text-green-400" },
                    { name: "Data Encryption", status: "Enabled", color: "text-green-400" },
                    { name: "Last Security Scan", status: "Today", color: "text-green-400" }
                  ].map((item, i) => (
                    <div key={i} className="bg-sireiq-darker rounded-lg p-3">
                      <p className="text-xs text-sireiq-light/50 mb-1">{item.name}</p>
                      <p className={`font-medium ${item.color}`}>{item.status}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-sireiq-darker rounded-lg p-4">
                  <h4 className="text-sm font-medium mb-2">Recent Activity</h4>
                  <div className="space-y-3">
                    {[
                      { event: "Security scan completed", time: "Today, 09:45 AM" },
                      { event: "Admin login from new IP", time: "Yesterday, 02:15 PM" },
                      { event: "Password policy updated", time: "Jun 15, 2023, 11:30 AM" }
                    ].map((activity, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <p className="text-sireiq-light/80">{activity.event}</p>
                        <p className="text-xs text-sireiq-light/50">{activity.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
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
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-sireiq-cyan mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                Security Whitepaper <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
                <div key={index} className="bg-sireiq-darker rounded-lg p-4 border border-sireiq-accent/20">
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
    </div>
  );
};

export default EnterpriseSecurity;
