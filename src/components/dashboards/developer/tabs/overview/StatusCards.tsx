
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StatusCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">API Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24,582</div>
          <p className="text-xs text-green-500">+12% from last week</p>
        </CardContent>
      </Card>
      
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">156ms</div>
          <p className="text-xs text-green-500">-24ms from last week</p>
        </CardContent>
      </Card>
      
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">0.08%</div>
          <p className="text-xs text-red-500">+0.01% from last week</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatusCards;
