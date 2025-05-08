
import React from 'react';
import { Mail, Info } from 'lucide-react';
import ContactOption from './ContactOption';

const ContactOptions: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <ContactOption 
        icon={Mail}
        title="Email Us"
        description="For general inquiries and information"
        contactInfo="info@sireiq.com"
      />
      
      <ContactOption 
        icon={Info}
        title="Online Support"
        description="Get help from our support team"
        contactInfo="support@sireiq.com"
      />
    </div>
  );
};

export default ContactOptions;
