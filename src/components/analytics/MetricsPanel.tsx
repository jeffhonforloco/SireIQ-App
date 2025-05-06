
import React, { useState } from 'react';
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      {metrics.map((metric, i) => (
        <div 
          key={i} 
          className="glass-effect rounded-lg p-4 border border-sireiq-accent/10 transition-all hover:border-sireiq-cyan/20"
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
