
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Server, Database, Globe, Cpu, HardDrive, Wifi } from 'lucide-react';

const SystemHealth = () => {
  const healthMetrics = [
    {
      name: 'API Server',
      status: 'operational',
      uptime: '99.9%',
      response: '45ms',
      icon: Server,
      progress: 99
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.8%',
      response: '12ms',
      icon: Database,
      progress: 98
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '100%',
      response: '23ms',
      icon: Globe,
      progress: 100
    },
    {
      name: 'CPU Usage',
      status: 'warning',
      uptime: '85%',
      response: 'N/A',
      icon: Cpu,
      progress: 85
    },
    {
      name: 'Storage',
      status: 'operational',
      uptime: '78%',
      response: 'N/A',
      icon: HardDrive,
      progress: 78
    },
    {
      name: 'Network',
      status: 'operational',
      uptime: '99.9%',
      response: '8ms',
      icon: Wifi,
      progress: 99
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-[#10B981] text-white';
      case 'warning':
        return 'bg-[#F59E0B] text-white';
      case 'error':
        return 'bg-[#EF4444] text-white';
      default:
        return 'bg-[#737373] text-white';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 95) return 'bg-[#10B981]';
    if (progress >= 80) return 'bg-[#F59E0B]';
    return 'bg-[#EF4444]';
  };

  return (
    <Card className="bg-[#111111] border border-[#00D4FF]/20">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-[#FFFFFF] flex items-center gap-2">
          <Server className="h-5 w-5 text-[#00D4FF]" />
          System Health
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {healthMetrics.map((metric) => {
            const Icon = metric.icon;
            
            return (
              <div key={metric.name} className="p-4 bg-[#1A1A1A] rounded-lg border border-[#00D4FF]/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[#00D4FF]" />
                    <span className="font-medium text-[#FFFFFF]">{metric.name}</span>
                  </div>
                  <Badge className={getStatusColor(metric.status)}>
                    {metric.status}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#B4B4B4]">Uptime</span>
                    <span className="text-[#FFFFFF]">{metric.uptime}</span>
                  </div>
                  
                  {metric.response !== 'N/A' && (
                    <div className="flex justify-between text-sm">
                      <span className="text-[#B4B4B4]">Response</span>
                      <span className="text-[#FFFFFF]">{metric.response}</span>
                    </div>
                  )}
                  
                  <div className="pt-2">
                    <Progress 
                      value={metric.progress} 
                      className="h-2"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemHealth;
