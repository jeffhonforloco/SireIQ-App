
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, AlertTriangle, Activity, Shield, Database, Bot, Bell, Download } from 'lucide-react';

interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  resource: string;
  status: 'success' | 'failed' | 'warning';
  details: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

interface SecurityAlert {
  id: string;
  type: 'failed_login' | 'new_device' | 'policy_violation' | 'anomaly_detected';
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
  message: string;
  user?: string;
  resolved: boolean;
}

const LoggingMonitoring = () => {
  const [auditLogs] = useState<AuditLog[]>([
    {
      id: 'audit-001',
      timestamp: '2024-01-10 14:30:25',
      user: 'john.doe@sireiq.com',
      action: 'MODEL_DEPLOYMENT',
      resource: 'Content Generation Model v2.1',
      status: 'success',
      details: 'Deployed model to production environment',
      severity: 'medium'
    },
    {
      id: 'audit-002',
      timestamp: '2024-01-10 14:25:18',
      user: 'jane.smith@sireiq.com',
      action: 'DATASET_ACCESS',
      resource: 'Customer Support Conversations',
      status: 'success',
      details: 'Accessed dataset for model training',
      severity: 'low'
    },
    {
      id: 'audit-003',
      timestamp: '2024-01-10 14:20:43',
      user: 'admin@sireiq.com',
      action: 'USER_PERMISSION_CHANGE',
      resource: 'data.scientist@sireiq.com',
      status: 'success',
      details: 'Elevated user permissions to Data Scientist role',
      severity: 'high'
    },
    {
      id: 'audit-004',
      timestamp: '2024-01-10 14:15:12',
      user: 'unknown',
      action: 'LOGIN_ATTEMPT',
      resource: 'Admin Panel',
      status: 'failed',
      details: 'Failed login attempt from IP 192.168.1.100',
      severity: 'critical'
    }
  ]);

  const [securityAlerts] = useState<SecurityAlert[]>([
    {
      id: 'alert-001',
      type: 'anomaly_detected',
      severity: 'high',
      timestamp: '2024-01-10 14:35:00',
      message: 'Unusual model access pattern detected for user jane.smith@sireiq.com',
      user: 'jane.smith@sireiq.com',
      resolved: false
    },
    {
      id: 'alert-002',
      type: 'failed_login',
      severity: 'critical',
      timestamp: '2024-01-10 14:15:12',
      message: 'Multiple failed login attempts from IP 192.168.1.100',
      resolved: false
    },
    {
      id: 'alert-003',
      type: 'new_device',
      severity: 'medium',
      timestamp: '2024-01-10 13:45:30',
      message: 'New device login detected for admin@sireiq.com',
      user: 'admin@sireiq.com',
      resolved: true
    },
    {
      id: 'alert-004',
      type: 'policy_violation',
      severity: 'high',
      timestamp: '2024-01-10 12:20:15',
      message: 'Attempt to access restricted dataset without proper permissions',
      user: 'annotator@sireiq.com',
      resolved: true
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-400 bg-green-500/20';
      case 'failed': return 'text-red-400 bg-red-500/20';
      case 'warning': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-400 border-red-500/50';
      case 'high': return 'text-orange-400 border-orange-500/50';
      case 'medium': return 'text-yellow-400 border-yellow-500/50';
      case 'low': return 'text-green-400 border-green-500/50';
      default: return 'text-gray-400 border-gray-500/50';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'failed_login': return <Shield className="w-4 h-4" />;
      case 'new_device': return <Eye className="w-4 h-4" />;
      case 'policy_violation': return <AlertTriangle className="w-4 h-4" />;
      case 'anomaly_detected': return <Bot className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Activity className="w-6 h-6 mr-3 text-sireiq-cyan" />
              Logging & Monitoring Dashboard
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-sireiq-accent/30">
                <Download className="w-4 h-4 mr-2" />
                Export Logs
              </Button>
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                Configure Alerts
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-green-400">2,847</div>
              <div className="text-sm text-sireiq-light/70">Total Events Today</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-red-400">12</div>
              <div className="text-sm text-sireiq-light/70">Security Alerts</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-yellow-400">5</div>
              <div className="text-sm text-sireiq-light/70">Failed Logins</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-sireiq-cyan">98.5%</div>
              <div className="text-sm text-sireiq-light/70">System Uptime</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="audit-logs" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full bg-sireiq-darker">
          <TabsTrigger value="audit-logs">Audit Logs</TabsTrigger>
          <TabsTrigger value="security-alerts">Security Alerts</TabsTrigger>
          <TabsTrigger value="anomaly-detection">Anomaly Detection</TabsTrigger>
        </TabsList>

        <TabsContent value="audit-logs" className="space-y-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-5 h-5 mr-2 text-sireiq-cyan" />
                Admin Activity Audit Logs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {auditLogs.map((log) => (
                  <div key={log.id} className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={getSeverityColor(log.severity)} variant="outline">
                            {log.severity.toUpperCase()}
                          </Badge>
                          <Badge className={getStatusColor(log.status)} variant="outline">
                            {log.status.toUpperCase()}
                          </Badge>
                          <span className="text-sm text-sireiq-light/60">{log.timestamp}</span>
                        </div>
                        <h4 className="font-semibold text-sireiq-light">{log.action.replace(/_/g, ' ')}</h4>
                        <p className="text-sm text-sireiq-light/70">{log.details}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mt-3">
                      <div>
                        <span className="text-sireiq-light/60">User:</span>
                        <p className="font-medium text-sireiq-cyan">{log.user}</p>
                      </div>
                      <div>
                        <span className="text-sireiq-light/60">Resource:</span>
                        <p className="font-medium">{log.resource}</p>
                      </div>
                      <div>
                        <span className="text-sireiq-light/60">Log ID:</span>
                        <p className="font-medium">{log.id}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security-alerts" className="space-y-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-sireiq-cyan" />
                Security Alerts & Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {securityAlerts.map((alert) => (
                  <div 
                    key={alert.id} 
                    className={`p-4 rounded-lg border-l-4 ${
                      alert.resolved 
                        ? 'bg-sireiq-accent/5 border-l-green-500/50' 
                        : 'bg-red-500/5 border-l-red-500/50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        {getAlertIcon(alert.type)}
                        <Badge className={getSeverityColor(alert.severity)} variant="outline">
                          {alert.severity.toUpperCase()}
                        </Badge>
                        <span className="text-sm text-sireiq-light/60">{alert.timestamp}</span>
                      </div>
                      <div className="flex gap-2">
                        {!alert.resolved && (
                          <Button variant="outline" size="sm" className="text-xs">
                            Resolve
                          </Button>
                        )}
                        <Button variant="outline" size="sm" className="text-xs">
                          Details
                        </Button>
                      </div>
                    </div>
                    <h4 className="font-semibold text-sireiq-light mb-1">
                      {alert.type.replace(/_/g, ' ').toUpperCase()}
                    </h4>
                    <p className="text-sm text-sireiq-light/70 mb-2">{alert.message}</p>
                    {alert.user && (
                      <p className="text-xs text-sireiq-light/60">Affected User: {alert.user}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="anomaly-detection" className="space-y-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="w-5 h-5 mr-2 text-sireiq-cyan" />
                AI/ML Anomaly Detection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-sireiq-light">Behavioral Patterns</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-sireiq-accent/5 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Unusual Login Times</span>
                        <Badge variant="outline" className="text-yellow-400 border-yellow-500/50">
                          Medium Risk
                        </Badge>
                      </div>
                      <p className="text-xs text-sireiq-light/60 mt-1">
                        3 users accessing system outside normal hours
                      </p>
                    </div>
                    <div className="p-3 bg-sireiq-accent/5 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Model Access Frequency</span>
                        <Badge variant="outline" className="text-green-400 border-green-500/50">
                          Normal
                        </Badge>
                      </div>
                      <p className="text-xs text-sireiq-light/60 mt-1">
                        All model access patterns within expected ranges
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-sireiq-light">Data Access Patterns</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Bulk Data Downloads</span>
                        <Badge variant="outline" className="text-red-400 border-red-500/50">
                          High Risk
                        </Badge>
                      </div>
                      <p className="text-xs text-sireiq-light/60 mt-1">
                        Unusual data download volume detected
                      </p>
                    </div>
                    <div className="p-3 bg-sireiq-accent/5 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Cross-Dataset Access</span>
                        <Badge variant="outline" className="text-green-400 border-green-500/50">
                          Normal
                        </Badge>
                      </div>
                      <p className="text-xs text-sireiq-light/60 mt-1">
                        Dataset access follows expected patterns
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoggingMonitoring;
