
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Clock, MessageSquare, FileText, Zap } from 'lucide-react';

const QuickStatsCard = () => {
  const stats = [
    {
      label: "Today's Sessions",
      value: "4",
      max: "8",
      progress: 50,
      icon: Clock,
      color: "text-blue-400"
    },
    {
      label: "Messages Sent",
      value: "23",
      max: "100",
      progress: 23,
      icon: MessageSquare,
      color: "text-green-400"
    },
    {
      label: "Documents Created",
      value: "7",
      max: "20",
      progress: 35,
      icon: FileText,
      color: "text-purple-400"
    },
    {
      label: "AI Responses",
      value: "31",
      max: "150",
      progress: 21,
      icon: Zap,
      color: "text-yellow-400"
    }
  ];

  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader>
        <CardTitle className="text-lg">Today's Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <IconComponent className={`h-4 w-4 ${stat.color}`} />
                  <span className="text-sm text-sireiq-light/70">{stat.label}</span>
                </div>
                <span className="text-sm font-medium">
                  {stat.value}/{stat.max}
                </span>
              </div>
              <Progress value={stat.progress} className="h-2" />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default QuickStatsCard;
