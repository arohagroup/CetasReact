import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the type for the context value
type UtilContextType = {
  currentUserProfile: string;
  setProfile: (profile: string) => void;
  isMenuOpened: () => boolean;
  setMenuStatus: (status: boolean) => void;
};

// Create the context with an initial value of `undefined`
const UtilContext = createContext<UtilContextType | undefined>(undefined);

// Custom hook to use the context
export const useUtilService = (): UtilContextType => {
  const context = useContext(UtilContext);
  if (!context) {
    throw new Error('useUtilService must be used within a UtilProvider');
  }
  return context;
};

// Define the props type for the UtilProvider
type UtilProviderProps = {
  children: ReactNode;
};

// The UtilProvider component with the context value
export const UtilProvider = ({ children }: UtilProviderProps) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [currentUserProfile, setCurrentUserProfile] = useState('');

  const setProfile = (profile: string) => {
    setCurrentUserProfile(profile);
  };

  const isMenuOpened = () => {
    return menuStatus;
  };

  // The value that will be passed down via context
  const value: UtilContextType = {
    currentUserProfile,
    setProfile,
    isMenuOpened,
    setMenuStatus,
  };

  return (
    <UtilContext.Provider value={value}>
      {children}
    </UtilContext.Provider>
  );
};
