
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Users, Settings, Shield, Zap, ArrowUp, ArrowDown } from 'lucide-react';

const DashboardOverview = () => {
  const stats = [
    { title: 'Total Users', value: '2,549', icon: Users, change: '+12%', isPositive: true },
    { title: 'Active Now', value: '128', icon: Zap, change: '+8%', isPositive: true },
    { title: 'System Health', value: '98%', icon: Settings, change: '+2%', isPositive: true },
    { title: 'Security Alerts', value: '3', icon: Shield, change: '-5', isPositive: true }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <Card key={i} className="bg-sireiq-darker border-sireiq-accent/20">
            <CardContent className="p-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-sireiq-light/70">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <div className={`flex items-center text-xs mt-2 ${
                    stat.isPositive ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.isPositive ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div className="bg-sireiq-accent/10 p-3 rounded-lg self-start">
                  <stat.icon className="h-5 w-5 text-sireiq-cyan" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Users Chart */}
        <Card className="bg-sireiq-darker border-sireiq-accent/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Active Users</CardTitle>
            <CardDescription>Active users over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex flex-col justify-center items-center">
              <BarChart3 className="h-12 w-12 text-sireiq-accent/40 mb-3" />
              <p className="text-sm text-sireiq-light/70">Interactive chart will appear here</p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="bg-sireiq-darker border-sireiq-accent/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Recent Activities</CardTitle>
            <CardDescription>Latest actions on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { user: 'John Doe', action: 'created a new project', time: '2 minutes ago' },
                { user: 'System', action: 'automatic backup completed', time: '1 hour ago' },
                { user: 'Jane Smith', action: 'modified user permissions', time: '3 hours ago' },
                { user: 'Robert Wilson', action: 'deployed a new version', time: '5 hours ago' },
                { user: 'Lisa Johnson', action: 'updated account settings', time: '1 day ago' }
              ].map((activity, i) => (
                <div key={i} className="flex items-center py-2 border-b border-sireiq-accent/10 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-sireiq-cyan mr-3"></div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                    <span className="text-xs text-sireiq-light/50">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
