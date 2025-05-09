
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useRole } from '@/contexts/RoleContext';
import { toast } from 'sonner';
import FAQSection from '@/components/pricing/FAQSection';

const Pricing: React.FC = () => {
  const { role, setRole } = useRole();
  const [planType, setPlanType] = useState<'personal' | 'business'>('personal');
  
  const handlePlanChange = (newRole: 'user' | 'developer' | 'enterprise') => {
    if (role === newRole) {
      toast.info(`You're already on the ${newRole} plan.`);
      return;
    }

    setRole(newRole);
    toast.success(`Successfully switched to ${newRole} plan!`);
  };

  const handleEnterpriseRequest = () => {
    toast.info("Request sent! Our team will contact you shortly to discuss enterprise options.");
  };

  return (
    <div className="min-h-screen bg-sireiq-darker">
      <Helmet>
        <title>Upgrade Your Plan | SireIQ</title>
        <meta name="description" content="Choose the SireIQ plan that's right for you and unlock advanced AI capabilities." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-3 text-white">
            Upgrade your plan
          </h1>
          
          <div className="bg-sireiq-accent/10 rounded-full p-1 inline-flex mt-6 mb-10">
            <Button 
              variant="ghost"
              className={`rounded-full px-6 ${
                planType === 'personal' 
                  ? 'bg-sireiq-accent/30 text-white' 
                  : 'hover:bg-sireiq-accent/20 text-sireiq-light/70'
              }`}
              onClick={() => setPlanType('personal')}
            >
              Personal
            </Button>
            <Button 
              variant="ghost"
              className={`rounded-full px-6 ${
                planType === 'business' 
                  ? 'bg-sireiq-accent/30 text-white' 
                  : 'hover:bg-sireiq-accent/20 text-sireiq-light/70'
              }`}
              onClick={() => setPlanType('business')}
            >
              Business
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {/* Free / Personal Plan */}
            <div className="border border-sireiq-accent/30 rounded-xl overflow-hidden bg-sireiq-darker">
              <div className="p-8">
                <h2 className="text-xl font-bold mb-1">Free</h2>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-sireiq-light/70 ml-1">/month</span>
                </div>
                <p className="text-sm text-sireiq-light/70 mb-6">
                  Explore how AI can help you with everyday tasks
                </p>
                
                <Button 
                  className="w-full mb-6 bg-sireiq-accent/20 hover:bg-sireiq-accent/30 text-white"
                  variant="outline"
                  disabled={role === 'user'}
                  onClick={() => handlePlanChange('user')}
                >
                  {role === 'user' ? 'Current Plan' : 'Your current plan'}
                </Button>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Basic AI assistant access</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>10 messages per day</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Standard voice mode</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Real-time data from the web</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Limited access to coding tools</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Developer / Plus Plan */}
            <div className="border-2 border-sireiq-cyan rounded-xl overflow-hidden bg-sireiq-darker relative">
              <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-center py-1.5 text-xs font-medium text-sireiq-darker">
                POPULAR
              </div>
              <div className="p-8 pt-10">
                <h2 className="text-xl font-bold mb-1">Developer</h2>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-sireiq-light/70 ml-1">/month</span>
                </div>
                <p className="text-sm text-sireiq-light/70 mb-6">
                  Level up productivity and creativity with expanded access
                </p>
                
                <Button 
                  className="w-full mb-6 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90"
                  variant="default"
                  disabled={role === 'developer'}
                  onClick={() => handlePlanChange('developer')}
                >
                  {role === 'developer' ? 'Current Plan' : 'Get Developer'}
                </Button>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span><strong>50 messages per day</strong> (5x more)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Extended limits on messaging, file uploads, and advanced data analysis</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Standard and advanced voice mode</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Access to deep research, multiple reasoning models</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Create and use tasks, projects, and custom workflows</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Limited access to image generation</span>
                  </li>
                </ul>
                <div className="text-xs text-sireiq-light/50 mt-4 text-center">
                  Usage limits apply
                </div>
              </div>
            </div>
            
            {/* Enterprise / Pro Plan */}
            <div className="border border-sireiq-accent/30 rounded-xl overflow-hidden bg-sireiq-darker">
              <div className="p-8">
                <h2 className="text-xl font-bold mb-1">Enterprise</h2>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <p className="text-sm text-sireiq-light/70 mb-6">
                  Get the best of SireIQ with the highest level of access
                </p>
                
                <Button 
                  className="w-full mb-6 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90"
                  variant="default"
                  disabled={role === 'enterprise'}
                  onClick={handleEnterpriseRequest}
                >
                  {role === 'enterprise' ? 'Current Plan' : 'Contact Sales'}
                </Button>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Everything in Developer</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span><strong>Unlimited messages</strong> for all team members</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Unlimited access to all reasoning models</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Extended access to deep research with multi-step online capabilities</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Access to advanced analytics and reporting</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Dedicated support team & SLA</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                    <span>Advanced security & compliance controls</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Team Plan Section - Only shown for Business tab */}
          {planType === 'business' && (
            <div className="mt-10 w-full max-w-6xl">
              <div className="border border-sireiq-accent/30 rounded-xl overflow-hidden bg-sireiq-darker">
                <div className="p-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-bold mb-1">Team</h2>
                      <div className="flex items-baseline mb-4">
                        <span className="text-4xl font-bold">$25</span>
                        <span className="text-sireiq-light/70 ml-1">/user/month</span>
                      </div>
                      <p className="text-sm text-sireiq-light/70 mb-6">
                        Supercharge your team's work with a secure, collaborative workspace
                      </p>
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90"
                      onClick={() => toast.info("Team plan feature coming soon!")}
                    >
                      Get Team
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm">
                        <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                        <span>Everything in Developer, with higher message limits</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                        <span>Customize SireIQ to your workflows with file uploads, custom projects</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                        <span>Delegate routine work to SireIQ, freeing your team for high-value work</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm">
                        <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                        <span>Create and innovate with multimodal AI—including image generation</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                        <span>Protect your data with multi-factor authentication and data encryption</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                        <span>Collaborate seamlessly with shared workflows and user management</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-xs text-sireiq-light/50 mt-6">
                    For 2+ users, billed annually
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Enterprise section at bottom */}
          <div className="w-full max-w-4xl mx-auto mt-12 text-center">
            <p className="text-sireiq-light/70 mb-2">Need more capabilities for your business?</p>
            <Button 
              variant="ghost" 
              className="text-sireiq-cyan hover:bg-sireiq-accent/10"
              onClick={() => window.location.href = '/enterprise'}
            >
              See SireIQ Enterprise
            </Button>
          </div>
        </div>
        
        {/* FAQ Section */}
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
