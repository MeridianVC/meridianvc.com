'use client';

import { Funds } from '@/mockDatabase/companies';
import React from 'react';
import { useCompanyContext } from './CompanyContext';
import { motion } from 'framer-motion';

const clsx = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

const FundSelectButton = ({
  current,
  fund,
  setFund,
}: {
  current: boolean;
  fund: keyof typeof Funds;
  setFund: (fund: keyof typeof Funds) => void;
}) => {
  return (
    <span className="relative">
      {current && (
        <motion.span
          layoutId="current-indicator"
          className="absolute inset-x-0 -bottom-2.5 h-0.5 rounded-full bg-[#444444]"
        />
      )}
      <button
        onClick={() => setFund(fund)}
        className={clsx(
          current ? 'text-[#000000]!' : '',
          'text-[#1E1E1E] hover:text-[#555555] hover:translate-y-[-0.25rem] focus:text-[#555555] focus:translate-y-[-1px] transition-all duration-300 ease cursor-pointer',
          'text-xl!'
        )}
        aria-label={`Switch to Fund ${fund}`}
      >
        Fund {fund}
      </button>
    </span>
  );
};

export const FundSelector: React.FC = () => {
  const { fund, setFund } = useCompanyContext();

  return (
    <div className="relative flex justify-center gap-10 mb-[clamp(0px, 3vw, 50px)]">
      {(['I', 'II'] as const).map((fundOption) => (
        <FundSelectButton key={fundOption} current={fund === fundOption} fund={fundOption} setFund={setFund} />
      ))}
    </div>
  );
};
