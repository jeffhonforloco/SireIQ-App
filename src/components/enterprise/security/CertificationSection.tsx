
import React from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface CertificationSectionProps {
  handleCertificateClick: (cert: string) => void;
}

const CertificationSection: React.FC<CertificationSectionProps> = ({ handleCertificateClick }) => {
  const navigate = useNavigate();
  
  const handleViewCompliance = () => {
    navigate('/features/security-compliance');
  };
  
  return (
    <section className="container mx-auto px-4 mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        <span className="text-gradient">Security</span> Certifications
      </h2>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8">
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
      
      <div className="text-center">
        <button 
          onClick={handleViewCompliance}
          className="text-sireiq-cyan hover:text-sireiq-cyan/80 underline underline-offset-4 font-medium text-sm"
        >
          View detailed compliance information
        </button>
      </div>
    </section>
  );
};

export default CertificationSection;
