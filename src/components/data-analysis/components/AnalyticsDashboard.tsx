
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AdvancedStats, ChartType } from '../types';

interface AnalyticsDashboardProps {
  activeDataLength: number;
  columnsCount: { numeric: number; all: number };
  advancedStats: AdvancedStats | null;
  chartConfig: { yAxis: string; xAxis: string };
  selectedChart: string;
  chartTypes: ChartType[];
  fileName: string;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  activeDataLength,
  columnsCount,
  advancedStats,
  chartConfig,
  selectedChart,
  chartTypes,
  fileName
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="glass-effect border border-sireiq-accent/30">
        <CardHeader>
          <CardTitle className="text-lg">Dataset Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-sireiq-light/70">Total Records</span>
            <span className="font-mono text-lg text-sireiq-cyan">{activeDataLength.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-sireiq-light/70">Data Columns</span>
            <span className="font-mono text-lg text-sireiq-cyan">{columnsCount.all}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-sireiq-light/70">Numeric Fields</span>
            <span className="font-mono text-lg text-sireiq-cyan">{columnsCount.numeric}</span>
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
  );
};

export default AnalyticsDashboard;
