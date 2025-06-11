
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { Bot, Brain, Eye, Users, AlertTriangle, Shield } from 'lucide-react';
import { toast } from 'sonner';

const AIPlatformConsiderations = () => {
  const [aiGovernanceSettings, setAiGovernanceSettings] = useState({
    explainability: true,
    biasDetection: true,
    privacyByDesign: true,
    humanOversight: true,
    transparentDecisions: false,
    ethicalGuidelines: true
  });

  const handleToggle = (key: keyof typeof aiGovernanceSettings) => {
    setAiGovernanceSettings(prev => ({ ...prev, [key]: !prev[key] }));
    toast.success(`AI ${key} ${aiGovernanceSettings[key] ? 'disabled' : 'enabled'}`);
  };

  const aiEthicsMetrics = [
    { label: "Fairness Score", value: 92, threshold: 85, status: "good" },
    { label: "Transparency Index", value: 88, threshold: 80, status: "good" },
    { label: "Privacy Compliance", value: 95, threshold: 90, status: "excellent" },
    { label: "Bias Detection", value: 76, threshold: 80, status: "warning" }
  ];

  const aiGovernanceFeatures = [
    {
      key: 'explainability' as const,
      title: 'AI Explainability',
      description: 'Provide clear explanations for AI decisions',
      icon: Eye,
      critical: true
    },
    {
      key: 'biasDetection' as const,
      title: 'Bias Detection & Mitigation',
      description: 'Monitor and reduce algorithmic bias',
      icon: Shield,
      critical: true
    },
    {
      key: 'privacyByDesign' as const,
      title: 'Privacy by Design',
      description: 'Built-in privacy protections in AI systems',
      icon: Bot,
      critical: true
    },
    {
      key: 'humanOversight' as const,
      title: 'Human Oversight',
      description: 'Human review and control of AI decisions',
      icon: Users,
      critical: false
    },
    {
      key: 'transparentDecisions' as const,
      title: 'Transparent Decision Making',
      description: 'Clear audit trails for all AI decisions',
      icon: Brain,
      critical: false
    },
    {
      key: 'ethicalGuidelines' as const,
      title: 'Ethical Guidelines Compliance',
      description: 'Adherence to AI ethics frameworks',
      icon: AlertTriangle,
      critical: true
    }
  ];

  const getMetricColor = (value: number, threshold: number) => {
    if (value >= threshold + 10) return 'text-green-400';
    if (value >= threshold) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-500/20 text-green-300';
      case 'good': return 'bg-blue-500/20 text-blue-300';
      case 'warning': return 'bg-yellow-500/20 text-yellow-300';
      case 'critical': return 'bg-red-500/20 text-red-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="w-5 h-5 mr-2 text-sireiq-cyan" />
            AI Platform Governance & Ethics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {aiGovernanceFeatures.map((feature) => {
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
                  checked={aiGovernanceSettings[feature.key]}
                  onCheckedChange={() => handleToggle(feature.key)}
                />
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>AI Ethics & Fairness Metrics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {aiEthicsMetrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{metric.label}</span>
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${getMetricColor(metric.value, metric.threshold)}`}>
                    {metric.value}%
                  </span>
                  <Badge className={getStatusColor(metric.status)}>
                    {metric.status}
                  </Badge>
                </div>
              </div>
              <Progress value={metric.value} className="h-2" />
              <div className="text-xs text-sireiq-light/50">
                Threshold: {metric.threshold}% • Current: {metric.value}%
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>Responsible AI Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                category: "Ethical Principles",
                items: ["Human dignity respect", "Fairness and non-discrimination", "Transparency and accountability"]
              },
              {
                category: "Technical Safeguards",
                items: ["Algorithmic auditing", "Bias testing and mitigation", "Performance monitoring"]
              },
              {
                category: "Governance Framework",
                items: ["AI oversight committee", "Regular ethics reviews", "Stakeholder engagement"]
              },
              {
                category: "Risk Management",
                items: ["Impact assessments", "Continuous monitoring", "Incident response procedures"]
              }
            ].map((framework, index) => (
              <div key={index} className="p-4 border border-sireiq-accent/20 rounded-lg">
                <h4 className="font-medium mb-3">{framework.category}</h4>
                <div className="space-y-2">
                  {framework.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-sireiq-cyan rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>AI Model Lifecycle Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { phase: "Development", status: "In Progress", compliance: 88, description: "Model training with ethical guidelines" },
              { phase: "Testing & Validation", status: "Completed", compliance: 95, description: "Bias testing and performance validation" },
              { phase: "Deployment", status: "Active", compliance: 92, description: "Production deployment with monitoring" },
              { phase: "Monitoring", status: "Ongoing", compliance: 90, description: "Continuous performance and ethics monitoring" }
            ].map((phase, index) => (
              <div key={index} className="p-4 bg-sireiq-accent/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{phase.phase}</h4>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sireiq-cyan">{phase.compliance}%</span>
                    <Badge className={getStatusColor(phase.status === 'Completed' ? 'excellent' : 'good')}>
                      {phase.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-sireiq-light/70 mb-2">{phase.description}</p>
                <Progress value={phase.compliance} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIPlatformConsiderations;
