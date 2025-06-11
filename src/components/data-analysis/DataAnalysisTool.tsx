
import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Play, Download, FileSpreadsheet, BarChart2, TrendingUp } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface AnalysisResult {
  insights: string[];
  trends: {
    name: string;
    change: number;
    direction: 'up' | 'down' | 'stable';
  }[];
  recommendations: string[];
  confidence: number;
}

const DataAnalysisTool: React.FC = () => {
  const [selectedDataset, setSelectedDataset] = useState<string>('');
  const [analysisType, setAnalysisType] = useState<string>('descriptive');
  const [customQuery, setCustomQuery] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);

  const sampleDatasets = [
    { id: 'sales', name: 'Sales Performance Data', size: '2.3MB', records: '12,450' },
    { id: 'customers', name: 'Customer Demographics', size: '1.8MB', records: '8,920' },
    { id: 'marketing', name: 'Marketing Campaign Results', size: '950KB', records: '3,240' },
    { id: 'inventory', name: 'Inventory Analytics', size: '1.2MB', records: '5,680' }
  ];

  const analysisTypes = [
    { value: 'descriptive', label: 'Descriptive Analysis', description: 'What happened?' },
    { value: 'diagnostic', label: 'Diagnostic Analysis', description: 'Why did it happen?' },
    { value: 'predictive', label: 'Predictive Analysis', description: 'What will happen?' },
    { value: 'prescriptive', label: 'Prescriptive Analysis', description: 'What should we do?' }
  ];

  const runAnalysis = useCallback(async () => {
    if (!selectedDataset || !analysisType) {
      toast.error('Please select a dataset and analysis type');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generate mock results based on selected options
    const mockResults: AnalysisResult = {
      insights: [
        `${analysisType} analysis revealed significant patterns in the selected dataset`,
        'Data quality score: 94% - High reliability for decision making',
        'Seasonal trends detected with 85% confidence interval',
        'Key performance indicators show positive correlation with market factors'
      ],
      trends: [
        { name: 'Revenue Growth', change: 23.5, direction: 'up' },
        { name: 'Customer Acquisition', change: 15.2, direction: 'up' },
        { name: 'Churn Rate', change: -8.7, direction: 'down' },
        { name: 'Average Order Value', change: 12.3, direction: 'up' }
      ],
      recommendations: [
        'Increase marketing spend in Q4 based on seasonal trends',
        'Focus retention efforts on high-value customer segments',
        'Optimize inventory levels for predicted demand peaks',
        'Implement dynamic pricing strategy for maximum revenue'
      ],
      confidence: 87.5
    };

    setResults(mockResults);
    setIsAnalyzing(false);
    toast.success('Analysis completed successfully!');
  }, [selectedDataset, analysisType]);

  const exportResults = () => {
    if (!results) return;
    
    const dataStr = JSON.stringify(results, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'analysis-results.json';
    link.click();
    
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
                    <p className="text-xs text-sireiq-light/50">
                      Supports CSV, Excel, JSON (max 50MB)
                    </p>
                    <Button variant="outline" className="mt-4">
                      Select Files
                    </Button>
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
                  <Label htmlFor="target-column">Target Variable (Optional)</Label>
                  <Input
                    id="target-column"
                    placeholder="e.g., revenue, conversion_rate"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="custom-query">Custom Analysis Query</Label>
                <Textarea
                  id="custom-query"
                  placeholder="Describe what specific insights you're looking for..."
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
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Confidence Score</span>
                        <span className="text-sireiq-cyan font-mono">{results.confidence}%</span>
                      </div>
                      <div className="mt-2 bg-sireiq-darker/50 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${results.confidence}%` }}
                        ></div>
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
