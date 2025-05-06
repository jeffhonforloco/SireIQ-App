
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle,
  Users,
  Shield,
  Database,
  Clock
} from 'lucide-react';

const OverviewTab = () => {
  return (
    <>
      {/* Recent Activity */}
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="text-base font-medium">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { 
                icon: CheckCircle,
                iconColor: 'text-green-500',
                title: 'New knowledge base connected',
                description: 'Legal documentation was successfully indexed',
                time: '10 minutes ago'
              },
              { 
                icon: Users,
                iconColor: 'text-blue-500',
                title: 'New team member added',
                description: 'Sarah Wilson joined as Editor',
                time: '2 hours ago'
              },
              { 
                icon: Shield,
                iconColor: 'text-yellow-500',
                title: 'Security audit completed',
                description: 'All systems passed security verification',
                time: '1 day ago'
              },
              { 
                icon: Database,
                iconColor: 'text-purple-500',
                title: 'Data processing complete',
                description: 'Monthly analytics report generated',
                time: '2 days ago'
              },
            ].map((activity, i) => (
              <div key={i} className="flex">
                <div className={`flex-shrink-0 ${activity.iconColor}`}>
                  <activity.icon className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-sm text-sireiq-light/70">{activity.description}</p>
                  <p className="text-xs text-sireiq-light/50 mt-1 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Resource Usage */}
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="text-base font-medium">Resource Usage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">AI Credit Usage</span>
              <span className="text-sm">68% of monthly allocation</span>
            </div>
            <Progress value={68} className="h-2" />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">Storage</span>
              <span className="text-sm">42% of 500GB</span>
            </div>
            <Progress value={42} className="h-2" />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">API Rate Limit</span>
              <span className="text-sm">23% of maximum</span>
            </div>
            <Progress value={23} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default OverviewTab;
