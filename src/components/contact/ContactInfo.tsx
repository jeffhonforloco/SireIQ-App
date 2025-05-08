
import React from 'react';
import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactInfo: React.FC = () => {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="text-sireiq-light/70 mb-6">
        Fill out the form and we'll get back to you as soon as possible. 
        Our team is ready to answer your questions about our AI platform, 
        pricing, or how we can help with your specific needs.
      </p>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Specific Departments</h3>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Sales Inquiries</p>
            <p className="text-sireiq-cyan">sales@sireiq.com</p>
          </div>
          <div>
            <p className="font-medium">Technical Support</p>
            <p className="text-sireiq-cyan">support@sireiq.com</p>
          </div>
          <div>
            <p className="font-medium">Media Relations</p>
            <p className="text-sireiq-cyan">press@sireiq.com</p>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-sireiq-accent/20 rounded-lg">
        <div className="flex items-center mb-4">
          <Info className="h-5 w-5 text-sireiq-cyan mr-2" />
          <h3 className="text-lg font-bold">Need Immediate Help?</h3>
        </div>
        <p className="text-sireiq-light/70 mb-4">
          For urgent matters, check out our comprehensive help center or 
          reach out to our support team directly.
        </p>
        <Button variant="outline" className="w-full">Visit Help Center</Button>
      </div>
    </div>
  );
};

export default ContactInfo;
