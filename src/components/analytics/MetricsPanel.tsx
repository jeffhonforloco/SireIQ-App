
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

interface MetricsPanelProps {
  initialMetrics: Metric[];
}

const MetricsPanel = ({ initialMetrics }: MetricsPanelProps) => {
  const [metrics, setMetrics] = useState<Metric[]>(initialMetrics);
  const [isUpdating, setIsUpdating] = useState(false);

  // Simulate metrics updates periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      
      setTimeout(() => {
        setMetrics(prevMetrics => 
          prevMetrics.map(metric => {
            // Generate random number for new value
            const currentValue = parseInt(metric.value.replace(/,/g, ''));
            const randomChange = Math.floor(Math.random() * 50) - 25;
            const newValue = Math.max(0, currentValue + randomChange);
            
            // Determine if change is positive
            const changeValue = Math.abs(randomChange);
            const changePercent = Math.round((changeValue / currentValue) * 100) / 10;
            const isPositive = randomChange > 0;
            
            return {
              ...metric,
              value: newValue.toLocaleString(),
              change: metric.label === "Avg. Session Time" 
                ? `${isPositive ? '+' : '-'}0:${String(changeValue % 60).padStart(2, '0')}`
                : `${isPositive ? '+' : '-'}${changePercent}%`,
              isPositive
            };
          })
        );
        
        setIsUpdating(false);
      }, 500);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      {metrics.map((metric, i) => (
        <div 
          key={i} 
          className={`glass-effect rounded-lg p-4 border border-sireiq-accent/10 transition-all hover:border-sireiq-cyan/20 ${
            isUpdating ? 'animate-pulse' : ''
          }`}
        >
          <p className="text-xs text-sireiq-light/50 mb-1">{metric.label}</p>
          <div className="flex justify-between items-baseline">
            <p className="text-xl font-bold">{metric.value}</p>
            <span className={`text-xs font-medium flex items-center ${metric.isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {metric.isPositive ? 
                <TrendingUp className="h-3 w-3 mr-1" /> : 
                <TrendingDown className="h-3 w-3 mr-1" />
              }
              {metric.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsPanel;
