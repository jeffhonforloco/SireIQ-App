
import React from 'react';
import { Mail, Info, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

interface EmailVerificationProps {
  email: string;
  verificationCode: string;
  setVerificationCode: (code: string) => void;
  demoCode: string;
  onVerify: () => void;
  onResendCode: () => void;
  onUseDemoCode: () => void;
}

const EmailVerification = ({
  email,
  verificationCode,
  setVerificationCode,
  demoCode,
  onVerify,
  onResendCode,
  onUseDemoCode
}: EmailVerificationProps) => {
  return (
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
          onClick={onVerify}
          className="w-full bg-[#3CDFFF] text-sireiq-darker hover:bg-[#33c3e0]"
        >
          <CheckCircle className="mr-1" /> Verify Email & Continue
        </Button>
        
        <Button
          onClick={onUseDemoCode}
          variant="outline"
          className="w-full border-sireiq-accent/30 hover:bg-sireiq-dark/50"
        >
          Use Demo Code
        </Button>
      </div>

      <div className="flex justify-center pt-2 border-t border-sireiq-accent/10 mt-4">
        <button 
          onClick={onResendCode}
          className="text-sm text-sireiq-cyan hover:underline"
        >
          Resend verification code
        </button>
      </div>
    </>
  );
};

export default EmailVerification;
