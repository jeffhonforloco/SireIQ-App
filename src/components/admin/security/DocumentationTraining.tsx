
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { FileText, Users, BookOpen, AlertTriangle, Download, Play } from 'lucide-react';
import { toast } from 'sonner';

const DocumentationTraining = () => {
  const [trainingProgress, setTrainingProgress] = useState({
    totalEmployees: 45,
    completedTraining: 38,
    pendingTraining: 7,
    certificationRate: 84
  });

  const documentationItems = [
    { title: "Security Policies Manual", version: "v2.1", lastUpdated: "2024-06-01", status: "current" },
    { title: "Incident Response Procedures", version: "v1.5", lastUpdated: "2024-05-15", status: "current" },
    { title: "Data Governance Framework", version: "v3.0", lastUpdated: "2024-04-20", status: "current" },
    { title: "AI Ethics Guidelines", version: "v1.2", lastUpdated: "2024-03-10", status: "outdated" },
    { title: "Business Continuity Plan", version: "v2.0", lastUpdated: "2024-02-28", status: "current" },
    { title: "Risk Assessment Matrix", version: "v1.8", lastUpdated: "2024-01-15", status: "outdated" }
  ];

  const trainingModules = [
    { title: "Security Awareness Basics", duration: "45 min", completion: 95, type: "mandatory" },
    { title: "Phishing Prevention", duration: "30 min", completion: 88, type: "mandatory" },
    { title: "Data Protection & Privacy", duration: "60 min", completion: 91, type: "mandatory" },
    { title: "Incident Response Training", duration: "90 min", completion: 76, type: "role-specific" },
    { title: "AI Security & Ethics", duration: "75 min", completion: 82, type: "recommended" },
    { title: "Advanced Threat Detection", duration: "120 min", completion: 65, type: "specialized" }
  ];

  const incidentResponseTeam = [
    { role: "Security Lead", name: "Alex Johnson", trained: true, lastTraining: "2024-05-01" },
    { role: "IT Manager", name: "Sarah Chen", trained: true, lastTraining: "2024-04-15" },
    { role: "Legal Counsel", name: "Michael Brown", trained: false, lastTraining: "2023-12-10" },
    { role: "Communications Lead", name: "Emily Davis", trained: true, lastTraining: "2024-03-20" },
    { role: "HR Director", name: "David Wilson", trained: false, lastTraining: "2023-11-05" }
  ];

  const downloadDocument = (title: string) => {
    toast.success(`Downloading ${title}...`);
  };

  const startTraining = (module: string) => {
    toast.loading(`Starting ${module} training...`, { duration: 2000 });
    setTimeout(() => {
      toast.success(`${module} training session started`);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'bg-green-500/20 text-green-300';
      case 'outdated': return 'bg-red-500/20 text-red-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'mandatory': return 'bg-red-500/20 text-red-300';
      case 'role-specific': return 'bg-yellow-500/20 text-yellow-300';
      case 'recommended': return 'bg-blue-500/20 text-blue-300';
      case 'specialized': return 'bg-purple-500/20 text-purple-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Security Documentation & Training
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-sireiq-cyan">{trainingProgress.totalEmployees}</div>
              <div className="text-sm text-sireiq-light/70">Total Employees</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-green-400">{trainingProgress.completedTraining}</div>
              <div className="text-sm text-sireiq-light/70">Trained</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-red-400">{trainingProgress.pendingTraining}</div>
              <div className="text-sm text-sireiq-light/70">Pending</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-sireiq-light">{trainingProgress.certificationRate}%</div>
              <div className="text-sm text-sireiq-light/70">Certification Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>Security Documentation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {documentationItems.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-sireiq-cyan" />
                  <div>
                    <h4 className="font-medium">{doc.title}</h4>
                    <p className="text-sm text-sireiq-light/70">
                      {doc.version} • Updated: {doc.lastUpdated}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(doc.status)}>
                    {doc.status}
                  </Badge>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => downloadDocument(doc.title)}
                    className="border-sireiq-accent/30"
                  >
                    <Download className="w-3 h-3 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>Training Modules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trainingModules.map((module, index) => (
              <div key={index} className="p-4 border border-sireiq-accent/20 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-sireiq-cyan" />
                    <div>
                      <h4 className="font-medium">{module.title}</h4>
                      <p className="text-sm text-sireiq-light/70">Duration: {module.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getTypeColor(module.type)}>
                      {module.type}
                    </Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => startTraining(module.title)}
                      className="border-sireiq-accent/30"
                    >
                      <Play className="w-3 h-3 mr-1" />
                      Start
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Completion Rate</span>
                    <span className="font-bold">{module.completion}%</span>
                  </div>
                  <Progress value={module.completion} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>Incident Response Team</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {incidentResponseTeam.map((member, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-sireiq-cyan" />
                  <div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-sireiq-light/70">
                      {member.role} • Last training: {member.lastTraining}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={member.trained ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}>
                    {member.trained ? 'Trained' : 'Needs Training'}
                  </Badge>
                  {!member.trained && (
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentationTraining;
