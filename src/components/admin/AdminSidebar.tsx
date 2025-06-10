
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  BarChart3,
  Shield,
  Settings,
  Database,
  Bell,
  Server,
  Globe,
  Lock,
  Activity,
  FileText,
  Zap
} from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();
  
  const menuSections = [
    {
      title: 'Overview',
      items: [
        { id: 'dashboard', name: 'Dashboard', icon: BarChart3, path: '/admin', alerts: 0 },
        { id: 'analytics', name: 'Analytics', icon: Activity, path: '/admin/analytics', alerts: 0 },
      ]
    },
    {
      title: 'User Management',
      items: [
        { id: 'users', name: 'Users', icon: Users, path: '/admin/users', alerts: 3 },
        { id: 'permissions', name: 'Permissions', icon: Lock, path: '/admin/permissions', alerts: 1 },
      ]
    },
    {
      title: 'System',
      items: [
        { id: 'settings', name: 'Settings', icon: Settings, path: '/admin/settings', alerts: 2 },
        { id: 'security', name: 'Security', icon: Shield, path: '/admin/security', alerts: 1 },
        { id: 'database', name: 'Database', icon: Database, path: '/admin/database', alerts: 0 },
        { id: 'servers', name: 'Servers', icon: Server, path: '/admin/servers', alerts: 0 },
      ]
    },
    {
      title: 'Operations',
      items: [
        { id: 'notifications', name: 'Notifications', icon: Bell, path: '/admin/notifications', alerts: 8 },
        { id: 'logs', name: 'System Logs', icon: FileText, path: '/admin/logs', alerts: 0 },
        { id: 'performance', name: 'Performance', icon: Zap, path: '/admin/performance', alerts: 0 },
        { id: 'global', name: 'Global Config', icon: Globe, path: '/admin/global', alerts: 0 },
      ]
    }
  ];

  const isActive = (path: string) => {
    return location.pathname === path || (path === '/admin' && location.pathname === '/admin');
  };

  return (
    <div className="w-72 bg-[#111111] border border-[#00D4FF]/20 rounded-2xl p-6 sticky top-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#FFFFFF] mb-2">Admin Panel</h2>
        <p className="text-sm text-[#B4B4B4]">Platform Management</p>
      </div>
      
      <nav className="space-y-6">
        {menuSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-medium text-[#737373] uppercase tracking-wider mb-3 px-3">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                      ${active 
                        ? 'bg-[#00D4FF]/20 border-l-2 border-[#00D4FF] text-[#00D4FF]' 
                        : 'text-[#B4B4B4] hover:bg-[#1A1A1A] hover:text-[#FFFFFF]'
                      }
                    `}
                  >
                    <Icon className={`h-5 w-5 ${active ? 'text-[#00D4FF]' : ''}`} />
                    <span className="font-medium">{item.name}</span>
                    {item.alerts > 0 && (
                      <Badge className="ml-auto bg-red-500 text-white text-xs">
                        {item.alerts}
                      </Badge>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
