
import React from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import SecurityFramework from '@/components/admin/security/SecurityFramework';

const SecurityOverviewPage = () => {
  return (
    <AdminLayout title="Security Overview">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-sireiq-light">Security Overview</h1>
        </div>
        
        <SecurityFramework />
      </div>
    </AdminLayout>
  );
};

export default SecurityOverviewPage;
