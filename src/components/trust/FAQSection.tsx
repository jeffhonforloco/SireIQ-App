
import React from 'react';
import DisclosureAccordion from '@/components/DisclosureAccordion';

const FAQSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        <DisclosureAccordion title="How does SireIQ handle user data?">
          <p className="text-sireiq-light/70">
            SireIQ follows strict data handling protocols in compliance with international standards. 
            We collect only necessary data, encrypt all sensitive information, and never sell user data to third parties. 
            Our comprehensive Data Processing Agreement details exactly how your data is used and protected.
          </p>
        </DisclosureAccordion>
        
        <DisclosureAccordion title="What happens if there's a security breach?">
          <p className="text-sireiq-light/70">
            We maintain a robust Incident Response Plan that includes immediate notification to affected users, 
            containment measures, comprehensive investigation, and transparent communication throughout the process. 
            Our security team conducts regular drills to ensure rapid response to any potential incidents.
          </p>
        </DisclosureAccordion>
        
        <DisclosureAccordion title="How do you ensure compliance with different regional regulations?">
          <p className="text-sireiq-light/70">
            Our legal and compliance team continuously monitors regulatory changes across all regions where we operate. 
            We maintain region-specific data handling processes where required (such as EU data remaining in EU data centers) 
            and regularly update our practices to accommodate emerging compliance requirements.
          </p>
        </DisclosureAccordion>
        
        <DisclosureAccordion title="Can I get a copy of your security certifications?">
          <p className="text-sireiq-light/70">
            Yes, we provide security documentation to customers under NDA. Please use the "Request Documentation" 
            section below to submit your request, and our compliance team will contact you with the necessary 
            paperwork and process to share our detailed security reports and certifications.
          </p>
        </DisclosureAccordion>
      </div>
    </section>
  );
};

export default FAQSection;
