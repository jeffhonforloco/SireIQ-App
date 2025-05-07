
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Role = {
  name: string;
  description: string;
  color: string;
};

type RolesPermissionsTabProps = {
  teamRoles: Role[];
};

const RolesPermissionsTab = ({ teamRoles }: RolesPermissionsTabProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Roles & Permissions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {teamRoles.map((role, index) => (
          <Card key={index} className="bg-transparent border border-sireiq-accent/30 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${role.color}`}></div>
                <h3 className="text-xl font-bold">{role.name}</h3>
              </div>
              <p className="text-sireiq-light/70 mb-4">{role.description}</p>
              <Button variant="outline" size="sm" className="w-full border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                Edit Permissions
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-sireiq-darker rounded-lg border border-sireiq-accent/20 p-4">
        <h3 className="font-bold mb-3">Permission Categories</h3>
        <div className="space-y-4">
          {[
            "Content Creation & Editing",
            "AI Model Access",
            "Team Management",
            "Analytics & Reporting",
            "Settings & Configuration"
          ].map((category, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-sireiq-accent/5 rounded-lg">
              <span>{category}</span>
              <Button variant="outline" size="sm" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                Configure
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RolesPermissionsTab;
