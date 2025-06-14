import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Lock, Globe, Bot, AlertTriangle, Database, FileText, Settings, Users } from 'lucide-react';
import AuthenticationSecurity from './AuthenticationSecurity';
import URLStructureSecurity from './URLStructureSecurity';
import AISpecificSecurity from './AISpecificSecurity';
import ApplicationSecurity from './ApplicationSecurity';
import LoggingMonitoring from './LoggingMonitoring';
import InfrastructureSecurity from './InfrastructureSecurity';
import BackupRecovery from './BackupRecovery';
import AIPlatformConsiderations from './AIPlatformConsiderations';
import DocumentationTraining from './DocumentationTraining';
import { Modal } from '@/components/ui/modal';

interface SecurityMetrics {
  overallScore: number;
  categoriesCompleted: number;
  totalCategories: number;
  criticalIssues: number;
  lastAudit: string;
}

const SecurityFramework = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [securityMetrics, setSecurityMetrics] = useState<SecurityMetrics>({
    overallScore: 85,
    categoriesCompleted: 7,
    totalCategories: 9,
    criticalIssues: 2,
    lastAudit: new Date().toLocaleDateString()
  });

  // Add state for showing the generated code security modal
  const [showCodeSecModal, setShowCodeSecModal] = useState(false);

  // Dummy code security stats (replace with real data if integrated!)
  const codeSecurityStats = {
    issuesFound: 0,
    lastScan: null,
    autoFixes: 0,
    mostCommonIssue: null,
  };

  // Insert a security category for "Generated Code Security" at the top of the list for visibility in overview
  const categoriesWithCodeSec = [
    {
      id: 'code-security',
      title: 'Generated Code Security',
      icon: Shield,
      score: 100, // Placeholder, can be dynamic if needed
      status: 'monitoring',
      description: 'Tracks security issues found in generated code',
      special: true
    },
    {
      id: 'authentication',
      title: 'Authentication & Access Control',
      icon: Lock,
      score: 90,
      status: 'completed',
      description: 'MFA, RBAC, OAuth integration'
    },
    {
      id: 'url-structure',
      title: 'URL Structure & Access',
      icon: Globe,
      score: 95,
      status: 'completed',
      description: 'HTTPS, HSTS, IP whitelisting'
    },
    {
      id: 'ai-security',
      title: 'AI-Specific Security',
      icon: Bot,
      score: 80,
      status: 'in-progress',
      description: 'Model access controls, PII masking'
    },
    {
      id: 'application',
      title: 'Application Security',
      icon: Shield,
      score: 88,
      status: 'completed',
      description: 'CSRF, XSS, SQL injection protection'
    },
    {
      id: 'logging',
      title: 'Logging & Monitoring',
      icon: AlertTriangle,
      score: 92,
      status: 'completed',
      description: 'Audit logs, anomaly detection'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure Hardening',
      icon: Database,
      score: 85,
      status: 'completed',
      description: 'Container security, encryption'
    },
    {
      id: 'backup',
      title: 'Backup & Recovery',
      icon: FileText,
      score: 78,
      status: 'needs-attention',
      description: 'Encrypted backups, restore procedures'
    },
    {
      id: 'ai-platform',
      title: 'AI Platform Considerations',
      icon: Bot,
      score: 82,
      status: 'completed',
      description: 'Model explainability, privacy by design'
    },
    {
      id: 'documentation',
      title: 'Documentation & Training',
      icon: Users,
      score: 75,
      status: 'needs-attention',
      description: 'Procedures, incident response, training'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-yellow-400';
      case 'needs-attention': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-6">
      {/* Security Overview Header */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Shield className="w-6 h-6 mr-3 text-sireiq-cyan" />
            Enhanced Security Framework
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className={`text-2xl font-bold ${getScoreColor(securityMetrics.overallScore)}`}>
                {securityMetrics.overallScore}%
              </div>
              <div className="text-sm text-sireiq-light/70">Overall Security Score</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-sireiq-cyan">
                {securityMetrics.categoriesCompleted}/{securityMetrics.totalCategories}
              </div>
              <div className="text-sm text-sireiq-light/70">Categories Completed</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className={`text-2xl font-bold ${securityMetrics.criticalIssues > 0 ? 'text-red-400' : 'text-green-400'}`}>
                {securityMetrics.criticalIssues}
              </div>
              <div className="text-sm text-sireiq-light/70">Critical Issues</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-sireiq-light">
                {securityMetrics.lastAudit}
              </div>
              <div className="text-sm text-sireiq-light/70">Last Audit</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Categories Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-5 lg:grid-cols-10 w-full bg-sireiq-darker">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="authentication">Auth</TabsTrigger>
          <TabsTrigger value="url-structure">URL</TabsTrigger>
          <TabsTrigger value="ai-security">AI Sec</TabsTrigger>
          <TabsTrigger value="application">App Sec</TabsTrigger>
          <TabsTrigger value="logging">Logs</TabsTrigger>
          <TabsTrigger value="infrastructure">Infra</TabsTrigger>
          <TabsTrigger value="backup">Backup</TabsTrigger>
          <TabsTrigger value="ai-platform">AI Platform</TabsTrigger>
          <TabsTrigger value="documentation">Docs</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoriesWithCodeSec.map((category) => {
              const IconComponent = category.icon;
              if (category.special) {
                // Render the new Generated Code Security card with placeholder or real stats
                return (
                  <Card
                    key={category.id}
                    className="bg-sireiq-darker border-sireiq-accent/20 hover:border-sireiq-cyan/50 transition-colors cursor-pointer"
                    onClick={() => setShowCodeSecModal(true)}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center justify-between text-lg">
                        <div className="flex items-center">
                          <IconComponent className="w-5 h-5 mr-2 text-yellow-400" />
                          {category.title}
                        </div>
                        <div className={`text-sm font-bold text-blue-400`}>
                          {codeSecurityStats.issuesFound ?? 0} issues
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-sireiq-light/70 mb-2">
                        {category.description}
                      </p>
                      <div className="text-xs font-medium text-yellow-400">
                        {codeSecurityStats.lastScan
                          ? `Last Scan: ${codeSecurityStats.lastScan}`
                          : 'No code scans yet.'}
                      </div>
                    </CardContent>
                  </Card>
                );
              }
              // ... keep the old card logic for other items the same ...
              return (
                <Card 
                  key={category.id}
                  className="bg-sireiq-darker border-sireiq-accent/20 hover:border-sireiq-cyan/50 transition-colors cursor-pointer"
                  onClick={() => setActiveTab(category.id)}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center justify-between text-lg">
                      <div className="flex items-center">
                        <IconComponent className="w-5 h-5 mr-2 text-sireiq-cyan" />
                        {category.title}
                      </div>
                      <div className={`text-sm font-bold ${getScoreColor(category.score)}`}>
                        {category.score}%
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-sireiq-light/70 mb-2">{category.description}</p>
                    <div className={`text-xs font-medium ${getStatusColor(category.status)}`}>
                      {category.status.replace('-', ' ').toUpperCase()}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          {/* Modal or panel for Generated Code Security details */}
          {showCodeSecModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="bg-sireiq-dark border border-sireiq-accent/40 rounded-lg shadow-lg p-8 w-full max-w-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  Generated Code Security Overview
                </h3>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-sireiq-light/60">Total Issues:</span>
                    <span className="text-base font-bold text-yellow-400">{codeSecurityStats.issuesFound ?? 0}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-sireiq-light/60">Auto-Fixed:</span>
                    <span className="text-base font-bold text-sireiq-cyan">{codeSecurityStats.autoFixes ?? 0}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-sireiq-light/60">Most Common Issue:</span>
                    <span className="text-base font-bold text-gray-300">
                      {codeSecurityStats.mostCommonIssue ?? 'N/A'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-sireiq-light/60">Last Review:</span>
                    <span className="text-base font-bold text-gray-300">
                      {codeSecurityStats.lastScan ?? 'No review yet'}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-sireiq-light/70 mb-4">
                  <p>
                    This area will give an overview of all security issues found in user-generated code,
                    helping admins monitor trends, auto-fix rates, and ensure ongoing secure code generation.
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold">No data?</span> This panel will auto-populate as more code is generated and reviewed.
                  </p>
                </div>
                <button
                  className="mt-4 px-4 py-2 rounded bg-yellow-400 text-sireiq-dark font-semibold hover:bg-yellow-300"
                  onClick={() => setShowCodeSecModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="authentication">
          <AuthenticationSecurity />
        </TabsContent>

        <TabsContent value="url-structure">
          <URLStructureSecurity />
        </TabsContent>

        <TabsContent value="ai-security">
          <AISpecificSecurity />
        </TabsContent>

        <TabsContent value="application">
          <ApplicationSecurity />
        </TabsContent>

        <TabsContent value="logging">
          <LoggingMonitoring />
        </TabsContent>

        <TabsContent value="infrastructure">
          <InfrastructureSecurity />
        </TabsContent>

        <TabsContent value="backup">
          <BackupRecovery />
        </TabsContent>

        <TabsContent value="ai-platform">
          <AIPlatformConsiderations />
        </TabsContent>

        <TabsContent value="documentation">
          <DocumentationTraining />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SecurityFramework;
