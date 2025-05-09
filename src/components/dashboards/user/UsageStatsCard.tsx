
import React from 'react';
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Settings } from 'lucide-react';

interface UsageStats {
  tokensUsed: number;
  totalAllowance: number;
  percentUsed: number;
  activeSessions: number;
  savedChats: number;
  completedTasks: number;
}

interface UsageStatsCardProps {
  stats: UsageStats;
}

const UsageStatsCard = ({ stats }: UsageStatsCardProps) => {
  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Settings className="w-5 h-5 mr-2 text-sireiq-cyan" />
          Account Usage
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-sireiq-light/70">Token Usage</span>
            <span className="text-sm font-medium">{stats.percentUsed}%</span>
          </div>
          <Progress value={stats.percentUsed} className="h-2" />
          <p className="text-xs text-sireiq-light/70 mt-1">
            {stats.tokensUsed.toLocaleString()} / {stats.totalAllowance.toLocaleString()} tokens used this month
          </p>
        </div>
        
        <Separator className="bg-sireiq-accent/20" />
        
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-2xl font-semibold text-sireiq-cyan">{stats.activeSessions}</p>
            <p className="text-xs text-sireiq-light/70">Active Sessions</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-sireiq-cyan">{stats.savedChats}</p>
            <p className="text-xs text-sireiq-light/70">Saved Chats</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-sireiq-cyan">{stats.completedTasks}</p>
            <p className="text-xs text-sireiq-light/70">Tasks Done</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsageStatsCard;
