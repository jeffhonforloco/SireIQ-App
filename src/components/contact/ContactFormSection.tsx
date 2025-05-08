
import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactFormSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default ContactFormSection;
