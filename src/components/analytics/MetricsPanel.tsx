
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, BarChart3, Users, Eye, Clock } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ComponentType<any>;
}

const MetricsPanel = () => {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      label: 'Total Users',
      value: '12,847',
      change: '+12.5%',
      isPositive: true,
      icon: Users
    },
    {
      label: 'Active Sessions',
      value: '3,241',
      change: '+8.2%',
      isPositive: true,
      icon: Eye
    },
    {
      label: 'Response Time',
      value: '142ms',
      change: '-5.1%',
      isPositive: true,
      icon: Clock
    },
    {
      label: 'API Calls',
      value: '98,432',
      change: '+18.9%',
      isPositive: true,
      icon: BarChart3
    }
  ]);

  const [isRealTime, setIsRealTime] = useState(true);

  // Simulate real-time updates
  useEffect(() => {
    if (!isRealTime) return;

    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => {
        const randomChange = (Math.random() - 0.5) * 10;
        const newValue = parseInt(metric.value.replace(/,/g, '')) + Math.floor(randomChange * 10);
        
        return {
          ...metric,
          value: newValue.toLocaleString(),
          change: `${randomChange > 0 ? '+' : ''}${randomChange.toFixed(1)}%`,
          isPositive: randomChange > 0
        };
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [isRealTime]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-sireiq-light">Real-Time Metrics</h2>
        <div className="flex items-center gap-3">
          <Badge 
            variant={isRealTime ? "default" : "outline"} 
            className={isRealTime ? "bg-green-500/20 text-green-400" : ""}
          >
            {isRealTime ? "Live" : "Paused"}
          </Badge>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setIsRealTime(!isRealTime)}
            className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
          >
            {isRealTime ? "Pause" : "Resume"} Updates
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index} className="bg-sireiq-darker border-sireiq-accent/20 hover:border-sireiq-cyan/50 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-sireiq-light/70 flex items-center gap-2">
                  <IconComponent className="w-4 h-4 text-sireiq-cyan" />
                  {metric.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-sireiq-light">{metric.value}</div>
                    <div className="flex items-center gap-1 mt-1">
                      {metric.isPositive ? (
                        <TrendingUp className="w-4 h-4 text-green-400" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-400" />
                      )}
                      <span className={`text-sm font-medium ${metric.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Real-time Activity Feed */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-sireiq-cyan" />
            Live Activity Feed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {[
              { time: '14:32:15', event: 'New user registration', details: 'user@example.com' },
              { time: '14:31:45', event: 'API call completed', details: '/api/models/generate' },
              { time: '14:31:22', event: 'Model deployment', details: 'Content Generator v2.1' },
              { time: '14:30:58', event: 'User login', details: 'admin@sireiq.com' },
              { time: '14:30:33', event: 'Data backup completed', details: '2.4GB processed' },
              { time: '14:30:12', event: 'Security scan finished', details: 'No issues found' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-sireiq-accent/5 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-sireiq-light">{activity.event}</p>
                  <p className="text-xs text-sireiq-light/60">{activity.details}</p>
                </div>
                <span className="text-xs text-sireiq-light/50">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetricsPanel;
