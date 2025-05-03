
import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'user' | 'developer' | 'enterprise' | null;

type RoleContextType = {
  role: UserRole;
  setRole: (role: UserRole) => void;
  isFirstTimeUser: boolean;
  setIsFirstTimeUser: (value: boolean) => void;
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
  
  return (
    <RoleContext.Provider value={{ role, setRole, isFirstTimeUser, setIsFirstTimeUser }}>
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
