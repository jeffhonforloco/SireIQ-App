
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Server, Database, Cloud, Lock, Shield } from 'lucide-react';
import { toast } from 'sonner';

const InfrastructureSecurity = () => {
  const [infraStatus, setInfraStatus] = useState({
    containers: { secured: 12, total: 15 },
    databases: { encrypted: 8, total: 8 },
    networks: { isolated: 5, total: 6 },
    certificates: { valid: 10, total: 12 }
  });

  const securityComponents = [
    {
      title: "Container Security",
      icon: Server,
      status: "Good",
      compliance: 92,
      details: "12/15 containers hardened",
      color: "text-green-400"
    },
    {
      title: "Database Encryption",
      icon: Database,
      status: "Excellent",
      compliance: 100,
      details: "All databases encrypted",
      color: "text-green-400"
    },
    {
      title: "Network Isolation",
      icon: Cloud,
      status: "Warning",
      compliance: 83,
      details: "5/6 networks isolated",
      color: "text-yellow-400"
    },
    {
      title: "SSL Certificates",
      icon: Lock,
      status: "Good",
      compliance: 83,
      details: "10/12 certificates valid",
      color: "text-yellow-400"
    }
  ];

  const infrastructureChecks = [
    { name: "Firewall Configuration", status: "active", severity: "critical" },
    { name: "Intrusion Detection", status: "monitoring", severity: "high" },
    { name: "VPN Access Control", status: "configured", severity: "medium" },
    { name: "Load Balancer Security", status: "active", severity: "high" },
    { name: "CDN Protection", status: "enabled", severity: "medium" },
    { name: "DDoS Protection", status: "active", severity: "critical" }
  ];

  const runInfrastructureScan = () => {
    toast.loading("Scanning infrastructure...", { duration: 4000 });
    setTimeout(() => {
      setInfraStatus({
        containers: { secured: Math.floor(Math.random() * 3) + 13, total: 15 },
        databases: { encrypted: 8, total: 8 },
        networks: { isolated: Math.floor(Math.random() * 2) + 5, total: 6 },
        certificates: { valid: Math.floor(Math.random() * 3) + 10, total: 12 }
      });
      toast.success("Infrastructure scan completed");
    }, 4000);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Server className="w-5 h-5 mr-2 text-sireiq-cyan" />
              Infrastructure Security
            </div>
            <Button onClick={runInfrastructureScan} className="bg-sireiq-cyan text-sireiq-darker">
              <Shield className="w-4 h-4 mr-2" />
              Scan Infrastructure
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {securityComponents.map((component, index) => {
              const IconComponent = component.icon;
              return (
                <div key={index} className="p-4 border border-sireiq-accent/20 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-5 h-5 text-sireiq-cyan" />
                      <h4 className="font-medium">{component.title}</h4>
                    </div>
                    <Badge className={`${
                      component.status === 'Excellent' ? 'bg-green-500/20 text-green-300' :
                      component.status === 'Good' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {component.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-sireiq-light/70">{component.details}</span>
                      <span className={`font-bold ${component.color}`}>{component.compliance}%</span>
                    </div>
                    <Progress value={component.compliance} className="h-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>Infrastructure Security Checks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {infrastructureChecks.map((check, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-sireiq-cyan" />
                  <span className="font-medium">{check.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={`text-xs ${
                    check.severity === 'critical' ? 'bg-red-500/20 text-red-300' :
                    check.severity === 'high' ? 'bg-orange-500/20 text-orange-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {check.severity}
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-300 text-xs">
                    {check.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>Security Hardening Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { category: "Server Hardening", items: ["OS patches current", "Unnecessary services disabled", "Secure configurations applied"] },
              { category: "Network Security", items: ["Firewalls configured", "Network segmentation", "Traffic monitoring"] },
              { category: "Data Protection", items: ["Encryption at rest", "Encryption in transit", "Key management"] }
            ].map((category, index) => (
              <div key={index} className="p-4 bg-sireiq-accent/5 rounded-lg">
                <h4 className="font-medium mb-2">{category.category}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfrastructureSecurity;
