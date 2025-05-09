
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useRole } from '@/contexts/RoleContext';
import { toast } from 'sonner';

const Pricing: React.FC = () => {
  const { role, setRole } = useRole();
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'annual'>('monthly');
  const [planType, setPlanType] = useState<'personal' | 'business'>('personal');
  
  const handleUpgrade = (newRole: 'developer' | 'enterprise') => {
    if (role === newRole) {
      toast.info(`You're already on the ${newRole} plan`);
      return;
    }
    
    setRole(newRole);
    toast.success(`Successfully upgraded to ${newRole} plan!`);
  };
  
  const handleContactSales = () => {
    toast.info("Request sent! Our team will contact you shortly.");
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
          
          <p className="text-center text-sireiq-light/70 mb-12 max-w-2xl mx-auto">
            Choose the plan that's right for you and unlock SireIQ's advanced AI capabilities
          </p>
          
          {/* Plan type selector (Personal/Business) */}
          <div className="bg-sireiq-accent/10 rounded-full p-1 inline-flex mb-10">
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
          
          {/* Pricing Cards - Personal Plans */}
          {planType === 'personal' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
              {/* Free Plan */}
              <div className="bg-sireiq-darker border border-sireiq-accent/30 rounded-xl overflow-hidden">
                <div className="p-8">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold mb-1">Free</h2>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">$0</span>
                      <span className="text-sireiq-light/70 ml-1">/month</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                      <span>10 messages per day</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                      <span>Basic voice mode</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                      <span>Limited tools</span>
                    </li>
                  </ul>
                  
                  <Button 
                    className="w-full bg-sireiq-accent/20 text-white border border-sireiq-accent/30 hover:bg-sireiq-accent/30"
                    disabled={role === 'user'}
                  >
                    {role === 'user' ? 'Current Plan' : 'Free Plan'}
                  </Button>
                </div>
              </div>
              
              {/* Developer Plan */}
              <div className="bg-sireiq-darker border border-sireiq-accent/30 rounded-xl overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-center py-1.5 text-xs font-medium text-sireiq-darker">
                  POPULAR
                </div>
                <div className="p-8 pt-12">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold mb-1">Developer</h2>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">$19</span>
                      <span className="text-sireiq-light/70 ml-1">/month</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                      <span>50 messages per day</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                      <span>Advanced voice mode</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                      <span>Full coding tools</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                      <span>Limited image generation</span>
                    </li>
                  </ul>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90"
                    onClick={() => handleUpgrade('developer')}
                    disabled={role === 'developer'}
                  >
                    {role === 'developer' ? 'Current Plan' : 'Upgrade Now'}
                  </Button>
                </div>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-sireiq-darker border border-sireiq-accent/30 rounded-xl overflow-hidden">
                <div className="p-8">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold mb-1">Enterprise</h2>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">Custom</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                      <span>Unlimited messages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                      <span>All voice modes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                      <span>Custom training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                      <span>Unlimited image generation</span>
                    </li>
                  </ul>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90"
                    onClick={handleContactSales}
                    disabled={role === 'enterprise'}
                  >
                    {role === 'enterprise' ? 'Current Plan' : 'Contact Sales'}
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Business Team Plan */}
          {planType === 'business' && (
            <div className="w-full max-w-6xl">
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
              
              {/* Enterprise Callout for Business */}
              <div className="mt-10 border border-sireiq-accent/30 rounded-xl overflow-hidden bg-sireiq-darker">
                <div className="p-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-bold mb-1">Enterprise</h2>
                      <div className="flex items-baseline mb-4">
                        <span className="text-4xl font-bold">Custom</span>
                      </div>
                      <p className="text-sm text-sireiq-light/70 mb-6">
                        Custom solutions for large organizations with specific security and compliance needs
                      </p>
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90"
                      onClick={handleContactSales}
                    >
                      Contact Sales
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                      <span className="text-sm">Dedicated infrastructure</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                      <span className="text-sm">Advanced security</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                      <span className="text-sm">Custom model training</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-sireiq-cyan shrink-0 mt-0.5" />
                      <span className="text-sm">SLA & dedicated support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* FAQ Section */}
          <div className="mt-20 mb-10 w-full max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/30 p-6">
                <h3 className="font-medium text-lg mb-3">How do I upgrade my plan?</h3>
                <p className="text-sireiq-light/70">
                  Simply select the plan that best fits your needs and click the upgrade button. You'll be guided through the payment process to complete your subscription.
                </p>
              </div>
              <div className="bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/30 p-6">
                <h3 className="font-medium text-lg mb-3">Can I switch between plans?</h3>
                <p className="text-sireiq-light/70">
                  Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades will be applied at the end of your billing cycle.
                </p>
              </div>
              <div className="bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/30 p-6">
                <h3 className="font-medium text-lg mb-3">Is there a free trial available?</h3>
                <p className="text-sireiq-light/70">
                  Yes, we offer a 14-day free trial for our Developer plan so you can explore all its features before committing to a subscription.
                </p>
              </div>
              <div className="bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/30 p-6">
                <h3 className="font-medium text-lg mb-3">What payment methods do you accept?</h3>
                <p className="text-sireiq-light/70">
                  We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. For Enterprise plans, we also offer invoicing options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
