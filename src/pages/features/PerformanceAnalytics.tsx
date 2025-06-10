
import React from 'react';
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
import ReportTypeCard from '@/components/analytics/ReportTypeCard';
import AnalyticsFeatureHighlight from '@/components/analytics/AnalyticsFeatureHighlight';

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
  
  // Report types data
  const reportTypes = [
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
              <MetricsPanel />
              
              <PerformanceChart initialData={monthlyData} title="Content Performance" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <RankedContentList initialItems={topContentData} title="Top Performing Content" />
                <TrafficSourcesPanel initialSources={trafficSourcesData} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <AnalyticsFeatureHighlight />
        
        {/* Report types */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Analytics</span> Report Types
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reportTypes.map((report, index) => (
              <ReportTypeCard
                key={index}
                title={report.title}
                description={report.description}
              />
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
