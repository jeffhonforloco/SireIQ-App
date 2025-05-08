
import React from 'react';

const FAQ: React.FC = () => {
  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <div>
          <h3 className="text-lg font-bold mb-2">What industries does SireIQ serve?</h3>
          <p className="text-sireiq-light/70">
            SireIQ works with companies across various industries including marketing, media, 
            education, e-commerce, and enterprise. Our platform is designed to be versatile 
            and adaptable to different content creation needs.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-2">Do you offer demos for enterprise clients?</h3>
          <p className="text-sireiq-light/70">
            Yes, we offer personalized demos for enterprise clients. Please contact our 
            sales team at sales@sireiq.com or fill out the contact form to schedule a demo.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-2">Where is SireIQ based?</h3>
          <p className="text-sireiq-light/70">
            Our team members work remotely from around the world. We operate globally and 
            serve clients in all regions.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-2">Is there a free trial available?</h3>
          <p className="text-sireiq-light/70">
            Yes, we offer a 14-day free trial for new users. You can sign up on our website 
            and explore all the features before committing to a subscription.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
