
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, PieChart, LineChart, FileBarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

type AnalyticsTabProps = {
  subTab: string;
};

const AnalyticsTab = ({ subTab }: AnalyticsTabProps) => {
  // Placeholder for charts - in a real app you would use Recharts or another charting library

  // Sample metrics data
  const platformMetrics = [
    { label: "Active Users", value: "1,245", change: "+12%", trend: "up" },
    { label: "Sessions", value: "8,492", change: "+23%", trend: "up" },
    { label: "Avg. Session Time", value: "3:24", change: "-0:22", trend: "down" },
    { label: "Projects Created", value: "342", change: "+18%", trend: "up" },
  ];
  
  // Sample performance data
  const performanceMetrics = [
    { label: "API Response Time", value: "120ms", change: "-15ms", trend: "up" },
    { label: "Server Load", value: "28%", change: "+2%", trend: "down" },
    { label: "Memory Usage", value: "3.2GB", change: "+0.4GB", trend: "down" },
    { label: "Error Rate", value: "0.4%", change: "-0.1%", trend: "up" },
  ];
  
  // Sample usage distribution
  const usageData = [
    { label: "Content Creation", value: "32%" },
    { label: "API Usage", value: "28%" },
    { label: "Data Processing", value: "22%" },
    { label: "User Management", value: "12%" },
    { label: "Other", value: "6%" },
  ];
  
  // Sample reports
  const reports = [
    { name: "Monthly Usage Summary", frequency: "Monthly", lastRun: "May 1, 2025" },
    { name: "User Activity Report", frequency: "Weekly", lastRun: "Apr 30, 2025" },
    { name: "Performance Metrics", frequency: "Daily", lastRun: "May 6, 2025" },
    { name: "Error Analysis", frequency: "Weekly", lastRun: "Apr 30, 2025" },
    { name: "Resource Utilization", frequency: "Daily", lastRun: "May 6, 2025" },
  ];

  // Render content based on selected tab
  const renderContent = () => {
    switch (subTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {platformMetrics.map((metric, index) => (
                <Card key={index} className="bg-sireiq-accent/5 border-sireiq-accent/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm text-sireiq-light/70">{metric.label}</p>
                      <div className="flex items-end justify-between">
                        <p className="text-2xl font-semibold">{metric.value}</p>
                        <div className={`text-sm px-2 py-1 rounded ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                          {metric.change}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-sireiq-darker border-sireiq-accent/20">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-base font-medium">User Growth</CardTitle>
                  <BarChart className="w-4 h-4 text-sireiq-cyan" />
                </CardHeader>
                <CardContent>
                  <div className="h-60 flex items-center justify-center bg-sireiq-accent/10 rounded-md">
                    <p className="text-sireiq-light/70">User Growth Chart</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-sireiq-darker border-sireiq-accent/20">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-base font-medium">Resource Usage</CardTitle>
                  <PieChart className="w-4 h-4 text-sireiq-cyan" />
                </CardHeader>
                <CardContent>
                  <div className="h-60 flex items-center justify-center bg-sireiq-accent/10 rounded-md">
                    <p className="text-sireiq-light/70">Resource Usage Chart</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      case 'usage':
        return (
          <div className="space-y-6">
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">Resource Usage Distribution</CardTitle>
                <PieChart className="w-4 h-4 text-sireiq-cyan" />
              </CardHeader>
              <CardContent>
                <div className="h-60 flex items-center justify-center bg-sireiq-accent/10 rounded-md mb-4">
                  <p className="text-sireiq-light/70">Usage Distribution Chart</p>
                </div>
                
                <div className="space-y-2">
                  {usageData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{item.label}</span>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">API Usage Trends</CardTitle>
                <LineChart className="w-4 h-4 text-sireiq-cyan" />
              </CardHeader>
              <CardContent>
                <div className="h-60 flex items-center justify-center bg-sireiq-accent/10 rounded-md">
                  <p className="text-sireiq-light/70">API Usage Trend Chart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'performance':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {performanceMetrics.map((metric, index) => (
                <Card key={index} className="bg-sireiq-accent/5 border-sireiq-accent/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm text-sireiq-light/70">{metric.label}</p>
                      <div className="flex items-end justify-between">
                        <p className="text-2xl font-semibold">{metric.value}</p>
                        <div className={`text-sm px-2 py-1 rounded ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                          {metric.change}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">System Performance</CardTitle>
                <LineChart className="w-4 h-4 text-sireiq-cyan" />
              </CardHeader>
              <CardContent>
                <div className="h-60 flex items-center justify-center bg-sireiq-accent/10 rounded-md">
                  <p className="text-sireiq-light/70">System Performance Chart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'reports':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Generated Reports</h3>
              <Button size="sm" variant="outline">
                <FileBarChart className="w-4 h-4 mr-2" />
                Generate New Report
              </Button>
            </div>
            
            <div className="rounded-md border border-sireiq-accent/20">
              <div className="p-4 grid grid-cols-3 font-medium border-b border-sireiq-accent/20">
                <div>Report Name</div>
                <div>Frequency</div>
                <div>Last Run</div>
              </div>
              
              {reports.map((report, index) => (
                <div key={index} className="p-4 grid grid-cols-3 items-center hover:bg-sireiq-accent/10">
                  <div className="flex items-center">
                    <FileBarChart className="w-4 h-4 mr-2 text-sireiq-cyan" />
                    {report.name}
                  </div>
                  <div className="text-sireiq-light/70">{report.frequency}</div>
                  <div className="text-sireiq-light/70">{report.lastRun}</div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return renderContent();
};

export default AnalyticsTab;
