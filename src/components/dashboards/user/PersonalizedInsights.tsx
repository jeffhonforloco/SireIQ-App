
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, Zap, Brain } from 'lucide-react';

const PersonalizedInsights = () => {
  const insights = [
    {
      title: "Productivity Peak",
      description: "You're most productive between 10 AM - 12 PM",
      icon: TrendingUp,
      value: "85%",
      trend: "+12%",
      color: "text-green-400"
    },
    {
      title: "Weekly Goal Progress",
      description: "Content creation tasks completion",
      icon: Target,
      value: "7 of 10",
      trend: "70%",
      color: "text-blue-400"
    },
    {
      title: "AI Efficiency",
      description: "Time saved using AI assistance",
      icon: Zap,
      value: "4.2 hours",
      trend: "+18%",
      color: "text-yellow-400"
    },
    {
      title: "Learning Progress",
      description: "New skills acquired this month",
      icon: Brain,
      value: "3 skills",
      trend: "On track",
      color: "text-purple-400"
    }
  ];

  return (
    <Card className="bg-gradient-to-r from-sireiq-cyan/5 to-sireiq-cyan2/5 border border-sireiq-cyan/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-sireiq-cyan" />
          Personalized Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <div key={index} className="bg-sireiq-darker/50 p-4 rounded-lg border border-sireiq-accent/20">
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className={`h-5 w-5 ${insight.color}`} />
                  <Badge variant="outline" className="text-xs">
                    {insight.trend}
                  </Badge>
                </div>
                <h4 className="font-semibold text-sm mb-1">{insight.title}</h4>
                <p className="text-xs text-sireiq-light/70 mb-2">{insight.description}</p>
                <div className="text-lg font-bold text-sireiq-cyan">{insight.value}</div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalizedInsights;
