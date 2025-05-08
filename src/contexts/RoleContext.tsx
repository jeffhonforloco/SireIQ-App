
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Role = 'user' | 'developer' | 'admin' | 'enterprise' | null;
export type OnboardingStep = 1 | 2 | 3 | 'completed';
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
  // Load role from localStorage or default to null
  const savedRole = localStorage.getItem('userRole');
  const [role, setRoleState] = useState<Role>(savedRole ? (savedRole as Role) : null);
  
  const [isFirstTimeUser, setIsFirstTimeUserState] = useState<boolean>(
    localStorage.getItem('isFirstTimeUser') === 'true'
  );
  
  const [onboardingStep, setOnboardingStepState] = useState<OnboardingStep>(
    localStorage.getItem('onboardingStep') ? 
      (localStorage.getItem('onboardingStep') as OnboardingStep) : 
      1
  );
  
  // Load preferences from localStorage or use defaults
  const savedPreferences = localStorage.getItem('userPreferences');
  const [preferences, setPreferencesState] = useState<Preferences>(
    savedPreferences ? JSON.parse(savedPreferences) : initialPreferences
  );
  
  // Persist role to localStorage whenever it changes
  const setRole = (newRole: Role) => {
    setRoleState(newRole);
    if (newRole) {
      localStorage.setItem('userRole', newRole);
    } else {
      localStorage.removeItem('userRole');
    }
  };
  
  // Persist isFirstTimeUser to localStorage
  const setIsFirstTimeUser = (isFirstTime: boolean) => {
    setIsFirstTimeUserState(isFirstTime);
    localStorage.setItem('isFirstTimeUser', String(isFirstTime));
  };
  
  // Persist onboardingStep to localStorage
  const setOnboardingStep = (step: OnboardingStep) => {
    setOnboardingStepState(step);
    localStorage.setItem('onboardingStep', String(step));
  };
  
  // Update and persist preferences
  const setPreferences = (prefs: Partial<Preferences>) => {
    const updatedPreferences = { ...preferences, ...prefs };
    setPreferencesState(updatedPreferences);
    localStorage.setItem('userPreferences', JSON.stringify(updatedPreferences));
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
