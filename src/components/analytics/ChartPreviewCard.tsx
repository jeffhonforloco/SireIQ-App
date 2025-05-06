
import React from 'react';
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
  // Function to render the icon based on the icon type
  const renderIcon = () => {
    switch (icon) {
      case 'chart-bar':
        return <ChartBar className="h-5 w-5 text-sireiq-cyan mr-2" />;
      case 'chart-line':
        return <LineChart className="h-5 w-5 text-sireiq-cyan mr-2" />;
      case 'chart-pie':
        return <ChartPie className="h-5 w-5 text-sireiq-cyan mr-2" />;
      default:
        return <ChartBar className="h-5 w-5 text-sireiq-cyan mr-2" />;
    }
  };

  // Function to render the appropriate chart based on the chart type
  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.slice(0, 4)}>
              <Bar dataKey="value" fill="#33C3F0" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart data={data.slice(0, 4)}>
              <Line type="monotone" dataKey="value" stroke="#33C3F0" />
            </RechartsLineChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={40}
              >
                {data.map((entry, index) => (
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
    <div className={cn("glass-effect rounded-xl p-5 border border-sireiq-accent/30", className)}>
      <div className="flex items-center mb-4">
        {renderIcon()}
        <h3 className="font-bold">{title}</h3>
      </div>
      <div className="h-32 bg-sireiq-darker/50 rounded-lg flex items-center justify-center">
        {renderChart()}
      </div>
    </div>
  );
};

export default ChartPreviewCard;
