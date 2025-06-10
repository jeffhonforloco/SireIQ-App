
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bot, Database, Shield, Eye, Key, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface ModelAccess {
  modelId: string;
  modelName: string;
  accessLevel: 'read' | 'write' | 'admin';
  lastModified: string;
  modifiedBy: string;
  status: 'active' | 'protected' | 'archived';
}

interface DatasetSecurity {
  datasetId: string;
  datasetName: string;
  piiMasked: boolean;
  accessControls: string[];
  lastAccessed: string;
  sensitivity: 'low' | 'medium' | 'high';
}

const AISpecificSecurity = () => {
  const [modelAccessLogs, setModelAccessLogs] = useState<ModelAccess[]>([
    {
      modelId: 'model-001',
      modelName: 'Content Generation Model v2.1',
      accessLevel: 'admin',
      lastModified: '2024-01-10 14:30:00',
      modifiedBy: 'john.doe@sireiq.com',
      status: 'active'
    },
    {
      modelId: 'model-002',
      modelName: 'Data Analysis Model v1.8',
      accessLevel: 'read',
      lastModified: '2024-01-09 09:15:00',
      modifiedBy: 'jane.smith@sireiq.com',
      status: 'protected'
    },
    {
      modelId: 'model-003',
      modelName: 'Classification Model v3.0',
      accessLevel: 'write',
      lastModified: '2024-01-08 16:45:00',
      modifiedBy: 'data.scientist@sireiq.com',
      status: 'active'
    }
  ]);

  const [datasets, setDatasets] = useState<DatasetSecurity[]>([
    {
      datasetId: 'ds-001',
      datasetName: 'Customer Support Conversations',
      piiMasked: true,
      accessControls: ['Data Scientists', 'ML Engineers'],
      lastAccessed: '2024-01-10 11:20:00',
      sensitivity: 'high'
    },
    {
      datasetId: 'ds-002',
      datasetName: 'Product Analytics Data',
      piiMasked: false,
      accessControls: ['Analysts', 'Data Scientists'],
      lastAccessed: '2024-01-10 08:30:00',
      sensitivity: 'medium'
    },
    {
      datasetId: 'ds-003',
      datasetName: 'Public Documentation Corpus',
      piiMasked: false,
      accessControls: ['All Users'],
      lastAccessed: '2024-01-10 15:45:00',
      sensitivity: 'low'
    }
  ]);

  const [apiSecurity, setApiSecurity] = useState({
    rateLimitEnabled: true,
    oauthRequired: true,
    apiKeyRotation: true,
    endpointMonitoring: true,
    requestLogging: true
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'protected': return 'text-yellow-400';
      case 'archived': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getSensitivityColor = (sensitivity: string) => {
    switch (sensitivity) {
      case 'high': return 'border-red-500/50 bg-red-500/10 text-red-400';
      case 'medium': return 'border-yellow-500/50 bg-yellow-500/10 text-yellow-400';
      case 'low': return 'border-green-500/50 bg-green-500/10 text-green-400';
    }
  };

  const toggleApiSecurity = (key: keyof typeof apiSecurity) => {
    setApiSecurity(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bot className="w-6 h-6 mr-3 text-sireiq-cyan" />
            AI-Specific Security Controls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sireiq-light/70">
            Secure AI model management, dataset access, and API endpoints with comprehensive logging and monitoring.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="models" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full bg-sireiq-darker">
          <TabsTrigger value="models">Model Access Control</TabsTrigger>
          <TabsTrigger value="datasets">Dataset Security</TabsTrigger>
          <TabsTrigger value="apis">API Security</TabsTrigger>
        </TabsList>

        <TabsContent value="models" className="space-y-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-sireiq-cyan" />
                Model Access Controls & Logging
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modelAccessLogs.map((model) => (
                  <div key={model.modelId} className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-sireiq-light">{model.modelName}</h4>
                        <p className="text-sm text-sireiq-light/70">ID: {model.modelId}</p>
                      </div>
                      <Badge variant="outline" className={getStatusColor(model.status)}>
                        {model.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-sireiq-light/60">Access Level:</span>
                        <p className="font-medium text-sireiq-cyan">{model.accessLevel.toUpperCase()}</p>
                      </div>
                      <div>
                        <span className="text-sireiq-light/60">Last Modified:</span>
                        <p className="font-medium">{model.lastModified}</p>
                      </div>
                      <div>
                        <span className="text-sireiq-light/60">Modified By:</span>
                        <p className="font-medium">{model.modifiedBy}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm" className="text-xs">
                        View Logs
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        Edit Permissions
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="datasets" className="space-y-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-5 h-5 mr-2 text-sireiq-cyan" />
                Dataset Security & PII Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {datasets.map((dataset) => (
                  <div 
                    key={dataset.datasetId} 
                    className={`p-4 rounded-lg border ${getSensitivityColor(dataset.sensitivity)}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-sireiq-light">{dataset.datasetName}</h4>
                        <p className="text-sm text-sireiq-light/70">ID: {dataset.datasetId}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={getSensitivityColor(dataset.sensitivity)}>
                          {dataset.sensitivity.toUpperCase()} SENSITIVITY
                        </Badge>
                        {dataset.piiMasked ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-red-400" />
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-sireiq-light/60">PII Masked:</span>
                        <p className={`font-medium ${dataset.piiMasked ? 'text-green-400' : 'text-red-400'}`}>
                          {dataset.piiMasked ? 'Yes' : 'No'}
                        </p>
                      </div>
                      <div>
                        <span className="text-sireiq-light/60">Access Groups:</span>
                        <p className="font-medium">{dataset.accessControls.join(', ')}</p>
                      </div>
                      <div>
                        <span className="text-sireiq-light/60">Last Accessed:</span>
                        <p className="font-medium">{dataset.lastAccessed}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="text-xs">
                        Access Logs
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        Configure Access
                      </Button>
                      {!dataset.piiMasked && (
                        <Button variant="outline" size="sm" className="text-xs border-red-500/50 text-red-400">
                          Enable PII Masking
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="apis" className="space-y-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="w-5 h-5 mr-2 text-sireiq-cyan" />
                API Security & Rate Limiting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(apiSecurity).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                    <div>
                      <h4 className="font-semibold text-sireiq-light">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </h4>
                      <p className="text-sm text-sireiq-light/70">
                        {key === 'rateLimitEnabled' && 'Prevent API abuse with request limits'}
                        {key === 'oauthRequired' && 'Require OAuth tokens for all API calls'}
                        {key === 'apiKeyRotation' && 'Automatic API key rotation policy'}
                        {key === 'endpointMonitoring' && 'Real-time endpoint monitoring and alerts'}
                        {key === 'requestLogging' && 'Comprehensive API request logging'}
                      </p>
                    </div>
                    <Switch 
                      checked={value}
                      onCheckedChange={() => toggleApiSecurity(key as keyof typeof apiSecurity)}
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                <h4 className="font-semibold text-sireiq-light mb-3">API Rate Limiting Configuration</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-sireiq-light/60">Model API:</span>
                    <p className="font-medium text-sireiq-cyan">100 req/min per API key</p>
                  </div>
                  <div>
                    <span className="text-sireiq-light/60">Data API:</span>
                    <p className="font-medium text-sireiq-cyan">50 req/min per API key</p>
                  </div>
                  <div>
                    <span className="text-sireiq-light/60">Admin API:</span>
                    <p className="font-medium text-sireiq-cyan">20 req/min per API key</p>
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

export default AISpecificSecurity;
