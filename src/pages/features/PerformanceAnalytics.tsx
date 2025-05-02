
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, LineChart, Check, ChartBar, ChartPie } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const PerformanceAnalytics = () => {
  // Sample data for charts
  const monthlyData = [
    { name: 'Jan', value: 12 },
    { name: 'Feb', value: 19 },
    { name: 'Mar', value: 15 },
    { name: 'Apr', value: 25 },
    { name: 'May', value: 32 },
    { name: 'Jun', value: 29 },
  ];
  
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Performance Analytics | SireIQ</title>
        <meta name="description" content="Track content performance and audience engagement with comprehensive analytics dashboards." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <LineChart className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Performance</span> Analytics
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Track content performance and audience engagement with comprehensive analytics dashboards.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30 max-w-4xl w-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Content Performance</h3>
                <div className="flex gap-2">
                  {["30 Days", "90 Days", "12 Months"].map((period, i) => (
                    <Button 
                      key={i} 
                      variant={i === 0 ? "default" : "outline"} 
                      size="sm"
                      className={i === 0 ? "bg-sireiq-cyan text-sireiq-darker" : "border-sireiq-accent/30"}
                    >
                      {period}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="bg-sireiq-darker rounded-lg p-4 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {[
                    { label: "Engagement", value: "12,495", change: "+23%" },
                    { label: "Conversion Rate", value: "3.2%", change: "+0.5%" },
                    { label: "Avg. Session Time", value: "2:34", change: "+0:42" },
                  ].map((metric, i) => (
                    <div key={i} className="glass-effect rounded-lg p-3 border border-sireiq-accent/10">
                      <p className="text-xs text-sireiq-light/50 mb-1">{metric.label}</p>
                      <div className="flex justify-between items-baseline">
                        <p className="text-xl font-bold">{metric.value}</p>
                        <span className="text-xs font-medium text-green-400">{metric.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="h-40 relative">
                  <div className="absolute inset-0 flex items-end">
                    {monthlyData.map((item, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-5/6 bg-gradient-to-t from-sireiq-cyan to-sireiq-cyan2 rounded-t"
                          style={{ height: `${item.value * 3}px` }}
                        ></div>
                        <p className="text-xs mt-2 text-sireiq-light/70">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-sireiq-darker rounded-lg p-4">
                  <h4 className="text-sm font-medium mb-3">Top Performing Content</h4>
                  <div className="space-y-2">
                    {[
                      { title: "10 Ways to Boost Productivity", views: "3,245" },
                      { title: "Getting Started Guide", views: "2,819" },
                      { title: "Advanced Features Tutorial", views: "2,103" },
                    ].map((content, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <p className="text-sm truncate">{content.title}</p>
                        <p className="text-xs text-sireiq-light/70">{content.views}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-sireiq-darker rounded-lg p-4">
                  <h4 className="text-sm font-medium mb-3">Traffic Sources</h4>
                  <div className="space-y-2">
                    {[
                      { source: "Organic Search", percentage: 42 },
                      { source: "Social Media", percentage: 28 },
                      { source: "Direct", percentage: 18 },
                      { source: "Referral", percentage: 12 },
                    ].map((source, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>{source.source}</span>
                          <span>{source.percentage}%</span>
                        </div>
                        <div className="w-full h-1 bg-sireiq-accent/20 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2" 
                            style={{ width: `${source.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Data-Driven</span> Decision Making
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                Move beyond gut feelings with comprehensive analytics that track every aspect of your content's performance. Understand what resonates with your audience, optimize based on real data, and continuously improve your content strategy.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Measure engagement across all channels", 
                  "Track conversion metrics and attribute value", 
                  "Identify content trends and audience preferences", 
                  "Get AI-powered recommendations for optimization"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-sireiq-cyan mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                Explore Analytics <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-effect rounded-xl p-5 border border-sireiq-accent/30 col-span-2">
                <div className="flex items-center mb-4">
                  <ChartBar className="h-5 w-5 text-sireiq-cyan mr-2" />
                  <h3 className="font-bold">Content Performance</h3>
                </div>
                <div className="h-32 bg-sireiq-darker/50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-sireiq-light/50">
                    <p className="text-xs">Performance chart visualization</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect rounded-xl p-5 border border-sireiq-accent/30">
                <div className="flex items-center mb-4">
                  <LineChart className="h-5 w-5 text-sireiq-cyan mr-2" />
                  <h3 className="font-bold">Trends</h3>
                </div>
                <div className="h-32 bg-sireiq-darker/50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-sireiq-light/50">
                    <p className="text-xs">Trend chart visualization</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect rounded-xl p-5 border border-sireiq-accent/30">
                <div className="flex items-center mb-4">
                  <ChartPie className="h-5 w-5 text-sireiq-cyan mr-2" />
                  <h3 className="font-bold">Distribution</h3>
                </div>
                <div className="h-32 bg-sireiq-darker/50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-sireiq-light/50">
                    <p className="text-xs">Distribution chart visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Report types */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Analytics</span> Report Types
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Content Performance",
                description: "Track views, engagement, and conversions for all your content across platforms."
              },
              {
                title: "Audience Insights",
                description: "Understand your audience demographics, preferences, and behavior patterns."
              },
              {
                title: "Campaign Analytics",
                description: "Measure the effectiveness of campaigns with comprehensive performance metrics."
              }
            ].map((report, index) => (
              <div key={index} className="glass-effect rounded-lg p-6 border border-sireiq-accent/20">
                <h3 className="text-xl font-bold mb-3">{report.title}</h3>
                <p className="text-sireiq-light/70">{report.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default PerformanceAnalytics;
