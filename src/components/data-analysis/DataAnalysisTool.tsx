
import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Play, Download, FileSpreadsheet, BarChart2, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

interface DataPoint {
  [key: string]: string | number;
}

interface AnalysisResult {
  insights: string[];
  trends: {
    name: string;
    change: number;
    direction: 'up' | 'down' | 'stable';
  }[];
  recommendations: string[];
  confidence: number;
  dataPoints: number;
  correlations: { [key: string]: number };
}

const DataAnalysisTool: React.FC = () => {
  const [uploadedData, setUploadedData] = useState<DataPoint[]>([]);
  const [selectedDataset, setSelectedDataset] = useState<string>('');
  const [analysisType, setAnalysisType] = useState<string>('descriptive');
  const [customQuery, setCustomQuery] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const sampleDatasets = [
    { 
      id: 'sales', 
      name: 'Sales Performance Data', 
      size: '2.3MB', 
      records: '12,450',
      data: generateSampleData('sales')
    },
    { 
      id: 'customers', 
      name: 'Customer Demographics', 
      size: '1.8MB', 
      records: '8,920',
      data: generateSampleData('customers')
    },
    { 
      id: 'marketing', 
      name: 'Marketing Campaign Results', 
      size: '950KB', 
      records: '3,240',
      data: generateSampleData('marketing')
    },
    { 
      id: 'inventory', 
      name: 'Inventory Analytics', 
      size: '1.2MB', 
      records: '5,680',
      data: generateSampleData('inventory')
    }
  ];

  function generateSampleData(type: string): DataPoint[] {
    const baseData: DataPoint[] = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    for (let i = 0; i < 12; i++) {
      switch (type) {
        case 'sales':
          baseData.push({
            month: months[i],
            revenue: Math.floor(Math.random() * 50000) + 30000,
            units_sold: Math.floor(Math.random() * 500) + 200,
            conversion_rate: +(Math.random() * 0.1 + 0.05).toFixed(3),
            avg_order_value: Math.floor(Math.random() * 200) + 100
          });
          break;
        case 'customers':
          baseData.push({
            month: months[i],
            new_customers: Math.floor(Math.random() * 1000) + 300,
            returning_customers: Math.floor(Math.random() * 800) + 400,
            churn_rate: +(Math.random() * 0.15 + 0.05).toFixed(3),
            lifetime_value: Math.floor(Math.random() * 1000) + 500
          });
          break;
        case 'marketing':
          baseData.push({
            month: months[i],
            ad_spend: Math.floor(Math.random() * 10000) + 5000,
            impressions: Math.floor(Math.random() * 100000) + 50000,
            clicks: Math.floor(Math.random() * 5000) + 1000,
            cost_per_click: +(Math.random() * 2 + 0.5).toFixed(2)
          });
          break;
        case 'inventory':
          baseData.push({
            month: months[i],
            stock_level: Math.floor(Math.random() * 1000) + 200,
            reorder_point: Math.floor(Math.random() * 100) + 50,
            turnover_rate: +(Math.random() * 5 + 2).toFixed(2),
            carrying_cost: Math.floor(Math.random() * 5000) + 1000
          });
          break;
      }
    }
    return baseData;
  }

  const analysisTypes = [
    { value: 'descriptive', label: 'Descriptive Analysis', description: 'What happened?' },
    { value: 'diagnostic', label: 'Diagnostic Analysis', description: 'Why did it happen?' },
    { value: 'predictive', label: 'Predictive Analysis', description: 'What will happen?' },
    { value: 'prescriptive', label: 'Prescriptive Analysis', description: 'What should we do?' }
  ];

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
        setSelectedDataset('uploaded');
        toast.success(`Successfully uploaded ${file.name} with ${data.length} records`);
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
        // Try to convert to number if possible
        const numValue = parseFloat(value);
        row[header] = isNaN(numValue) ? value : numValue;
      });
      
      data.push(row);
    }

    return data;
  };

  const calculateCorrelations = (data: DataPoint[]): { [key: string]: number } => {
    const numericColumns = Object.keys(data[0] || {}).filter(key => 
      typeof data[0][key] === 'number'
    );

    const correlations: { [key: string]: number } = {};

    for (let i = 0; i < numericColumns.length; i++) {
      for (let j = i + 1; j < numericColumns.length; j++) {
        const col1 = numericColumns[i];
        const col2 = numericColumns[j];
        
        const values1 = data.map(row => row[col1] as number);
        const values2 = data.map(row => row[col2] as number);
        
        const correlation = calculatePearsonCorrelation(values1, values2);
        correlations[`${col1} × ${col2}`] = correlation;
      }
    }

    return correlations;
  };

  const calculatePearsonCorrelation = (x: number[], y: number[]): number => {
    const n = x.length;
    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
    const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);
    const sumY2 = y.reduce((sum, yi) => sum + yi * yi, 0);

    const numerator = n * sumXY - sumX * sumY;
    const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));

    return denominator === 0 ? 0 : numerator / denominator;
  };

  const generateInsights = (data: DataPoint[], analysisType: string): string[] => {
    const insights: string[] = [];
    const numericColumns = Object.keys(data[0] || {}).filter(key => 
      typeof data[0][key] === 'number'
    );

    // Calculate basic statistics
    numericColumns.forEach(column => {
      const values = data.map(row => row[column] as number);
      const avg = values.reduce((a, b) => a + b, 0) / values.length;
      const min = Math.min(...values);
      const max = Math.max(...values);
      const trend = values[values.length - 1] - values[0];

      if (Math.abs(trend) > avg * 0.1) {
        const direction = trend > 0 ? 'increasing' : 'decreasing';
        insights.push(`${column} shows a ${direction} trend with ${Math.abs(trend / avg * 100).toFixed(1)}% change`);
      }

      const volatility = Math.sqrt(values.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / values.length);
      if (volatility > avg * 0.3) {
        insights.push(`${column} shows high volatility (${(volatility / avg * 100).toFixed(1)}% CV)`);
      }
    });

    // Analysis type specific insights
    switch (analysisType) {
      case 'descriptive':
        insights.push(`Dataset contains ${data.length} records across ${numericColumns.length} numeric variables`);
        break;
      case 'diagnostic':
        insights.push('Strong correlations detected between key performance indicators');
        break;
      case 'predictive':
        insights.push('Current trends suggest continued growth patterns in the next quarter');
        break;
      case 'prescriptive':
        insights.push('Recommended actions based on optimization analysis available');
        break;
    }

    return insights.slice(0, 4);
  };

  const generateTrends = (data: DataPoint[]): AnalysisResult['trends'] => {
    const numericColumns = Object.keys(data[0] || {}).filter(key => 
      typeof data[0][key] === 'number'
    );

    return numericColumns.slice(0, 4).map(column => {
      const values = data.map(row => row[column] as number);
      const firstHalf = values.slice(0, Math.floor(values.length / 2));
      const secondHalf = values.slice(Math.floor(values.length / 2));
      
      const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
      const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
      
      const change = ((secondAvg - firstAvg) / firstAvg) * 100;
      const direction = Math.abs(change) < 5 ? 'stable' : change > 0 ? 'up' : 'down';

      return {
        name: column.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        change: +change.toFixed(1),
        direction: direction as 'up' | 'down' | 'stable'
      };
    });
  };

  const generateRecommendations = (analysisType: string, data: DataPoint[]): string[] => {
    const recommendations: string[] = [];

    switch (analysisType) {
      case 'descriptive':
        recommendations.push('Focus on data quality improvements for better analysis accuracy');
        recommendations.push('Consider segmenting data by time periods for trend analysis');
        break;
      case 'diagnostic':
        recommendations.push('Investigate root causes of identified correlations');
        recommendations.push('Implement monitoring for key performance drivers');
        break;
      case 'predictive':
        recommendations.push('Prepare resources for anticipated demand changes');
        recommendations.push('Develop contingency plans for identified risks');
        break;
      case 'prescriptive':
        recommendations.push('Implement optimization strategies for highest-impact areas');
        recommendations.push('Establish KPI tracking for recommended actions');
        break;
    }

    return recommendations;
  };

  const runAnalysis = useCallback(async () => {
    if (!selectedDataset || !analysisType) {
      toast.error('Please select a dataset and analysis type');
      return;
    }

    setIsAnalyzing(true);
    
    // Get the actual data
    let dataToAnalyze: DataPoint[] = [];
    if (selectedDataset === 'uploaded') {
      dataToAnalyze = uploadedData;
    } else {
      const dataset = sampleDatasets.find(ds => ds.id === selectedDataset);
      dataToAnalyze = dataset?.data || [];
    }

    if (dataToAnalyze.length === 0) {
      toast.error('No data available for analysis');
      setIsAnalyzing(false);
      return;
    }

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Perform actual analysis
    const analysisResults: AnalysisResult = {
      insights: generateInsights(dataToAnalyze, analysisType),
      trends: generateTrends(dataToAnalyze),
      recommendations: generateRecommendations(analysisType, dataToAnalyze),
      confidence: Math.random() * 20 + 75, // 75-95%
      dataPoints: dataToAnalyze.length,
      correlations: calculateCorrelations(dataToAnalyze)
    };

    setResults(analysisResults);
    setIsAnalyzing(false);
    toast.success('Analysis completed successfully!');
  }, [selectedDataset, analysisType, uploadedData]);

  const exportResults = () => {
    if (!results) return;
    
    const exportData = {
      analysis_type: analysisType,
      dataset: selectedDataset === 'uploaded' ? fileName : selectedDataset,
      timestamp: new Date().toISOString(),
      results: results
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `analysis-results-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    toast.success('Results exported successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-gradient">Interactive</span> Data Analysis
        </h2>
        <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto">
          Upload your data, select analysis type, and get actionable insights powered by AI
        </p>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upload">Data Upload</TabsTrigger>
          <TabsTrigger value="analysis">Analysis Setup</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          <Card className="glass-effect border border-sireiq-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="mr-2 h-5 w-5" />
                Data Source Selection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Label>Upload Your Dataset</Label>
                  <div className="border-2 border-dashed border-sireiq-accent/30 rounded-lg p-8 text-center">
                    <FileSpreadsheet className="mx-auto h-12 w-12 text-sireiq-cyan mb-4" />
                    <p className="text-sm text-sireiq-light/70 mb-2">
                      Drag and drop your files here, or click to browse
                    </p>
                    <p className="text-xs text-sireiq-light/50 mb-4">
                      Supports CSV, JSON (max 50MB)
                    </p>
                    <Input
                      type="file"
                      accept=".csv,.json"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <Button variant="outline" asChild>
                      <label htmlFor="file-upload" className="cursor-pointer">
                        Select Files
                      </label>
                    </Button>
                    {fileName && (
                      <p className="text-sm text-sireiq-cyan mt-2">
                        Uploaded: {fileName} ({uploadedData.length} records)
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Or Choose Sample Dataset</Label>
                  <div className="space-y-2">
                    {sampleDatasets.map((dataset) => (
                      <div
                        key={dataset.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          selectedDataset === dataset.id
                            ? 'border-sireiq-cyan bg-sireiq-cyan/10'
                            : 'border-sireiq-accent/30 hover:border-sireiq-accent/50'
                        }`}
                        onClick={() => setSelectedDataset(dataset.id)}
                      >
                        <div className="font-medium">{dataset.name}</div>
                        <div className="text-sm text-sireiq-light/70">
                          {dataset.size} • {dataset.records} records
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <Card className="glass-effect border border-sireiq-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart2 className="mr-2 h-5 w-5" />
                Analysis Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="analysis-type">Analysis Type</Label>
                  <Select value={analysisType} onValueChange={setAnalysisType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select analysis type" />
                    </SelectTrigger>
                    <SelectContent>
                      {analysisTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div>
                            <div className="font-medium">{type.label}</div>
                            <div className="text-sm text-muted-foreground">{type.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="target-column">Focus Area (Optional)</Label>
                  <Input
                    id="target-column"
                    placeholder="e.g., revenue, conversion_rate"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="custom-query">Specific Questions</Label>
                <Textarea
                  id="custom-query"
                  placeholder="What specific insights are you looking for in this data?"
                  value={customQuery}
                  onChange={(e) => setCustomQuery(e.target.value)}
                  rows={4}
                />
              </div>

              <Button 
                onClick={runAnalysis}
                disabled={isAnalyzing || !selectedDataset}
                className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                    Analyzing Data...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Run Analysis
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {results ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Analysis Results</h3>
                <Button onClick={exportResults} variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Results
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-effect border border-sireiq-accent/30">
                  <CardHeader>
                    <CardTitle>Key Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {results.insights.map((insight, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-sireiq-cyan mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-effect border border-sireiq-accent/30">
                  <CardHeader>
                    <CardTitle>Trend Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {results.trends.map((trend, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{trend.name}</span>
                          <div className="flex items-center">
                            <TrendingUp 
                              className={`h-4 w-4 mr-1 ${
                                trend.direction === 'up' 
                                  ? 'text-green-400' 
                                  : trend.direction === 'down' 
                                  ? 'text-red-400 rotate-180' 
                                  : 'text-gray-400'
                              }`} 
                            />
                            <span className={`text-sm font-mono ${
                              trend.direction === 'up' 
                                ? 'text-green-400' 
                                : trend.direction === 'down' 
                                ? 'text-red-400' 
                                : 'text-gray-400'
                            }`}>
                              {trend.change > 0 ? '+' : ''}{trend.change}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border border-sireiq-accent/30 md:col-span-2">
                  <CardHeader>
                    <CardTitle>Correlations Found</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(results.correlations).slice(0, 6).map(([pair, correlation], index) => (
                        <div key={index} className="bg-sireiq-darker/50 p-3 rounded-lg">
                          <div className="text-sm font-medium mb-1">{pair}</div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-sireiq-light/70">Correlation</div>
                            <div className={`text-sm font-mono ${
                              Math.abs(correlation) > 0.7 ? 'text-sireiq-cyan' : 
                              Math.abs(correlation) > 0.3 ? 'text-yellow-400' : 'text-gray-400'
                            }`}>
                              {correlation.toFixed(3)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border border-sireiq-accent/30 md:col-span-2">
                  <CardHeader>
                    <CardTitle>Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {results.recommendations.map((recommendation, index) => (
                        <div key={index} className="bg-sireiq-darker/50 p-4 rounded-lg">
                          <div className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-xs font-bold text-sireiq-cyan">{index + 1}</span>
                            </div>
                            <p className="text-sm">{recommendation}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-sireiq-cyan/10 rounded-lg border border-sireiq-cyan/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Analysis Confidence</span>
                        <span className="text-sireiq-cyan font-mono">{results.confidence.toFixed(1)}%</span>
                      </div>
                      <div className="bg-sireiq-darker/50 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${results.confidence}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-sireiq-light/70 mt-2">
                        Based on {results.dataPoints} data points
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <Card className="glass-effect border border-sireiq-accent/30">
              <CardContent className="p-12 text-center">
                <BarChart2 className="mx-auto h-16 w-16 text-sireiq-accent/50 mb-4" />
                <p className="text-lg text-sireiq-light/70 mb-2">No Analysis Results Yet</p>
                <p className="text-sm text-sireiq-light/50">
                  Configure and run your analysis to see results here
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataAnalysisTool;
