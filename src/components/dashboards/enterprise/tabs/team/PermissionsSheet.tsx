
import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/sonner';

type PermissionsSheetProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

const PermissionsSheet = ({ isOpen, onOpenChange }: PermissionsSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="bg-sireiq-darker text-sireiq-light border-l-sireiq-accent/30">
        <SheetHeader>
          <SheetTitle>Role Permissions</SheetTitle>
          <SheetDescription className="text-sireiq-light/70">
            Configure access levels for each team role.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          {['Admin', 'Editor', 'Viewer'].map((role) => (
            <div key={role} className="space-y-4">
              <h3 className="text-lg font-medium">{role} Permissions</h3>
              <div className="space-y-2">
                {[
                  'View Content', 'Create Content', 'Edit Content', 'Delete Content',
                  'Manage Users', 'Configure Settings', 'Access Analytics'
                ].map((permission) => (
                  <div key={permission} className="flex items-center justify-between p-2 border border-sireiq-accent/20 rounded-md">
                    <span>{permission}</span>
                    <Badge className={
                      role === 'Admin' ? 'bg-green-500' :
                      role === 'Editor' && !['Delete Content', 'Manage Users', 'Configure Settings'].includes(permission) ? 'bg-green-500' :
                      role === 'Viewer' && ['View Content', 'Access Analytics'].includes(permission) ? 'bg-green-500' :
                      'bg-gray-500'
                    }>
                      {role === 'Admin' || 
                      (role === 'Editor' && !['Delete Content', 'Manage Users', 'Configure Settings'].includes(permission)) ||
                      (role === 'Viewer' && ['View Content', 'Access Analytics'].includes(permission))
                        ? 'Allowed'
                        : 'Denied'
                      }
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <Button 
            className="w-full mt-4 bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90"
            onClick={() => {
              onOpenChange(false);
              toast.success('Permission settings updated');
            }}
          >
            Save Changes
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PermissionsSheet;
