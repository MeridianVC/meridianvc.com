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
  lineHeight?: string;
}

const baseStyle: CSSProperties = {
  color: '#1E1E1E',
  overflowWrap: 'break-word',
  
};

//EDIT THESE AS YOU USE THEM, NOT ALL HAVE THE RIGHT PARAMETERS
const headerStyles: Record<string, CSSProperties> = {
  H1: { fontSize: 'clamp(40px, 6vw, 70px)', lineHeight: 'clamp(50px, 8vw, 100px)' },
  H2: { fontSize: 'clamp(35px, 5.5vw, 50px)', lineHeight: 'clamp(40px, 7vw, 80px)' },
  H3: { fontSize: 'clamp(30px, 5vw, 39.1px)', lineHeight: 'clamp(66px, 8vw, 144px)' },
  H4: { fontSize: 'clamp(25px, 4vw, 31.3px)', lineHeight: 'clamp(45px, 6vw, 60px)' },
  H5: { fontSize: 'clamp(15px, 3.5vw, 25px)', lineHeight: 'clamp(30px, 2.25vw, 100px)' },
  H6: { fontSize: 'clamp(10px, 3vw, 20px)', lineHeight: 'clamp(25px, 2vw, 100px)' },
};

const Header: FC<HeaderProps> = ({ type, isCentered, style, children, paddingLeft, marginTop, marginBottom, lineHeight, className }) => {

  const combinedHeaderStyle = {
    ...baseStyle,
    ...headerStyles[type],
    ...(isCentered && { textAlign: 'center'}), 
    ...{paddingLeft: `${paddingLeft}`},
    ...{marginTop: `${marginTop}`},
    ...{marginBottom: `${marginBottom}`},
    ...(lineHeight && {lineHeight:`${lineHeight}`}),
    ...style,
    
  };

  const combinedClassName = `${cssStyle} ${className || ''}`.trim();

  return createElement(`h${type.charAt(1)}`, { style: combinedHeaderStyle, className: combinedClassName }, children);
};

export default Header;
