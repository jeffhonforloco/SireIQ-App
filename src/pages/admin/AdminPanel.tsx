
import React from 'react';
import { useRole } from '@/contexts/RoleContext';
import { Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';
import DashboardStats from '@/components/admin/DashboardStats';
import SystemHealth from '@/components/admin/SystemHealth';

const AdminPanel = () => {
  const { role } = useRole();

  // Protect admin routes
  if (role !== 'admin') {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF]">
      <Helmet>
        <title>Admin Panel | SireIQ</title>
        <meta name="description" content="SireIQ Admin Control Center - Manage platform operations, users, and system health" />
      </Helmet>
      
      <Navbar />
      
      <div className="container mx-auto pt-28 pb-20 px-4">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block">
            <AdminSidebar />
          </div>
          
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            <AdminHeader />
            <DashboardStats />
            <SystemHealth />
            
            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#111111] border border-[#00D4FF]/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#FFFFFF] mb-4">Recent User Activity</h3>
                <div className="space-y-3">
                  {[
                    { user: 'john@example.com', action: 'User login', time: '2 minutes ago' },
                    { user: 'jane@company.com', action: 'Account created', time: '5 minutes ago' },
                    { user: 'admin@sireiq.com', action: 'Settings updated', time: '12 minutes ago' },
                    { user: 'dev@startup.io', action: 'API key generated', time: '18 minutes ago' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#1A1A1A] rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-[#FFFFFF]">{activity.user}</p>
                        <p className="text-xs text-[#B4B4B4]">{activity.action}</p>
                      </div>
                      <span className="text-xs text-[#737373]">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#111111] border border-[#00D4FF]/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#FFFFFF] mb-4">System Alerts</h3>
                <div className="space-y-3">
                  {[
                    { type: 'warning', message: 'High CPU usage detected', time: '1 hour ago' },
                    { type: 'info', message: 'Database backup completed', time: '3 hours ago' },
                    { type: 'error', message: 'Failed login attempts', time: '5 hours ago' },
                    { type: 'success', message: 'Security scan completed', time: '1 day ago' },
                  ].map((alert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-[#1A1A1A] rounded-lg">
                      <div className={`w-2 h-2 rounded-full ${
                        alert.type === 'error' ? 'bg-[#EF4444]' :
                        alert.type === 'warning' ? 'bg-[#F59E0B]' :
                        alert.type === 'success' ? 'bg-[#10B981]' : 'bg-[#3B82F6]'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm text-[#FFFFFF]">{alert.message}</p>
                        <p className="text-xs text-[#737373]">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminPanel;
