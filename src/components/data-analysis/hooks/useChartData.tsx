
import { useMemo } from 'react';
import { DataPoint, ChartConfig, AdvancedStats } from '../types';

export const useChartData = (activeData: DataPoint[], chartConfig: ChartConfig) => {
  const colors = ['#00d4ff', '#0099cc', '#006699', '#004466', '#ff6b35', '#f7931e', '#32cd32', '#ff69b4'];

  const generatePieData = (data: DataPoint[]) => {
    if (!chartConfig.yAxis) return [];
    
    // Group data by x-axis and sum y-axis values
    const grouped = data.reduce((acc, item) => {
      const key = String(item[chartConfig.xAxis]);
      const rawValue = item[chartConfig.yAxis];
      const value = typeof rawValue === 'number' ? rawValue : parseFloat(String(rawValue)) || 0;
      acc[key] = (acc[key] || 0) + value;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(grouped).map(([name, value], index) => ({
      name,
      value,
      color: colors[index % colors.length]
    }));
  };

  const processDataForChart = (data: DataPoint[]) => {
    if (!chartConfig.xAxis || !chartConfig.yAxis) return data;
    
    return data.map(item => ({
      ...item,
      x: item[chartConfig.xAxis],
      y: typeof item[chartConfig.yAxis] === 'number' ? item[chartConfig.yAxis] : parseFloat(String(item[chartConfig.yAxis])) || 0
    }));
  };

  const getAdvancedStats = (): AdvancedStats | null => {
    if (!chartConfig.yAxis || activeData.length === 0) return null;
    
    const values = activeData.map(d => {
      const value = d[chartConfig.yAxis];
      return typeof value === 'number' ? value : parseFloat(String(value)) || 0;
    }).filter(val => !isNaN(val));
    
    if (values.length === 0) return null;
    
    const sum = values.reduce((a, b) => a + b, 0);
    const mean = sum / values.length;
    const variance = values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / values.length;
    const stdDev = Math.sqrt(variance);
    
    return {
      mean: mean.toFixed(2),
      median: values.sort((a, b) => a - b)[Math.floor(values.length / 2)].toFixed(2),
      stdDev: stdDev.toFixed(2),
      variance: variance.toFixed(2),
      range: (Math.max(...values) - Math.min(...values)).toFixed(2)
    };
  };

  return {
    generatePieData,
    processDataForChart,
    getAdvancedStats,
    colors
  };
};
