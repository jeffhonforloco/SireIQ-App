
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import SignInTabs from './SignInTabs';
import SocialSignIn from './SocialSignIn';

interface SignInFormProps {
  onSuccessfulSignIn: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSuccessfulSignIn }) => {
  const { isProcessing, handleEmailSignIn, handlePhoneSignIn, handleGoogleSignIn } = useAuth();

  return (
    <div className="max-w-md mx-auto glass-effect p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gradient glow">Sign In</h1>
      
      <SignInTabs 
        onEmailSignIn={(email, password) => handleEmailSignIn(email, password, onSuccessfulSignIn)}
        onPhoneSignIn={(phone, password) => handlePhoneSignIn(phone, password, onSuccessfulSignIn)}
      />

      <SocialSignIn 
        onGoogleSignIn={() => handleGoogleSignIn(onSuccessfulSignIn)}
        isProcessing={isProcessing}
      />
      
      <p className="mt-6 text-center text-sm text-sireiq-light/90">
        Don't have an account?{' '}
        <Link to="/get-started" className="text-sireiq-cyan hover:underline">
          Get Started
        </Link>
      </p>
    </div>
  );
};

export default SignInForm;
