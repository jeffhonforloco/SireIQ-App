import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useRole } from '@/contexts/RoleContext';
import GetStartedCard from '@/components/get-started/GetStartedCard';
import KeyboardShortcutsDialog from '@/components/keyboard/KeyboardShortcutsDialog';
import { getShortcutCategories } from '@/components/keyboard/AppKeyboardShortcuts';

const GetStarted = () => {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [demoCode] = useState<string>('123456');
  const { setRole, setIsFirstTimeUser, setOnboardingStep } = useRole();
  const navigate = useNavigate();
  
  // Keyboard shortcuts categories for dialog
  const shortcutCategories = getShortcutCategories();
  
  const handleRegistrationSuccess = (email: string) => {
    setStep(2);
    setEmail(email);
    toast.success(`Verification code sent to ${email}`);
  };
  
  const handleVerify = () => {
    // In a real app this would verify with a backend
    if (verificationCode === demoCode || verificationCode.length === 6) {
      toast.success("Email verified successfully!");
      
      // Set up the user role and onboarding state
      setRole('user');
      setIsFirstTimeUser(true);
      setOnboardingStep(1);
      
      // Navigate to dashboard
      navigate('/dashboard');
    } else {
      toast.error("Invalid verification code. Please try again.");
    }
  };
  
  const handleResendCode = () => {
    toast.info(`Verification code resent to ${email}`);
  };
  
  const handleUseDemoCode = () => {
    setVerificationCode(demoCode);
    toast.info("Demo code applied");
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Get Started | SireIQ</title>
        <meta name="description" content="Get started with SireIQ" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex items-center justify-center mb-10">
          <h1 className="text-3xl font-bold text-gradient glow">Get Started with SireIQ</h1>
        </div>
        
        <div className="max-w-md mx-auto">
          <GetStartedCard 
            step={step}
            email={email}
            verificationCode={verificationCode}
            setVerificationCode={setVerificationCode}
            demoCode={demoCode}
            onVerify={handleVerify}
            onResendCode={handleResendCode}
            onUseDemoCode={handleUseDemoCode}
            onRegistrationSuccess={handleRegistrationSuccess}
          />
          
          <div className="mt-8 text-center">
            <p className="text-sm text-sireiq-light/60">
              Need help? Check out our <span className="text-sireiq-cyan hover:underline cursor-pointer">documentation</span> or <span className="text-sireiq-cyan hover:underline cursor-pointer">contact support</span>
            </p>
          </div>
        </div>
        
        {/* Keep keyboard shortcuts dialog accessible */}
        <div className="fixed bottom-4 right-4">
          <KeyboardShortcutsDialog categories={shortcutCategories} />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
