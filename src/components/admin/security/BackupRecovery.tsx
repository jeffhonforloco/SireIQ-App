
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Database, HardDrive, Cloud, RefreshCw, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

const BackupRecovery = () => {
  const [backupStatus, setBackupStatus] = useState({
    lastBackup: "2024-06-11 02:00:00",
    nextBackup: "2024-06-12 02:00:00",
    totalBackups: 30,
    storageUsed: 85
  });

  const backupSources = [
    { name: "User Database", lastBackup: "2 hours ago", size: "2.4 GB", status: "completed", encryption: true },
    { name: "Application Data", lastBackup: "2 hours ago", size: "856 MB", status: "completed", encryption: true },
    { name: "Configuration Files", lastBackup: "2 hours ago", size: "125 MB", status: "completed", encryption: true },
    { name: "Security Logs", lastBackup: "1 hour ago", size: "1.2 GB", status: "in-progress", encryption: true },
    { name: "Media Assets", lastBackup: "4 hours ago", size: "15.7 GB", status: "failed", encryption: false }
  ];

  const recoveryTests = [
    { name: "Database Recovery Test", lastTest: "2024-06-08", result: "passed", duration: "12 min" },
    { name: "Application Recovery Test", lastTest: "2024-06-05", result: "passed", duration: "8 min" },
    { name: "Full System Recovery Test", lastTest: "2024-06-01", result: "warning", duration: "45 min" },
    { name: "Configuration Recovery Test", lastTest: "2024-05-28", result: "failed", duration: "N/A" }
  ];

  const initiateBackup = () => {
    toast.loading("Starting manual backup...", { duration: 3000 });
    setTimeout(() => {
      setBackupStatus({
        ...backupStatus,
        lastBackup: new Date().toISOString().slice(0, 19).replace('T', ' ')
      });
      toast.success("Manual backup completed successfully");
    }, 3000);
  };

  const testRecovery = (testName: string) => {
    toast.loading(`Running ${testName}...`, { duration: 2000 });
    setTimeout(() => {
      toast.success(`${testName} completed successfully`);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': case 'passed': return 'bg-green-500/20 text-green-300';
      case 'in-progress': return 'bg-blue-500/20 text-blue-300';
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
              <Database className="w-5 h-5 mr-2 text-sireiq-cyan" />
              Backup & Recovery Management
            </div>
            <Button onClick={initiateBackup} className="bg-sireiq-cyan text-sireiq-darker">
              <RefreshCw className="w-4 h-4 mr-2" />
              Manual Backup
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-lg font-bold text-sireiq-cyan">{backupStatus.totalBackups}</div>
              <div className="text-sm text-sireiq-light/70">Total Backups</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-lg font-bold text-green-400">{backupStatus.storageUsed}%</div>
              <div className="text-sm text-sireiq-light/70">Storage Used</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-lg font-bold text-sireiq-light">2 hours</div>
              <div className="text-sm text-sireiq-light/70">Last Backup</div>
            </div>
            <div className="text-center p-4 bg-sireiq-accent/5 rounded-lg">
              <div className="text-lg font-bold text-sireiq-light">22 hours</div>
              <div className="text-sm text-sireiq-light/70">Next Backup</div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-medium mb-2">Storage Usage</h4>
            <Progress value={backupStatus.storageUsed} className="h-3" />
            <div className="flex justify-between text-sm text-sireiq-light/70 mt-1">
              <span>Used: {backupStatus.storageUsed}%</span>
              <span>Available: {100 - backupStatus.storageUsed}%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>Backup Sources Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {backupSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <HardDrive className="w-4 h-4 text-sireiq-cyan" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{source.name}</h4>
                      {source.encryption && (
                        <Badge className="bg-green-500/20 text-green-300 text-xs">Encrypted</Badge>
                      )}
                      {!source.encryption && (
                        <Badge className="bg-red-500/20 text-red-300 text-xs">Unencrypted</Badge>
                      )}
                    </div>
                    <p className="text-sm text-sireiq-light/70">
                      {source.size} • Last backup: {source.lastBackup}
                    </p>
                  </div>
                </div>
                <Badge className={getStatusColor(source.status)}>
                  {source.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>Recovery Testing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recoveryTests.map((test, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Cloud className="w-4 h-4 text-sireiq-cyan" />
                  <div>
                    <h4 className="font-medium">{test.name}</h4>
                    <p className="text-sm text-sireiq-light/70">
                      Last test: {test.lastTest} • Duration: {test.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(test.result)}>
                    {test.result}
                  </Badge>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => testRecovery(test.name)}
                    className="border-sireiq-accent/30"
                  >
                    Test Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>Backup Policies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Retention Policy", value: "30 days", description: "Daily backups kept for 30 days" },
              { title: "Encryption Standard", value: "AES-256", description: "Military-grade encryption" },
              { title: "Backup Frequency", value: "Daily", description: "Automated daily backups at 2 AM" },
              { title: "Geographic Redundancy", value: "3 Regions", description: "Backups stored in multiple regions" }
            ].map((policy, index) => (
              <div key={index} className="p-4 border border-sireiq-accent/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{policy.title}</h4>
                  <span className="font-bold text-sireiq-cyan">{policy.value}</span>
                </div>
                <p className="text-sm text-sireiq-light/70">{policy.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BackupRecovery;
