
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

  const updateData = (newData: any[]) => {
    const processed = processData(newData);
    setData(processed);
  };

  return {
    data,
    updateData,
    processData
  };
};
