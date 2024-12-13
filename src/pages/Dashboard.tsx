import React from 'react';
import { BarChart3, Users, Target } from 'lucide-react';
import { StatCard } from '../components/dashboard/StatCard';
import { useAnalytics } from '../utils/hooks/useAnalytics';

export function Dashboard() {
  const { data, loading, error } = useAnalytics();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 p-4 bg-red-50 rounded-lg">
        Error loading dashboard data: {error.message}
      </div>
    );
  }

  const stats = [
    { icon: BarChart3, label: 'Analysis Completed', value: data.analysisCount },
    { icon: Users, label: 'Team Members', value: data.teamSize },
    { icon: Target, label: 'Goals Achieved', value: data.goalsAchieved },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
          />
        ))}
      </div>
    </div>
  );
}