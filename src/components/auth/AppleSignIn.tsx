import React from 'react';
import { Apple } from 'lucide-react';
import { Button } from '../common/Button';
import { useAuth } from '../../contexts/AuthContext';

export function AppleSignIn() {
  const { signInWithApple } = useAuth();

  return (
    <Button
      onClick={() => signInWithApple()}
      variant="outline"
      icon={Apple}
      className="w-full"
    >
      Continue with Apple
    </Button>
  );
}