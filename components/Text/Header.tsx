import { FC, CSSProperties, ReactNode, createElement } from 'react';
import './text.css';

const cssStyle = 'headerWidth'; // from text css style sheet

interface HeaderProps {
  type: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  isCentered?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
  className?: string;
  paddingLeft?: string;
  marginTop?: string;
  marginBottom?: string;
}

const baseStyle: CSSProperties = {
  color: '#1E1E1E',
  overflowWrap: 'break-word',
  
};

const headerStyles: Record<string, CSSProperties> = {
  H1: { fontSize: 'clamp(36px, 8vw, 61px)', lineHeight: 'clamp(54px, 8vw, 90px)' },
  H2: { fontSize: 'clamp(28px, 6vw, 48.8px)', lineHeight: 'clamp(84px, 8vw, 137px)' },
  H3: { fontSize: 'clamp(22px, 5vw, 39.1px)', lineHeight: 'clamp(66px, 8vw, 144px)' },
  H4: { fontSize: 'clamp(18px, 4vw, 31.3px)', lineHeight: 'clamp(54px, 2vw, 151px)' },
  H5: { fontSize: 'clamp(15px, 3.5vw, 25px)', lineHeight: 'clamp(12px, 2.5vw, 100px)' },
  H6: { fontSize: 'clamp(12px, 3vw, 20px)', lineHeight: 'clamp(12px, 2vw, 100px)' },
};

const Header: FC<HeaderProps> = ({ type, isCentered, style, children, paddingLeft, marginTop, marginBottom, className }) => {

  const combinedHeaderStyle = {
    ...baseStyle,
    ...headerStyles[type],
    ...(isCentered && { textAlign: 'center'}), 
    ...{paddingLeft: `${paddingLeft}`},
    ...{marginTop: `${marginTop}`},
    ...{marginBottom: `${marginBottom}`},
    ...style,
    
  };

  const combinedClassName = `${cssStyle} ${className || ''}`.trim();

  return createElement(`H${type.charAt(1)}`, { style: combinedHeaderStyle, className: combinedClassName }, children);
};

export default Header;
