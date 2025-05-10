
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Database, Shield, BarChart, Settings, Bell, Folder, Server } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { Link, useLocation } from 'react-router-dom';

type AdminSidebarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const AdminSidebar = ({ activeSection, setActiveSection }: AdminSidebarProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  const adminSections = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart, path: '/admin', alerts: 0 },
    { id: 'users', name: 'User Management', icon: Users, path: '/admin/users', alerts: 2 },
    { id: 'analytics', name: 'Analytics', icon: BarChart, path: '/admin/analytics', alerts: 0 },
    { id: 'system', name: 'System Settings', icon: Settings, path: '/admin/settings', alerts: 1 },
    { id: 'security', name: 'Security', icon: Shield, path: '/admin/security', alerts: 3 },
    { id: 'database', name: 'Database', icon: Database, path: '/admin/database', alerts: 0 },
    { id: 'notifications', name: 'Notifications', icon: Bell, path: '/admin/notifications', alerts: 5 },
    { id: 'resources', name: 'Resources', icon: Folder, path: '/admin/resources', alerts: 0 },
    { id: 'servers', name: 'Servers', icon: Server, path: '/admin/servers', alerts: 1 },
  ];

  // Group sections by category
  const mainSections = adminSections.slice(0, 3);
  const systemSections = adminSections.slice(3, 6);
  const additionalSections = adminSections.slice(6);

  return (
    <div className="bg-sireiq-darker rounded-xl p-4 border border-sireiq-accent/20 sticky top-28">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Shield className="w-5 h-5 mr-2 text-sireiq-cyan" />
        Admin Controls
      </h2>
      
      <div className="space-y-5">
        <div>
          <p className="text-xs text-sireiq-light/50 uppercase font-medium mb-2 px-3">Main</p>
          {mainSections.map((section) => (
            <Link to={section.path} key={section.id}>
              <div 
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  isActive(section.path)
                    ? "bg-sireiq-accent/20 border-l-2 border-sireiq-cyan" 
                    : "hover:bg-sireiq-accent/10"
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <div className="flex items-center">
                  <section.icon className={`w-5 h-5 mr-3 ${isActive(section.path) ? "text-sireiq-cyan" : "text-sireiq-light/70"}`} />
                  <h3 className="font-medium">{section.name}</h3>
                  {section.alerts > 0 && (
                    <Badge className="ml-auto bg-red-500 text-sireiq-darker">{section.alerts}</Badge>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div>
          <p className="text-xs text-sireiq-light/50 uppercase font-medium mb-2 px-3">System</p>
          {systemSections.map((section) => (
            <Link to={section.path} key={section.id}>
              <div 
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  isActive(section.path)
                    ? "bg-sireiq-accent/20 border-l-2 border-sireiq-cyan" 
                    : "hover:bg-sireiq-accent/10"
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <div className="flex items-center">
                  <section.icon className={`w-5 h-5 mr-3 ${isActive(section.path) ? "text-sireiq-cyan" : "text-sireiq-light/70"}`} />
                  <h3 className="font-medium">{section.name}</h3>
                  {section.alerts > 0 && (
                    <Badge className="ml-auto bg-red-500 text-sireiq-darker">{section.alerts}</Badge>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div>
          <p className="text-xs text-sireiq-light/50 uppercase font-medium mb-2 px-3">Additional</p>
          {additionalSections.map((section) => (
            <Link to={section.path} key={section.id}>
              <div 
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  isActive(section.path)
                    ? "bg-sireiq-accent/20 border-l-2 border-sireiq-cyan" 
                    : "hover:bg-sireiq-accent/10"
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <div className="flex items-center">
                  <section.icon className={`w-5 h-5 mr-3 ${isActive(section.path) ? "text-sireiq-cyan" : "text-sireiq-light/70"}`} />
                  <h3 className="font-medium">{section.name}</h3>
                  {section.alerts > 0 && (
                    <Badge className="ml-auto bg-red-500 text-sireiq-darker">{section.alerts}</Badge>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
