
import React from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminDashboardHeader from '@/components/dashboards/admin/AdminDashboardHeader';
import DashboardOverview from '@/components/dashboards/admin/DashboardOverview';
import { useRole } from '@/contexts/RoleContext';
import { Navigate } from 'react-router-dom';

const AdminDashboardPage = () => {
  const [activeSection, setActiveSection] = React.useState('dashboard');
  const { role } = useRole();

  if (role !== 'admin') {
    return <Navigate to="/signin" replace />;
  }

  return (
    <AdminLayout title="Admin Dashboard">
      <AdminDashboardHeader />
      <DashboardOverview />
    </AdminLayout>
  );
};

export default AdminDashboardPage;
