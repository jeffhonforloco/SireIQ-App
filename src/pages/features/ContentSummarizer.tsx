
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, ArrowRight, Scissors, FileText, Zap, Target } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import PageHeader from '@/components/trust/PageHeader';
import ContentSummarizerTool from '@/components/content/ContentSummarizerTool';
import { Card, CardContent } from '@/components/ui/card';

const ContentSummarizer = () => {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <Helmet>
        <title>Content Summarizer | SireIQ</title>
        <meta name="description" content="Transform lengthy content into concise summaries with SireIQ's advanced AI content summarization tool." />
      </Helmet>
      
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <PageHeader 
            title="Content Summarizer"
            subtitle="Transform lengthy content into concise summaries that retain essential information and key points."
            icon={<Scissors className="h-8 w-8 text-brand-primary" />}
          />
        </section>
        
        {/* Content Summarizer Tool */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto">
            <ContentSummarizerTool />
          </div>
        </section>
        
        {/* Features and Benefits */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                Key Benefits of Content Summarization
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Our AI content summarizer helps you distill lengthy documents into concise, informative summaries. Save time and improve comprehension without losing key information.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Extract essential information from long documents",
                  "Create executive summaries for reports and research",
                  "Generate concise meeting notes from transcripts",
                  "Maintain the core message while reducing length by up to 80%"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <FeatureCard 
                icon={<Zap className="h-6 w-6 text-brand-primary" />}
                title="Instant Processing"
                description="Get summaries in seconds, not minutes. Our AI processes content quickly while maintaining accuracy."
              />
              <FeatureCard 
                icon={<Target className="h-6 w-6 text-brand-primary" />}
                title="Key Point Extraction"
                description="Automatically identifies and preserves the most important information from your content."
              />
              <FeatureCard 
                icon={<FileText className="h-6 w-6 text-brand-primary" />}
                title="Multiple Formats"
                description="Works with various content types including articles, reports, emails, and documents."
              />
            </div>
          </div>
        </section>
      </main>
      
      <CTASection />
      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => {
  return (
    <Card className="bg-card-gradient border border-brand-accent/30 hover:border-brand-primary/50 transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-text-secondary">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentSummarizer;
