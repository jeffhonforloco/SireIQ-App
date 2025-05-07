
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import RegistrationForm from './RegistrationForm';
import EmailVerification from './EmailVerification';

interface GetStartedCardProps {
  step: number;
  email: string;
  verificationCode: string;
  setVerificationCode: (code: string) => void;
  demoCode: string;
  onVerify: () => void;
  onResendCode: () => void;
  onUseDemoCode: () => void;
  onRegistrationSuccess: (email: string) => void;
}

const GetStartedCard = ({
  step,
  email,
  verificationCode,
  setVerificationCode,
  demoCode,
  onVerify,
  onResendCode,
  onUseDemoCode,
  onRegistrationSuccess
}: GetStartedCardProps) => {
  return (
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
          <RegistrationForm onSuccess={onRegistrationSuccess} />
        )}

        {step === 2 && (
          <EmailVerification
            email={email}
            verificationCode={verificationCode}
            setVerificationCode={setVerificationCode}
            demoCode={demoCode}
            onVerify={onVerify}
            onResendCode={onResendCode}
            onUseDemoCode={onUseDemoCode}
          />
        )}
      </CardContent>

      {/* Footer is now handled within the EmailVerification component */}
    </Card>
  );
};

export default GetStartedCard;
