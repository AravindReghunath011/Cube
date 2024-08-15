
import React, { createContext, useState, ReactNode, FC } from 'react';

interface Customer {
    name: string;
    title: string;
    address: string;
    photos: string[];
  }

interface ActiveContextType {
    activeCustomer: Customer |null;
    setActiveCustomer: React.Dispatch<React.SetStateAction<Customer | null>>;
}

const ActiveContext = createContext<ActiveContextType | undefined>(undefined);

const ActiveProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [activeCustomer, setActiveCustomer] = useState<Customer | null>(null);

  return (
    <ActiveContext.Provider value={{ activeCustomer, setActiveCustomer }}>
      {children}
    </ActiveContext.Provider>
  );
};

export { ActiveProvider, ActiveContext };
