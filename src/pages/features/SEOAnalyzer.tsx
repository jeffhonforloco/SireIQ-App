
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart2, AlertCircle, CheckCircle, Search, TrendingUp } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import SEOAnalysisForm from '@/components/seo/SEOAnalysisForm';
import SEOAnalysisResults from '@/components/seo/SEOAnalysisResults';

const SEOAnalyzer = () => {
  const [analysisData, setAnalysisData] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalysis = async (data: any) => {
    setIsAnalyzing(true);
    
    // Simulate analysis time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setAnalysisData(data);
    setIsAnalyzing(false);
  };

  const handleNewAnalysis = () => {
    setAnalysisData(null);
  };

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <Helmet>
        <title>SEO Analyzer | SireIQ</title>
        <meta name="description" content="Powerful SEO analysis tools to improve your website's visibility and rankings. Get instant insights and optimization recommendations." />
      </Helmet>
      
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent mb-6">
            Advanced SEO Analysis Tools
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            Optimize your website's visibility with our AI-powered SEO analyzer. Get actionable insights to improve your search rankings.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {!analysisData ? (
            <>
              <SEOAnalysisForm onAnalysis={handleAnalysis} isAnalyzing={isAnalyzing} />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-16">
                <FeatureCard 
                  icon={<BarChart2 className="w-10 h-10 text-brand-primary" />}
                  title="Keyword Analysis"
                  description="Discover high-performing keywords and identify opportunities to improve your content's search visibility."
                />
                <FeatureCard 
                  icon={<AlertCircle className="w-10 h-10 text-yellow-400" />}
                  title="Technical SEO Audit"
                  description="Identify and fix technical issues that might be hurting your website's search engine rankings."
                />
                <FeatureCard 
                  icon={<CheckCircle className="w-10 h-10 text-green-400" />}
                  title="Content Optimization"
                  description="Get AI-powered recommendations to optimize your content for better search engine rankings."
                />
              </div>
            </>
          ) : (
            <SEOAnalysisResults data={analysisData} onNewAnalysis={handleNewAnalysis} />
          )}
        </div>
        
        {!analysisData && (
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 border border-brand-primary/30">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to boost your search visibility?</h2>
                <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                  Our SEO analysis tools provide actionable insights to help you optimize your website and content for better search engine rankings. 
                  Start with our quick analysis above, or get comprehensive insights with SEO Agent Pro.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="bg-card-gradient border border-brand-accent/30 hover:border-brand-primary/50 transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-text-secondary">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SEOAnalyzer;
