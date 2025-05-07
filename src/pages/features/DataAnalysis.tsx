
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2 } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const DataAnalysis = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Data Analysis | SireIQ</title>
        <meta name="description" content="Extract insights from your data with advanced analytics" />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <BarChart2 className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Data</span> Analysis
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Extract insights from your data with advanced analytics
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="glass-effect rounded-2xl p-8 max-w-4xl w-full border border-sireiq-accent/30">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Transform Your Raw Data into Actionable Insights</h2>
                <p className="text-lg">
                  SireIQ's data analysis tools help you uncover hidden patterns, identify trends, and make data-driven 
                  decisions with confidence. Our AI-powered analytics engine processes complex datasets and presents 
                  findings in clear, easy-to-understand visualizations.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Pattern Recognition</h3>
                    <p>Automatically detect meaningful patterns and correlations in your data that would be impossible to spot manually.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                    <p>Forecast future trends based on historical data to anticipate market changes and customer behavior.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Custom Dashboards</h3>
                    <p>Create personalized dashboards with the metrics that matter most to your business for at-a-glance insights.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Automated Reporting</h3>
                    <p>Schedule regular reports to be generated and distributed to stakeholders without manual intervention.</p>
                  </div>
                </div>
                
                <Button className="mt-6 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                  Get Started with Data Analysis <ArrowRight className="ml-2 h-4 w-4" />
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

export default DataAnalysis;
