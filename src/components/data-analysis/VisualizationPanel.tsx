import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, LineChart, PieChart, TrendingUp, Target } from 'lucide-react';
import { toast } from 'sonner';
import { useDataAnalysis } from './hooks/useDataAnalysis';
import { useFileUpload } from './hooks/useFileUpload';
import { useChartData } from './hooks/useChartData';
import AIInsightsPanel from './components/AIInsightsPanel';
import DataUploadSection from './components/DataUploadSection';
import ChartConfigurationPanel from './components/ChartConfigurationPanel';
import ChartRenderer from './components/ChartRenderer';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import { ChartType } from './types';

const VisualizationPanel: React.FC = () => {
  const {
    selectedChart,
    setSelectedChart,
    uploadedData,
    setUploadedData,
    fileName,
    setFileName,
    chartConfig,
    setChartConfig,
    activeData,
    generateAIInsights,
    columns
  } = useDataAnalysis();

  const { handleFileUpload } = useFileUpload(
    setUploadedData,
    setFileName,
    setChartConfig,
    selectedChart
  );

  const { generatePieData, processDataForChart, getAdvancedStats, colors } = useChartData();

  const chartTypes: ChartType[] = [
    { value: 'line', label: 'Line Chart', icon: LineChart, description: 'Perfect for trends over time' },
    { value: 'bar', label: 'Bar Chart', icon: BarChart3, description: 'Compare values across categories' },
    { value: 'area', label: 'Area Chart', icon: TrendingUp, description: 'Show cumulative data trends' },
    { value: 'scatter', label: 'Scatter Plot', icon: Target, description: 'Find correlations between variables' },
    { value: 'pie', label: 'Pie Chart', icon: PieChart, description: 'Visualize proportions and percentages' }
  ];

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

  const processedData = processDataForChart(activeData, selectedChart);
  const pieData = generatePieData(activeData);
  const rawStats = getAdvancedStats(activeData);
  
  // Convert numbers to strings for AdvancedStats type
  const advancedStats = {
    mean: rawStats.mean.toFixed(2),
    median: rawStats.median.toFixed(2),
    stdDev: rawStats.stdDev.toFixed(2),
    variance: rawStats.variance.toFixed(2),
    range: rawStats.range.toFixed(2)
  };

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

      <AIInsightsPanel insights={generateAIInsights} />

      <DataUploadSection
        fileName={fileName}
        activeDataLength={activeData.length}
        onFileUpload={handleFileUpload}
        uploadedDataLength={uploadedData.length}
      />

      <ChartConfigurationPanel
        selectedChart={selectedChart}
        chartConfig={chartConfig}
        chartTypes={chartTypes}
        columns={columns}
        onChartTypeChange={setSelectedChart}
        onConfigChange={setChartConfig}
        onExportChart={exportChart}
      />

      <Card className="glass-effect border border-sireiq-accent/30">
        <CardHeader>
          <CardTitle>Interactive Visualization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-sireiq-darker/30 rounded-lg p-6">
            <ChartRenderer
              selectedChart={selectedChart}
              chartConfig={chartConfig}
              processedData={processedData}
              pieData={pieData}
              colors={colors}
            />
          </div>
        </CardContent>
      </Card>

      <AnalyticsDashboard
        activeDataLength={activeData.length}
        columnsCount={{ numeric: columns.numeric.length, all: columns.all.length }}
        advancedStats={advancedStats}
        chartConfig={chartConfig}
        selectedChart={selectedChart}
        chartTypes={chartTypes}
        fileName={fileName}
      />
    </div>
  );
};

export default VisualizationPanel;
