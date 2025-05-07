
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Settings } from 'lucide-react';
import AdminTabs from './tabs/AdminTabs';

type AdminProjectDetailsProps = {
  activeSection: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const AdminProjectDetails = ({ activeSection, activeTab, setActiveTab }: AdminProjectDetailsProps) => {
  // Get section title and description based on active section
  const getSectionInfo = () => {
    switch (activeSection) {
      case 'users':
        return { 
          title: 'User Management', 
          description: 'Manage users, roles, and permissions' 
        };
      case 'analytics':
        return { 
          title: 'Platform Analytics', 
          description: 'Monitor platform performance and usage metrics' 
        };
      case 'system':
        return { 
          title: 'System Settings', 
          description: 'Configure system-wide settings and preferences' 
        };
      case 'security':
        return { 
          title: 'Security', 
          description: 'Configure security settings and access controls' 
        };
      case 'database':
        return { 
          title: 'Database', 
          description: 'Manage database connections and operations' 
        };
      default:
        return { 
          title: 'User Management', 
          description: 'Manage users, roles, and permissions' 
        };
    }
  };
  
  const sectionInfo = getSectionInfo();

  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold">{sectionInfo.title}</CardTitle>
            <CardDescription>{sectionInfo.description}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
              <Shield className="w-4 h-4 mr-2 text-sireiq-cyan" />
              Audit
            </Button>
            <Button size="sm" className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90">
              <Settings className="w-4 h-4 mr-2" />
              Configure
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <AdminTabs activeSection={activeSection} activeTab={activeTab} setActiveTab={setActiveTab} />
      </CardContent>
    </Card>
  );
};

export default AdminProjectDetails;
