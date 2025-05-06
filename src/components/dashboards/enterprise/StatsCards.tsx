
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">248</div>
          <p className="text-xs text-green-500">+12% from last month</p>
        </CardContent>
      </Card>
      
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">AI Agents Active</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">18</div>
          <p className="text-xs text-green-500">+3 from last month</p>
        </CardContent>
      </Card>
      
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Monthly Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">982K</div>
          <p className="text-xs text-green-500">+18% from last month</p>
        </CardContent>
      </Card>
      
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Knowledge Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <p className="text-xs text-green-500">+5 from last month</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
