
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bot, Eye, Shield, Users, AlertTriangle, CheckCircle, FileText, Lock } from 'lucide-react';

interface ModelExplainability {
  modelId: string;
  modelName: string;
  explainabilityScore: number;
  features: string[];
  decisionLogging: boolean;
  auditTrail: boolean;
}

interface PrivacyMeasure {
  id: string;
  name: string;
  description: string;
  implemented: boolean;
  effectiveness: number;
  complianceStandards: string[];
}

const AIPlatformConsiderations = () => {
  const [modelExplainability] = useState<ModelExplainability[]>([
    {
      modelId: 'model-001',
      modelName: 'Content Generation Model v2.1',
      explainabilityScore: 85,
      features: ['SHAP values', 'Feature importance', 'Decision trees'],
      decisionLogging: true,
      auditTrail: true
    },
    {
      modelId: 'model-002',
      modelName: 'Data Analysis Model v1.8',
      explainabilityScore: 92,
      features: ['LIME', 'Counterfactuals', 'Feature attribution'],
      decisionLogging: true,
      auditTrail: true
    },
    {
      modelId: 'model-003',
      modelName: 'Classification Model v3.0',
      explainabilityScore: 78,
      features: ['Attention maps', 'Gradient analysis'],
      decisionLogging: false,
      auditTrail: true
    }
  ]);

  const [privacyMeasures, setPrivacyMeasures] = useState<PrivacyMeasure[]>([
    {
      id: 'anonymization',
      name: 'Data Anonymization',
      description: 'Remove or mask personally identifiable information',
      implemented: true,
      effectiveness: 95,
      complianceStandards: ['GDPR', 'CCPA', 'HIPAA']
    },
    {
      id: 'pseudonymization',
      name: 'Data Pseudonymization',
      description: 'Replace identifying information with artificial identifiers',
      implemented: true,
      effectiveness: 88,
      complianceStandards: ['GDPR', 'CCPA']
    },
    {
      id: 'differential-privacy',
      name: 'Differential Privacy',
      description: 'Add statistical noise to protect individual privacy',
      implemented: false,
      effectiveness: 0,
      complianceStandards: ['GDPR', 'CCPA', 'Research Ethics']
    },
    {
      id: 'federated-learning',
      name: 'Federated Learning',
      description: 'Train models without centralizing sensitive data',
      implemented: false,
      effectiveness: 0,
      complianceStandards: ['GDPR', 'HIPAA', 'Financial Regulations']
    }
  ]);

  const [thirdPartyIntegrations] = useState([
    {
      name: 'OpenAI API',
      securityLevel: 'High',
      authentication: 'API Key + OAuth',
      dataSharing: 'Encrypted',
      complianceStatus: 'SOC 2 Type II',
      lastAudit: '2024-01-01'
    },
    {
      name: 'AWS ML Services',
      securityLevel: 'High',
      authentication: 'IAM + MFA',
      dataSharing: 'Encrypted',
      complianceStatus: 'SOC 1/2/3, ISO 27001',
      lastAudit: '2024-01-05'
    },
    {
      name: 'Hugging Face Models',
      securityLevel: 'Medium',
      authentication: 'API Token',
      dataSharing: 'Public Models Only',
      complianceStatus: 'SOC 2',
      lastAudit: '2023-12-15'
    }
  ]);

  const togglePrivacyMeasure = (id: string) => {
    setPrivacyMeasures(prev => prev.map(measure => 
      measure.id === id 
        ? { 
            ...measure, 
            implemented: !measure.implemented,
            effectiveness: !measure.implemented ? 90 : 0
          }
        : measure
    ));
  };

  const getExplainabilityColor = (score: number) => {
    if (score >= 85) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSecurityLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'high': return 'text-green-400 border-green-500/50';
      case 'medium': return 'text-yellow-400 border-yellow-500/50';
      case 'low': return 'text-red-400 border-red-500/50';
      default: return 'text-gray-400 border-gray-500/50';
    }
  };

  const averageExplainability = Math.round(
    modelExplainability.reduce((acc, model) => acc + model.explainabilityScore, 0) / modelExplainability.length
  );

  const implementedPrivacyMeasures = privacyMeasures.filter(m => m.implemented).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bot className="w-6 h-6 mr-3 text-sireiq-cyan" />
            AI Platform Security Considerations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className={`text-2xl font-bold ${getExplainabilityColor(averageExplainability)}`}>
                {averageExplainability}%
              </div>
              <div className="text-sm text-sireiq-light/70">Model Explainability</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-green-400">
                {implementedPrivacyMeasures}/{privacyMeasures.length}
              </div>
              <div className="text-sm text-sireiq-light/70">Privacy Measures</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-sireiq-cyan">3</div>
              <div className="text-sm text-sireiq-light/70">Third-party Integrations</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-green-400">100%</div>
              <div className="text-sm text-sireiq-light/70">Compliance Coverage</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="explainability" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full bg-sireiq-darker">
          <TabsTrigger value="explainability">Model Explainability</TabsTrigger>
          <TabsTrigger value="privacy">Privacy by Design</TabsTrigger>
          <TabsTrigger value="integrations">Third-party Security</TabsTrigger>
        </TabsList>

        <TabsContent value="explainability" className="space-y-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2 text-sireiq-cyan" />
                Model Explainability & Decision Logging
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modelExplainability.map((model) => (
                  <div key={model.modelId} className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-sireiq-light">{model.modelName}</h4>
                        <p className="text-sm text-sireiq-light/70">ID: {model.modelId}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${getExplainabilityColor(model.explainabilityScore)}`}>
                          {model.explainabilityScore}%
                        </div>
                        <p className="text-xs text-sireiq-light/60">Explainability Score</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <span className="text-xs text-sireiq-light/60">Features:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {model.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-sireiq-cyan/50 text-sireiq-cyan">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-sireiq-light/60">Decision Logging:</span>
                        <div className="flex items-center gap-1 mt-1">
                          {model.decisionLogging ? (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                          )}
                          <span className={`text-sm ${model.decisionLogging ? 'text-green-400' : 'text-red-400'}`}>
                            {model.decisionLogging ? 'Enabled' : 'Disabled'}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-sireiq-light/60">Audit Trail:</span>
                        <div className="flex items-center gap-1 mt-1">
                          {model.auditTrail ? (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                          )}
                          <span className={`text-sm ${model.auditTrail ? 'text-green-400' : 'text-red-400'}`}>
                            {model.auditTrail ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="text-xs">
                        View Explanations
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        Decision Logs
                      </Button>
                      {!model.decisionLogging && (
                        <Button variant="outline" size="sm" className="text-xs border-yellow-500/50 text-yellow-400">
                          Enable Logging
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-sireiq-cyan" />
                Privacy by Design Implementation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {privacyMeasures.map((measure) => (
                  <div key={measure.id} className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {measure.implemented ? (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                          )}
                          <h4 className="font-semibold text-sireiq-light">{measure.name}</h4>
                        </div>
                        <p className="text-sm text-sireiq-light/70 mb-2">{measure.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {measure.complianceStandards.map((standard, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-blue-500/50 text-blue-400">
                              {standard}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className={`text-lg font-bold ${measure.implemented ? 'text-green-400' : 'text-red-400'}`}>
                            {measure.effectiveness}%
                          </div>
                          <p className="text-xs text-sireiq-light/60">Effectiveness</p>
                        </div>
                        <Switch 
                          checked={measure.implemented}
                          onCheckedChange={() => togglePrivacyMeasure(measure.id)}
                        />
                      </div>
                    </div>
                    
                    {!measure.implemented && (
                      <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                        <p className="text-sm text-yellow-400">
                          <AlertTriangle className="w-4 h-4 inline mr-1" />
                          This privacy measure is not yet implemented. Consider enabling it to enhance data protection.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-5 h-5 mr-2 text-sireiq-cyan" />
                Third-party Integration Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {thirdPartyIntegrations.map((integration, index) => (
                  <div key={index} className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-sireiq-light">{integration.name}</h4>
                        <Badge variant="outline" className={getSecurityLevelColor(integration.securityLevel)}>
                          {integration.securityLevel.toUpperCase()} SECURITY
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm" className="text-xs">
                        Review Integration
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-sireiq-light/60">Authentication:</span>
                        <p className="font-medium text-sireiq-cyan">{integration.authentication}</p>
                      </div>
                      <div>
                        <span className="text-sireiq-light/60">Data Sharing:</span>
                        <p className="font-medium">{integration.dataSharing}</p>
                      </div>
                      <div>
                        <span className="text-sireiq-light/60">Compliance:</span>
                        <p className="font-medium">{integration.complianceStatus}</p>
                      </div>
                      <div>
                        <span className="text-sireiq-light/60">Last Audit:</span>
                        <p className="font-medium">{integration.lastAudit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                <h4 className="font-semibold text-sireiq-light mb-3">Integration Security Guidelines</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>All integrations use encrypted connections (TLS 1.3+)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>API keys are rotated automatically every 90 days</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>Data sharing agreements reviewed quarterly</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>Compliance certifications verified annually</span>
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

export default AIPlatformConsiderations;
