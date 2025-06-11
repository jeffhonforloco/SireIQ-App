
import { toast } from 'sonner';
import { DataPoint, ChartConfig } from '../types';

export const useFileUpload = (
  setUploadedData: (data: DataPoint[]) => void,
  setFileName: (name: string) => void,
  setChartConfig: (config: ChartConfig) => void,
  selectedChart: string
) => {
  const parseCSV = (text: string): DataPoint[] => {
    const lines = text.split('\n').filter(line => line.trim());
    if (lines.length < 2) return [];

    const headers = lines[0].split(',').map(h => h.trim());
    const data: DataPoint[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
      const row: DataPoint = {};
      
      headers.forEach((header, index) => {
        const value = values[index];
        const numValue = parseFloat(value);
        row[header] = isNaN(numValue) ? value : numValue;
      });
      
      data.push(row);
    }

    return data;
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        let data: DataPoint[] = [];

        if (file.name.endsWith('.json')) {
          data = JSON.parse(text);
        } else if (file.name.endsWith('.csv')) {
          data = parseCSV(text);
        }

        setUploadedData(data);
        toast.success(`Successfully uploaded ${file.name} with ${data.length} records`);
        
        // Auto-configure chart settings
        if (data.length > 0) {
          const firstRow = data[0];
          const numericCols = Object.keys(firstRow).filter(key => typeof firstRow[key] === 'number');
          const stringCols = Object.keys(firstRow).filter(key => typeof firstRow[key] === 'string');
          
          setChartConfig({
            type: selectedChart,
            xAxis: stringCols[0] || Object.keys(firstRow)[0],
            yAxis: numericCols[0] || Object.keys(firstRow)[1]
          });
        }
      } catch (error) {
        toast.error('Error parsing file. Please check the format.');
      }
    };

    reader.readAsText(file);
  };

  return { handleFileUpload };
};
