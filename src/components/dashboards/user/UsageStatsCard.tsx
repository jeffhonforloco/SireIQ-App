
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Settings, TrendingUp, AlertTriangle, Crown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
  onUpgrade?: () => void;
  onViewDetails?: () => void;
}

const UsageStatsCard = ({ stats, onUpgrade, onViewDetails }: UsageStatsCardProps) => {
  const [animatedStats, setAnimatedStats] = useState(stats);
  const [isUpdating, setIsUpdating] = useState(false);

  // Animate progress bars on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats(stats);
    }, 300);
    return () => clearTimeout(timer);
  }, [stats]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      
      // Simulate minor changes in usage
      setAnimatedStats(prev => ({
        ...prev,
        tokensUsed: Math.min(prev.totalAllowance, prev.tokensUsed + Math.floor(Math.random() * 100)),
        activeSessions: Math.max(1, prev.activeSessions + (Math.random() > 0.5 ? 1 : -1)),
        completedTasks: prev.completedTasks + (Math.random() > 0.7 ? 1 : 0)
      }));
      
      setTimeout(() => setIsUpdating(false), 1000);
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getUsageColor = (percent: number) => {
    if (percent >= 90) return 'text-red-400';
    if (percent >= 75) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getUsageBarColor = (percent: number) => {
    if (percent >= 90) return 'bg-red-500';
    if (percent >= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const isNearLimit = animatedStats.percentUsed >= 80;
  const isAtLimit = animatedStats.percentUsed >= 95;

  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Settings className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Account Usage
            {isUpdating && (
              <div className="ml-2 w-2 h-2 bg-sireiq-cyan rounded-full animate-pulse" />
            )}
          </CardTitle>
          {isNearLimit && (
            <Badge variant="outline" className="border-yellow-500/50 text-yellow-400">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Near Limit
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-sireiq-light/70">Token Usage</span>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${getUsageColor(animatedStats.percentUsed)}`}>
                {animatedStats.percentUsed.toFixed(1)}%
              </span>
              {isAtLimit && (
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={onUpgrade}
                  className="h-6 px-2 text-xs border-sireiq-cyan/50 hover:bg-sireiq-cyan/10"
                >
                  <Crown className="w-3 h-3 mr-1" />
                  Upgrade
                </Button>
              )}
            </div>
          </div>
          <Progress 
            value={animatedStats.percentUsed} 
            className="h-3"
          />
          <div className="flex justify-between mt-2">
            <p className="text-xs text-sireiq-light/70">
              {animatedStats.tokensUsed.toLocaleString()} used
            </p>
            <p className="text-xs text-sireiq-light/70">
              {animatedStats.totalAllowance.toLocaleString()} total
            </p>
          </div>
        </div>
        
        <Separator className="bg-sireiq-accent/20" />
        
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3 bg-sireiq-accent/5 rounded-lg">
            <div className="flex items-center justify-center mb-1">
              <p className="text-xl font-semibold text-sireiq-cyan">{animatedStats.activeSessions}</p>
              <TrendingUp className="w-3 h-3 ml-1 text-green-400" />
            </div>
            <p className="text-xs text-sireiq-light/70">Active Sessions</p>
          </div>
          <div className="p-3 bg-sireiq-accent/5 rounded-lg">
            <p className="text-xl font-semibold text-sireiq-cyan mb-1">{animatedStats.savedChats}</p>
            <p className="text-xs text-sireiq-light/70">Saved Chats</p>
          </div>
          <div className="p-3 bg-sireiq-accent/5 rounded-lg">
            <p className="text-xl font-semibold text-sireiq-cyan mb-1">{animatedStats.completedTasks}</p>
            <p className="text-xs text-sireiq-light/70">Tasks Done</p>
          </div>
        </div>

        {onViewDetails && (
          <Button 
            variant="outline" 
            size="sm"
            className="w-full mt-4 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan"
            onClick={onViewDetails}
          >
            View Detailed Analytics
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default UsageStatsCard;
