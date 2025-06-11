
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, Database, TrendingUp, Zap } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DataAnalysisTool from '@/components/data-analysis/DataAnalysisTool';
import VisualizationPanel from '@/components/data-analysis/VisualizationPanel';

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
              Extract insights from your data with advanced analytics powered by AI
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
                    <Database className="h-8 w-8 text-sireiq-cyan mb-3" />
                    <h3 className="text-xl font-semibold mb-3">Pattern Recognition</h3>
                    <p>Automatically detect meaningful patterns and correlations in your data that would be impossible to spot manually.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <TrendingUp className="h-8 w-8 text-sireiq-cyan mb-3" />
                    <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                    <p>Forecast future trends based on historical data to anticipate market changes and customer behavior.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <BarChart2 className="h-8 w-8 text-sireiq-cyan mb-3" />
                    <h3 className="text-xl font-semibold mb-3">Custom Dashboards</h3>
                    <p>Create personalized dashboards with the metrics that matter most to your business for at-a-glance insights.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <Zap className="h-8 w-8 text-sireiq-cyan mb-3" />
                    <h3 className="text-xl font-semibold mb-3">Automated Reporting</h3>
                    <p>Schedule regular reports to be generated and distributed to stakeholders without manual intervention.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Tools Section */}
        <section className="container mx-auto px-4 mb-20">
          <Tabs defaultValue="analysis" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="analysis" className="text-lg py-3">
                <BarChart2 className="mr-2 h-5 w-5" />
                Analysis Tool
              </TabsTrigger>
              <TabsTrigger value="visualization" className="text-lg py-3">
                <TrendingUp className="mr-2 h-5 w-5" />
                Visualization
              </TabsTrigger>
            </TabsList>

            <TabsContent value="analysis">
              <DataAnalysisTool />
            </TabsContent>

            <TabsContent value="visualization">
              <VisualizationPanel />
            </TabsContent>
          </Tabs>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Advanced</span> Analytics Features
            </h2>
            <p className="text-xl text-sireiq-light/70 max-w-3xl mx-auto">
              Discover the full power of our data analysis platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-sireiq-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Source Integration</h3>
              <p className="text-sireiq-light/70 mb-4">
                Connect data from databases, APIs, spreadsheets, and cloud services seamlessly.
              </p>
              <ul className="space-y-1 text-sm text-sireiq-light/60">
                <li>• SQL databases</li>
                <li>• REST APIs</li>
                <li>• CSV/Excel files</li>
                <li>• Cloud storage</li>
              </ul>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-sireiq-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Processing</h3>
              <p className="text-sireiq-light/70 mb-4">
                Analyze streaming data and get instant insights as new information arrives.
              </p>
              <ul className="space-y-1 text-sm text-sireiq-light/60">
                <li>• Live data streams</li>
                <li>• Instant alerts</li>
                <li>• Dynamic dashboards</li>
                <li>• Automated triggers</li>
              </ul>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-sireiq-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Machine Learning Models</h3>
              <p className="text-sireiq-light/70 mb-4">
                Apply advanced ML algorithms for predictive analytics and anomaly detection.
              </p>
              <ul className="space-y-1 text-sm text-sireiq-light/60">
                <li>• Regression analysis</li>
                <li>• Classification models</li>
                <li>• Clustering algorithms</li>
                <li>• Time series forecasting</li>
              </ul>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-sireiq-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Visualizations</h3>
              <p className="text-sireiq-light/70 mb-4">
                Create stunning charts and graphs that tell your data's story effectively.
              </p>
              <ul className="space-y-1 text-sm text-sireiq-light/60">
                <li>• 20+ chart types</li>
                <li>• Custom styling</li>
                <li>• Interactive filters</li>
                <li>• Export options</li>
              </ul>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-sireiq-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Quality Assessment</h3>
              <p className="text-sireiq-light/70 mb-4">
                Automatically assess and improve the quality of your datasets.
              </p>
              <ul className="space-y-1 text-sm text-sireiq-light/60">
                <li>• Completeness checks</li>
                <li>• Accuracy validation</li>
                <li>• Consistency analysis</li>
                <li>• Automated cleaning</li>
              </ul>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-sireiq-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaborative Analytics</h3>
              <p className="text-sireiq-light/70 mb-4">
                Share insights and collaborate with your team in real-time.
              </p>
              <ul className="space-y-1 text-sm text-sireiq-light/60">
                <li>• Shared workspaces</li>
                <li>• Comments & annotations</li>
                <li>• Version control</li>
                <li>• Access permissions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 text-center">
          <div className="glass-effect rounded-2xl p-12 border border-sireiq-accent/30">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-sireiq-light/70 mb-8 max-w-2xl mx-auto">
              Start analyzing your data today and discover insights that drive business growth.
            </p>
            <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker text-lg px-8 py-3">
              Get Started with Data Analysis <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default DataAnalysis;
