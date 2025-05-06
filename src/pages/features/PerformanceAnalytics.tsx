
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, LineChart, Check, ChartBar, ChartPie } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import PerformanceChart from '@/components/analytics/PerformanceChart';
import MetricsPanel from '@/components/analytics/MetricsPanel';
import RankedContentList from '@/components/analytics/RankedContentList';
import TrafficSourcesPanel from '@/components/analytics/TrafficSourcesPanel';

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
  
  // Metrics data
  const metricsData = [
    { label: "Engagement", value: "12,495", change: "+23%", isPositive: true },
    { label: "Conversion Rate", value: "3.2%", change: "+0.5%", isPositive: true },
    { label: "Avg. Session Time", value: "2:34", change: "-0:12", isPositive: false },
  ];
  
  // Top content data
  const topContentData = [
    { title: "10 Ways to Boost Productivity", views: 3245, change: 1 },
    { title: "Getting Started Guide", views: 2819, change: -1 },
    { title: "Advanced Features Tutorial", views: 2103, change: 0 },
    { title: "Content Strategy Masterclass", views: 1876, change: 1 },
    { title: "AI for Beginners", views: 1654, change: 1 },
  ];
  
  // Traffic sources data
  const trafficSourcesData = [
    { name: "Organic Search", value: 42, color: "#33C3F0" },
    { name: "Social Media", value: 28, color: "#8B5CF6" },
    { name: "Direct", value: 18, color: "#D946EF" },
    { name: "Referral", value: 12, color: "#F97316" },
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
              <MetricsPanel initialMetrics={metricsData} />
              
              <PerformanceChart initialData={monthlyData} title="Content Performance" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <RankedContentList initialItems={topContentData} title="Top Performing Content" />
                <TrafficSourcesPanel initialSources={trafficSourcesData} />
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
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData.slice(0, 4)}>
                      <Bar dataKey="value" fill="#33C3F0" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="glass-effect rounded-xl p-5 border border-sireiq-accent/30">
                <div className="flex items-center mb-4">
                  <LineChart className="h-5 w-5 text-sireiq-cyan mr-2" />
                  <h3 className="font-bold">Trends</h3>
                </div>
                <div className="h-32 bg-sireiq-darker/50 rounded-lg flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyData.slice(0, 4)}>
                      <Line type="monotone" dataKey="value" stroke="#33C3F0" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="glass-effect rounded-xl p-5 border border-sireiq-accent/30">
                <div className="flex items-center mb-4">
                  <ChartPie className="h-5 w-5 text-sireiq-cyan mr-2" />
                  <h3 className="font-bold">Distribution</h3>
                </div>
                <div className="h-32 bg-sireiq-darker/50 rounded-lg flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={trafficSourcesData}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius={40}
                      >
                        {trafficSourcesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
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
              <div 
                key={index} 
                className="glass-effect rounded-lg p-6 border border-sireiq-accent/20 transition-all hover:border-sireiq-cyan/30 hover:translate-y-[-5px]"
              >
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
