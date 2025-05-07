
import React from 'react';
import { Shield, ShieldCheck, ShieldX } from 'lucide-react';

interface PasswordStrengthIndicatorProps {
  password: string;
  passwordStrength: 'weak' | 'medium' | 'strong' | null;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ 
  password, 
  passwordStrength 
}) => {
  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 'weak': return 'text-red-500 border-red-500';
      case 'medium': return 'text-yellow-500 border-yellow-500';
      case 'strong': return 'text-green-500 border-green-500';
      default: return 'text-sireiq-light/50 border-sireiq-accent/20';
    }
  };

  const getPasswordStrengthIcon = () => {
    switch (passwordStrength) {
      case 'weak': return <ShieldX className="h-5 w-5 text-red-500" />;
      case 'medium': return <Shield className="h-5 w-5 text-yellow-500" />;
      case 'strong': return <ShieldCheck className="h-5 w-5 text-green-500" />;
      default: return null;
    }
  };

  return (
    <>
      {passwordStrength && (
        <div className="mt-1 text-xs flex items-center gap-1">
          <span className={`font-medium capitalize ${getPasswordStrengthColor()}`}>
            {passwordStrength}
          </span>
          <span className="text-sireiq-light/50">
            {passwordStrength === 'weak' && "- Consider a stronger password"}
            {passwordStrength === 'medium' && "- Good, but could be stronger"}
            {passwordStrength === 'strong' && "- Excellent password strength"}
          </span>
        </div>
      )}
      {password && passwordStrength && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          {getPasswordStrengthIcon()}
        </div>
      )}
    </>
  );
};

export default PasswordStrengthIndicator;
