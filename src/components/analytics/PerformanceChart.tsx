
import React, { useState } from 'react';
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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
  
  const handleTimeFrameChange = (value: string) => {
    setTimeFrame(value);
    
    // Simulate different data for different time periods
    if (value === '30days') {
      setData(initialData);
    } else if (value === '90days') {
      setData(initialData.map(item => ({
        name: item.name,
        value: Math.floor(item.value * 2.5)
      })));
    } else if (value === '12months') {
      setData(initialData.map(item => ({
        name: item.name,
        value: Math.floor(item.value * 4)
      })));
    }
  };

  return (
    <div className="bg-sireiq-darker rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex gap-2">
          <Button 
            variant={timeFrame === "30days" ? "default" : "outline"} 
            size="sm"
            onClick={() => handleTimeFrameChange("30days")}
            className={timeFrame === "30days" ? "bg-sireiq-cyan text-sireiq-darker" : "border-sireiq-accent/30"}
          >
            30 Days
          </Button>
          <Button 
            variant={timeFrame === "90days" ? "default" : "outline"} 
            size="sm"
            onClick={() => handleTimeFrameChange("90days")}
            className={timeFrame === "90days" ? "bg-sireiq-cyan text-sireiq-darker" : "border-sireiq-accent/30"}
          >
            90 Days
          </Button>
          <Button 
            variant={timeFrame === "12months" ? "default" : "outline"} 
            size="sm"
            onClick={() => handleTimeFrameChange("12months")}
            className={timeFrame === "12months" ? "bg-sireiq-cyan text-sireiq-darker" : "border-sireiq-accent/30"}
          >
            12 Months
          </Button>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="name" 
              stroke="#8E9196" 
              tick={{ fill: '#8E9196' }}
            />
            <YAxis 
              stroke="#8E9196" 
              tick={{ fill: '#8E9196' }}
            />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-sireiq-darker p-2 border border-sireiq-accent/30 rounded-md">
                      <p className="text-sm font-medium">{label}</p>
                      <p className="text-sireiq-cyan text-sm">
                        {payload[0].value} views
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
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#33C3F0" stopOpacity={1} />
                <stop offset="100%" stopColor="#0EA5E9" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
