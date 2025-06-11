
import React from 'react';

export const useChartData = () => {
  const [data, setData] = React.useState<any[]>([]);
  
  const processData = (rawData: any[]) => {
    return rawData.map((item, index) => ({
      ...item,
      id: index,
      value: typeof item.value === 'string' ? parseFloat(item.value) || 0 : (item.value || 0),
      total: (typeof item.value === 'string' ? parseFloat(item.value) || 0 : (item.value || 0)) + (item.baseline || 0)
    }));
  };

  const generatePieData = (rawData: any[]) => {
    return rawData.map((item, index) => ({
      name: item.name || `Item ${index + 1}`,
      value: typeof item.value === 'string' ? parseFloat(item.value) || 0 : (item.value || 0),
      fill: `hsl(${(index * 137.5) % 360}, 70%, 50%)`
    }));
  };

  const processDataForChart = (rawData: any[], chartType: string = 'bar') => {
    if (chartType === 'pie') {
      return generatePieData(rawData);
    }
    return processData(rawData);
  };

  const getAdvancedStats = (rawData: any[]) => {
    if (!rawData.length) return {};
    
    const values = rawData.map(item => 
      typeof item.value === 'string' ? parseFloat(item.value) || 0 : (item.value || 0)
    );
    
    const sum = values.reduce((acc, val) => acc + val, 0);
    const avg = sum / values.length;
    const max = Math.max(...values);
    const min = Math.min(...values);
    
    return { sum, avg, max, min, count: values.length };
  };

  const colors = [
    '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', 
    '#EF4444', '#EC4899', '#6366F1', '#84CC16'
  ];

  const updateData = (newData: any[]) => {
    const processed = processData(newData);
    setData(processed);
  };

  return {
    data,
    updateData,
    processData,
    generatePieData,
    processDataForChart,
    getAdvancedStats,
    colors
  };
};
