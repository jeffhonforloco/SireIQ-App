import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Rocket, ArrowRight, MessageSquare } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import PageHeader from '@/components/trust/PageHeader';
import NewChatButton from '@/components/chat/NewChatButton';

const AIAssistant = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>AI Assistant | SireIQ</title>
        <meta name="description" content="Your personal AI assistant powered by SireIQ, ready to help with any task." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      {/* New chat button will be handled by App.tsx */}
      
      <main className="pt-32 pb-20 relative">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <PageHeader 
            title="AI Assistant"
            subtitle="Your personal AI assistant is here to help you with any task, from answering questions to completing complex workflows."
            icon={<Rocket className="h-8 w-8 text-sireiq-cyan" />}
          />
          
          <div className="flex justify-center">
            <div className="glass-effect border border-sireiq-accent/30 rounded-2xl p-6 max-w-4xl w-full">
              <div className="bg-sireiq-darker rounded-lg p-4 mb-6 border border-sireiq-accent/20 max-h-80 overflow-y-auto">
                <div className="flex mb-4">
                  <div className="w-8 h-8 rounded-full bg-sireiq-cyan/20 flex items-center justify-center flex-shrink-0 mr-3">
                    <Rocket className="h-4 w-4 text-sireiq-cyan" />
                  </div>
                  <div className="bg-sireiq-darker/80 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">Hello! I'm your AI assistant. How can I help you today?</p>
                  </div>
                </div>
                
                <div className="flex justify-end mb-4">
                  <div className="bg-sireiq-cyan/20 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">Can you help me create a content strategy for my new product?</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  <div className="w-8 h-8 rounded-full bg-sireiq-cyan/20 flex items-center justify-center flex-shrink-0 mr-3">
                    <Rocket className="h-4 w-4 text-sireiq-cyan" />
                  </div>
                  <div className="bg-sireiq-darker/80 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">Of course! I'd be happy to help you create a content strategy for your new product. Let me ask you a few questions to get started:</p>
                    <ol className="list-decimal pl-5 mt-2 text-sm">
                      <li>What is your product and who is your target audience?</li>
                      <li>What are your main marketing goals?</li>
                      <li>What content formats do you prefer (blog posts, videos, social media)?</li>
                      <li>Do you have any existing content that's performing well?</li>
                    </ol>
                    <p className="mt-2 text-sm">Once I have this information, I can help you build a comprehensive content strategy.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-1 bg-sireiq-darker/50 rounded-lg border border-sireiq-accent/20 p-3 mr-2">
                  <div className="text-sireiq-light/50 text-sm">Type your message...</div>
                </div>
                <Button variant="default" size="icon" className="bg-sireiq-cyan hover:bg-sireiq-cyan/90">
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How SireIQ's AI Assistant Can Help You</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Content Creation",
                  description: "Generate articles, social media posts, and marketing copy tailored to your brand voice."
                },
                {
                  title: "Data Analysis",
                  description: "Process and interpret complex data sets to extract valuable insights and trends."
                },
                {
                  title: "Task Automation",
                  description: "Automate repetitive tasks and workflows to save time and increase productivity."
                },
                {
                  title: "Research Assistant",
                  description: "Find, compile, and summarize information on any topic from reliable sources."
                },
                {
                  title: "Brainstorming Partner",
                  description: "Generate creative ideas and solutions for any challenge or project."
                },
                {
                  title: "24/7 Support",
                  description: "Get help whenever you need it with our always-available AI assistant."
                }
              ].map((feature, index) => (
                <div key={index} className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 rounded-xl p-6 transition-all">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sireiq-light/70">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                Try AI Assistant Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default AIAssistant;
