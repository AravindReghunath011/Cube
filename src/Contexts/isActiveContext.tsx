// src/contexts/ActiveContext.tsx
import React, { createContext, useState, ReactNode, FC, useContext } from 'react';

interface Customer {
    name: string;
    title: string;
    address: string;
  }

interface ActiveContextType {
  setActiveCustomer: React.Dispatch<React.SetStateAction<Customer | null>>;
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    activeCustomer: Customer |null;
}

const ActiveContext = createContext<ActiveContextType | undefined>(undefined);

const ActiveProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeCustomer, setActiveCustomer] = useState<Customer | null>(null);

  return (
    <ActiveContext.Provider value={{ activeIndex, setActiveIndex, activeCustomer, setActiveCustomer}}>
      {children}
    </ActiveContext.Provider>
  );
};

const useActiveContext = () => {
  const context = useContext(ActiveContext);
  if (context === undefined) {
    throw new Error('useActiveContext must be used within an ActiveProvider');
  }
  return context;
};

export { ActiveProvider, ActiveContext,useActiveContext };
