
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Bot, Shield, Eye, Database, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

const AISpecificSecurity = () => {
  const [aiSettings, setAiSettings] = useState({
    piiMasking: true,
    contentFiltering: true,
    modelAccessControl: true,
    dataRetention: false,
    auditLogging: true,
    anonymization: false
  });

  const handleToggle = (key: keyof typeof aiSettings) => {
    setAiSettings(prev => ({ ...prev, [key]: !prev[key] }));
    toast.success(`AI ${key} ${aiSettings[key] ? 'disabled' : 'enabled'}`);
  };

  const aiSecurityMetrics = [
    { label: "PII Detection Rate", value: 98, color: "text-green-400" },
    { label: "Content Filter Accuracy", value: 95, color: "text-green-400" },
    { label: "Model Access Compliance", value: 100, color: "text-green-400" },
    { label: "Data Anonymization", value: 87, color: "text-yellow-400" }
  ];

  const aiSecurityFeatures = [
    {
      key: 'piiMasking' as const,
      title: 'PII Masking',
      description: 'Automatically detect and mask personal information',
      icon: Eye,
      critical: true
    },
    {
      key: 'contentFiltering' as const,
      title: 'Content Filtering',
      description: 'Filter inappropriate or harmful content',
      icon: Shield,
      critical: true
    },
    {
      key: 'modelAccessControl' as const,
      title: 'Model Access Control',
      description: 'Restrict access to AI models based on roles',
      icon: Bot,
      critical: false
    },
    {
      key: 'dataRetention' as const,
      title: 'Data Retention Policies',
      description: 'Automatic data cleanup and retention rules',
      icon: Database,
      critical: false
    },
    {
      key: 'auditLogging' as const,
      title: 'AI Audit Logging',
      description: 'Log all AI interactions and decisions',
      icon: AlertTriangle,
      critical: true
    },
    {
      key: 'anonymization' as const,
      title: 'Data Anonymization',
      description: 'Remove identifying information from training data',
      icon: Shield,
      critical: false
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bot className="w-5 h-5 mr-2 text-sireiq-cyan" />
            AI-Specific Security Controls
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {aiSecurityFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.key} className="flex items-center justify-between p-4 border border-sireiq-accent/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <IconComponent className="w-5 h-5 text-sireiq-cyan" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{feature.title}</h4>
                      {feature.critical && (
                        <Badge variant="destructive" className="text-xs">Critical</Badge>
                      )}
                    </div>
                    <p className="text-sm text-sireiq-light/70">{feature.description}</p>
                  </div>
                </div>
                <Switch
                  checked={aiSettings[feature.key]}
                  onCheckedChange={() => handleToggle(feature.key)}
                />
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>AI Security Metrics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {aiSecurityMetrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{metric.label}</span>
                <span className={`font-bold ${metric.color}`}>{metric.value}%</span>
              </div>
              <Progress value={metric.value} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>AI Model Governance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Model Version Control", status: "Active", description: "Track model versions and changes" },
              { title: "Bias Detection", status: "Monitoring", description: "Continuous bias monitoring in AI outputs" },
              { title: "Explainability", status: "Enabled", description: "AI decision explanations available" },
              { title: "Privacy by Design", status: "Implemented", description: "Privacy considerations in model training" }
            ].map((item, index) => (
              <div key={index} className="p-3 border border-sireiq-accent/20 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-sm">{item.title}</h4>
                  <Badge className="bg-green-500/20 text-green-300 text-xs">{item.status}</Badge>
                </div>
                <p className="text-xs text-sireiq-light/70">{item.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AISpecificSecurity;
