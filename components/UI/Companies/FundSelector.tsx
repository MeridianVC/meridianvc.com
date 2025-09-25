'use client';

import { Funds } from '@/mockDatabase/companies';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../../Text/Header';
import { useCompanyContext } from './CompanyContext';

const containerStyle: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
  marginBottom: 'clamp(0px, 3vw, 50px)',
};

const buttonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  position: 'relative',
  padding: '8px 0',
  transition: 'all 0.3s ease',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
};

const activeButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  color: '#000000',
};

const inactiveButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  color: '#888888',
};

const underlineStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '-10px',
  height: '2px',
  backgroundColor: '#444444',
  transition: 'all 0.3s ease',
  borderRadius: '1px',
};

export const FundSelector: React.FC = () => {
  const { fund, setFund } = useCompanyContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<keyof typeof Funds, HTMLButtonElement>>(new Map());
  const [underlinePosition, setUnderlinePosition] = useState({ left: 0, width: 0 });
  const [hoveredButton, setHoveredButton] = useState<keyof typeof Funds | null>(null);

  const updateUnderlinePosition = useCallback(() => {
    const activeButton = buttonRefs.current.get(fund);
    const container = containerRef.current;

    if (activeButton && container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      const left = buttonRect.left - containerRect.left;
      const width = buttonRect.width;

      setUnderlinePosition({ left, width });
    }
  }, [fund]);

  useEffect(() => {
    updateUnderlinePosition();
  }, [updateUnderlinePosition]);

  useEffect(() => {
    const handleResize = () => updateUnderlinePosition();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateUnderlinePosition]);

  const handleKeyDown = (event: React.KeyboardEvent, fundOption: keyof typeof Funds) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setFund(fundOption);
    }
  };

  const getButtonStyle = (fundOption: keyof typeof Funds) => {
    const isActive = fund === fundOption;
    const isHovered = hoveredButton === fundOption;
    if (isActive) return { ...activeButtonStyle, transform: isHovered ? 'translateY(-1px)' : 'none' };

    return {
      ...inactiveButtonStyle,
      color: isHovered ? '#555555' : '#888888',
      transform: isHovered ? 'translateY(-1px)' : 'none',
    };
  };

  return (
    <div style={containerStyle} ref={containerRef}>
      {(['I', 'II'] as const).map(fundOption => (
        <button
          key={fundOption}
          ref={el => {
            if (el) {
              buttonRefs.current.set(fundOption, el);
            } else {
              buttonRefs.current.delete(fundOption);
            }
          }}
          style={getButtonStyle(fundOption)}
          onClick={() => setFund(fundOption)}
          onKeyDown={e => handleKeyDown(e, fundOption)}
          onMouseEnter={() => setHoveredButton(fundOption)}
          onMouseLeave={() => setHoveredButton(null)}
          onFocus={() => setHoveredButton(fundOption)}
          onBlur={() => setHoveredButton(null)}
          aria-pressed={fund === fundOption}
          aria-label={`Switch to Fund ${fundOption}`}
          role="tab">
          <Header type="H6">Fund {fundOption}</Header>
        </button>
      ))}
      <div
        style={{
          ...underlineStyle,
          left: `${underlinePosition.left}px`,
          width: `${underlinePosition.width}px`,
        }}
      />
    </div>
  );
};
