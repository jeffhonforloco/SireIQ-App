
export interface DataPoint {
  [key: string]: string | number;
}

export interface ChartConfig {
  type: string;
  xAxis: string;
  yAxis: string;
  groupBy?: string;
}

export interface InsightData {
  type: 'trend' | 'correlation' | 'anomaly' | 'pattern';
  title: string;
  description: string;
  confidence: number;
  impact: 'high' | 'medium' | 'low';
}

export interface ChartType {
  value: string;
  label: string;
  icon: any;
  description: string;
}

export interface AdvancedStats {
  mean: string;
  median: string;
  stdDev: string;
  variance: string;
  range: string;
}
