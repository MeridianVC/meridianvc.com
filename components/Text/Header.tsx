import React, { FC } from 'react';

interface HeaderProps {
  type: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  isBackgroundColored?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const headerStyles: { [key: string]: React.CSSProperties } = {
  H1: { fontSize: '61px', lineHeight: '123px' },
  H2: { fontSize: '48.8px', lineHeight: '137px' },
  H3: { fontSize: '39.1px', lineHeight: '144px' },
  H4: { fontSize: '31.3px', lineHeight: '151px' },
  H5: { fontSize: '25px', lineHeight: '158px' },
  H6: { fontSize: '20px', lineHeight: '165px' },
};

const Header: FC<HeaderProps> = ({ type, isBackgroundColored, style, children }) => {
  const combinedHeaderStyle: React.CSSProperties = {
    ...headerStyles[type],
    letterSpacing: '1%',
    color: '#1E1E1E',
    ...(isBackgroundColored && { backgroundColor: '#FFF6DF' }),
    ...style,
  };

  return React.createElement(`h${type.charAt(1)}`, { style: combinedHeaderStyle }, children);
};

export default Header;
