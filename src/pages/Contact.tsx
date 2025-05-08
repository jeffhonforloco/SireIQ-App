
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactOptions from '@/components/contact/ContactOptions';
import ContactFormSection from '@/components/contact/ContactFormSection';
import FAQ from '@/components/contact/FAQ';
import GlobalPresence from '@/components/contact/GlobalPresence';

const Contact = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Contact Us | SireIQ</title>
        <meta name="description" content="Get in touch with the SireIQ team for sales, support, or general inquiries." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <ContactHeader />
          <ContactOptions />
          <ContactFormSection />
          <FAQ />
          <GlobalPresence />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
