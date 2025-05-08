
import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">{question}</h3>
      <p className="text-sireiq-light/70">
        {answer}
      </p>
    </div>
  );
};

export default FAQItem;
