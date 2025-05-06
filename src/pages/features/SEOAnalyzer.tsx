
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, BarChart2, AlertCircle, CheckCircle } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';

const SEOAnalyzer = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>SEO Analyzer | SireIQ</title>
        <meta name="description" content="Powerful SEO analysis tools to improve your website's visibility and rankings." />
      </Helmet>
      
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
            Advanced SEO Analysis Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Optimize your website's visibility with our AI-powered SEO analyzer. Get actionable insights to improve your search rankings.
          </p>
          
          <Card className="bg-black/40 border border-gray-700 backdrop-blur-md">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <Input 
                  placeholder="Enter website URL to analyze..." 
                  className="bg-black/60 border-gray-700 text-white"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <Search className="w-4 h-4 mr-2" />
                  Analyze
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            icon={<BarChart2 className="w-10 h-10 text-blue-400" />}
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
        
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to boost your search visibility?</h2>
          <p className="text-gray-300 mb-6">
            Our SEO analysis tools provide actionable insights to help you optimize your website and content for better search engine rankings.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Get Started
          </Button>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="bg-black/40 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-md">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SEOAnalyzer;
