
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useRole } from '@/contexts/RoleContext';
import { toast } from 'sonner';
import FAQSection from '@/components/pricing/FAQSection';
import PricingTabs from '@/components/pricing/PricingTabs';
import PricingCards from '@/components/pricing/PricingCards';
import EnterpriseCallout from '@/components/pricing/EnterpriseCallout';

const Pricing: React.FC = () => {
  const { role } = useRole();
  const [planType, setPlanType] = useState<'personal' | 'business'>('personal');
  const [activeView, setActiveView] = useState<'cards' | 'table'>('cards');
  
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
          
          <PricingTabs activeView={activeView} setActiveView={setActiveView} />
          
          {activeView === 'cards' ? (
            <PricingCards />
          ) : (
            <div className="w-full overflow-x-auto mb-10">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-sireiq-accent/30">
                    <th className="p-4 text-left"></th>
                    <th className="p-4 text-center">Free</th>
                    <th className="p-4 text-center bg-sireiq-accent/10 border-x border-sireiq-accent/30">
                      <span className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker text-xs py-1 px-2 rounded-full">POPULAR</span>
                      <div className="mt-2 font-bold">Developer</div>
                    </th>
                    <th className="p-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-sireiq-accent/30">
                    <td className="p-4">Price</td>
                    <td className="p-4 text-center">$0</td>
                    <td className="p-4 text-center bg-sireiq-accent/10 border-x border-sireiq-accent/30">$19/month</td>
                    <td className="p-4 text-center">Custom</td>
                  </tr>
                  <tr className="border-b border-sireiq-accent/30">
                    <td className="p-4">Messages per day</td>
                    <td className="p-4 text-center">10</td>
                    <td className="p-4 text-center bg-sireiq-accent/10 border-x border-sireiq-accent/30">50</td>
                    <td className="p-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-sireiq-accent/30">
                    <td className="p-4">Voice mode</td>
                    <td className="p-4 text-center">Standard</td>
                    <td className="p-4 text-center bg-sireiq-accent/10 border-x border-sireiq-accent/30">Advanced</td>
                    <td className="p-4 text-center">All modes</td>
                  </tr>
                  <tr className="border-b border-sireiq-accent/30">
                    <td className="p-4">Web access</td>
                    <td className="p-4 text-center"><Check className="mx-auto h-5 w-5 text-sireiq-cyan" /></td>
                    <td className="p-4 text-center bg-sireiq-accent/10 border-x border-sireiq-accent/30"><Check className="mx-auto h-5 w-5 text-sireiq-cyan" /></td>
                    <td className="p-4 text-center"><Check className="mx-auto h-5 w-5 text-sireiq-cyan" /></td>
                  </tr>
                  <tr className="border-b border-sireiq-accent/30">
                    <td className="p-4">Coding tools</td>
                    <td className="p-4 text-center">Limited</td>
                    <td className="p-4 text-center bg-sireiq-accent/10 border-x border-sireiq-accent/30">Full access</td>
                    <td className="p-4 text-center">Full access</td>
                  </tr>
                  <tr className="border-b border-sireiq-accent/30">
                    <td className="p-4">Image generation</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center bg-sireiq-accent/10 border-x border-sireiq-accent/30">Limited</td>
                    <td className="p-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-sireiq-accent/30">
                    <td className="p-4">Custom training</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center bg-sireiq-accent/10 border-x border-sireiq-accent/30">—</td>
                    <td className="p-4 text-center"><Check className="mx-auto h-5 w-5 text-sireiq-cyan" /></td>
                  </tr>
                  <tr>
                    <td className="p-4"></td>
                    <td className="p-4 text-center">
                      <Button 
                        className="bg-sireiq-accent/20 hover:bg-sireiq-accent/30 text-white"
                        variant="outline"
                        disabled={role === 'user'}
                      >
                        {role === 'user' ? 'Current Plan' : 'Free Plan'}
                      </Button>
                    </td>
                    <td className="p-4 text-center bg-sireiq-accent/10 border-x border-sireiq-accent/30">
                      <Button 
                        className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90"
                        disabled={role === 'developer'}
                      >
                        {role === 'developer' ? 'Current Plan' : 'Upgrade Now'}
                      </Button>
                    </td>
                    <td className="p-4 text-center">
                      <Button 
                        className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90"
                        disabled={role === 'enterprise'}
                      >
                        Contact Sales
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

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
          
          {/* Enterprise callout section */}
          <EnterpriseCallout />
          
          {/* FAQ Section */}
          <FAQSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
