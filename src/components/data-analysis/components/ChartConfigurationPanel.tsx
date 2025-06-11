
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { TrendingUp, Download } from 'lucide-react';
import { ChartConfig, ChartType } from '../types';

interface ChartConfigurationPanelProps {
  selectedChart: string;
  chartConfig: ChartConfig;
  chartTypes: ChartType[];
  columns: { numeric: string[]; all: string[] };
  onChartTypeChange: (value: string) => void;
  onConfigChange: (config: ChartConfig) => void;
  onExportChart: () => void;
}

const ChartConfigurationPanel: React.FC<ChartConfigurationPanelProps> = ({
  selectedChart,
  chartConfig,
  chartTypes,
  columns,
  onChartTypeChange,
  onConfigChange,
  onExportChart
}) => {
  return (
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
              onChartTypeChange(value);
              onConfigChange({...chartConfig, type: value});
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
              onConfigChange({...chartConfig, xAxis: value})
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
              onConfigChange({...chartConfig, yAxis: value})
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
            <Button onClick={onExportChart} className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
              <Download className="h-4 w-4 mr-2" />
              Export Analysis
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartConfigurationPanel;
