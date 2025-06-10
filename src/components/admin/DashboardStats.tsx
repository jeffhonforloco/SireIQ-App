
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Activity, Shield, Zap, TrendingUp, TrendingDown } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '12,847',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'from-[#00D4FF] to-[#0099CC]'
    },
    {
      title: 'Active Sessions',
      value: '3,264',
      change: '+8.2%',
      trend: 'up',
      icon: Activity,
      color: 'from-[#6366F1] to-[#8B5CF6]'
    },
    {
      title: 'Security Alerts',
      value: '23',
      change: '-15.3%',
      trend: 'down',
      icon: Shield,
      color: 'from-[#EF4444] to-[#DC2626]'
    },
    {
      title: 'API Requests',
      value: '1.2M',
      change: '+24.1%',
      trend: 'up',
      icon: Zap,
      color: 'from-[#F59E0B] to-[#D97706]'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
        
        return (
          <Card key={stat.title} className="bg-[#111111] border border-[#00D4FF]/20 hover:border-[#00D4FF]/40 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#B4B4B4]">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20`}>
                <Icon className="h-4 w-4 text-[#FFFFFF]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#FFFFFF] mb-1">
                {stat.value}
              </div>
              <div className="flex items-center gap-1">
                <TrendIcon className={`h-3 w-3 ${stat.trend === 'up' ? 'text-[#10B981]' : 'text-[#EF4444]'}`} />
                <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                  {stat.change}
                </span>
                <span className="text-xs text-[#737373]">from last month</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardStats;
