
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import StatusCards from './overview/StatusCards';

const OverviewTab = () => {
  return (
    <>
      <StatusCards />
      
      {/* Resource Usage */}
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="text-base font-medium">Resource Usage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">CPU</span>
              <span className="text-sm">32%</span>
            </div>
            <Progress value={32} className="h-2" />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">Memory</span>
              <span className="text-sm">58%</span>
            </div>
            <Progress value={58} className="h-2" />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">API Quota</span>
              <span className="text-sm">76%</span>
            </div>
            <Progress value={76} className="h-2" />
          </div>
        </CardContent>
      </Card>
      
      {/* Recent Deploys */}
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="text-base font-medium">Recent Deployments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Version</TableHead>
                <TableHead>Deployment Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Author</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { version: "v1.4.2", time: "Today, 10:23 AM", status: "Success", author: "Alice Chen" },
                { version: "v1.4.1", time: "Yesterday", status: "Success", author: "David Kim" },
                { version: "v1.4.0", time: "3 days ago", status: "Failed", author: "James Wilson" }
              ].map((deploy, i) => (
                <TableRow key={i} className="hover:bg-sireiq-accent/10">
                  <TableCell>{deploy.version}</TableCell>
                  <TableCell>{deploy.time}</TableCell>
                  <TableCell>
                    <Badge className={`${deploy.status === 'Success' ? 'bg-green-500' : 'bg-red-500'} text-sireiq-darker`}>
                      {deploy.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{deploy.author}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default OverviewTab;
