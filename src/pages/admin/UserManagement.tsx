
import React, { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, UserPlus, Edit, Trash2, Shield } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { toast } from '@/components/ui/sonner';
import { useForm } from 'react-hook-form';

interface UserFormValues {
  name: string;
  email: string;
  role: string;
}

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Robert Johnson', email: 'robert@example.com', role: 'Developer', status: 'Inactive' },
  { id: 4, name: 'Lisa Brown', email: 'lisa@example.com', role: 'Enterprise', status: 'Active' },
  { id: 5, name: 'Michael Wilson', email: 'michael@example.com', role: 'User', status: 'Active' },
];

const UserManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  
  const form = useForm<UserFormValues>({
    defaultValues: {
      name: '',
      email: '',
      role: 'user'
    }
  });

  const handleAddUser = () => {
    const values = form.getValues();
    console.log('Adding user:', values);
    toast.success('User added successfully');
    setIsAddUserOpen(false);
    form.reset();
  };

  const handleDeleteUser = (id: number) => {
    console.log('Deleting user with ID:', id);
    toast.success('User deleted successfully');
  };

  const filteredUsers = mockUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout title="User Management">
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-xl font-bold">User Management</CardTitle>
            <CardDescription>Manage all users, assign roles and permissions</CardDescription>
          </div>
          <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                <UserPlus className="w-4 h-4 mr-2" />
                Add User
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-sireiq-darker border-sireiq-accent/30">
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
                <DialogDescription>
                  Enter the details for the new user. They'll receive an email to set their password.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleAddUser)}>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-sireiq-dark border-sireiq-accent/30" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="mt-4">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="bg-sireiq-dark border-sireiq-accent/30" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem className="mt-4">
                          <FormLabel>Role</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-10 w-full rounded-md border border-input bg-sireiq-dark px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-sireiq-accent/30"
                              {...field}
                            >
                              <option value="user">User</option>
                              <option value="developer">Developer</option>
                              <option value="enterprise">Enterprise</option>
                              <option value="admin">Admin</option>
                            </select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <DialogFooter className="mt-6">
                      <Button variant="outline" type="button" onClick={() => setIsAddUserOpen(false)}>Cancel</Button>
                      <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker" type="submit">
                        Add User
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="flex mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-sireiq-light/50" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 bg-sireiq-dark border-sireiq-accent/30"
              />
            </div>
          </div>
          
          <div className="rounded-md border border-sireiq-accent/20 overflow-hidden">
            <Table>
              <TableHeader className="bg-sireiq-accent/10">
                <TableRow>
                  <TableHead className="text-sireiq-light">Name</TableHead>
                  <TableHead className="text-sireiq-light">Email</TableHead>
                  <TableHead className="text-sireiq-light">Role</TableHead>
                  <TableHead className="text-sireiq-light">Status</TableHead>
                  <TableHead className="text-sireiq-light text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium 
                        ${user.role === 'Admin' ? 'bg-purple-500/20 text-purple-300' : 
                          user.role === 'Developer' ? 'bg-blue-500/20 text-blue-300' : 
                          user.role === 'Enterprise' ? 'bg-amber-500/20 text-amber-300' : 'bg-green-500/20 text-green-300'}`
                      }>
                        {user.role === 'Admin' && <Shield className="mr-1 h-3 w-3" />}
                        {user.role}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium 
                        ${user.status === 'Active' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`
                      }>
                        {user.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0 border-sireiq-accent/30">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-8 w-8 p-0 border-red-500/30 hover:bg-red-900/20 hover:text-red-300"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default UserManagementPage;
