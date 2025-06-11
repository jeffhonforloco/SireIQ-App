
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertTriangle, Activity, Database, Shield, Eye } from 'lucide-react';
import { toast } from 'sonner';

const LoggingMonitoring = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'security', message: 'Multiple failed login attempts detected', severity: 'high', time: '2 min ago' },
    { id: 2, type: 'performance', message: 'CPU usage above 80%', severity: 'medium', time: '15 min ago' },
    { id: 3, type: 'security', message: 'Unauthorized API access attempt', severity: 'critical', time: '1 hour ago' },
    { id: 4, type: 'system', message: 'Database connection timeout', severity: 'low', time: '2 hours ago' }
  ]);

  const securityLogs = [
    { timestamp: '2024-06-11 14:30:25', event: 'User login', user: 'admin@example.com', ip: '192.168.1.100', status: 'success' },
    { timestamp: '2024-06-11 14:28:15', event: 'Failed login', user: 'unknown', ip: '203.0.113.45', status: 'failed' },
    { timestamp: '2024-06-11 14:25:10', event: 'Password change', user: 'user@example.com', ip: '192.168.1.105', status: 'success' },
    { timestamp: '2024-06-11 14:20:30', event: 'API key generated', user: 'dev@example.com', ip: '192.168.1.110', status: 'success' }
  ];

  const monitoringMetrics = [
    { name: "Log Retention", value: "90 days", status: "active", icon: Database },
    { name: "Real-time Monitoring", value: "Enabled", status: "active", icon: Activity },
    { name: "Anomaly Detection", value: "AI-powered", status: "active", icon: Eye },
    { name: "Alert Threshold", value: "Medium+", status: "configured", icon: AlertTriangle }
  ];

  const acknowledgeAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
    toast.success('Alert acknowledged');
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500/20 text-red-300';
      case 'high': return 'bg-orange-500/20 text-orange-300';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300';
      case 'low': return 'bg-blue-500/20 text-blue-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Security Monitoring & Logging
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {monitoringMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="p-4 border border-sireiq-accent/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <IconComponent className="w-4 h-4 text-sireiq-cyan" />
                    <h4 className="font-medium text-sm">{metric.name}</h4>
                  </div>
                  <div className="text-lg font-bold">{metric.value}</div>
                  <Badge className="bg-green-500/20 text-green-300 text-xs mt-1">
                    {metric.status}
                  </Badge>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-sireiq-cyan" />
              Active Security Alerts
            </div>
            <Badge className="bg-red-500/20 text-red-300">{alerts.length} Active</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-sireiq-cyan" />
                  <div>
                    <p className="font-medium">{alert.message}</p>
                    <p className="text-sm text-sireiq-light/70">Type: {alert.type} • {alert.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getSeverityColor(alert.severity)}>
                    {alert.severity}
                  </Badge>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => acknowledgeAlert(alert.id)}
                    className="border-sireiq-accent/30"
                  >
                    Acknowledge
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>Recent Security Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>User</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {securityLogs.map((log, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono text-sm">{log.timestamp}</TableCell>
                  <TableCell>{log.event}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell className="font-mono">{log.ip}</TableCell>
                  <TableCell>
                    <Badge className={log.status === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}>
                      {log.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoggingMonitoring;
