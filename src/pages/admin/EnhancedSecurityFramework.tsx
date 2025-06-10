
import React from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import SecurityFramework from '@/components/admin/security/SecurityFramework';

const EnhancedSecurityFramework = () => {
  return (
    <AdminLayout 
      title="Enhanced Security Framework"
      description="Comprehensive AI platform security management for SireIQ admin panel"
    >
      <SecurityFramework />
    </AdminLayout>
  );
};

export default EnhancedSecurityFramework;
