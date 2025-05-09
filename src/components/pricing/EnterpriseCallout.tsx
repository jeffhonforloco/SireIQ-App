
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Building, Check } from 'lucide-react';
import { toast } from 'sonner';

const EnterpriseCallout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Enterprise demo request submitted! Our team will contact you shortly.");
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="mt-24 mb-16 bg-sireiq-accent/5 border border-sireiq-accent/30 rounded-xl p-8 md:p-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Enterprise Solution?</h2>
          <p className="text-sireiq-light/70 mb-6">
            SireIQ Enterprise offers advanced features for large teams and organizations with custom needs. 
            Get a personalized demo to see how SireIQ can transform your organization's AI capabilities.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {[
              'Dedicated infrastructure',
              'Advanced security & compliance',
              'Team collaboration tools',
              'Custom AI model training',
              'Advanced analytics',
              'SSO & enterprise auth',
              'Private knowledge bases',
              'SLA & dedicated support'
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-sireiq-cyan" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex-shrink-0">
          <Button 
            className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-8 py-6 h-auto text-lg"
            onClick={() => setOpen(true)}
          >
            <Building className="mr-2 h-5 w-5" />
            Schedule Enterprise Demo
          </Button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-sireiq-darker border border-sireiq-accent/30 text-sireiq-light">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Request Enterprise Demo</DialogTitle>
            <DialogDescription className="text-sireiq-light/70">
              Fill out the form below and our team will reach out to schedule a personalized demo.
            </DialogDescription>
          </DialogHeader>
          
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="bg-sireiq-cyan/20 rounded-full p-3 mb-4">
                <Check className="h-6 w-6 text-sireiq-cyan" />
              </div>
              <h3 className="text-lg font-medium mb-2">Request Submitted!</h3>
              <p className="text-center text-sireiq-light/70">
                Thank you for your interest. Our team will contact you shortly to schedule your demo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 py-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm">First Name</label>
                  <input
                    id="first-name"
                    className="w-full bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-lg px-4 py-2 text-sireiq-light focus:border-sireiq-cyan/50 focus:outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm">Last Name</label>
                  <input
                    id="last-name"
                    className="w-full bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-lg px-4 py-2 text-sireiq-light focus:border-sireiq-cyan/50 focus:outline-none"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm">Company</label>
                <input
                  id="company"
                  className="w-full bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-lg px-4 py-2 text-sireiq-light focus:border-sireiq-cyan/50 focus:outline-none"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm">Work Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-lg px-4 py-2 text-sireiq-light focus:border-sireiq-cyan/50 focus:outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm">Phone Number</label>
                  <input
                    id="phone"
                    className="w-full bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-lg px-4 py-2 text-sireiq-light focus:border-sireiq-cyan/50 focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="team-size" className="text-sm">Team Size</label>
                <select
                  id="team-size"
                  className="w-full bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-lg px-4 py-2 text-sireiq-light focus:border-sireiq-cyan/50 focus:outline-none"
                  required
                >
                  <option value="">Select team size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="requirements" className="text-sm">Specific Requirements (Optional)</label>
                <textarea
                  id="requirements"
                  rows={3}
                  className="w-full bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-lg px-4 py-2 text-sireiq-light focus:border-sireiq-cyan/50 focus:outline-none"
                  placeholder="Tell us about your specific needs and use cases"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90"
              >
                Request Demo
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EnterpriseCallout;
