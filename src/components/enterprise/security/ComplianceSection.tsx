
import React from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ComplianceSection = () => {
  const navigate = useNavigate();
  
  const handleRegulationClick = (regulation: string, description: string) => {
    toast.info(`${regulation} Compliance Details`, { description });
  };
  
  const viewDetailedCompliance = () => {
    navigate('/features/security-compliance');
  };
  
  return (
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
              onClick={() => handleRegulationClick(item.regulation, item.description)}
            >
              <h3 className="font-bold mb-2">{item.regulation}</h3>
              <p className="text-sm text-sireiq-light/70">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            onClick={viewDetailedCompliance}
            className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90"
          >
            View Detailed Compliance Reports
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
