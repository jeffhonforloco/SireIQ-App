
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Phone } from 'lucide-react';
import EmailSignInForm from './EmailSignInForm';
import PhoneSignInForm from './PhoneSignInForm';

interface SignInTabsProps {
  onEmailSignIn: (email: string, password: string) => void;
  onPhoneSignIn: (phoneNumber: string, password: string) => void;
}

const SignInTabs: React.FC<SignInTabsProps> = ({ onEmailSignIn, onPhoneSignIn }) => {
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');

  return (
    <Tabs defaultValue="email" className="mb-6" onValueChange={(value) => setAuthMethod(value as 'email' | 'phone')}>
      <TabsList className="grid grid-cols-2 mb-6">
        <TabsTrigger value="email" className="flex items-center gap-1">
          <Mail className="w-4 h-4" />
          <span>Email</span>
        </TabsTrigger>
        <TabsTrigger value="phone" className="flex items-center gap-1">
          <Phone className="w-4 h-4" />
          <span>Phone</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="email">
        <EmailSignInForm onSignIn={onEmailSignIn} />
      </TabsContent>
      
      <TabsContent value="phone">
        <PhoneSignInForm onSignIn={onPhoneSignIn} />
      </TabsContent>
    </Tabs>
  );
};

export default SignInTabs;
