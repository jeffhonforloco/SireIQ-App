
import React, { useState, useEffect } from 'react';
import { ChartBar, LineChart, ChartPie } from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';
import { cn } from '@/lib/utils';

type ChartType = 'bar' | 'line' | 'pie';
type IconType = 'chart-bar' | 'chart-line' | 'chart-pie';

interface DataPoint {
  name: string;
  value: number;
  color?: string;
}

interface ChartPreviewCardProps {
  title: string;
  icon: IconType;
  chartType: ChartType;
  data: DataPoint[];
  className?: string;
}

const ChartPreviewCard = ({ title, icon, chartType, data, className }: ChartPreviewCardProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [chartData, setChartData] = useState<DataPoint[]>(data);
  
  // Sync with incoming data changes
  useEffect(() => {
    setChartData(data);
  }, [data]);
  
  // Simulate live data interaction
  const handleCardClick = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    // Create some random data variations
    const newData = chartData.map(point => ({
      ...point,
      value: Math.max(5, Math.min(50, point.value + (Math.random() > 0.5 ? 5 : -5) * Math.random()))
    }));
    
    setChartData(newData);
  };

  // Function to render the icon based on the icon type
  const renderIcon = () => {
    switch (icon) {
      case 'chart-bar':
        return <ChartBar className={`h-5 w-5 text-sireiq-cyan mr-2 ${isAnimating ? 'animate-pulse' : ''}`} />;
      case 'chart-line':
        return <LineChart className={`h-5 w-5 text-sireiq-cyan mr-2 ${isAnimating ? 'animate-pulse' : ''}`} />;
      case 'chart-pie':
        return <ChartPie className={`h-5 w-5 text-sireiq-cyan mr-2 ${isAnimating ? 'animate-pulse' : ''}`} />;
      default:
        return <ChartBar className={`h-5 w-5 text-sireiq-cyan mr-2 ${isAnimating ? 'animate-pulse' : ''}`} />;
    }
  };

  // Function to render the appropriate chart based on the chart type
  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData.slice(0, 4)}>
              <Bar dataKey="value" fill="#33C3F0" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart data={chartData.slice(0, 4)}>
              <Line type="monotone" dataKey="value" stroke="#33C3F0" animationDuration={isAnimating ? 1000 : 0} />
            </RechartsLineChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={40}
                animationDuration={isAnimating ? 1000 : 0}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color || "#33C3F0"} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={cn("glass-effect rounded-xl p-5 border border-sireiq-accent/30 cursor-pointer", className)}
      onClick={handleCardClick}
    >
      <div className="flex items-center mb-4">
        {renderIcon()}
        <h3 className="font-bold">{title}</h3>
      </div>
      <div className="h-32 bg-sireiq-darker/50 rounded-lg flex items-center justify-center">
        {renderChart()}
      </div>
      
      <div className="mt-2 text-xs text-sireiq-light/50 flex justify-end">
        {isAnimating ? 'Updating data...' : 'Click to refresh data'}
      </div>
    </div>
  );
};

export default ChartPreviewCard;
