
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Role = 'user' | 'developer' | 'admin' | 'enterprise' | null;
type OnboardingStep = 1 | 2 | 3 | 'completed';
export type AIModel = 'fast' | 'balanced' | 'powerful';

interface Preferences {
  darkMode: boolean;
  notifications: boolean;
  aiModel: AIModel;
  codeAutoComplete?: boolean;
  teamUpdates?: boolean;
}

interface RoleContextType {
  role: Role;
  setRole: (role: Role) => void;
  isFirstTimeUser: boolean;
  setIsFirstTimeUser: (isFirstTime: boolean) => void;
  onboardingStep: OnboardingStep;
  setOnboardingStep: (step: OnboardingStep) => void;
  preferences: Preferences;
  setPreferences: (prefs: Partial<Preferences>) => void;
}

const initialPreferences: Preferences = {
  darkMode: true,
  notifications: true,
  aiModel: 'balanced',
  codeAutoComplete: true,
  teamUpdates: true
};

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<Role>('user'); // Default role for demo purposes
  const [isFirstTimeUser, setIsFirstTimeUser] = useState<boolean>(false);
  const [onboardingStep, setOnboardingStep] = useState<OnboardingStep>(1);
  const [preferences, setPreferencesState] = useState<Preferences>(initialPreferences);
  
  const setPreferences = (prefs: Partial<Preferences>) => {
    setPreferencesState(prev => ({ ...prev, ...prefs }));
  };
  
  return (
    <RoleContext.Provider 
      value={{ 
        role, 
        setRole, 
        isFirstTimeUser, 
        setIsFirstTimeUser,
        onboardingStep, 
        setOnboardingStep,
        preferences,
        setPreferences
      }}
    >
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
