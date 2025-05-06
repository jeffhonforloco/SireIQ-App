
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Database, Shield, BarChart, Settings } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

type AdminSidebarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const AdminSidebar = ({ activeSection, setActiveSection }: AdminSidebarProps) => {
  const createSection = () => {
    toast.success('New section added');
  };

  const adminSections = [
    { id: 'users', name: 'User Management', icon: Users, alerts: 2 },
    { id: 'analytics', name: 'Platform Analytics', icon: BarChart, alerts: 0 },
    { id: 'system', name: 'System Settings', icon: Settings, alerts: 1 },
    { id: 'security', name: 'Security', icon: Shield, alerts: 0 },
    { id: 'database', name: 'Database', icon: Database, alerts: 0 },
  ];

  return (
    <div className="bg-sireiq-darker rounded-xl p-6 border border-sireiq-accent/20">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Shield className="w-5 h-5 mr-2 text-sireiq-cyan" />
        Admin Controls
      </h2>
      <div className="space-y-3">
        {adminSections.map((section) => (
          <div 
            key={section.id} 
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              activeSection === section.id 
                ? "bg-sireiq-accent/20 border-l-2 border-sireiq-cyan" 
                : "hover:bg-sireiq-accent/10"
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            <div className="flex items-center">
              <section.icon className="w-5 h-5 text-sireiq-cyan mr-3" />
              <h3 className="font-medium">{section.name}</h3>
            </div>
            <div className="flex items-center justify-between text-xs text-sireiq-light/70 mt-1">
              <span>{section.id === 'users' ? '24 total users' : ''}</span>
              {section.alerts > 0 && (
                <Badge className="bg-red-500 text-sireiq-darker">{section.alerts}</Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
