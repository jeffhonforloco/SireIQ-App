
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import AdminSidebar from '@/components/dashboards/admin/AdminSidebar';
import { useRole } from '@/contexts/RoleContext';
import { Navigate } from 'react-router-dom';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ 
  children, 
  title, 
  description = "Admin panel for SireIQ platform management" 
}) => {
  const { role } = useRole();
  
  // Protect admin routes
  if (role !== 'admin') {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>{title} | SireIQ Admin</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <Navbar />
      
      <div className="container mx-auto pt-28 pb-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Admin sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <AdminSidebar activeSection="dashboard" setActiveSection={() => {}} />
          </div>
          
          {/* Main content area */}
          <div className="lg:col-span-9 space-y-6">
            {children}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminLayout;
