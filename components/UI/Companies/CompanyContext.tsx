'use client';

import type { Funds } from '@/mockDatabase/companies';
import { createContext, ReactNode, use, useState } from 'react';

type CompanyContextType = { fund: keyof typeof Funds; setFund: (fund: keyof typeof Funds) => void };

const CompanyContext = createContext<CompanyContextType | null>(null);

export const CompanyProvider = ({ children }: { children: ReactNode }) => {
  const [fund, setFund] = useState<keyof typeof Funds>('II');

  const value = { fund, setFund } satisfies CompanyContextType;

  return <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>;
};

export const useCompanyContext = () => {
  const context = use(CompanyContext);
  if (!context) throw new Error('useCompanyContext must be used within a CompanyProvider');
  return context;
};
