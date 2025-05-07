
import React from 'react';
import { ArrowRight, Check, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface EnterpriseProtectionProps {
  setDemoModalOpen: (open: boolean) => void;
}

const EnterpriseProtection: React.FC<EnterpriseProtectionProps> = ({ setDemoModalOpen }) => {
  return (
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
  );
};

export default EnterpriseProtection;
