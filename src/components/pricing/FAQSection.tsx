
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How do I upgrade or downgrade my plan?",
      answer: "You can upgrade or downgrade your plan at any time from your account settings page. Changes to higher tiers take effect immediately, while downgrades will be applied at the end of your current billing cycle."
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "Yes, we offer a 14-day free trial for our Developer plan so you can explore all its features before committing. No credit card is required to start your trial."
    },
    {
      question: "Can I change plans in the middle of a billing cycle?",
      answer: "You can upgrade your plan at any time, and we'll prorate the cost for the remainder of your billing cycle. Downgrades take effect at the end of your current billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards including Visa, Mastercard, American Express, and Discover. For Enterprise plans, we also offer invoicing options."
    },
    {
      question: "How secure is my data on SireIQ?",
      answer: "SireIQ employs state-of-the-art security measures, including end-to-end encryption, regular security audits, and compliance with industry standards. Enterprise plans include additional security features and controls."
    },
    {
      question: "Do you offer discounts for educational institutions or non-profits?",
      answer: "Yes, we offer special pricing for eligible educational institutions and non-profit organizations. Contact our sales team for more information about our discount programs."
    }
  ];

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-center text-sireiq-light/70 mb-12 max-w-2xl mx-auto">
        Have questions about SireIQ's pricing or features? Find answers to common questions below.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <Accordion key={index} type="single" collapsible className="bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/30">
            <AccordionItem value={`item-${index}`} className="border-0">
              <AccordionTrigger className="px-6 py-4 hover:text-sireiq-cyan transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-sireiq-light/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-sireiq-light/70 mb-4">Still have questions? We're here to help.</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a 
            href="/contact" 
            className="text-sireiq-cyan hover:text-sireiq-cyan hover:underline transition-colors"
          >
            Contact Support
          </a>
          <a 
            href="/documentation" 
            className="text-sireiq-cyan hover:text-sireiq-cyan hover:underline transition-colors"
          >
            Read Documentation
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
