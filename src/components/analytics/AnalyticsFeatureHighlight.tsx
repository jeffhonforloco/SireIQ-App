
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import ChartPreviewCard from './ChartPreviewCard';

const AnalyticsFeatureHighlight = () => {
  const dataVisualizationFeatures = [
    "Measure engagement across all channels", 
    "Track conversion metrics and attribute value", 
    "Identify content trends and audience preferences", 
    "Get AI-powered recommendations for optimization"
  ];

  const monthlyData = [
    { name: 'Jan', value: 12 },
    { name: 'Feb', value: 19 },
    { name: 'Mar', value: 15 },
    { name: 'Apr', value: 25 },
  ];

  const trafficSourcesData = [
    { name: "Organic Search", value: 42, color: "#33C3F0" },
    { name: "Social Media", value: 28, color: "#8B5CF6" },
    { name: "Direct", value: 18, color: "#D946EF" },
    { name: "Referral", value: 12, color: "#F97316" },
  ];

  return (
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
            {dataVisualizationFeatures.map((item, index) => (
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
          <ChartPreviewCard 
            title="Content Performance"
            icon="chart-bar"
            chartType="bar"
            data={monthlyData}
            className="col-span-2"
          />
          
          <ChartPreviewCard 
            title="Trends"
            icon="chart-line"
            chartType="line"
            data={monthlyData}
          />
          
          <ChartPreviewCard 
            title="Distribution"
            icon="chart-pie"
            chartType="pie"
            data={trafficSourcesData}
          />
        </div>
      </div>
    </section>
  );
};

export default AnalyticsFeatureHighlight;
