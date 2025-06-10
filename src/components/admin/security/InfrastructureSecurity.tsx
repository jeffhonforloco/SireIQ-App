
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Server, Database, Lock, Shield, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

interface ContainerStatus {
  name: string;
  image: string;
  status: 'running' | 'stopped' | 'updating';
  securityScore: number;
  lastUpdated: string;
  vulnerabilities: number;
}

interface EncryptionStatus {
  type: 'transit' | 'rest';
  method: string;
  status: 'active' | 'inactive';
  coverage: number;
  lastRotation?: string;
}

const InfrastructureSecurity = () => {
  const [containers] = useState<ContainerStatus[]>([
    {
      name: 'sireiq-admin-api',
      image: 'sireiq/admin-api:v2.1.0',
      status: 'running',
      securityScore: 95,
      lastUpdated: '2024-01-10',
      vulnerabilities: 0
    },
    {
      name: 'sireiq-model-service',
      image: 'sireiq/model-service:v1.8.2',
      status: 'running',
      securityScore: 88,
      lastUpdated: '2024-01-09',
      vulnerabilities: 2
    },
    {
      name: 'sireiq-data-processor',
      image: 'sireiq/data-processor:v3.0.1',
      status: 'updating',
      securityScore: 92,
      lastUpdated: '2024-01-10',
      vulnerabilities: 1
    },
    {
      name: 'sireiq-nginx-proxy',
      image: 'nginx:1.25-alpine',
      status: 'running',
      securityScore: 98,
      lastUpdated: '2024-01-08',
      vulnerabilities: 0
    }
  ]);

  const [encryptionMethods] = useState<EncryptionStatus[]>([
    {
      type: 'transit',
      method: 'TLS 1.3',
      status: 'active',
      coverage: 100,
      lastRotation: '2024-01-01'
    },
    {
      type: 'rest',
      method: 'AES-256-GCM',
      status: 'active',
      coverage: 98,
      lastRotation: '2024-01-05'
    }
  ]);

  const [apiSecurity] = useState([
    { endpoint: 'Model Management API', auth: 'OAuth 2.0', rateLimit: '100/min', encryption: 'TLS 1.3', status: 'secure' },
    { endpoint: 'Data Processing API', auth: 'JWT + API Key', rateLimit: '50/min', encryption: 'TLS 1.3', status: 'secure' },
    { endpoint: 'Admin Management API', auth: 'OAuth 2.0 + MFA', rateLimit: '20/min', encryption: 'TLS 1.3', status: 'secure' },
    { endpoint: 'Analytics API', auth: 'API Key', rateLimit: '200/min', encryption: 'TLS 1.3', status: 'warning' }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': case 'active': case 'secure': return 'text-green-400';
      case 'updating': case 'warning': return 'text-yellow-400';
      case 'stopped': case 'inactive': case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running': case 'active': case 'secure': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'updating': case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'stopped': case 'inactive': case 'critical': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getSecurityScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  const overallSecurityScore = Math.round(
    containers.reduce((acc, container) => acc + container.securityScore, 0) / containers.length
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Server className="w-6 h-6 mr-3 text-sireiq-cyan" />
              Infrastructure Security
            </div>
            <Badge variant="outline" className={`${getSecurityScoreColor(overallSecurityScore)} border-current`}>
              {overallSecurityScore}/100 Security Score
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-green-400">{containers.filter(c => c.status === 'running').length}</div>
              <div className="text-sm text-sireiq-light/70">Running Containers</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-red-400">
                {containers.reduce((acc, c) => acc + c.vulnerabilities, 0)}
              </div>
              <div className="text-sm text-sireiq-light/70">Total Vulnerabilities</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-green-400">99.2%</div>
              <div className="text-sm text-sireiq-light/70">Encryption Coverage</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-sireiq-cyan">100%</div>
              <div className="text-sm text-sireiq-light/70">API Security</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="containers" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full bg-sireiq-darker">
          <TabsTrigger value="containers">Container Security</TabsTrigger>
          <TabsTrigger value="encryption">Encryption</TabsTrigger>
          <TabsTrigger value="apis">API Security</TabsTrigger>
        </TabsList>

        <TabsContent value="containers" className="space-y-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="w-5 h-5 mr-2 text-sireiq-cyan" />
                Container & VM Hardening
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {containers.map((container, index) => (
                  <div key={index} className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {getStatusIcon(container.status)}
                          <h4 className="font-semibold text-sireiq-light">{container.name}</h4>
                          <Badge variant="outline" className={getStatusColor(container.status)}>
                            {container.status.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-sm text-sireiq-light/70">{container.image}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${getSecurityScoreColor(container.securityScore)}`}>
                          {container.securityScore}/100
                        </div>
                        <p className="text-xs text-sireiq-light/60">Security Score</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <span className="text-xs text-sireiq-light/60">Last Updated:</span>
                        <p className="text-sm font-medium">{container.lastUpdated}</p>
                      </div>
                      <div>
                        <span className="text-xs text-sireiq-light/60">Vulnerabilities:</span>
                        <p className={`text-sm font-medium ${container.vulnerabilities > 0 ? 'text-red-400' : 'text-green-400'}`}>
                          {container.vulnerabilities}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs text-sireiq-light/60">Image Security:</span>
                        <p className="text-sm font-medium text-sireiq-cyan">Minimal Base</p>
                      </div>
                    </div>
                    
                    <Progress value={container.securityScore} className="mb-3" />
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="text-xs">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        Security Scan
                      </Button>
                      {container.vulnerabilities > 0 && (
                        <Button variant="outline" size="sm" className="text-xs border-yellow-500/50 text-yellow-400">
                          Update Image
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="encryption" className="space-y-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-5 h-5 mr-2 text-sireiq-cyan" />
                Data Encryption Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {encryptionMethods.map((encryption, index) => (
                  <div key={index} className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-sireiq-light">
                        {encryption.type === 'transit' ? 'Data in Transit' : 'Data at Rest'}
                      </h4>
                      {getStatusIcon(encryption.status)}
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-sireiq-light/60">Encryption Method:</span>
                        <p className="font-medium text-sireiq-cyan">{encryption.method}</p>
                      </div>
                      
                      <div>
                        <span className="text-sm text-sireiq-light/60">Coverage:</span>
                        <div className="flex items-center gap-2 mt-1">
                          <Progress value={encryption.coverage} className="flex-1" />
                          <span className="text-sm font-medium text-green-400">{encryption.coverage}%</span>
                        </div>
                      </div>
                      
                      {encryption.lastRotation && (
                        <div>
                          <span className="text-sm text-sireiq-light/60">Last Key Rotation:</span>
                          <p className="font-medium">{encryption.lastRotation}</p>
                        </div>
                      )}
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full mt-3 text-xs">
                      Manage Keys
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                <h4 className="font-semibold text-sireiq-light mb-3">Encryption Standards</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-sireiq-light/60">Algorithm:</span>
                    <p className="font-medium text-sireiq-cyan">AES-256-GCM</p>
                  </div>
                  <div>
                    <span className="text-sireiq-light/60">Key Management:</span>
                    <p className="font-medium text-sireiq-cyan">Hardware Security Module</p>
                  </div>
                  <div>
                    <span className="text-sireiq-light/60">Compliance:</span>
                    <p className="font-medium text-sireiq-cyan">FIPS 140-2 Level 3</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="apis" className="space-y-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-sireiq-cyan" />
                API Security Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiSecurity.map((api, index) => (
                  <div key={index} className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {getStatusIcon(api.status)}
                          <h4 className="font-semibold text-sireiq-light">{api.endpoint}</h4>
                        </div>
                        <Badge variant="outline" className={getStatusColor(api.status)}>
                          {api.status.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-sireiq-light/60">Authentication:</span>
                        <p className="font-medium text-sireiq-cyan">{api.auth}</p>
                      </div>
                      <div>
                        <span className="text-sireiq-light/60">Rate Limit:</span>
                        <p className="font-medium">{api.rateLimit}</p>
                      </div>
                      <div>
                        <span className="text-sireiq-light/60">Encryption:</span>
                        <p className="font-medium">{api.encryption}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm" className="text-xs">
                        View Logs
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        Update Config
                      </Button>
                      {api.status === 'warning' && (
                        <Button variant="outline" size="sm" className="text-xs border-yellow-500/50 text-yellow-400">
                          Review Security
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InfrastructureSecurity;
