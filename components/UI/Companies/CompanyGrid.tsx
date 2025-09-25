'use client';

import { Funds } from '@/mockDatabase/companies';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import CompanyCard from './CompanyCard'; // Import the CompanyCard component
import { useCompanyContext } from './CompanyContext';

const containerStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

const gridStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: 'clamp(10px, 5vw, 50px)',
  margin: '0 clamp(5vw, 13vw, 25vw)',
  maxWidth: '1200px',
};

export const CompanyGrid: FC = () => {
  const { fund } = useCompanyContext();
  const companies = Funds[fund];

  return (
    <div style={containerStyle}>
      <AnimatePresence mode="wait">
        <motion.div
          key={fund}
          style={gridStyle}
          className="company-grid-margin"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.05, delayChildren: 0.1 } }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}>
          {companies.map((company, index) => (
            <motion.div
              key={`${fund}-${index}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } }}>
              <CompanyCard {...company} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
