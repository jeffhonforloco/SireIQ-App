import React from 'react';
import { Button } from '../common/Button';
import { LogIn } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function SignInButton() {
  const { signInWithGoogle } = useAuth();

  return (
    <Button
      onClick={() => signInWithGoogle()}
      variant="outline"
      icon={LogIn}
      className="w-full"
    >
      Sign in with Google
    </Button>
  );
}