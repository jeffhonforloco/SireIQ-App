
import React from 'react';
import FAQItem from './FAQItem';
import { Card, CardContent } from '@/components/ui/card';

interface FAQData {
  question: string;
  answer: string;
}

const faqItems: FAQData[] = [
  {
    question: "What industries does SireIQ serve?",
    answer: "SireIQ works with companies across various industries including marketing, media, education, e-commerce, and enterprise. Our platform is designed to be versatile and adaptable to different content creation needs."
  },
  {
    question: "Do you offer demos for enterprise clients?",
    answer: "Yes, we offer personalized demos for enterprise clients. Please contact our sales team at sales@sireiq.com or fill out the contact form to schedule a demo."
  },
  {
    question: "Where is SireIQ based?",
    answer: "Our team members work remotely from around the world. We operate globally and serve clients in all regions."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for new users. You can sign up on our website and explore all the features before committing to a subscription."
  }
];

const FAQ: React.FC = () => {
  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {faqItems.map((item, index) => (
          <Card key={index} className="bg-sireiq-accent/10 border-sireiq-accent/30">
            <CardContent className="p-6">
              <FAQItem 
                question={item.question} 
                answer={item.answer} 
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
