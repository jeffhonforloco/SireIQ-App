
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OverviewTab from './OverviewTab';
import ModelsTab from './ModelsTab';
import LogsTab from './LogsTab';
import SettingsTab from './SettingsTab';

type ProjectTabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const ProjectTabs = ({ activeTab, setActiveTab }: ProjectTabsProps) => {
  return (
    <Tabs defaultValue="overview" className="w-full" onValueChange={(value) => setActiveTab(value)}>
      <TabsList className="grid grid-cols-4 mb-6 bg-sireiq-accent/10">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="models">Models</TabsTrigger>
        <TabsTrigger value="logs">Logs</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="space-y-6">
        <OverviewTab />
      </TabsContent>
      
      <TabsContent value="models" className="space-y-6">
        <ModelsTab />
      </TabsContent>
      
      <TabsContent value="logs" className="space-y-6">
        <LogsTab />
      </TabsContent>
      
      <TabsContent value="settings" className="space-y-6">
        <SettingsTab />
      </TabsContent>
    </Tabs>
  );
};

export default ProjectTabs;
