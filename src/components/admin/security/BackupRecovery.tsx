
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Database, Shield, Clock, Download, Upload, CheckCircle, AlertTriangle, Play } from 'lucide-react';

interface BackupStatus {
  id: string;
  type: 'data' | 'models' | 'configuration' | 'full-system';
  lastBackup: string;
  nextBackup: string;
  status: 'completed' | 'in-progress' | 'failed' | 'scheduled';
  size: string;
  encrypted: boolean;
  retention: string;
}

const BackupRecovery = () => {
  const [backupStatuses] = useState<BackupStatus[]>([
    {
      id: 'backup-001',
      type: 'data',
      lastBackup: '2024-01-10 03:00:00',
      nextBackup: '2024-01-11 03:00:00',
      status: 'completed',
      size: '2.4 GB',
      encrypted: true,
      retention: '90 days'
    },
    {
      id: 'backup-002',
      type: 'models',
      lastBackup: '2024-01-10 04:00:00',
      nextBackup: '2024-01-11 04:00:00',
      status: 'completed',
      size: '8.7 GB',
      encrypted: true,
      retention: '1 year'
    },
    {
      id: 'backup-003',
      type: 'configuration',
      lastBackup: '2024-01-10 02:30:00',
      nextBackup: '2024-01-11 02:30:00',
      status: 'completed',
      size: '45 MB',
      encrypted: true,
      retention: '2 years'
    },
    {
      id: 'backup-004',
      type: 'full-system',
      lastBackup: '2024-01-07 01:00:00',
      nextBackup: '2024-01-14 01:00:00',
      status: 'scheduled',
      size: '15.2 GB',
      encrypted: true,
      retention: '6 months'
    }
  ]);

  const [automatedSettings, setAutomatedSettings] = useState({
    dailyBackups: true,
    weeklyFullBackup: true,
    encryptionEnabled: true,
    offSiteReplication: true,
    integrityChecks: true,
    retentionPolicy: true
  });

  const [recoveryTests] = useState([
    { date: '2024-01-05', type: 'Data Recovery', result: 'Success', duration: '15 minutes' },
    { date: '2024-01-01', type: 'Model Recovery', result: 'Success', duration: '8 minutes' },
    { date: '2023-12-28', type: 'Full System', result: 'Success', duration: '45 minutes' },
    { date: '2023-12-25', type: 'Configuration', result: 'Success', duration: '3 minutes' }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-yellow-400';
      case 'failed': return 'text-red-400';
      case 'scheduled': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'in-progress': return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'failed': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      case 'scheduled': return <Clock className="w-4 h-4 text-blue-400" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'data': return <Database className="w-4 h-4 text-sireiq-cyan" />;
      case 'models': return <Upload className="w-4 h-4 text-sireiq-cyan" />;
      case 'configuration': return <Shield className="w-4 h-4 text-sireiq-cyan" />;
      case 'full-system': return <Download className="w-4 h-4 text-sireiq-cyan" />;
      default: return <Database className="w-4 h-4 text-sireiq-cyan" />;
    }
  };

  const formatBackupType = (type: string) => {
    return type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const toggleSetting = (key: keyof typeof automatedSettings) => {
    setAutomatedSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completedBackups = backupStatuses.filter(b => b.status === 'completed').length;
  const backupReliability = Math.round((completedBackups / backupStatuses.length) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Database className="w-6 h-6 mr-3 text-sireiq-cyan" />
              Backup & Recovery Management
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-green-400 border-green-500/50">
                {backupReliability}% Reliability
              </Badge>
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                <Play className="w-4 h-4 mr-2" />
                Run Backup Now
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-green-400">{completedBackups}</div>
              <div className="text-sm text-sireiq-light/70">Successful Backups</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-sireiq-cyan">26.3 GB</div>
              <div className="text-sm text-sireiq-light/70">Total Backup Size</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-green-400">100%</div>
              <div className="text-sm text-sireiq-light/70">Encryption Rate</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-sireiq-cyan">15 min</div>
              <div className="text-sm text-sireiq-light/70">Avg Recovery Time</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Backup Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {backupStatuses.map((backup) => (
          <Card key={backup.id} className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between text-lg">
                <div className="flex items-center">
                  {getTypeIcon(backup.type)}
                  <span className="ml-2">{formatBackupType(backup.type)}</span>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(backup.status)}
                  {backup.encrypted && <Shield className="w-4 h-4 text-green-400" />}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-sireiq-light/60">Last Backup:</span>
                    <p className="font-medium">{backup.lastBackup}</p>
                  </div>
                  <div>
                    <span className="text-sireiq-light/60">Next Backup:</span>
                    <p className="font-medium text-sireiq-cyan">{backup.nextBackup}</p>
                  </div>
                  <div>
                    <span className="text-sireiq-light/60">Size:</span>
                    <p className="font-medium">{backup.size}</p>
                  </div>
                  <div>
                    <span className="text-sireiq-light/60">Retention:</span>
                    <p className="font-medium">{backup.retention}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={getStatusColor(backup.status)}>
                    {backup.status.toUpperCase()}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      Restore
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Automated Backup Settings */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Automated Backup Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(automatedSettings).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                <div>
                  <h4 className="font-semibold text-sireiq-light">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </h4>
                  <p className="text-sm text-sireiq-light/70">
                    {key === 'dailyBackups' && 'Automatic daily incremental backups'}
                    {key === 'weeklyFullBackup' && 'Complete system backup every week'}
                    {key === 'encryptionEnabled' && 'AES-256 encryption for all backups'}
                    {key === 'offSiteReplication' && 'Replicate backups to secondary location'}
                    {key === 'integrityChecks' && 'Verify backup integrity automatically'}
                    {key === 'retentionPolicy' && 'Automatic cleanup based on retention rules'}
                  </p>
                </div>
                <Switch 
                  checked={value}
                  onCheckedChange={() => toggleSetting(key as keyof typeof automatedSettings)}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recovery Testing */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Play className="w-5 h-5 mr-2 text-sireiq-cyan" />
              Recovery Testing & Validation
            </div>
            <Button variant="outline" className="border-sireiq-accent/30">
              Schedule Test
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sireiq-light/70 mb-4">
              Regular recovery testing ensures backup integrity and validates restoration procedures.
            </p>
            
            <div className="space-y-3">
              {recoveryTests.map((test, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <div>
                      <h4 className="font-semibold text-sireiq-light">{test.type}</h4>
                      <p className="text-sm text-sireiq-light/70">Tested on {test.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-green-400 border-green-500/50 mb-1">
                      {test.result.toUpperCase()}
                    </Badge>
                    <p className="text-xs text-sireiq-light/60">{test.duration}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
              <h4 className="font-semibold text-sireiq-light mb-3">Recovery Metrics</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-sireiq-light/60">Recovery Success Rate:</span>
                  <p className="font-medium text-green-400">100%</p>
                </div>
                <div>
                  <span className="text-sireiq-light/60">Average RTO (Recovery Time):</span>
                  <p className="font-medium text-sireiq-cyan">15 minutes</p>
                </div>
                <div>
                  <span className="text-sireiq-light/60">RPO (Recovery Point):</span>
                  <p className="font-medium text-sireiq-cyan">< 1 hour</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BackupRecovery;
