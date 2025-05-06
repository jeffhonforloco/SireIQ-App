
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/sonner';

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  email: string;
  avatar: string;
  lastActive?: string;
  status?: string;
};

type TeamManagementDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  member?: TeamMember;
  onSave: (member: Omit<TeamMember, 'id' | 'lastActive' | 'status'>) => void;
  mode: 'add' | 'edit';
};

const TeamManagementDialog = ({ 
  isOpen, 
  onClose, 
  member, 
  onSave,
  mode 
}: TeamManagementDialogProps) => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<Omit<TeamMember, 'id' | 'lastActive' | 'status'>>();

  React.useEffect(() => {
    if (member && mode === 'edit') {
      setValue('name', member.name);
      setValue('email', member.email);
      setValue('role', member.role);
      setValue('avatar', member.avatar);
    } else {
      reset({
        name: '',
        email: '',
        role: 'Viewer',
        avatar: '',
      });
    }
  }, [member, mode, reset, setValue]);

  const onSubmit = (data: Omit<TeamMember, 'id' | 'lastActive' | 'status'>) => {
    // Generate avatar initials if not provided
    if (!data.avatar) {
      const nameParts = data.name.split(' ');
      if (nameParts.length >= 2) {
        data.avatar = `${nameParts[0][0]}${nameParts[1][0]}`;
      } else {
        data.avatar = data.name.substring(0, 2);
      }
    }
    
    onSave(data);
    onClose();
    
    toast.success(mode === 'add' 
      ? 'Team member added successfully!' 
      : 'Team member updated successfully!'
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="bg-sireiq-darker text-sireiq-light border-sireiq-accent/30 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{mode === 'add' ? 'Add New Team Member' : 'Edit Team Member'}</DialogTitle>
          <DialogDescription className="text-sireiq-light/70">
            {mode === 'add' 
              ? 'Enter the details of the new team member.' 
              : 'Update the details of the team member.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name"
                {...register('name', { required: 'Name is required' })} 
                className="bg-sireiq-accent/10 border-sireiq-accent/30 text-sireiq-light"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div className="col-span-4">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Must be a valid email'
                  }
                })} 
                className="bg-sireiq-accent/10 border-sireiq-accent/30 text-sireiq-light"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div className="col-span-4">
              <Label htmlFor="role">Role</Label>
              <Select 
                defaultValue={member?.role || 'Viewer'}
                onValueChange={(value) => setValue('role', value)}
              >
                <SelectTrigger className="bg-sireiq-accent/10 border-sireiq-accent/30 text-sireiq-light">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent className="bg-sireiq-darker border-sireiq-accent/30 text-sireiq-light">
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Editor">Editor</SelectItem>
                  <SelectItem value="Viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
              <Input 
                type="hidden"
                {...register('role')} 
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90"
            >
              {mode === 'add' ? 'Add Member' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TeamManagementDialog;
