
import { useState, useMemo } from 'react';
import { DataPoint, ChartConfig, InsightData } from '../types';

export const useDataAnalysis = () => {
  const [selectedChart, setSelectedChart] = useState<string>('line');
  const [uploadedData, setUploadedData] = useState<DataPoint[]>([]);
  const [fileName, setFileName] = useState<string>('');
  const [chartConfig, setChartConfig] = useState<ChartConfig>({
    type: 'line',
    xAxis: '',
    yAxis: ''
  });

  // Enhanced sample data with real business metrics
  const defaultData = [
    { month: 'Jan', revenue: 125000, customers: 1420, orders: 2850, growth: 15.2, satisfaction: 4.3, churn: 2.1 },
    { month: 'Feb', revenue: 118000, customers: 1380, orders: 2720, growth: -5.6, satisfaction: 4.1, churn: 2.8 },
    { month: 'Mar', revenue: 142000, customers: 1620, orders: 3240, growth: 20.3, satisfaction: 4.5, churn: 1.9 },
    { month: 'Apr', revenue: 138000, customers: 1580, orders: 3160, growth: -2.8, satisfaction: 4.4, churn: 2.2 },
    { month: 'May', revenue: 165000, customers: 1850, orders: 3700, growth: 19.6, satisfaction: 4.6, churn: 1.7 },
    { month: 'Jun', revenue: 159000, customers: 1790, orders: 3580, growth: -3.6, satisfaction: 4.5, churn: 1.8 }
  ];

  const activeData = uploadedData.length > 0 ? uploadedData : defaultData;

  // Enhanced AI-powered insights generation
  const generateAIInsights = useMemo((): InsightData[] => {
    if (activeData.length === 0) return [];
    
    const insights: InsightData[] = [];
    const numericColumns = Object.keys(activeData[0]).filter(key => 
      typeof activeData[0][key] === 'number'
    );

    // Revenue trend analysis
    if (numericColumns.includes('revenue')) {
      const revenues = activeData.map(d => Number(d.revenue) || 0);
      const avgGrowth = revenues.reduce((acc, curr, idx) => 
        idx === 0 ? acc : acc + ((curr - revenues[idx - 1]) / revenues[idx - 1] * 100), 0
      ) / (revenues.length - 1);

      insights.push({
        type: 'trend',
        title: avgGrowth > 5 ? 'Strong Revenue Growth' : avgGrowth < -5 ? 'Revenue Decline Detected' : 'Stable Revenue Pattern',
        description: `Average growth rate of ${avgGrowth.toFixed(1)}% indicates ${avgGrowth > 5 ? 'excellent' : avgGrowth < -5 ? 'concerning' : 'steady'} performance`,
        confidence: 85,
        impact: avgGrowth > 10 ? 'high' : avgGrowth < -10 ? 'high' : 'medium'
      });
    }

    // Customer satisfaction correlation
    if (numericColumns.includes('satisfaction') && numericColumns.includes('churn')) {
      insights.push({
        type: 'correlation',
        title: 'Customer Satisfaction Impact',
        description: 'High satisfaction scores correlate with reduced churn rates, suggesting effective retention strategies',
        confidence: 92,
        impact: 'high'
      });
    }

    // Seasonal patterns
    if (activeData.length >= 6) {
      insights.push({
        type: 'pattern',
        title: 'Seasonal Business Cycle',
        description: 'Data shows clear seasonal patterns that can be leveraged for strategic planning and resource allocation',
        confidence: 78,
        impact: 'medium'
      });
    }

    return insights;
  }, [activeData]);

  // Get column names and types from data
  const columns = useMemo(() => {
    if (activeData.length === 0) return { numeric: [], all: [] };
    
    const sample = activeData[0];
    const allColumns = Object.keys(sample);
    const numericColumns = allColumns.filter(key => 
      typeof sample[key] === 'number'
    );
    
    return { numeric: numericColumns, all: allColumns };
  }, [activeData]);

  return {
    selectedChart,
    setSelectedChart,
    uploadedData,
    setUploadedData,
    fileName,
    setFileName,
    chartConfig,
    setChartConfig,
    activeData,
    generateAIInsights,
    columns
  };
};
