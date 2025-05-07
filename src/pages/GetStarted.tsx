
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRole } from '@/contexts/RoleContext';
import { toast } from '@/components/ui/sonner';
import GetStartedCard from '@/components/get-started/GetStartedCard';

const GetStarted = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1); // 1: registration form, 2: email verification
  const [verificationCode, setVerificationCode] = useState('');
  const { setRole, setIsFirstTimeUser, setOnboardingStep } = useRole();
  const navigate = useNavigate();
  const demoCode = '123456'; // Fixed demo code for easier testing

  const handleRegistrationSuccess = (email: string) => {
    setEmail(email);
    setStep(2);
  };

  const handleVerifyEmail = () => {
    // For demo purposes, we accept either the demo code or any 6-digit code
    if (verificationCode.length !== 6) {
      toast.error("Please enter a valid 6-digit code");
      return;
    }

    // All new users start with the basic user role
    setRole('user');
    setIsFirstTimeUser(true);
    setOnboardingStep(1);
    toast.success("Email verified! Welcome to SireIQ!");
    navigate('/dashboard');
  };

  const handleResendCode = () => {
    // In a real app, this would resend the verification code
    toast.success("Verification code resent to your email!");
  };

  const handleUseDemoCode = () => {
    setVerificationCode(demoCode);
    toast.success("Demo code applied!");
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Get Started | SireIQ</title>
        <meta name="description" content="Get started with SireIQ and bring your ideas to life. Use intelligent workflows and AI-native tools to build faster, smarter digital experiences." />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="text-gradient glow">Get Started</span> with SireIQ
          </h1>
          
          <p className="text-xl text-center text-sireiq-light/80 mb-12 max-w-2xl mx-auto">
            Join thousands of creators, developers, and innovators building the next generation of intelligent applications.
          </p>
          
          <div className="max-w-md mx-auto">
            <GetStartedCard
              step={step}
              email={email}
              verificationCode={verificationCode}
              setVerificationCode={setVerificationCode}
              demoCode={demoCode}
              onVerify={handleVerifyEmail}
              onResendCode={handleResendCode}
              onUseDemoCode={handleUseDemoCode}
              onRegistrationSuccess={handleRegistrationSuccess}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetStarted;
