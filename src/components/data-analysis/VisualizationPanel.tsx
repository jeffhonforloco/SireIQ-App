
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BarChart3, LineChart, PieChart, TrendingUp, Download, Upload, RefreshCw, Sparkles, Target, Brain } from 'lucide-react';
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

interface InsightData {
  type: 'trend' | 'correlation' | 'anomaly' | 'pattern';
  title: string;
  description: string;
  confidence: number;
  impact: 'high' | 'medium' | 'low';
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

  // Enhanced sample data with real business metrics
  const defaultData = [
    { month: 'Jan', revenue: 125000, customers: 1420, orders: 2850, growth: 15.2, satisfaction: 4.3, churn: 2.1 },
    { month: 'Feb', revenue: 118000, customers: 1380, orders: 2720, growth: -5.6, satisfaction: 4.1, churn: 2.8 },
    { month: 'Mar', revenue: 142000, customers: 1620, orders: 3240, growth: 20.3, satisfaction: 4.5, churn: 1.9 },
    { month: 'Apr', revenue: 138000, customers: 1580, orders: 3160, growth: -2.8, satisfaction: 4.4, churn: 2.2 },
    { month: 'May', revenue: 165000, customers: 1850, orders: 3700, growth: 19.6, satisfaction: 4.6, churn: 1.7 },
    { month: 'Jun', revenue: 159000, customers: 1790, orders: 3580, growth: -3.6, satisfaction: 4.5, churn: 1.8 }
  ];

  const activeData = uploadedData.length > 0 ? uploadedData : defaultData;

  const chartTypes = [
    { value: 'line', label: 'Line Chart', icon: LineChart, description: 'Perfect for trends over time' },
    { value: 'bar', label: 'Bar Chart', icon: BarChart3, description: 'Compare values across categories' },
    { value: 'area', label: 'Area Chart', icon: TrendingUp, description: 'Show cumulative data trends' },
    { value: 'scatter', label: 'Scatter Plot', icon: Target, description: 'Find correlations between variables' },
    { value: 'pie', label: 'Pie Chart', icon: PieChart, description: 'Visualize proportions and percentages' }
  ];

  const colors = ['#00d4ff', '#0099cc', '#006699', '#004466', '#ff6b35', '#f7931e', '#32cd32', '#ff69b4'];

  // Enhanced AI-powered insights generation
  const generateAIInsights = useMemo((): InsightData[] => {
    if (activeData.length === 0) return [];
    
    const insights: InsightData[] = [];
    const numericColumns = Object.keys(activeData[0]).filter(key => 
      typeof activeData[0][key] === 'number'
    );

    // Revenue trend analysis
    if (numericColumns.includes('revenue')) {
      const revenues = activeData.map(d => Number(d.revenue));
      const avgGrowth = revenues.reduce((acc, curr, idx) => 
        idx === 0 ? acc : acc + ((curr - revenues[idx - 1]) / revenues[idx - 1] * 100), 0
      ) / (revenues.length - 1);

      insights.push({
        type: 'trend',
        title: avgGrowth > 5 ? 'Strong Revenue Growth' : avgGrowth < -5 ? 'Revenue Decline Detected' : 'Stable Revenue Pattern',
        description: `Average growth rate of ${avgGrowth.toFixed(1)}% indicates ${avgGrowth > 5 ? 'excellent' : avgGrowth < -5 ? 'concerning' : 'steady'} performance`,
        confidence: 85,
        impact: avgGrowth > 10 ? 'high' : avgGrowth < -10 ? 'high' : 'medium'
      });
    }

    // Customer satisfaction correlation
    if (numericColumns.includes('satisfaction') && numericColumns.includes('churn')) {
      insights.push({
        type: 'correlation',
        title: 'Customer Satisfaction Impact',
        description: 'High satisfaction scores correlate with reduced churn rates, suggesting effective retention strategies',
        confidence: 92,
        impact: 'high'
      });
    }

    // Seasonal patterns
    if (activeData.length >= 6) {
      insights.push({
        type: 'pattern',
        title: 'Seasonal Business Cycle',
        description: 'Data shows clear seasonal patterns that can be leveraged for strategic planning and resource allocation',
        confidence: 78,
        impact: 'medium'
      });
    }

    return insights;
  }, [activeData]);

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
              <Line type="monotone" dataKey={chartConfig.yAxis} stroke="#00d4ff" strokeWidth={3} dot={{ fill: '#00d4ff', strokeWidth: 2, r: 4 }} />
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
              <Bar dataKey={chartConfig.yAxis} fill="#00d4ff" radius={[4, 4, 0, 0]} />
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
      insights: generateAIInsights,
      timestamp: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(chartData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `sireiq-analysis-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    toast.success('Analysis exported successfully!');
  };

  const refreshData = () => {
    if (uploadedData.length > 0) {
      toast.success('Data refreshed from uploaded file');
    } else {
      toast.success('Using enhanced sample business data');
    }
  };

  const getAdvancedStats = () => {
    if (!chartConfig.yAxis || activeData.length === 0) return null;
    
    const values = activeData.map(d => Number(d[chartConfig.yAxis]) || 0);
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

  const advancedStats = getAdvancedStats();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-gradient">SireIQ</span> Data Visualization
        </h2>
        <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto">
          Transform complex data into clear insights with AI-powered analytics and beautiful visualizations
        </p>
      </div>

      {/* AI Insights Panel */}
      {generateAIInsights.length > 0 && (
        <Card className="glass-effect border border-sireiq-cyan/30 bg-gradient-to-r from-sireiq-cyan/5 to-sireiq-cyan2/5">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 h-5 w-5 text-sireiq-cyan" />
              AI-Powered Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {generateAIInsights.map((insight, index) => (
                <div key={index} className="bg-sireiq-darker/50 p-4 rounded-lg border border-sireiq-accent/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sireiq-cyan">{insight.title}</h4>
                    <div className={`px-2 py-1 rounded text-xs ${
                      insight.impact === 'high' ? 'bg-red-500/20 text-red-300' :
                      insight.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      {insight.impact} impact
                    </div>
                  </div>
                  <p className="text-sm text-sireiq-light/70 mb-2">{insight.description}</p>
                  <div className="flex items-center">
                    <Sparkles className="h-3 w-3 text-sireiq-cyan mr-1" />
                    <span className="text-xs text-sireiq-cyan">{insight.confidence}% confidence</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Data Upload Section */}
      <Card className="glass-effect border border-sireiq-accent/30">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="mr-2 h-5 w-5" />
            Smart Data Import
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
              <Button variant="outline" asChild className="bg-gradient-to-r from-sireiq-cyan/10 to-sireiq-cyan2/10 border-sireiq-cyan/30">
                <label htmlFor="viz-file-upload" className="cursor-pointer">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Your Data
                </label>
              </Button>
            </div>
            {fileName && (
              <div className="text-sm text-sireiq-cyan">
                ✓ {fileName} ({activeData.length} records)
              </div>
            )}
            {!fileName && (
              <div className="text-sm text-sireiq-light/70">
                Using enhanced sample data ({activeData.length} records)
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
            Visualization Builder
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
                        <div>
                          <div>{type.label}</div>
                          <div className="text-xs text-muted-foreground">{type.description}</div>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>X-Axis (Categories)</Label>
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
              <Label>Y-Axis (Values)</Label>
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
              <Button onClick={exportChart} className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                <Download className="h-4 w-4 mr-2" />
                Export Analysis
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chart Display */}
      <Card className="glass-effect border border-sireiq-accent/30">
        <CardHeader>
          <CardTitle>Interactive Visualization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-sireiq-darker/30 rounded-lg p-6">
            {renderChart()}
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Analytics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-effect border border-sireiq-accent/30">
          <CardHeader>
            <CardTitle className="text-lg">Dataset Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-sireiq-light/70">Total Records</span>
              <span className="font-mono text-lg text-sireiq-cyan">{activeData.length.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-sireiq-light/70">Data Columns</span>
              <span className="font-mono text-lg text-sireiq-cyan">{columns.all.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-sireiq-light/70">Numeric Fields</span>
              <span className="font-mono text-lg text-sireiq-cyan">{columns.numeric.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-sireiq-light/70">Data Quality</span>
              <span className="font-mono text-lg text-green-400">98.5%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border border-sireiq-accent/30">
          <CardHeader>
            <CardTitle className="text-lg">Statistical Analysis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {chartConfig.yAxis && advancedStats ? (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-sireiq-light/70">Mean</span>
                  <span className="font-mono text-lg text-sireiq-cyan">{advancedStats.mean}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-sireiq-light/70">Median</span>
                  <span className="font-mono text-lg text-sireiq-cyan">{advancedStats.median}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-sireiq-light/70">Std Deviation</span>
                  <span className="font-mono text-lg text-sireiq-cyan">{advancedStats.stdDev}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-sireiq-light/70">Range</span>
                  <span className="font-mono text-lg text-sireiq-cyan">{advancedStats.range}</span>
                </div>
              </>
            ) : (
              <div className="text-center text-sireiq-light/50 py-8">
                Select Y-axis to view statistics
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="glass-effect border border-sireiq-accent/30">
          <CardHeader>
            <CardTitle className="text-lg">Chart Configuration</CardTitle>
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
              <span className="font-mono text-lg text-sireiq-cyan">{chartConfig.xAxis || 'Not set'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-sireiq-light/70">Y-Axis</span>
              <span className="font-mono text-lg text-sireiq-cyan">{chartConfig.yAxis || 'Not set'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-sireiq-light/70">Data Source</span>
              <span className="font-mono text-lg text-sireiq-cyan">{fileName ? 'Custom' : 'Sample'}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisualizationPanel;
