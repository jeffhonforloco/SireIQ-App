
import React, { useState } from 'react';
import AdminDashboardHeader from './admin/AdminDashboardHeader';
import UserManagement from './admin/UserManagement';
import SystemSettings from './admin/SystemSettings';
import AdminProjectDetails from './admin/AdminProjectDetails';
import AdminSidebar from './admin/AdminSidebar';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('users');
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <AdminDashboardHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-3 space-y-6">
          {/* Admin Sections */}
          <AdminSidebar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
        </div>
        
        {/* Main content area */}
        <div className="lg:col-span-9 space-y-6">
          {/* Admin Content */}
          <AdminProjectDetails 
            activeSection={activeSection}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
