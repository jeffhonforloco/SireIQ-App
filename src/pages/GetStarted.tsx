
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, CheckCircle, Info } from 'lucide-react';
import { useRole } from '@/contexts/RoleContext';
import { toast } from '@/components/ui/sonner';
import { 
  InputOTP, 
  InputOTPGroup, 
  InputOTPSlot 
} from "@/components/ui/input-otp";
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GetStarted = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // 1: registration form, 2: email verification, 3: success
  const [verificationCode, setVerificationCode] = useState('');
  const { setRole, setIsFirstTimeUser, setOnboardingStep } = useRole();
  const navigate = useNavigate();
  const demoCode = '123456'; // Fixed demo code for easier testing

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!fullName || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    // Password confirmation check
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // In a real app, this would register the user in a database
    // For demo, we'll move to verification step
    toast.success("Account created! Please verify your email");
    setStep(2);
    
    // In a real app, this would send an actual verification code via email
    console.log(`Verification code for demo: ${demoCode}`);
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
            <Card className="bg-sireiq-darker border border-sireiq-accent/20">
              <CardHeader className={step === 2 ? "pb-2" : "pb-6"}>
                <CardTitle>{step === 1 ? "Create an Account" : "Verify Your Email"}</CardTitle>
                <CardDescription className="text-sireiq-light/80">
                  {step === 1 
                    ? "Sign up for free and start exploring SireIQ's AI-powered tools and creative workflows."
                    : `We've sent a verification code to ${email}.`
                  }
                </CardDescription>
              </CardHeader>

              <CardContent>
                {step === 1 && (
                  <form className="space-y-4" onSubmit={handleCreateAccount}>
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name</label>
                      <Input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="bg-sireiq-dark text-sireiq-light border-sireiq-accent/20"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-sireiq-dark text-sireiq-light border-sireiq-accent/20"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium mb-1">Create Password</label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-sireiq-dark text-sireiq-light border-sireiq-accent/20"
                        placeholder="Min 6 characters"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-sireiq-dark text-sireiq-light border-sireiq-accent/20"
                        placeholder="Re-enter your password"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-[#3CDFFF] text-sireiq-darker hover:bg-[#33c3e0]">
                      Create Free Account
                    </Button>
                  </form>
                )}

                {step === 2 && (
                  <>
                    <Alert className="mb-6 bg-sireiq-dark/70 border-sireiq-accent">
                      <Info className="h-5 w-5 text-sireiq-cyan" />
                      <AlertTitle className="text-sireiq-cyan">DEMO MODE</AlertTitle>
                      <AlertDescription className="text-sireiq-light/90">
                        Use the verification code <Badge variant="outline" className="font-mono text-sireiq-cyan border-sireiq-cyan">{demoCode}</Badge> or any 6-digit number to proceed.
                      </AlertDescription>
                    </Alert>

                    <div className="flex items-center justify-center mb-4">
                      <Mail className="h-12 w-12 text-sireiq-cyan" />
                    </div>
                    
                    <div className="mb-6">
                      <InputOTP 
                        value={verificationCode} 
                        onChange={setVerificationCode}
                        maxLength={6}
                        className="flex justify-center"
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} className="bg-sireiq-dark border-sireiq-cyan/50" />
                          <InputOTPSlot index={1} className="bg-sireiq-dark border-sireiq-cyan/50" />
                          <InputOTPSlot index={2} className="bg-sireiq-dark border-sireiq-cyan/50" />
                          <InputOTPSlot index={3} className="bg-sireiq-dark border-sireiq-cyan/50" />
                          <InputOTPSlot index={4} className="bg-sireiq-dark border-sireiq-cyan/50" />
                          <InputOTPSlot index={5} className="bg-sireiq-dark border-sireiq-cyan/50" />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                    
                    <div className="flex flex-col space-y-3">
                      <Button 
                        onClick={handleVerifyEmail}
                        className="w-full bg-[#3CDFFF] text-sireiq-darker hover:bg-[#33c3e0]"
                      >
                        <CheckCircle className="mr-1" /> Verify Email & Continue
                      </Button>
                      
                      <Button
                        onClick={handleUseDemoCode}
                        variant="outline"
                        className="w-full border-sireiq-accent/30 hover:bg-sireiq-dark/50"
                      >
                        Use Demo Code
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>

              {step === 2 && (
                <CardFooter className="flex justify-center pt-2 border-t border-sireiq-accent/10">
                  <button 
                    onClick={handleResendCode}
                    className="text-sm text-sireiq-cyan hover:underline"
                  >
                    Resend verification code
                  </button>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetStarted;
