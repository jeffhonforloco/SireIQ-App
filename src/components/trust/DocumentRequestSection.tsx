
import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

const DocumentRequestSection = () => {
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleDocumentRequest = () => {
    if (showEmailInput && emailInput.trim() === '') {
      toast.error("Please enter your email address to request documentation.");
      return;
    }
    
    if (showEmailInput) {
      // Process with the entered email
      setRequestSubmitted(true);
      setShowEmailInput(false);
      toast.success("Document request submitted. Our team will contact you shortly at " + emailInput);
    } else {
      // First click - show the email input field
      setShowEmailInput(true);
    }
  };
  
  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Compliance Documentation</h2>
      <div className="glass-effect rounded-xl p-8">
        {!requestSubmitted ? (
          <>
            <p className="text-center mb-6">
              Request access to our detailed compliance reports and documentation.
            </p>
            
            {showEmailInput ? (
              <div className="flex flex-col items-center space-y-4">
                <input
                  type="email"
                  value={emailInput}
                  onChange={handleEmailChange}
                  placeholder="Enter your email address"
                  className="w-full max-w-md px-4 py-2 rounded-lg bg-sireiq-dark border border-sireiq-accent/30 text-sireiq-light focus:outline-none focus:ring-2 focus:ring-sireiq-cyan"
                  required
                />
                <div className="flex space-x-3">
                  <Button 
                    onClick={handleDocumentRequest}
                    className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Submit Request
                  </Button>
                  <Button 
                    onClick={() => setShowEmailInput(false)}
                    variant="outline"
                    className="border-sireiq-accent/30 text-sireiq-light hover:bg-sireiq-accent/20"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <Button 
                  onClick={handleDocumentRequest}
                  className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Request Documentation
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Request Submitted</h3>
            <p className="mb-4">
              Thank you for your interest in our compliance documentation.
              <br />Our security team will contact you within 1 business day.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DocumentRequestSection;
