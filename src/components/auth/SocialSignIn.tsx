
import React from 'react';
import { Button } from '@/components/ui/button';

interface SocialSignInProps {
  onGoogleSignIn: () => void;
  isProcessing: boolean;
}

const SocialSignIn: React.FC<SocialSignInProps> = ({ onGoogleSignIn, isProcessing }) => {
  return (
    <>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-sireiq-accent/30"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-sireiq-darker px-2 text-sireiq-light/70">Or continue with</span>
        </div>
      </div>

      <Button 
        type="button" 
        variant="outline"
        onClick={onGoogleSignIn}
        disabled={isProcessing}
        className="w-full border border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan mb-4 relative"
      >
        {isProcessing ? (
          <>
            <span className="flex items-center justify-center absolute inset-0">
              <svg className="animate-spin h-5 w-5 text-sireiq-cyan" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
            <span className="opacity-0">Sign in with Google</span>
          </>
        ) : (
          <>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 mr-2" />
            Sign in with Google
          </>
        )}
      </Button>
    </>
  );
};

export default SocialSignIn;
