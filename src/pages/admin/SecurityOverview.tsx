
import React from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, Check, X, ChevronRight } from 'lucide-react';

const mockSecurityEvents = [
  { 
    id: 1, 
    type: 'Failed Login', 
    user: 'john.doe@example.com',
    ip: '192.168.1.45',
    location: 'New York, USA', 
    timestamp: '2023-05-08 14:23:15',
    severity: 'medium'
  },
  { 
    id: 2, 
    type: 'Password Changed', 
    user: 'jane.smith@example.com',
    ip: '192.168.1.32',
    location: 'London, UK', 
    timestamp: '2023-05-08 12:45:08',
    severity: 'low'
  },
  { 
    id: 3, 
    type: 'API Key Generated', 
    user: 'admin@sireiq.com',
    ip: '192.168.1.1',
    location: 'San Francisco, USA', 
    timestamp: '2023-05-07 23:12:45',
    severity: 'low'
  },
  { 
    id: 4, 
    type: 'Suspicious Access', 
    user: 'robert.johnson@example.com',
    ip: '203.0.113.42',
    location: 'Beijing, CN', 
    timestamp: '2023-05-07 18:37:22',
    severity: 'high'
  },
  { 
    id: 5, 
    type: 'Failed Login (5x)', 
    user: 'lisa.brown@example.com',
    ip: '203.0.113.56',
    location: 'Moscow, RU', 
    timestamp: '2023-05-07 15:22:31',
    severity: 'high'
  },
];

const mockSecurityChecks = [
  { name: 'Two-Factor Authentication', enabled: true },
  { name: 'Strong Password Policy', enabled: true },
  { name: 'IP Address Restrictions', enabled: false },
  { name: 'Session Timeout', enabled: true },
  { name: 'Data Encryption', enabled: true },
  { name: 'Regular Security Audits', enabled: false },
];

const SecurityOverviewPage = () => {
  return (
    <AdminLayout title="Security Overview">
      <h1 className="text-2xl font-bold text-sireiq-light mb-6">Security Overview</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="bg-sireiq-darker border-sireiq-accent/20 col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 text-sireiq-cyan mr-2" />
              Security Score
            </CardTitle>
            <CardDescription>Your system's security rating</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="relative h-32 w-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle 
                    className="text-gray-800" 
                    strokeWidth="10" 
                    stroke="currentColor" 
                    fill="transparent" 
                    r="40" 
                    cx="50" 
                    cy="50" 
                  />
                  <circle 
                    className="text-sireiq-cyan" 
                    strokeWidth="10" 
                    strokeDasharray="251.2"
                    strokeDashoffset="53" 
                    strokeLinecap="round" 
                    stroke="currentColor" 
                    fill="transparent" 
                    r="40" 
                    cx="50" 
                    cy="50" 
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                  79%
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-lg font-medium">Good</div>
                <p className="text-sireiq-light/70 text-sm">
                  2 items need attention
                </p>
              </div>
            </div>
            <div className="mt-2">
              <Button className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                View Security Report
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-sireiq-darker border-sireiq-accent/20 col-span-1 lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Security Checks</CardTitle>
            <CardDescription>Status of important security measures</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockSecurityChecks.map((check, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-sireiq-accent/20">
                  <div className="flex items-center">
                    {check.enabled ? (
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-amber-400 mr-3" />
                    )}
                    <span>{check.name}</span>
                  </div>
                  <Badge variant={check.enabled ? "default" : "outline"} className={check.enabled ? "bg-green-500/20 text-green-300 hover:bg-green-500/20" : "border-amber-500/50 text-amber-300"}>
                    {check.enabled ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Recent Security Events</CardTitle>
              <CardDescription>Latest security-related activities in the system</CardDescription>
            </div>
            <Button variant="outline" className="border-sireiq-accent/30">
              View All Events
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-sireiq-accent/20 overflow-hidden">
            <Table>
              <TableHeader className="bg-sireiq-accent/10">
                <TableRow>
                  <TableHead className="text-sireiq-light">Event Type</TableHead>
                  <TableHead className="text-sireiq-light">User</TableHead>
                  <TableHead className="text-sireiq-light">Location</TableHead>
                  <TableHead className="text-sireiq-light">Time</TableHead>
                  <TableHead className="text-sireiq-light">Severity</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockSecurityEvents.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell className="font-medium">{event.type}</TableCell>
                    <TableCell>{event.user}</TableCell>
                    <TableCell>{event.location}</TableCell>
                    <TableCell>{event.timestamp}</TableCell>
                    <TableCell>
                      <Badge className={
                        event.severity === 'high' 
                          ? 'bg-red-500/20 text-red-300 hover:bg-red-500/20' 
                          : event.severity === 'medium' 
                            ? 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/20' 
                            : 'bg-green-500/20 text-green-300 hover:bg-green-500/20'
                      }>
                        {event.severity.charAt(0).toUpperCase() + event.severity.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Details</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default SecurityOverviewPage;
