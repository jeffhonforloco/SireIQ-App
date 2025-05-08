
import React from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminDashboardHeader from '@/components/dashboards/admin/AdminDashboardHeader';
import AdminProjectDetails from '@/components/dashboards/admin/AdminProjectDetails';
import { useRole } from '@/contexts/RoleContext';
import { Navigate } from 'react-router-dom';

const AdminDashboardPage = () => {
  const [activeSection, setActiveSection] = React.useState('users');
  const [activeTab, setActiveTab] = React.useState('overview');
  const { role } = useRole();

  if (role !== 'admin') {
    return <Navigate to="/signin" replace />;
  }

  return (
    <AdminLayout title="Admin Dashboard">
      <AdminDashboardHeader />
      <AdminProjectDetails 
        activeSection={activeSection}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </AdminLayout>
  );
};

export default AdminDashboardPage;
