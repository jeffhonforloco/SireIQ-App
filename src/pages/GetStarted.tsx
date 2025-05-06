
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import { useRole } from '@/contexts/RoleContext';
import { toast } from '@/components/ui/sonner';
import { 
  InputOTP, 
  InputOTPGroup, 
  InputOTPSlot 
} from "@/components/ui/input-otp";

const GetStarted = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1); // 1: registration form, 2: email verification, 3: success
  const [verificationCode, setVerificationCode] = useState('');
  const { setRole, setIsFirstTimeUser, setOnboardingStep } = useRole();
  const navigate = useNavigate();

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!fullName || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
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
    console.log("Verification code for demo: 123456");
  };

  const handleVerifyEmail = () => {
    // In a real app, this would verify the code against a stored value
    // For demo, we'll accept any 6-digit code
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

  const handleScheduleDemo = () => {
    // In a real app, this would navigate to a scheduling page or open a dialog
    toast.success("Demo request submitted! Our team will contact you soon.");
  };

  const handleResendCode = () => {
    // In a real app, this would resend the verification code
    toast.success("Verification code resent to your email!");
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
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-sireiq-darker p-8 rounded-lg border border-sireiq-accent/20">
              {step === 1 && (
                <>
                  <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
                  <p className="mb-6 text-sireiq-light/80">
                    Sign up for free and start exploring SireIQ's AI-powered tools and creative workflows.
                    You can upgrade to Developer or Enterprise plans later.
                  </p>
                  <form className="space-y-4" onSubmit={handleCreateAccount}>
                    <div>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-2 rounded-md border border-sireiq-accent/20 bg-sireiq-dark text-sireiq-light"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-md border border-sireiq-accent/20 bg-sireiq-dark text-sireiq-light"
                        placeholder="Email Address"
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-md border border-sireiq-accent/20 bg-sireiq-dark text-sireiq-light"
                        placeholder="Create Password (min 6 characters)"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-[#3CDFFF] text-sireiq-darker hover:bg-[#33c3e0]">
                      Create Free Account
                    </Button>
                  </form>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <Mail className="h-12 w-12 text-sireiq-cyan" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
                    <p className="mb-6 text-sireiq-light/80">
                      We've sent a verification code to <span className="text-sireiq-cyan">{email}</span>. 
                      Please enter the 6-digit code to complete your registration.
                    </p>
                    
                    <div className="my-8">
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
                    
                    <Button 
                      onClick={handleVerifyEmail}
                      className="w-full bg-[#3CDFFF] text-sireiq-darker hover:bg-[#33c3e0] mb-4"
                    >
                      Verify Email & Continue
                    </Button>
                    
                    <p className="text-sm text-sireiq-light/70">
                      Didn't receive the code?{" "}
                      <button 
                        onClick={handleResendCode}
                        className="text-sireiq-cyan hover:underline"
                      >
                        Resend
                      </button>
                    </p>
                    
                    <p className="text-xs mt-4 text-sireiq-light/50">
                      For demo purposes, you can enter any 6-digit code to proceed.
                    </p>
                  </div>
                </>
              )}
            </div>
            
            <div className="bg-sireiq-darker p-8 rounded-lg border border-sireiq-accent/20 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">Enterprise Solutions</h2>
                <p className="mb-6 text-sireiq-light/80">
                  Discover how SireIQ can transform your organization with custom AI solutions and enterprise-grade features.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 text-sireiq-cyan">✓</div>
                    <div>Custom AI model training</div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 text-sireiq-cyan">✓</div>
                    <div>Advanced security and compliance</div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 text-sireiq-cyan">✓</div>
                    <div>Dedicated support and onboarding</div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 text-sireiq-cyan">✓</div>
                    <div>Custom integrations and workflows</div>
                  </li>
                </ul>
              </div>
              <Button 
                onClick={handleScheduleDemo}
                variant="outline" 
                className="border border-sireiq-cyan text-sireiq-cyan bg-transparent hover:bg-sireiq-cyan/10 mt-4"
              >
                Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetStarted;
