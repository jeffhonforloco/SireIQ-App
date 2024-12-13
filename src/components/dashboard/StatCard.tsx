import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: number | string;
}

export function StatCard({ icon: Icon, label, value }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center space-x-3">
        <Icon className="w-8 h-8 text-indigo-600" />
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}