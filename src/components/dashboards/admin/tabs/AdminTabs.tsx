
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UserManagementTab from './UserManagementTab';
import AnalyticsTab from './AnalyticsTab';
import SystemSettingsTab from './SystemSettingsTab';
import SecurityTab from './SecurityTab';
import DatabaseTab from './DatabaseTab';

type AdminTabsProps = {
  activeSection: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const AdminTabs = ({ activeSection, activeTab, setActiveTab }: AdminTabsProps) => {
  // Different tabs for different sections
  const renderTabs = () => {
    switch (activeSection) {
      case 'users':
        return (
          <Tabs defaultValue="overview" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid grid-cols-4 mb-6 bg-sireiq-accent/10">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="roles">Roles</TabsTrigger>
              <TabsTrigger value="permissions">Permissions</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <UserManagementTab subTab="overview" />
            </TabsContent>
            
            <TabsContent value="roles" className="space-y-6">
              <UserManagementTab subTab="roles" />
            </TabsContent>
            
            <TabsContent value="permissions" className="space-y-6">
              <UserManagementTab subTab="permissions" />
            </TabsContent>
            
            <TabsContent value="activity" className="space-y-6">
              <UserManagementTab subTab="activity" />
            </TabsContent>
          </Tabs>
        );
        
      case 'analytics':
        return (
          <Tabs defaultValue="overview" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid grid-cols-4 mb-6 bg-sireiq-accent/10">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <AnalyticsTab subTab="overview" />
            </TabsContent>
            
            <TabsContent value="usage" className="space-y-6">
              <AnalyticsTab subTab="usage" />
            </TabsContent>
            
            <TabsContent value="performance" className="space-y-6">
              <AnalyticsTab subTab="performance" />
            </TabsContent>
            
            <TabsContent value="reports" className="space-y-6">
              <AnalyticsTab subTab="reports" />
            </TabsContent>
          </Tabs>
        );
        
      case 'system':
        return (
          <Tabs defaultValue="overview" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid grid-cols-4 mb-6 bg-sireiq-accent/10">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="configurations">Configurations</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <SystemSettingsTab subTab="overview" />
            </TabsContent>
            
            <TabsContent value="configurations" className="space-y-6">
              <SystemSettingsTab subTab="configurations" />
            </TabsContent>
            
            <TabsContent value="integrations" className="space-y-6">
              <SystemSettingsTab subTab="integrations" />
            </TabsContent>
            
            <TabsContent value="maintenance" className="space-y-6">
              <SystemSettingsTab subTab="maintenance" />
            </TabsContent>
          </Tabs>
        );
        
      case 'security':
        return (
          <Tabs defaultValue="overview" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid grid-cols-4 mb-6 bg-sireiq-accent/10">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="authentication">Authentication</TabsTrigger>
              <TabsTrigger value="access">Access Controls</TabsTrigger>
              <TabsTrigger value="audit">Audit Logs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <SecurityTab subTab="overview" />
            </TabsContent>
            
            <TabsContent value="authentication" className="space-y-6">
              <SecurityTab subTab="authentication" />
            </TabsContent>
            
            <TabsContent value="access" className="space-y-6">
              <SecurityTab subTab="access" />
            </TabsContent>
            
            <TabsContent value="audit" className="space-y-6">
              <SecurityTab subTab="audit" />
            </TabsContent>
          </Tabs>
        );
        
      case 'database':
        return (
          <Tabs defaultValue="overview" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid grid-cols-4 mb-6 bg-sireiq-accent/10">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="queries">Queries</TabsTrigger>
              <TabsTrigger value="backups">Backups</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <DatabaseTab subTab="overview" />
            </TabsContent>
            
            <TabsContent value="queries" className="space-y-6">
              <DatabaseTab subTab="queries" />
            </TabsContent>
            
            <TabsContent value="backups" className="space-y-6">
              <DatabaseTab subTab="backups" />
            </TabsContent>
            
            <TabsContent value="monitoring" className="space-y-6">
              <DatabaseTab subTab="monitoring" />
            </TabsContent>
          </Tabs>
        );
        
      default:
        return (
          <Tabs defaultValue="overview" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid grid-cols-4 mb-6 bg-sireiq-accent/10">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="logs">Logs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <UserManagementTab subTab="overview" />
            </TabsContent>
            
            <TabsContent value="details" className="space-y-6">
              <UserManagementTab subTab="details" />
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-6">
              <UserManagementTab subTab="settings" />
            </TabsContent>
            
            <TabsContent value="logs" className="space-y-6">
              <UserManagementTab subTab="logs" />
            </TabsContent>
          </Tabs>
        );
    }
  };
  
  return renderTabs();
};

export default AdminTabs;
