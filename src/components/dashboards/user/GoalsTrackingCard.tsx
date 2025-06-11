
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Target, Plus, CheckCircle, Clock } from 'lucide-react';
import { toast } from 'sonner';

const GoalsTrackingCard = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Complete AI Course",
      description: "Finish advanced AI techniques course",
      progress: 75,
      deadline: "Dec 15, 2025",
      priority: "high",
      category: "Learning"
    },
    {
      id: 2,
      title: "Write 10 Blog Posts",
      description: "Create content for company blog",
      progress: 60,
      deadline: "Dec 30, 2025",
      priority: "medium",
      category: "Content"
    },
    {
      id: 3,
      title: "Automate Reports",
      description: "Set up automated weekly reports",
      progress: 90,
      deadline: "Dec 10, 2025",
      priority: "high",
      category: "Productivity"
    }
  ]);

  const updateGoalProgress = (id: number, increment: number) => {
    setGoals(prev => prev.map(goal => 
      goal.id === id 
        ? { ...goal, progress: Math.min(100, Math.max(0, goal.progress + increment)) }
        : goal
    ));
    toast.success("Goal progress updated!");
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-sireiq-cyan" />
            Goals & Milestones
          </CardTitle>
          <Button size="sm" variant="outline" className="border-sireiq-accent/30">
            <Plus className="h-4 w-4 mr-1" />
            Add Goal
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-sireiq-accent/5 p-4 rounded-lg border border-sireiq-accent/20">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">{goal.title}</h4>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getPriorityColor(goal.priority)}>
                  {goal.priority}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {goal.category}
                </Badge>
              </div>
            </div>
            <p className="text-sm text-sireiq-light/70 mb-3">{goal.description}</p>
            
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between text-sm">
                <span>Progress</span>
                <span className="font-medium">{goal.progress}%</span>
              </div>
              <Progress value={goal.progress} className="h-2" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-sireiq-light/50">
                <Clock className="h-3 w-3" />
                <span>Due: {goal.deadline}</span>
              </div>
              <div className="flex items-center gap-1">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="text-xs border-sireiq-accent/30 h-6 px-2"
                  onClick={() => updateGoalProgress(goal.id, -10)}
                  disabled={goal.progress <= 0}
                >
                  -10%
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="text-xs border-sireiq-accent/30 h-6 px-2"
                  onClick={() => updateGoalProgress(goal.id, 10)}
                  disabled={goal.progress >= 100}
                >
                  +10%
                </Button>
                {goal.progress === 100 && (
                  <CheckCircle className="h-4 w-4 text-green-400 ml-1" />
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default GoalsTrackingCard;
