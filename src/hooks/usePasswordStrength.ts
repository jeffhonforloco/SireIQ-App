
import { useState, useEffect } from 'react';

type PasswordStrength = 'weak' | 'medium' | 'strong' | null;

export const usePasswordStrength = (password: string): PasswordStrength => {
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>(null);

  useEffect(() => {
    if (!password) {
      setPasswordStrength(null);
      return;
    }

    // Simple password strength calculation
    let strength: PasswordStrength = 'weak';
    
    // Check for minimum length
    if (password.length >= 8) {
      strength = 'medium';
      
      // Check for complexity (has uppercase, lowercase, number, and special character)
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecial = /[^A-Za-z0-9]/.test(password);
      
      if (hasUppercase && hasLowercase && (hasNumber || hasSpecial)) {
        strength = 'strong';
      }
    }
    
    setPasswordStrength(strength);
  }, [password]);

  return passwordStrength;
};
