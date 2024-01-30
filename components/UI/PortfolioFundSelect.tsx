"use client";

import { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import './ui.css';

interface FundSelectorProps {
  onFundChange: (selectedFund: 'Fund I' | 'Fund II') => void;
};

const underlineStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '-2px',
  height: '2px',
  backgroundColor: '#444444',
  width: '0',
};

const FundSelector: React.FC<FundSelectorProps> = ({ onFundChange }) => {
  const [selectedFund, setSelectedFund] = useState<'Fund I' | 'Fund II'>('Fund I');

  const handleFundClick = (fund: 'Fund I' | 'Fund II') => {
    setSelectedFund(fund);
    onFundChange(fund);
  };

  return (
    <div>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {['Fund I', 'Fund II'].map((fund) => (
          <div key={fund} style={{ position: 'relative', cursor: 'pointer' }} onClick={() => handleFundClick(fund as 'Fund I' | 'Fund II')}>
            <div>{fund}</div>
            {selectedFund === fund && (
              <motion.div
                layoutId="underline"
                initial={false}
                animate={{ width: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={underlineStyle}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundSelector;
