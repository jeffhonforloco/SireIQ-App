
import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'user' | 'developer' | 'enterprise' | null;

type OnboardingStep = 1 | 2 | 3 | 'completed';

type RoleContextType = {
  role: UserRole;
  setRole: (role: UserRole) => void;
  isFirstTimeUser: boolean;
  setIsFirstTimeUser: (value: boolean) => void;
  onboardingStep: OnboardingStep;
  setOnboardingStep: (step: OnboardingStep) => void;
  preferences: {
    darkMode: boolean;
    notifications: boolean;
    aiModel: string;
  };
  setPreferences: (prefs: Partial<RoleContextType['preferences']>) => void;
};

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<UserRole>(() => {
    // Try to get role from localStorage on initial load
    const savedRole = localStorage.getItem('userRole');
    return (savedRole as UserRole) || null;
  });
  
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(() => {
    return localStorage.getItem('isFirstTimeUser') !== 'false';
  });
  
  const [onboardingStep, setOnboardingStep] = useState<OnboardingStep>(() => {
    const savedStep = localStorage.getItem('onboardingStep');
    return (savedStep as OnboardingStep) || 1;
  });
  
  const [preferences, setPreferences] = useState(() => {
    const savedPrefs = localStorage.getItem('userPreferences');
    return savedPrefs 
      ? JSON.parse(savedPrefs) 
      : {
          darkMode: true,
          notifications: true,
          aiModel: 'balanced',
        };
  });
  
  // Save role to localStorage whenever it changes
  useEffect(() => {
    if (role) {
      localStorage.setItem('userRole', role);
    }
  }, [role]);
  
  // Save first time user status
  useEffect(() => {
    localStorage.setItem('isFirstTimeUser', String(isFirstTimeUser));
  }, [isFirstTimeUser]);
  
  // Save onboarding step
  useEffect(() => {
    localStorage.setItem('onboardingStep', String(onboardingStep));
  }, [onboardingStep]);
  
  // Save preferences
  useEffect(() => {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
  }, [preferences]);
  
  return (
    <RoleContext.Provider value={{ 
      role, 
      setRole, 
      isFirstTimeUser, 
      setIsFirstTimeUser,
      onboardingStep,
      setOnboardingStep,
      preferences,
      setPreferences: (newPrefs) => setPreferences(prev => ({ ...prev, ...newPrefs }))
    }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = (): RoleContextType => {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};
