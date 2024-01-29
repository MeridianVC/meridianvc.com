import React, { FC, CSSProperties, ReactNode } from 'react';
import './text.css';

const cssStyle = 'headerWidth'; // from text css style sheet

interface HeaderProps {
  type: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  isCentered?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
  className?: string;
}

const baseStyle: CSSProperties = {
  letterSpacing: '1%',
  color: '#1E1E1E',
  paddingLeft: 'clamp(3vw, 3vw, 20px)',
  overflowWrap: 'break-word',
  marginTop: 'clamp(2vh, 7vh, 10vh)',
  marginBottom: 'clamp(2vh, 5vh, 8vh)'
  
};

const headerStyles: Record<string, CSSProperties> = {
  H1: { fontSize: 'clamp(36px, 8vw, 61px)', lineHeight: 'clamp(54px, 8vw, 90px)' },
  H2: { fontSize: 'clamp(28px, 6vw, 48.8px)', lineHeight: 'clamp(84px, 8vw, 137px)' },
  H3: { fontSize: 'clamp(22px, 5vw, 39.1px)', lineHeight: 'clamp(66px, 8vw, 144px)' },
  H4: { fontSize: 'clamp(18px, 4vw, 31.3px)', lineHeight: 'clamp(54px, 8vw, 151px)' },
  H5: { fontSize: 'clamp(15px, 3.5vw, 25px)', lineHeight: 'clamp(45px, 8vw, 158px)' },
  H6: { fontSize: 'clamp(12px, 3vw, 20px)', lineHeight: 'clamp(36px, 8vw, 165px)' },
};


const Header: FC<HeaderProps> = ({ type, isCentered, style, children, className }) => {

  const combinedHeaderStyle = {
    ...baseStyle,
    ...headerStyles[type],
    ...(isCentered && { textAlign: 'center', paddingLeft: 0  }), 
    ...style,
    
  };

  const combinedClassName = [cssStyle, className].filter(Boolean).join(' ');

  return React.createElement(`H${type.charAt(1)}`, { style: combinedHeaderStyle, className: cssStyle }, children);
};

export default Header;
