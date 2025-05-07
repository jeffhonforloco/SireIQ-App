
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

import DashboardHeader from '@/components/dashboards/enterprise/DashboardHeader';
import StatsCards from '@/components/dashboards/enterprise/StatsCards';
import OverviewTab from '@/components/dashboards/enterprise/tabs/OverviewTab';
import TeamTab from '@/components/dashboards/enterprise/tabs/TeamTab';
import AnalyticsTab from '@/components/dashboards/enterprise/tabs/AnalyticsTab';
import SecurityTab from '@/components/dashboards/enterprise/tabs/SecurityTab';
import ResourcesTab from '@/components/dashboards/enterprise/tabs/ResourcesTab';

const EnterpriseDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <DashboardHeader />
      
      {/* Main tabs */}
      <Tabs defaultValue="overview" className="w-full" onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="grid grid-cols-5 mb-6 bg-sireiq-accent/10">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <StatsCards />
          <OverviewTab />
        </TabsContent>
        
        {/* Team Tab */}
        <TabsContent value="team" className="space-y-6">
          <TeamTab />
        </TabsContent>
        
        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <AnalyticsTab />
        </TabsContent>
        
        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <SecurityTab />
        </TabsContent>
        
        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-6">
          <ResourcesTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EnterpriseDashboard;
