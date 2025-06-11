
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Shield, Bug, Code, AlertTriangle, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const ApplicationSecurity = () => {
  const [scanResults, setScanResults] = useState({
    vulnerabilities: 2,
    lastScan: new Date().toLocaleDateString(),
    score: 92
  });

  const securityChecks = [
    { name: "SQL Injection Protection", status: "passed", severity: "critical" },
    { name: "XSS Prevention", status: "passed", severity: "critical" },
    { name: "CSRF Protection", status: "passed", severity: "high" },
    { name: "Input Validation", status: "warning", severity: "medium" },
    { name: "Output Encoding", status: "passed", severity: "high" },
    { name: "Authentication Bypass", status: "failed", severity: "critical" },
    { name: "Authorization Flaws", status: "passed", severity: "high" },
    { name: "Sensitive Data Exposure", status: "warning", severity: "medium" }
  ];

  const runSecurityScan = () => {
    toast.loading("Running security scan...", { duration: 3000 });
    setTimeout(() => {
      setScanResults({
        vulnerabilities: Math.floor(Math.random() * 5),
        lastScan: new Date().toLocaleDateString(),
        score: Math.floor(Math.random() * 20) + 80
      });
      toast.success("Security scan completed");
    }, 3000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'failed': return <Bug className="w-4 h-4 text-red-400" />;
      default: return <AlertTriangle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed': return 'bg-green-500/20 text-green-300';
      case 'warning': return 'bg-yellow-500/20 text-yellow-300';
      case 'failed': return 'bg-red-500/20 text-red-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-sireiq-cyan" />
              Application Security
            </div>
            <Button onClick={runSecurityScan} className="bg-sireiq-cyan text-sireiq-darker">
              <Bug className="w-4 h-4 mr-2" />
              Run Scan
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-sireiq-cyan">{scanResults.score}%</div>
              <div className="text-sm text-sireiq-light/70">Security Score</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className={`text-2xl font-bold ${scanResults.vulnerabilities === 0 ? 'text-green-400' : 'text-red-400'}`}>
                {scanResults.vulnerabilities}
              </div>
              <div className="text-sm text-sireiq-light/70">Vulnerabilities</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-sireiq-light">{scanResults.lastScan}</div>
              <div className="text-sm text-sireiq-light/70">Last Scan</div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Security Check Results</h4>
            {securityChecks.map((check, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-lg">
                <div className="flex items-center gap-3">
                  {getStatusIcon(check.status)}
                  <span className="font-medium">{check.name}</span>
                  <Badge className={`text-xs ${
                    check.severity === 'critical' ? 'bg-red-500/20 text-red-300' :
                    check.severity === 'high' ? 'bg-orange-500/20 text-orange-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {check.severity}
                  </Badge>
                </div>
                <Badge className={getStatusColor(check.status)}>
                  {check.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>Code Security Standards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Static Code Analysis", compliance: 95, description: "Automated code review for security flaws" },
              { title: "Dependency Scanning", compliance: 88, description: "Check for vulnerable dependencies" },
              { title: "Secret Detection", compliance: 100, description: "Scan for hardcoded secrets" },
              { title: "License Compliance", compliance: 92, description: "Ensure license compatibility" }
            ].map((standard, index) => (
              <div key={index} className="p-4 border border-sireiq-accent/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{standard.title}</h4>
                  <span className={`font-bold ${standard.compliance >= 95 ? 'text-green-400' : standard.compliance >= 80 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {standard.compliance}%
                  </span>
                </div>
                <p className="text-sm text-sireiq-light/70 mb-2">{standard.description}</p>
                <Progress value={standard.compliance} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationSecurity;
