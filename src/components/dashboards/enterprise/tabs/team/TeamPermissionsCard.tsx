
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type TeamPermissionsCardProps = {
  onOpenPermissionsSheet: () => void;
};

const TeamPermissionsCard = ({ onOpenPermissionsSheet }: TeamPermissionsCardProps) => {
  return (
    <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
      <CardHeader>
        <CardTitle className="text-base font-medium">Team Permissions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { role: 'Admin', permissions: 'Full access to all resources' },
            { role: 'Editor', permissions: 'Can edit but not delete resources' },
            { role: 'Viewer', permissions: 'Read-only access to resources' }
          ].map((role, i) => (
            <div key={i} className="p-3 border border-sireiq-accent/20 rounded-md">
              <h3 className="font-medium">{role.role}</h3>
              <p className="text-sm text-sireiq-light/70">{role.permissions}</p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 w-full"
          onClick={onOpenPermissionsSheet}
        >
          Edit Roles
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TeamPermissionsCard;
