
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Activity, Eye, MessageSquare, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Metric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ComponentType<any>;
  description?: string;
}

interface MetricsPanelProps {
  initialMetrics: Metric[];
  updateInterval?: number;
  showDetails?: boolean;
}

const MetricsPanel = ({ 
  initialMetrics, 
  updateInterval = 10000,
  showDetails = false 
}: MetricsPanelProps) => {
  const [metrics, setMetrics] = useState<Metric[]>(initialMetrics);
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Simulate real-time metrics updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      
      setTimeout(() => {
        setMetrics(prevMetrics => 
          prevMetrics.map(metric => {
            const currentValue = parseFloat(metric.value.replace(/[^\d.]/g, ''));
            let newValue: number;
            let changeValue: number;
            
            // Generate realistic changes based on metric type
            if (metric.label.includes('Session')) {
              // Session time - smaller variations
              changeValue = (Math.random() - 0.5) * 0.5;
              newValue = Math.max(0.5, currentValue + changeValue);
              const minutes = Math.floor(newValue);
              const seconds = Math.floor((newValue - minutes) * 60);
              
              return {
                ...metric,
                value: `${minutes}:${String(seconds).padStart(2, '0')}`,
                change: `${changeValue > 0 ? '+' : ''}${Math.abs(changeValue).toFixed(1)}min`,
                isPositive: changeValue > 0
              };
            } else if (metric.label.includes('Rate')) {
              // Percentage values
              changeValue = (Math.random() - 0.5) * 2;
              newValue = Math.max(0, Math.min(100, currentValue + changeValue));
              
              return {
                ...metric,
                value: `${newValue.toFixed(1)}%`,
                change: `${changeValue > 0 ? '+' : ''}${changeValue.toFixed(1)}%`,
                isPositive: changeValue > 0
              };
            } else {
              // Count values
              changeValue = Math.floor((Math.random() - 0.5) * currentValue * 0.1);
              newValue = Math.max(0, currentValue + changeValue);
              
              return {
                ...metric,
                value: newValue.toLocaleString(),
                change: `${changeValue > 0 ? '+' : ''}${Math.abs(changeValue).toLocaleString()}`,
                isPositive: changeValue > 0
              };
            }
          })
        );
        
        setLastUpdated(new Date());
        setIsUpdating(false);
      }, 800);
    }, updateInterval);
    
    return () => clearInterval(interval);
  }, [updateInterval]);

  const getMetricIcon = (metric: Metric) => {
    const IconComponent = metric.icon;
    return <IconComponent className="w-4 h-4" />;
  };

  return (
    <div className="space-y-4">
      {/* Update indicator */}
      {showDetails && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className={`w-4 h-4 ${isUpdating ? 'text-sireiq-cyan animate-pulse' : 'text-sireiq-light/50'}`} />
            <span className="text-sm text-sireiq-light/70">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </span>
          </div>
          <Badge variant="outline" className="border-sireiq-accent/30">
            Live Data
          </Badge>
        </div>
      )}

      {/* Metrics grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {metrics.map((metric, i) => (
          <Card 
            key={i} 
            className={`bg-sireiq-darker border-sireiq-accent/20 transition-all duration-300 hover:border-sireiq-cyan/30 ${
              isUpdating ? 'animate-pulse' : ''
            }`}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-sireiq-light/70 flex items-center gap-2">
                {getMetricIcon(metric)}
                {metric.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-bold text-sireiq-light">{metric.value}</p>
                <div className={`flex items-center text-sm font-medium ${
                  metric.isPositive ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.isPositive ? 
                    <TrendingUp className="h-4 w-4 mr-1" /> : 
                    <TrendingDown className="h-4 w-4 mr-1" />
                  }
                  <span>{metric.change}</span>
                </div>
              </div>
              
              {metric.description && showDetails && (
                <p className="text-xs text-sireiq-light/50 mt-2 border-t border-sireiq-accent/10 pt-2">
                  {metric.description}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Real-time indicator */}
      <div className="flex items-center justify-center gap-2 pt-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span className="text-xs text-sireiq-light/50">Real-time updates every {updateInterval / 1000}s</span>
      </div>
    </div>
  );
};

// Enhanced default metrics with more realistic data
export const defaultMetrics: Metric[] = [
  {
    label: 'Total Users',
    value: '12,847',
    change: '+127',
    isPositive: true,
    icon: Eye,
    description: 'Total registered users on the platform'
  },
  {
    label: 'Active Sessions',
    value: '3,264',
    change: '+89',
    isPositive: true,
    icon: Activity,
    description: 'Currently active user sessions'
  },
  {
    label: 'Messages Today',
    value: '45,892',
    change: '+2,104',
    isPositive: true,
    icon: MessageSquare,
    description: 'Total messages sent today'
  },
  {
    label: 'Avg. Session Time',
    value: '12:34',
    change: '+1.2min',
    isPositive: true,
    icon: Clock,
    description: 'Average user session duration'
  }
];

export default MetricsPanel;
