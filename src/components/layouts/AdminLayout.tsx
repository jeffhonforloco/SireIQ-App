
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import AdminSidebar from '@/components/dashboards/admin/AdminSidebar';
import { useRole } from '@/contexts/RoleContext';
import { Navigate } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

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
        <Breadcrumb className="mb-6">
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">
              <Home className="h-4 w-4 mr-2" />
              <span>Dashboard</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="font-medium text-sireiq-cyan">{title}</span>
          </BreadcrumbItem>
        </Breadcrumb>
        
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
