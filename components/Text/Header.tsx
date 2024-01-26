import React, { FC, CSSProperties, ReactNode } from 'react';

interface HeaderProps {
  type: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  isBackgroundColored?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

const baseStyle: CSSProperties = {
  letterSpacing: '1%',
  color: '#1E1E1E',
  width: '70%',
  paddingLeft: '20px',
  paddingRight: '15px'
};

const backgroundColorStyle: CSSProperties = {
  // backgroundColor: '#FFF6DF',
  backgroundColor: 'rgba(255, 245, 220, .5)',
  mixBlendMode: 'multiply',
  
};

const headerStyles: Record<string, CSSProperties> = {
  H1: { fontSize: '61px', lineHeight: '90px' },
  H2: { fontSize: '48.8px', lineHeight: '137px' },
  H3: { fontSize: '39.1px', lineHeight: '144px' },
  H4: { fontSize: '31.3px', lineHeight: '151px' },
  H5: { fontSize: '25px', lineHeight: '158px' },
  H6: { fontSize: '20px', lineHeight: '165px' },
};

const Header: FC<HeaderProps> = ({ type, isBackgroundColored, style, children }) => {
  const combinedHeaderStyle = {
    ...baseStyle,
    ...headerStyles[type],
    ...(isBackgroundColored ? backgroundColorStyle : {}),
    ...style,
  };

  return React.createElement(`H${type.charAt(1)}`, { style: combinedHeaderStyle }, children);
};

export default Header;
