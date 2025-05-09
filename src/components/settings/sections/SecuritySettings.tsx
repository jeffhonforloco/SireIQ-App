
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from '@/contexts/RoleContext';
import { Button } from '@/components/ui/button';

const SecuritySettings = () => {
  const navigate = useNavigate();
  const { role } = useRole();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-1">SireIQ Account Security</h2>
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-sireiq-light/60">Add an extra layer of security</p>
            </div>
            <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
              Setup
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Change Password</p>
              <p className="text-sm text-sireiq-light/60">Update your password</p>
            </div>
            <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
              Change
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Session Management</p>
              <p className="text-sm text-sireiq-light/60">View and manage active sessions</p>
            </div>
            <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
              Manage
            </Button>
          </div>
        </div>
      </div>
      
      {(role === 'enterprise' || role === 'admin') && (
        <div>
          <h2 className="text-lg font-medium mb-1">Enterprise Security</h2>
          <div className="flex items-center justify-between mt-4 p-3 border border-sireiq-accent/20 rounded-md bg-sireiq-accent/5">
            <div>
              <p className="font-medium">Advanced Security Controls</p>
              <p className="text-sm text-sireiq-light/60">Configure enterprise-grade security</p>
            </div>
            <Button 
              variant="outline" 
              className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
              onClick={() => navigate('/features/enterprise-security')}
            >
              Configure
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecuritySettings;
