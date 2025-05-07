
import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { Button } from '@/components/ui/button';

interface DataPoint {
  name: string;
  value: number;
}

interface PerformanceChartProps {
  initialData: DataPoint[];
  title: string;
}

const PerformanceChart = ({ initialData, title }: PerformanceChartProps) => {
  const [data, setData] = useState<DataPoint[]>(initialData);
  const [timeFrame, setTimeFrame] = useState('30days');
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Effect to load initial data
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      generateDataForTimeFrame(timeFrame);
      setIsLoading(false);
    }, 800);
  }, []);
  
  // Function to generate sample data based on time frame
  const generateDataForTimeFrame = (timeframe: string) => {
    setIsLoading(true);
    
    let newData: DataPoint[] = [];
    
    switch(timeframe) {
      case '30days':
        newData = [
          { name: 'Week 1', value: Math.floor(Math.random() * 1000) + 5000 },
          { name: 'Week 2', value: Math.floor(Math.random() * 1200) + 5500 },
          { name: 'Week 3', value: Math.floor(Math.random() * 1500) + 6000 },
          { name: 'Week 4', value: Math.floor(Math.random() * 2000) + 7000 },
        ];
        break;
        
      case '90days':
        newData = [
          { name: 'Jan', value: Math.floor(Math.random() * 2000) + 10000 },
          { name: 'Feb', value: Math.floor(Math.random() * 3000) + 12000 },
          { name: 'Mar', value: Math.floor(Math.random() * 2500) + 15000 },
        ];
        break;
        
      case '12months':
        newData = [
          { name: 'Q1', value: Math.floor(Math.random() * 10000) + 30000 },
          { name: 'Q2', value: Math.floor(Math.random() * 15000) + 35000 },
          { name: 'Q3', value: Math.floor(Math.random() * 12000) + 40000 },
          { name: 'Q4', value: Math.floor(Math.random() * 20000) + 45000 },
        ];
        break;
    }
    
    setTimeout(() => {
      setData(newData);
      setIsLoading(false);
    }, 800);
  };
  
  const handleTimeFrameChange = (value: string) => {
    if (value === timeFrame) {
      // If same timeframe clicked, just refresh the data
      setIsRefreshing(true);
      setTimeout(() => {
        generateDataForTimeFrame(value);
        setIsRefreshing(false);
      }, 500);
      return;
    }
    
    setTimeFrame(value);
    generateDataForTimeFrame(value);
  };
  
  // Function to refresh data
  const refreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      generateDataForTimeFrame(timeFrame);
      setIsRefreshing(false);
    }, 800);
  };

  return (
    <div className="bg-sireiq-darker rounded-lg p-4 mb-4 relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold flex items-center">
          {title}
          {(isLoading || isRefreshing) && (
            <span className="ml-2 inline-block h-2 w-2 rounded-full bg-sireiq-cyan animate-pulse"></span>
          )}
        </h3>
        <div className="flex gap-2">
          <Button 
            variant={timeFrame === "30days" ? "default" : "outline"} 
            size="sm"
            onClick={() => handleTimeFrameChange("30days")}
            className={timeFrame === "30days" ? "bg-sireiq-cyan text-sireiq-darker" : "border-sireiq-accent/30"}
            disabled={isLoading}
          >
            30 Days
          </Button>
          <Button 
            variant={timeFrame === "90days" ? "default" : "outline"} 
            size="sm"
            onClick={() => handleTimeFrameChange("90days")}
            className={timeFrame === "90days" ? "bg-sireiq-cyan text-sireiq-darker" : "border-sireiq-accent/30"}
            disabled={isLoading}
          >
            90 Days
          </Button>
          <Button 
            variant={timeFrame === "12months" ? "default" : "outline"} 
            size="sm"
            onClick={() => handleTimeFrameChange("12months")}
            className={timeFrame === "12months" ? "bg-sireiq-cyan text-sireiq-darker" : "border-sireiq-accent/30"}
            disabled={isLoading}
          >
            12 Months
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={refreshData}
            disabled={isLoading || isRefreshing}
            className="border-sireiq-accent/30 ml-1"
          >
            ↻
          </Button>
        </div>
      </div>
      
      <div className="h-64">
        {isLoading ? (
          <div className="h-full flex items-center justify-center text-sireiq-light/50">
            <div className="text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-sireiq-cyan border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-2">Loading data...</p>
            </div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} className={isRefreshing ? 'opacity-50' : ''}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="name" 
                stroke="#8E9196" 
                tick={{ fill: '#8E9196' }}
              />
              <YAxis 
                stroke="#8E9196" 
                tick={{ fill: '#8E9196' }}
                tickFormatter={(value) => value.toLocaleString()}
              />
              <Tooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-sireiq-darker p-2 border border-sireiq-accent/30 rounded-md">
                        <p className="text-sm font-medium">{label}</p>
                        <p className="text-sireiq-cyan text-sm">
                          {parseInt(payload[0].value.toString()).toLocaleString()} views
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar 
                dataKey="value" 
                fill="url(#colorGradient)" 
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#33C3F0" stopOpacity={1} />
                  <stop offset="100%" stopColor="#0EA5E9" stopOpacity={0.8} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default PerformanceChart;
