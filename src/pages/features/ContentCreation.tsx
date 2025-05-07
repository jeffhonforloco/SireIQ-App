
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Feather } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const ContentCreation = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Content Creation | SireIQ</title>
        <meta name="description" content="Generate high-quality content for any purpose" />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Feather className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Content</span> Creation
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Generate high-quality content for any purpose
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="glass-effect rounded-2xl p-8 max-w-4xl w-full border border-sireiq-accent/30">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Create Compelling Content with AI Assistance</h2>
                <p className="text-lg">
                  SireIQ's content creation tools empower you to produce high-quality, engaging content across 
                  various formats and channels. From blog posts to social media updates, our AI ensures your 
                  messaging is consistent, on-brand, and optimized for your audience.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Blog Articles</h3>
                    <p>Generate comprehensive, well-researched blog articles that engage readers and establish your authority in your industry.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Social Media Posts</h3>
                    <p>Create platform-specific social media content that drives engagement and builds community around your brand.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Marketing Copy</h3>
                    <p>Craft persuasive marketing materials that highlight your unique selling points and convert prospects into customers.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Email Newsletters</h3>
                    <p>Develop engaging email content that nurtures relationships with subscribers and drives meaningful actions.</p>
                  </div>
                </div>
                
                <Button className="mt-6 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                  Start Creating Content <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default ContentCreation;
