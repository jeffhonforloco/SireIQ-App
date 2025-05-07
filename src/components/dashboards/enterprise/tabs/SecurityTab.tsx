
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, Shield } from 'lucide-react';

const SecurityTab = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
          <CardHeader>
            <CardTitle className="text-base font-medium">Security Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Two-Factor Authentication', status: 'Enabled', icon: CheckCircle, iconColor: 'text-green-500' },
                { name: 'Data Encryption', status: 'Enabled', icon: CheckCircle, iconColor: 'text-green-500' },
                { name: 'Regular Backups', status: 'Enabled', icon: CheckCircle, iconColor: 'text-green-500' },
                { name: 'Vulnerability Scan', status: 'Due in 15 days', icon: AlertCircle, iconColor: 'text-yellow-500' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md">
                  <div className="flex items-center">
                    <item.icon className={`h-5 w-5 ${item.iconColor} mr-3`} />
                    <span>{item.name}</span>
                  </div>
                  <Badge className={`${item.status === 'Enabled' ? 'bg-green-500' : 'bg-yellow-500'} text-sireiq-darker`}>
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
          <CardHeader>
            <CardTitle className="text-base font-medium">Recent Security Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  event: 'New login from unrecognized device',
                  details: 'Windows PC - Chicago, US',
                  time: '2 hours ago',
                  severity: 'Medium'
                },
                { 
                  event: 'Password changed',
                  details: 'Alex Johnson',
                  time: '1 day ago',
                  severity: 'Low'
                },
                { 
                  event: 'Failed login attempts (5)',
                  details: 'Account: maria.garcia@company.com',
                  time: '2 days ago',
                  severity: 'High'
                },
                { 
                  event: 'API key rotated',
                  details: 'Development environment',
                  time: '3 days ago',
                  severity: 'Low'
                }
              ].map((event, i) => (
                <div key={i} className="p-3 border border-sireiq-accent/20 rounded-md">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{event.event}</h3>
                    <Badge className={`
                      ${event.severity === 'High' ? 'bg-red-500' : 
                        event.severity === 'Medium' ? 'bg-yellow-500' : 'bg-blue-500'} 
                      text-sireiq-darker
                    `}>
                      {event.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-sireiq-light/70">{event.details}</p>
                  <p className="text-xs text-sireiq-light/50 mt-1">{event.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 w-full">
              <Shield className="w-4 h-4 mr-2 text-sireiq-cyan" />
              View All Security Events
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="text-base font-medium">Compliance Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Framework</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Audit</TableHead>
                <TableHead>Next Audit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { framework: 'GDPR', status: 'Compliant', lastAudit: 'March 15, 2025', nextAudit: 'September 15, 2025' },
                { framework: 'HIPAA', status: 'Compliant', lastAudit: 'January 20, 2025', nextAudit: 'July 20, 2025' },
                { framework: 'SOC 2', status: 'In Progress', lastAudit: 'N/A', nextAudit: 'June 30, 2025' },
                { framework: 'ISO 27001', status: 'Compliant', lastAudit: 'February 10, 2025', nextAudit: 'August 10, 2025' }
              ].map((item, i) => (
                <TableRow key={i} className="hover:bg-sireiq-accent/10">
                  <TableCell>{item.framework}</TableCell>
                  <TableCell>
                    <Badge className={`${
                      item.status === 'Compliant' ? 'bg-green-500' : 
                      item.status === 'In Progress' ? 'bg-yellow-500' : 'bg-red-500'
                    } text-sireiq-darker`}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.lastAudit}</TableCell>
                  <TableCell>{item.nextAudit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="w-full flex justify-between">
            <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
              Download Reports
            </Button>
            <Button className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90">
              Schedule Audit
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default SecurityTab;
