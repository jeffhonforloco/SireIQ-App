
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart3, LineChart, PieChart, TrendingUp, Download } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart, Cell, Pie } from 'recharts';

const VisualizationPanel: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState<string>('line');

  const sampleData = [
    { month: 'Jan', revenue: 4200, customers: 320, orders: 450 },
    { month: 'Feb', revenue: 3800, customers: 280, orders: 420 },
    { month: 'Mar', revenue: 5200, customers: 390, orders: 580 },
    { month: 'Apr', revenue: 4800, customers: 350, orders: 520 },
    { month: 'May', revenue: 6100, customers: 450, orders: 680 },
    { month: 'Jun', revenue: 5500, customers: 410, orders: 620 }
  ];

  const pieData = [
    { name: 'Desktop', value: 45, color: '#00d4ff' },
    { name: 'Mobile', value: 35, color: '#0099cc' },
    { name: 'Tablet', value: 20, color: '#006699' }
  ];

  const chartTypes = [
    { value: 'line', label: 'Line Chart', icon: LineChart },
    { value: 'bar', label: 'Bar Chart', icon: BarChart3 },
    { value: 'pie', label: 'Pie Chart', icon: PieChart }
  ];

  const renderChart = () => {
    switch (selectedChart) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RechartsLineChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px'
                }} 
              />
              <Line type="monotone" dataKey="revenue" stroke="#00d4ff" strokeWidth={2} />
              <Line type="monotone" dataKey="customers" stroke="#0099cc" strokeWidth={2} />
            </RechartsLineChart>
          </ResponsiveContainer>
        );
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RechartsBarChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px'
                }} 
              />
              <Bar dataKey="orders" fill="#00d4ff" />
            </RechartsBarChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RechartsPieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
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

      <Card className="glass-effect border border-sireiq-accent/30">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Interactive Charts
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Select value={selectedChart} onValueChange={setSelectedChart}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select chart type" />
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
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-sireiq-darker/30 rounded-lg p-4">
            {renderChart()}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-effect border border-sireiq-accent/30">
          <CardHeader>
            <CardTitle className="text-lg">Key Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-sireiq-light/70">Total Revenue</span>
              <span className="font-mono text-lg text-sireiq-cyan">$29.6K</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-sireiq-light/70">Customers</span>
              <span className="font-mono text-lg text-sireiq-cyan">2,200</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-sireiq-light/70">Growth Rate</span>
              <span className="font-mono text-lg text-green-400">+18.5%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border border-sireiq-accent/30">
          <CardHeader>
            <CardTitle className="text-lg">Data Quality</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Completeness</span>
                <span className="text-sireiq-cyan">95%</span>
              </div>
              <div className="bg-sireiq-darker/50 rounded-full h-2">
                <div className="bg-sireiq-cyan h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Accuracy</span>
                <span className="text-sireiq-cyan">92%</span>
              </div>
              <div className="bg-sireiq-darker/50 rounded-full h-2">
                <div className="bg-sireiq-cyan h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Consistency</span>
                <span className="text-sireiq-cyan">88%</span>
              </div>
              <div className="bg-sireiq-darker/50 rounded-full h-2">
                <div className="bg-sireiq-cyan h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border border-sireiq-accent/30">
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sireiq-light/70">Analysis completed</span>
                <span className="text-xs text-sireiq-cyan">2m ago</span>
              </div>
              <div className="text-xs text-sireiq-light/50">Revenue forecasting model</div>
            </div>
            <div className="text-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sireiq-light/70">Dataset updated</span>
                <span className="text-xs text-sireiq-cyan">15m ago</span>
              </div>
              <div className="text-xs text-sireiq-light/50">Customer demographics</div>
            </div>
            <div className="text-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sireiq-light/70">Report generated</span>
                <span className="text-xs text-sireiq-cyan">1h ago</span>
              </div>
              <div className="text-xs text-sireiq-light/50">Q3 performance summary</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisualizationPanel;
