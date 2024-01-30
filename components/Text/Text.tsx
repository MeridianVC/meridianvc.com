import { FC, CSSProperties, ReactNode } from 'react';
import './text.css';

const textBlockStyles: Record<string, CSSProperties> = {
    BodyFranklin: { 
        fontSize: 'clamp(14px, 2vw, 16px)',
        lineHeight: 'clamp(24px, 5vw, 26.4px)',
        fontFamily: 'var(--font-franklin)'
    },
    SmallFranklin: { 
        fontSize: 'clamp(10px, 1.8vw, 12.8px)', 
        lineHeight: 'clamp(21.12px, 4vw, 23.232px)',
        fontFamily: 'var(--font-franklin)',
        letterSpacing: '.44px',
    },
    ExtraSmallFranklin: { 
        fontSize: 'clamp(9px, 1.5vw, 10.2px)', 
        lineHeight: 'clamp(17.034px, 3.5vw, 18.7374px)',
        fontFamily: 'var(--font-franklin)',
        letterSpacing: '2px',
    },
    BodyBaskerville: { 
        fontSize: 'clamp(14px, 2vw, 16px)', 
        lineHeight: 'clamp(27px, 5vw, 29.7px)' 
    },
    SmallBaskerville: { 
        fontSize: 'clamp(10px, 1.8vw, 12.8px)', 
        lineHeight: 'clamp(22.72px, 4vw, 25.992px)' 
    },
};

interface TextProps {
  variant: 'BodyFranklin' | 'BodyBaskerville' | 'SmallFranklin' | 'SmallBaskerville' | 'ExtraSmallFranklin';
  style?: CSSProperties;
  children?: ReactNode;
  paddingLeft?: string;
  className?: string;
}

const baseTextStyle: CSSProperties = {
  color: '#1E1E1E',
  overflowWrap: 'break-word',
};

const Text: FC<TextProps> = ({ variant, style, children, paddingLeft, className }) => {
  const combinedTextStyle = {
    ...baseTextStyle,
    ...textBlockStyles[variant],
    ...style,
    ...{paddingLeft: `${paddingLeft}`},
  };

  return <p style={combinedTextStyle} className={`textBlockStyle ${variant} ${className}`}>{children}</p>;
};

export default Text;
