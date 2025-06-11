
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BarChart3, LineChart, PieChart, TrendingUp, Download, Upload, RefreshCw } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart, Cell, Pie, ScatterChart, Scatter, AreaChart, Area } from 'recharts';
import { toast } from 'sonner';

interface DataPoint {
  [key: string]: string | number;
}

interface ChartConfig {
  type: string;
  xAxis: string;
  yAxis: string;
  groupBy?: string;
}

const VisualizationPanel: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState<string>('line');
  const [uploadedData, setUploadedData] = useState<DataPoint[]>([]);
  const [fileName, setFileName] = useState<string>('');
  const [chartConfig, setChartConfig] = useState<ChartConfig>({
    type: 'line',
    xAxis: '',
    yAxis: ''
  });

  // Default sample data
  const defaultData = [
    { month: 'Jan', revenue: 4200, customers: 320, orders: 450, growth: 12 },
    { month: 'Feb', revenue: 3800, customers: 280, orders: 420, growth: -8 },
    { month: 'Mar', revenue: 5200, customers: 390, orders: 580, growth: 24 },
    { month: 'Apr', revenue: 4800, customers: 350, orders: 520, growth: 16 },
    { month: 'May', revenue: 6100, customers: 450, orders: 680, growth: 32 },
    { month: 'Jun', revenue: 5500, customers: 410, orders: 620, growth: 18 }
  ];

  const activeData = uploadedData.length > 0 ? uploadedData : defaultData;

  const chartTypes = [
    { value: 'line', label: 'Line Chart', icon: LineChart },
    { value: 'bar', label: 'Bar Chart', icon: BarChart3 },
    { value: 'area', label: 'Area Chart', icon: TrendingUp },
    { value: 'scatter', label: 'Scatter Plot', icon: BarChart3 },
    { value: 'pie', label: 'Pie Chart', icon: PieChart }
  ];

  const colors = ['#00d4ff', '#0099cc', '#006699', '#004466', '#ff6b35', '#f7931e'];

  // Get column names and types from data
  const columns = useMemo(() => {
    if (activeData.length === 0) return { numeric: [], all: [] };
    
    const sample = activeData[0];
    const allColumns = Object.keys(sample);
    const numericColumns = allColumns.filter(key => 
      typeof sample[key] === 'number'
    );
    
    return { numeric: numericColumns, all: allColumns };
  }, [activeData]);

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
        
        // Auto-set initial chart configuration
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

  const generatePieData = (data: DataPoint[]) => {
    if (!chartConfig.yAxis) return [];
    
    // Group data by x-axis and sum y-axis values
    const grouped = data.reduce((acc, item) => {
      const key = String(item[chartConfig.xAxis]);
      const value = Number(item[chartConfig.yAxis]) || 0;
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
      y: Number(item[chartConfig.yAxis]) || 0
    }));
  };

  const renderChart = () => {
    const processedData = processDataForChart(activeData);
    
    switch (selectedChart) {
      case 'line':
        if (!chartConfig.yAxis) return <div className="flex items-center justify-center h-64 text-sireiq-light/50">Select Y-axis to display chart</div>;
        return (
          <ResponsiveContainer width="100%" height={400}>
            <RechartsLineChart data={processedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey={chartConfig.xAxis} stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px'
                }} 
              />
              <Line type="monotone" dataKey={chartConfig.yAxis} stroke="#00d4ff" strokeWidth={2} />
            </RechartsLineChart>
          </ResponsiveContainer>
        );
        
      case 'bar':
        if (!chartConfig.yAxis) return <div className="flex items-center justify-center h-64 text-sireiq-light/50">Select Y-axis to display chart</div>;
        return (
          <ResponsiveContainer width="100%" height={400}>
            <RechartsBarChart data={processedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey={chartConfig.xAxis} stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px'
                }} 
              />
              <Bar dataKey={chartConfig.yAxis} fill="#00d4ff" />
            </RechartsBarChart>
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
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px'
                }} 
              />
              <Area type="monotone" dataKey={chartConfig.yAxis} stroke="#00d4ff" fill="#00d4ff" fillOpacity={0.3} />
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
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px'
                }} 
              />
              <Scatter dataKey="y" fill="#00d4ff" />
            </ScatterChart>
          </ResponsiveContainer>
        );
        
      case 'pie':
        const pieData = generatePieData(activeData);
        if (pieData.length === 0) return <div className="flex items-center justify-center h-64 text-sireiq-light/50">No data available for pie chart</div>;
        return (
          <ResponsiveContainer width="100%" height={400}>
            <RechartsPieChart>
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
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px'
                }} 
              />
            </RechartsPieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  const exportChart = () => {
    const chartData = {
      chartType: selectedChart,
      configuration: chartConfig,
      data: activeData,
      timestamp: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(chartData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `chart-data-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    toast.success('Chart data exported successfully!');
  };

  const refreshData = () => {
    if (uploadedData.length > 0) {
      toast.success('Data refreshed from uploaded file');
    } else {
      toast.success('Using sample data for demonstration');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-gradient">Data</span> Visualization
        </h2>
        <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto">
          Transform your data into compelling visual insights and interactive charts
        </p>
      </div>

      {/* Data Upload Section */}
      <Card className="glass-effect border border-sireiq-accent/30">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="mr-2 h-5 w-5" />
            Data Source
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Input
                type="file"
                accept=".csv,.json"
                onChange={handleFileUpload}
                className="hidden"
                id="viz-file-upload"
              />
              <Button variant="outline" asChild>
                <label htmlFor="viz-file-upload" className="cursor-pointer">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Data
                </label>
              </Button>
            </div>
            {fileName && (
              <div className="text-sm text-sireiq-cyan">
                Using: {fileName} ({activeData.length} records)
              </div>
            )}
            {!fileName && (
              <div className="text-sm text-sireiq-light/70">
                Using sample data ({activeData.length} records)
              </div>
            )}
            <Button variant="outline" size="sm" onClick={refreshData}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Chart Configuration */}
      <Card className="glass-effect border border-sireiq-accent/30">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            Chart Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label>Chart Type</Label>
              <Select value={selectedChart} onValueChange={(value) => {
                setSelectedChart(value);
                setChartConfig({...chartConfig, type: value});
              }}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {chartTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      <div className="flex items-center">
                        <type.icon className="mr-2 h-4 w-4" />
                        {type.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>X-Axis</Label>
              <Select value={chartConfig.xAxis} onValueChange={(value) => 
                setChartConfig({...chartConfig, xAxis: value})
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select column" />
                </SelectTrigger>
                <SelectContent>
                  {columns.all.map((col) => (
                    <SelectItem key={col} value={col}>{col}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Y-Axis</Label>
              <Select value={chartConfig.yAxis} onValueChange={(value) => 
                setChartConfig({...chartConfig, yAxis: value})
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select column" />
                </SelectTrigger>
                <SelectContent>
                  {columns.numeric.map((col) => (
                    <SelectItem key={col} value={col}>{col}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button onClick={exportChart} variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chart Display */}
      <Card className="glass-effect border border-sireiq-accent/30">
        <CardHeader>
          <CardTitle>Interactive Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-sireiq-darker/30 rounded-lg p-4">
            {renderChart()}
          </div>
        </CardContent>
      </Card>

      {/* Data Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-effect border border-sireiq-accent/30">
          <CardHeader>
            <CardTitle className="text-lg">Data Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-sireiq-light/70">Total Records</span>
              <span className="font-mono text-lg text-sireiq-cyan">{activeData.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-sireiq-light/70">Columns</span>
              <span className="font-mono text-lg text-sireiq-cyan">{columns.all.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-sireiq-light/70">Numeric Fields</span>
              <span className="font-mono text-lg text-sireiq-cyan">{columns.numeric.length}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border border-sireiq-accent/30">
          <CardHeader>
            <CardTitle className="text-lg">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {chartConfig.yAxis && (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-sireiq-light/70">Max Value</span>
                  <span className="font-mono text-lg text-sireiq-cyan">
                    {Math.max(...activeData.map(d => Number(d[chartConfig.yAxis]) || 0)).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-sireiq-light/70">Min Value</span>
                  <span className="font-mono text-lg text-sireiq-cyan">
                    {Math.min(...activeData.map(d => Number(d[chartConfig.yAxis]) || 0)).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-sireiq-light/70">Average</span>
                  <span className="font-mono text-lg text-sireiq-cyan">
                    {(activeData.reduce((sum, d) => sum + (Number(d[chartConfig.yAxis]) || 0), 0) / activeData.length).toFixed(2)}
                  </span>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="glass-effect border border-sireiq-accent/30">
          <CardHeader>
            <CardTitle className="text-lg">Chart Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-sireiq-light/70">Chart Type</span>
              <span className="font-mono text-lg text-sireiq-cyan">
                {chartTypes.find(t => t.value === selectedChart)?.label}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-sireiq-light/70">X-Axis</span>
              <span className="font-mono text-lg text-sireiq-cyan">{chartConfig.xAxis || 'None'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-sireiq-light/70">Y-Axis</span>
              <span className="font-mono text-lg text-sireiq-cyan">{chartConfig.yAxis || 'None'}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisualizationPanel;
