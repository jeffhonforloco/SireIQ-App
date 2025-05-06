import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import ChartPreviewCard from './ChartPreviewCard';

const AnalyticsFeatureHighlight = () => {
  const [monthlyData, setMonthlyData] = useState([
    { name: 'Jan', value: 12 },
    { name: 'Feb', value: 19 },
    { name: 'Mar', value: 15 },
    { name: 'Apr', value: 25 },
  ]);
  
  const [trafficSourcesData, setTrafficSourcesData] = useState([
    { name: "Organic Search", value: 42, color: "#33C3F0" },
    { name: "Social Media", value: 28, color: "#8B5CF6" },
    { name: "Direct", value: 18, color: "#D946EF" },
    { name: "Referral", value: 12, color: "#F97316" },
  ]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update monthly data with small random variations
      setMonthlyData(prev => 
        prev.map(item => ({
          name: item.name,
          value: Math.max(5, Math.min(35, item.value + Math.floor(Math.random() * 7) - 3))
        }))
      );
      
      // Slightly adjust traffic sources data
      setTrafficSourcesData(prev => {
        const newData = [...prev];
        const randomIndex = Math.floor(Math.random() * newData.length);
        const otherIndex = (randomIndex + 1) % newData.length;
        
        // Adjust values while keeping total at 100%
        const change = Math.floor(Math.random() * 3) + 1;
        if (newData[randomIndex].value > 10) {
          newData[randomIndex].value -= change;
          newData[otherIndex].value += change;
        }
        
        return newData;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const dataVisualizationFeatures = [
    "Measure engagement across all channels", 
    "Track conversion metrics and attribute value", 
    "Identify content trends and audience preferences", 
    "Get AI-powered recommendations for optimization"
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
          
          <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker animate-pulse">
            Explore Analytics <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <ChartPreviewCard 
            title="Content Performance"
            icon="chart-bar"
            chartType="bar"
            data={monthlyData}
            className="col-span-2 hover:scale-[1.02] transition-transform"
          />
          
          <ChartPreviewCard 
            title="Trends"
            icon="chart-line"
            chartType="line"
            data={monthlyData}
            className="hover:scale-[1.02] transition-transform"
          />
          
          <ChartPreviewCard 
            title="Distribution"
            icon="chart-pie"
            chartType="pie"
            data={trafficSourcesData}
            className="hover:scale-[1.02] transition-transform"
          />
        </div>
      </div>
    </section>
  );
};

export default AnalyticsFeatureHighlight;
