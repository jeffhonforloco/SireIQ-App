
import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, AreaChart, Area, ScatterChart, Scatter, PieChart, Pie, Cell } from 'recharts';
import { DataPoint, ChartConfig } from '../types';

interface ChartRendererProps {
  selectedChart: string;
  chartConfig: ChartConfig;
  processedData: DataPoint[];
  pieData: any[];
  colors: string[];
}

const ChartRenderer: React.FC<ChartRendererProps> = ({
  selectedChart,
  chartConfig,
  processedData,
  pieData,
  colors
}) => {
  const tooltipStyle = {
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '8px'
  };

  switch (selectedChart) {
    case 'line':
      if (!chartConfig.yAxis) return <div className="flex items-center justify-center h-64 text-sireiq-light/50">Select Y-axis to display chart</div>;
      return (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={processedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey={chartConfig.xAxis} stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={tooltipStyle} />
            <Line type="monotone" dataKey={chartConfig.yAxis} stroke="#00d4ff" strokeWidth={3} dot={{ fill: '#00d4ff', strokeWidth: 2, r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      );
      
    case 'bar':
      if (!chartConfig.yAxis) return <div className="flex items-center justify-center h-64 text-sireiq-light/50">Select Y-axis to display chart</div>;
      return (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={processedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey={chartConfig.xAxis} stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={tooltipStyle} />
            <Bar dataKey={chartConfig.yAxis} fill="#00d4ff" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      );
      
    case 'area':
      if (!chartConfig.yAxis) return <div className="flex items-center justify-center h-64 text-sireiq-light/50">Select Y-axis to display chart</div>;
      return (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={processedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey={chartConfig.xAxis} stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={tooltipStyle} />
            <Area type="monotone" dataKey={chartConfig.yAxis} stroke="#00d4ff" fill="#00d4ff" fillOpacity={0.3} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      );
      
    case 'scatter':
      if (!chartConfig.yAxis) return <div className="flex items-center justify-center h-64 text-sireiq-light/50">Select Y-axis to display chart</div>;
      return (
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart data={processedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="y" type="number" stroke="#94a3b8" />
            <YAxis dataKey={chartConfig.yAxis} stroke="#94a3b8" />
            <Tooltip contentStyle={tooltipStyle} />
            <Scatter dataKey="y" fill="#00d4ff" />
          </ScatterChart>
        </ResponsiveContainer>
      );
      
    case 'pie':
      if (pieData.length === 0) return <div className="flex items-center justify-center h-64 text-sireiq-light/50">No data available for pie chart</div>;
      return (
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} />
          </PieChart>
        </ResponsiveContainer>
      );
    default:
      return null;
  }
};

export default ChartRenderer;
