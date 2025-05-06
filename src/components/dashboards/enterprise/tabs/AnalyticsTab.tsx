
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart, FileText } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const AnalyticsTab = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-sireiq-accent/5 border-sireiq-accent/20 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-base font-medium">Usage Trends</CardTitle>
          </CardHeader>
          <CardContent className="h-72 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center border border-dashed border-sireiq-accent/30 rounded-md">
              <BarChart className="h-10 w-10 text-sireiq-cyan" />
              <span className="ml-2 text-sireiq-light/70">Usage chart visualization</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
          <CardHeader>
            <CardTitle className="text-base font-medium">Top AI Models Used</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: 'Content Generator', usage: '43%', trend: '+5%' },
              { name: 'Data Analyzer', usage: '28%', trend: '+2%' },
              { name: 'Sentiment Analysis', usage: '18%', trend: '-3%' },
              { name: 'Image Recognition', usage: '11%', trend: '+8%' }
            ].map((model, i) => (
              <div key={i} className="flex items-center">
                <div className="w-full">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{model.name}</span>
                    <span className="text-sm">{model.usage}</span>
                  </div>
                  <Progress value={parseInt(model.usage)} className="h-2" />
                  <div className="flex justify-end mt-1">
                    <span className={`text-xs ${model.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {model.trend} from last month
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-base font-medium">Reports</CardTitle>
            <CardDescription>Access detailed analytics reports</CardDescription>
          </div>
          <Button 
            size="sm" 
            variant="outline"
            className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
          >
            <FileText className="w-4 h-4 mr-2 text-sireiq-cyan" />
            Generate Report
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Report</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Generated</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: 'Monthly Usage Summary', period: 'April 2025', date: 'May 1, 2025', status: 'Ready' },
                { name: 'Model Performance', period: 'Q1 2025', date: 'April 15, 2025', status: 'Ready' },
                { name: 'User Activity', period: 'Last 30 days', date: 'May 5, 2025', status: 'Processing' },
                { name: 'Cost Analysis', period: 'Q2 2025 (partial)', date: 'May 6, 2025', status: 'Ready' }
              ].map((report, i) => (
                <TableRow key={i} className="hover:bg-sireiq-accent/10">
                  <TableCell>{report.name}</TableCell>
                  <TableCell>{report.period}</TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>
                    <Badge className={`${report.status === 'Ready' ? 'bg-green-500' : 'bg-yellow-500'} text-sireiq-darker`}>
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default AnalyticsTab;
