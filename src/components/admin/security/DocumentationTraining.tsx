
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Users, AlertTriangle, CheckCircle, Download, Play, BookOpen } from 'lucide-react';

interface Document {
  id: string;
  title: string;
  type: 'procedure' | 'policy' | 'guide' | 'plan';
  lastUpdated: string;
  version: string;
  status: 'current' | 'outdated' | 'draft';
  owner: string;
}

interface TrainingModule {
  id: string;
  title: string;
  description: string;
  completionRate: number;
  duration: string;
  mandatory: boolean;
  lastUpdated: string;
}

interface IncidentResponse {
  phase: string;
  description: string;
  responsible: string;
  status: 'documented' | 'tested' | 'needs-review';
}

const DocumentationTraining = () => {
  const [documents] = useState<Document[]>([
    {
      id: 'doc-001',
      title: 'Model Deployment Procedures',
      type: 'procedure',
      lastUpdated: '2024-01-08',
      version: 'v2.1',
      status: 'current',
      owner: 'DevOps Team'
    },
    {
      id: 'doc-002',
      title: 'Model Rollback Guidelines',
      type: 'guide',
      lastUpdated: '2024-01-05',
      version: 'v1.8',
      status: 'current',
      owner: 'ML Engineering'
    },
    {
      id: 'doc-003',
      title: 'AI Model Retraining Protocol',
      type: 'procedure',
      lastUpdated: '2023-12-20',
      version: 'v1.5',
      status: 'outdated',
      owner: 'Data Science'
    },
    {
      id: 'doc-004',
      title: 'Data Poisoning Incident Response',
      type: 'plan',
      lastUpdated: '2024-01-10',
      version: 'v3.0',
      status: 'current',
      owner: 'Security Team'
    },
    {
      id: 'doc-005',
      title: 'Model Inversion Attack Prevention',
      type: 'policy',
      lastUpdated: '2024-01-01',
      version: 'v2.0',
      status: 'draft',
      owner: 'Security Team'
    }
  ]);

  const [trainingModules] = useState<TrainingModule[]>([
    {
      id: 'training-001',
      title: 'AI Security Fundamentals',
      description: 'Basic understanding of AI security risks and mitigation strategies',
      completionRate: 95,
      duration: '2 hours',
      mandatory: true,
      lastUpdated: '2024-01-01'
    },
    {
      id: 'training-002',
      title: 'Data Poisoning Prevention',
      description: 'Identifying and preventing data poisoning attacks',
      completionRate: 87,
      duration: '1.5 hours',
      mandatory: true,
      lastUpdated: '2024-01-05'
    },
    {
      id: 'training-003',
      title: 'Model Inversion Attack Awareness',
      description: 'Understanding and mitigating model inversion vulnerabilities',
      completionRate: 72,
      duration: '1 hour',
      mandatory: true,
      lastUpdated: '2024-01-03'
    },
    {
      id: 'training-004',
      title: 'Incident Response Procedures',
      description: 'Step-by-step incident response for AI security breaches',
      completionRate: 89,
      duration: '3 hours',
      mandatory: true,
      lastUpdated: '2024-01-08'
    },
    {
      id: 'training-005',
      title: 'Advanced AI Security Techniques',
      description: 'Advanced methods for securing AI systems and models',
      completionRate: 64,
      duration: '4 hours',
      mandatory: false,
      lastUpdated: '2023-12-28'
    }
  ]);

  const [incidentResponsePlan] = useState<IncidentResponse[]>([
    {
      phase: 'Preparation',
      description: 'Establish incident response team and procedures',
      responsible: 'Security Team Lead',
      status: 'documented'
    },
    {
      phase: 'Identification',
      description: 'Detect and analyze potential AI security incidents',
      responsible: 'SOC Analysts',
      status: 'tested'
    },
    {
      phase: 'Containment',
      description: 'Isolate affected AI models and prevent spread',
      responsible: 'DevOps + Security',
      status: 'documented'
    },
    {
      phase: 'Eradication',
      description: 'Remove threats and vulnerabilities from AI systems',
      responsible: 'Security + ML Engineering',
      status: 'documented'
    },
    {
      phase: 'Recovery',
      description: 'Restore AI services and validate system integrity',
      responsible: 'ML Engineering + DevOps',
      status: 'tested'
    },
    {
      phase: 'Lessons Learned',
      description: 'Document findings and improve procedures',
      responsible: 'Incident Response Team',
      status: 'needs-review'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': case 'documented': case 'tested': return 'text-green-400';
      case 'draft': case 'needs-review': return 'text-yellow-400';
      case 'outdated': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'current': case 'documented': case 'tested': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'draft': case 'needs-review': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'outdated': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default: return <AlertTriangle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'procedure': return <FileText className="w-4 h-4 text-sireiq-cyan" />;
      case 'policy': return <BookOpen className="w-4 h-4 text-sireiq-cyan" />;
      case 'guide': return <FileText className="w-4 h-4 text-sireiq-cyan" />;
      case 'plan': return <AlertTriangle className="w-4 h-4 text-sireiq-cyan" />;
      default: return <FileText className="w-4 h-4 text-sireiq-cyan" />;
    }
  };

  const getCompletionColor = (rate: number) => {
    if (rate >= 90) return 'text-green-400';
    if (rate >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  const averageCompletionRate = Math.round(
    trainingModules.reduce((acc, module) => acc + module.completionRate, 0) / trainingModules.length
  );

  const currentDocuments = documents.filter(doc => doc.status === 'current').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="w-6 h-6 mr-3 text-sireiq-cyan" />
            Documentation & Training Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-green-400">{currentDocuments}</div>
              <div className="text-sm text-sireiq-light/70">Current Documents</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className={`text-2xl font-bold ${getCompletionColor(averageCompletionRate)}`}>
                {averageCompletionRate}%
              </div>
              <div className="text-sm text-sireiq-light/70">Training Completion</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-sireiq-cyan">{trainingModules.length}</div>
              <div className="text-sm text-sireiq-light/70">Training Modules</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-green-400">6</div>
              <div className="text-sm text-sireiq-light/70">Incident Response Phases</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="documentation" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full bg-sireiq-darker">
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
          <TabsTrigger value="training">Training Programs</TabsTrigger>
          <TabsTrigger value="incident-response">Incident Response</TabsTrigger>
        </TabsList>

        <TabsContent value="documentation" className="space-y-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-sireiq-cyan" />
                  Admin Procedures Documentation
                </div>
                <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                  Create New Document
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documents.map((document) => (
                  <div key={document.id} className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-start gap-3">
                        {getTypeIcon(document.type)}
                        <div>
                          <h4 className="font-semibold text-sireiq-light">{document.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs border-sireiq-cyan/50 text-sireiq-cyan">
                              {document.type.toUpperCase()}
                            </Badge>
                            <Badge variant="outline" className={getStatusColor(document.status)}>
                              {document.status.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(document.status)}
                        <Button variant="outline" size="sm" className="text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-3">
                      <div>
                        <span className="text-sireiq-light/60">Version:</span>
                        <p className="font-medium text-sireiq-cyan">{document.version}</p>
                      </div>
                      <div>
                        <span className="text-sireiq-light/60">Last Updated:</span>
                        <p className="font-medium">{document.lastUpdated}</p>
                      </div>
                      <div>
                        <span className="text-sireiq-light/60">Owner:</span>
                        <p className="font-medium">{document.owner}</p>
                      </div>
                    </div>
                    
                    {document.status === 'outdated' && (
                      <div className="mt-3 p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <p className="text-sm text-red-400">
                          <AlertTriangle className="w-4 h-4 inline mr-1" />
                          This document is outdated and needs review.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="training" className="space-y-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-sireiq-cyan" />
                  Security Awareness Training
                </div>
                <Button variant="outline" className="border-sireiq-accent/30">
                  View Training Analytics
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trainingModules.map((module) => (
                  <div key={module.id} className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-sireiq-light">{module.title}</h4>
                          {module.mandatory && (
                            <Badge variant="outline" className="text-xs border-red-500/50 text-red-400">
                              MANDATORY
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-sireiq-light/70">{module.description}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${getCompletionColor(module.completionRate)}`}>
                          {module.completionRate}%
                        </div>
                        <p className="text-xs text-sireiq-light/60">Completion Rate</p>
                      </div>
                    </div>
                    
                    <Progress value={module.completionRate} className="mb-3" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-sireiq-light/60">Duration:</span>
                        <p className="font-medium text-sireiq-cyan">{module.duration}</p>
                      </div>
                      <div>
                        <span className="text-sireiq-light/60">Last Updated:</span>
                        <p className="font-medium">{module.lastUpdated}</p>
                      </div>
                      <div>
                        <span className="text-sireiq-light/60">Type:</span>
                        <p className="font-medium">{module.mandatory ? 'Mandatory' : 'Optional'}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="text-xs">
                        <Play className="w-3 h-3 mr-1" />
                        Launch Training
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        View Progress
                      </Button>
                      {module.completionRate < 90 && (
                        <Button variant="outline" size="sm" className="text-xs border-yellow-500/50 text-yellow-400">
                          Send Reminders
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="incident-response" className="space-y-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-sireiq-cyan" />
                  AI Security Incident Response Plan
                </div>
                <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                  Test Response Plan
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {incidentResponsePlan.map((phase, index) => (
                  <div key={index} className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-sireiq-cyan/20 flex items-center justify-center">
                          <span className="text-sm font-bold text-sireiq-cyan">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sireiq-light">{phase.phase}</h4>
                          <p className="text-sm text-sireiq-light/70">{phase.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(phase.status)}
                        <Badge variant="outline" className={getStatusColor(phase.status)}>
                          {phase.status.replace('-', ' ').toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-3">
                      <div>
                        <span className="text-xs text-sireiq-light/60">Responsible:</span>
                        <p className="text-sm font-medium text-sireiq-cyan">{phase.responsible}</p>
                      </div>
                      <Button variant="outline" size="sm" className="text-xs">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                <h4 className="font-semibold text-sireiq-light mb-3">AI-Specific Security Incidents Covered</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Data Poisoning Attacks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Model Inversion Attacks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Adversarial Examples</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Model Extraction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Training Data Leaks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Model Backdoors</span>
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

export default DocumentationTraining;
