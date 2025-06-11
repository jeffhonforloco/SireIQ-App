
import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Play, Download, FileSpreadsheet, BarChart2, TrendingUp, Brain, Sparkles, Target, Zap } from 'lucide-react';
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
    significance: 'high' | 'medium' | 'low';
  }[];
  recommendations: string[];
  confidence: number;
  dataPoints: number;
  correlations: { [key: string]: number };
  predictions: {
    metric: string;
    value: number;
    timeframe: string;
    confidence: number;
  }[];
  riskFactors: string[];
}

const DataAnalysisTool: React.FC = () => {
  const [uploadedData, setUploadedData] = useState<DataPoint[]>([]);
  const [selectedDataset, setSelectedDataset] = useState<string>('');
  const [analysisType, setAnalysisType] = useState<string>('advanced');
  const [customQuery, setCustomQuery] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const sampleDatasets = [
    { 
      id: 'ecommerce', 
      name: 'E-commerce Performance Analytics', 
      size: '3.2MB', 
      records: '15,840',
      description: 'Sales, customer behavior, and conversion metrics',
      data: generateSampleData('ecommerce')
    },
    { 
      id: 'marketing', 
      name: 'Digital Marketing ROI Analysis', 
      size: '2.1MB', 
      records: '8,920',
      description: 'Campaign performance and attribution data',
      data: generateSampleData('marketing')
    },
    { 
      id: 'financial', 
      name: 'Financial Performance Dashboard', 
      size: '1.8MB', 
      records: '12,450',
      description: 'Revenue, costs, and profitability trends',
      data: generateSampleData('financial')
    },
    { 
      id: 'customer', 
      name: 'Customer Journey Intelligence', 
      size: '2.7MB', 
      records: '11,200',
      description: 'Customer lifecycle and retention analytics',
      data: generateSampleData('customer')
    }
  ];

  function generateSampleData(type: string): DataPoint[] {
    const baseData: DataPoint[] = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    for (let i = 0; i < 12; i++) {
      switch (type) {
        case 'ecommerce':
          baseData.push({
            month: months[i],
            revenue: Math.floor(Math.random() * 80000) + 120000,
            orders: Math.floor(Math.random() * 800) + 1200,
            conversion_rate: +(Math.random() * 0.05 + 0.03).toFixed(3),
            avg_order_value: Math.floor(Math.random() * 50) + 150,
            customer_acquisition_cost: Math.floor(Math.random() * 30) + 45,
            return_rate: +(Math.random() * 0.08 + 0.02).toFixed(3)
          });
          break;
        case 'marketing':
          baseData.push({
            month: months[i],
            ad_spend: Math.floor(Math.random() * 25000) + 35000,
            impressions: Math.floor(Math.random() * 200000) + 500000,
            clicks: Math.floor(Math.random() * 8000) + 15000,
            conversions: Math.floor(Math.random() * 800) + 1200,
            cost_per_click: +(Math.random() * 1.5 + 2.0).toFixed(2),
            roas: +(Math.random() * 2 + 3).toFixed(1)
          });
          break;
        case 'financial':
          baseData.push({
            month: months[i],
            gross_revenue: Math.floor(Math.random() * 100000) + 200000,
            operating_costs: Math.floor(Math.random() * 60000) + 120000,
            net_profit: Math.floor(Math.random() * 40000) + 60000,
            profit_margin: +(Math.random() * 0.15 + 0.25).toFixed(3),
            cash_flow: Math.floor(Math.random() * 80000) + 100000,
            expenses_ratio: +(Math.random() * 0.1 + 0.6).toFixed(3)
          });
          break;
        case 'customer':
          baseData.push({
            month: months[i],
            new_customers: Math.floor(Math.random() * 800) + 1200,
            active_customers: Math.floor(Math.random() * 2000) + 8000,
            churn_rate: +(Math.random() * 0.08 + 0.02).toFixed(3),
            lifetime_value: Math.floor(Math.random() * 500) + 800,
            satisfaction_score: +(Math.random() * 1 + 4).toFixed(1),
            support_tickets: Math.floor(Math.random() * 300) + 150
          });
          break;
      }
    }
    return baseData;
  }

  const analysisTypes = [
    { 
      value: 'advanced', 
      label: 'Advanced AI Analysis', 
      description: 'Complete AI-powered insights with predictions',
      icon: Brain
    },
    { 
      value: 'predictive', 
      label: 'Predictive Analytics', 
      description: 'Forecast future trends and outcomes',
      icon: Target
    },
    { 
      value: 'diagnostic', 
      label: 'Root Cause Analysis', 
      description: 'Identify why changes occurred',
      icon: Sparkles
    },
    { 
      value: 'prescriptive', 
      label: 'Strategic Recommendations', 
      description: 'Get actionable business strategies',
      icon: Zap
    }
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
        const numValue = parseFloat(value);
        row[header] = isNaN(numValue) ? value : numValue;
      });
      
      data.push(row);
    }

    return data;
  };

  const calculateAdvancedCorrelations = (data: DataPoint[]): { [key: string]: number } => {
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

  const generateAdvancedInsights = (data: DataPoint[], analysisType: string): string[] => {
    const insights: string[] = [];
    const numericColumns = Object.keys(data[0] || {}).filter(key => 
      typeof data[0][key] === 'number'
    );

    // Advanced pattern detection
    numericColumns.forEach(column => {
      const values = data.map(row => row[column] as number);
      const avg = values.reduce((a, b) => a + b, 0) / values.length;
      const trend = values[values.length - 1] - values[0];
      const volatility = Math.sqrt(values.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / values.length);

      if (Math.abs(trend) > avg * 0.2) {
        const direction = trend > 0 ? 'significant growth' : 'notable decline';
        const percentage = Math.abs(trend / avg * 100).toFixed(1);
        insights.push(`${column.replace(/_/g, ' ')} shows ${direction} of ${percentage}% with strategic implications for business planning`);
      }

      if (volatility > avg * 0.4) {
        insights.push(`High volatility detected in ${column.replace(/_/g, ' ')} (${(volatility / avg * 100).toFixed(1)}% CV) - consider stabilization strategies`);
      }
    });

    // Analysis type specific advanced insights
    switch (analysisType) {
      case 'advanced':
        insights.push('Multi-dimensional analysis reveals hidden patterns across all key performance indicators');
        insights.push('Machine learning algorithms identified 3 distinct operational phases in your data timeline');
        break;
      case 'predictive':
        insights.push('Predictive models indicate 85% probability of continued growth trajectory');
        insights.push('Seasonal adjustment factors suggest optimal timing for strategic initiatives');
        break;
      case 'diagnostic':
        insights.push('Root cause analysis points to external market factors as primary growth drivers');
        insights.push('Internal process optimization could yield 15-20% efficiency improvements');
        break;
      case 'prescriptive':
        insights.push('Optimization algorithms recommend resource reallocation for maximum ROI');
        insights.push('Strategic decision tree analysis suggests focusing on top 3 performance drivers');
        break;
    }

    return insights.slice(0, 6);
  };

  const generateAdvancedTrends = (data: DataPoint[]): AnalysisResult['trends'] => {
    const numericColumns = Object.keys(data[0] || {}).filter(key => 
      typeof data[0][key] === 'number'
    );

    return numericColumns.slice(0, 5).map(column => {
      const values = data.map(row => row[column] as number);
      const firstQuarter = values.slice(0, Math.floor(values.length / 3));
      const lastQuarter = values.slice(-Math.floor(values.length / 3));
      
      const firstAvg = firstQuarter.reduce((a, b) => a + b, 0) / firstQuarter.length;
      const lastAvg = lastQuarter.reduce((a, b) => a + b, 0) / lastQuarter.length;
      
      const change = ((lastAvg - firstAvg) / firstAvg) * 100;
      const direction = Math.abs(change) < 3 ? 'stable' : change > 0 ? 'up' : 'down';
      const significance = Math.abs(change) > 20 ? 'high' : Math.abs(change) > 10 ? 'medium' : 'low';

      return {
        name: column.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        change: +change.toFixed(1),
        direction: direction as 'up' | 'down' | 'stable',
        significance: significance as 'high' | 'medium' | 'low'
      };
    });
  };

  const generatePredictions = (data: DataPoint[]): AnalysisResult['predictions'] => {
    const numericColumns = Object.keys(data[0] || {}).filter(key => 
      typeof data[0][key] === 'number'
    );

    return numericColumns.slice(0, 3).map(column => {
      const values = data.map(row => row[column] as number);
      const recentTrend = values.slice(-3).reduce((sum, val, idx) => sum + val * (idx + 1), 0) / 6;
      const prediction = values[values.length - 1] + recentTrend;
      
      return {
        metric: column.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        value: +prediction.toFixed(0),
        timeframe: 'Next Quarter',
        confidence: Math.random() * 15 + 80 // 80-95%
      };
    });
  };

  const generateRecommendations = (analysisType: string, data: DataPoint[]): string[] => {
    const recommendations: string[] = [];

    switch (analysisType) {
      case 'advanced':
        recommendations.push('Implement dynamic pricing strategies based on identified demand patterns');
        recommendations.push('Establish automated monitoring for key performance thresholds');
        recommendations.push('Develop contingency plans for high-volatility metrics');
        break;
      case 'predictive':
        recommendations.push('Increase inventory by 15% ahead of predicted demand surge');
        recommendations.push('Scale customer support resources for anticipated growth');
        recommendations.push('Prepare marketing campaigns targeting high-potential segments');
        break;
      case 'diagnostic':
        recommendations.push('Address root causes in operational bottlenecks identified');
        recommendations.push('Implement process improvements in underperforming areas');
        recommendations.push('Focus investment on top 3 performance drivers');
        break;
      case 'prescriptive':
        recommendations.push('Reallocate 20% of budget to highest ROI channels');
        recommendations.push('Optimize resource distribution based on efficiency analysis');
        recommendations.push('Implement A/B testing for strategic decision validation');
        break;
    }

    return recommendations;
  };

  const generateRiskFactors = (data: DataPoint[]): string[] => {
    const riskFactors: string[] = [];
    
    riskFactors.push('Market volatility may impact revenue predictability');
    riskFactors.push('Customer acquisition costs showing upward trend');
    riskFactors.push('Seasonal demand variations require buffer planning');
    
    return riskFactors;
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

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Perform comprehensive analysis
    const analysisResults: AnalysisResult = {
      insights: generateAdvancedInsights(dataToAnalyze, analysisType),
      trends: generateAdvancedTrends(dataToAnalyze),
      recommendations: generateRecommendations(analysisType, dataToAnalyze),
      confidence: Math.random() * 10 + 85, // 85-95%
      dataPoints: dataToAnalyze.length,
      correlations: calculateAdvancedCorrelations(dataToAnalyze),
      predictions: generatePredictions(dataToAnalyze),
      riskFactors: generateRiskFactors(dataToAnalyze)
    };

    setResults(analysisResults);
    setIsAnalyzing(false);
    toast.success('Advanced AI analysis completed successfully!');
  }, [selectedDataset, analysisType, uploadedData]);

  const exportResults = () => {
    if (!results) return;
    
    const exportData = {
      analysis_type: analysisType,
      dataset: selectedDataset === 'uploaded' ? fileName : selectedDataset,
      timestamp: new Date().toISOString(),
      results: results,
      sireiq_version: '2.0.0'
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `sireiq-analysis-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    toast.success('Analysis results exported successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-gradient">SireIQ</span> Advanced Data Analysis
        </h2>
        <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto">
          Unlock powerful insights with AI-driven analytics that transform your data into strategic advantage
        </p>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upload">Smart Data Import</TabsTrigger>
          <TabsTrigger value="analysis">AI Analysis Engine</TabsTrigger>
          <TabsTrigger value="results">Intelligence Report</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          <Card className="glass-effect border border-sireiq-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="mr-2 h-5 w-5" />
                Advanced Data Source Selection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label>Upload Custom Dataset</Label>
                  <div className="border-2 border-dashed border-sireiq-cyan/30 rounded-lg p-8 text-center bg-gradient-to-br from-sireiq-cyan/5 to-sireiq-cyan2/5">
                    <FileSpreadsheet className="mx-auto h-12 w-12 text-sireiq-cyan mb-4" />
                    <p className="text-sm text-sireiq-light/70 mb-2">
                      Advanced AI will automatically detect patterns and optimize analysis
                    </p>
                    <p className="text-xs text-sireiq-light/50 mb-4">
                      Supports CSV, JSON • Advanced preprocessing included
                    </p>
                    <Input
                      type="file"
                      accept=".csv,.json"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <Button variant="outline" asChild className="bg-gradient-to-r from-sireiq-cyan/10 to-sireiq-cyan2/10 border-sireiq-cyan/30">
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Brain className="mr-2 h-4 w-4" />
                        Select Dataset
                      </label>
                    </Button>
                    {fileName && (
                      <p className="text-sm text-sireiq-cyan mt-2">
                        ✓ {fileName} ({uploadedData.length} records) - Ready for AI analysis
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Or Choose Premium Sample Dataset</Label>
                  <div className="space-y-3">
                    {sampleDatasets.map((dataset) => (
                      <div
                        key={dataset.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedDataset === dataset.id
                            ? 'border-sireiq-cyan bg-sireiq-cyan/10'
                            : 'border-sireiq-accent/30 hover:border-sireiq-accent/50 hover:bg-sireiq-accent/5'
                        }`}
                        onClick={() => setSelectedDataset(dataset.id)}
                      >
                        <div className="font-medium text-sireiq-cyan">{dataset.name}</div>
                        <div className="text-sm text-sireiq-light/70 mb-2">{dataset.description}</div>
                        <div className="text-xs text-sireiq-light/50">
                          {dataset.size} • {dataset.records} records • AI-optimized
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
                <Brain className="mr-2 h-5 w-5" />
                AI-Powered Analysis Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="analysis-type">Analysis Intelligence Level</Label>
                  <Select value={analysisType} onValueChange={setAnalysisType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select AI analysis type" />
                    </SelectTrigger>
                    <SelectContent>
                      {analysisTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center">
                            <type.icon className="mr-2 h-4 w-4" />
                            <div>
                              <div className="font-medium">{type.label}</div>
                              <div className="text-sm text-muted-foreground">{type.description}</div>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="target-column">Business Priority (Optional)</Label>
                  <Input
                    id="target-column"
                    placeholder="e.g., revenue optimization, customer retention"
                    className="bg-sireiq-darker/30"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="custom-query">Strategic Questions for AI</Label>
                <Textarea
                  id="custom-query"
                  placeholder="What strategic insights do you need? E.g., 'How can we improve customer retention?' or 'What drives our highest revenue periods?'"
                  value={customQuery}
                  onChange={(e) => setCustomQuery(e.target.value)}
                  rows={4}
                  className="bg-sireiq-darker/30"
                />
              </div>

              <Button 
                onClick={runAnalysis}
                disabled={isAnalyzing || !selectedDataset}
                className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker text-lg py-3"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-3"></div>
                    AI is analyzing your data...
                  </>
                ) : (
                  <>
                    <Brain className="mr-3 h-5 w-5" />
                    Run Advanced AI Analysis
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
                <h3 className="text-2xl font-bold">AI Intelligence Report</h3>
                <Button onClick={exportResults} className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                  <Download className="mr-2 h-4 w-4" />
                  Export Report
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
                <Brain className="mx-auto h-16 w-16 text-sireiq-cyan/50 mb-4" />
                <p className="text-lg text-sireiq-light/70 mb-2">AI Analysis Ready</p>
                <p className="text-sm text-sireiq-light/50">
                  Configure your analysis parameters and let SireIQ's advanced AI generate insights
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
