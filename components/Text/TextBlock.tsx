import { FC, CSSProperties, ReactNode } from 'react';
import './text.css';

const textBlockStyles: Record<string, CSSProperties> = {
    BodyFranklin: { 
        fontSize: '16px',
        lineHeight: 'clamp(24px, 5vw, 26.4px)',
        fontFamily: 'var(--font-franklin)'
    },
    SmallFranklin: { 
        fontSize: '12.8px', 
        lineHeight: 'clamp(21.12px, 4vw, 23.232px)',
        fontFamily: 'var(--font-franklin)'
    },
    ExtraSmallFranklin: { 
        fontSize: '10.2px', 
        lineHeight: 'clamp(17.034px, 3.5vw, 18.7374px)',
        fontFamily: 'var(--font-franklin)'
    },
    BodyBaskerville: { 
        fontSize: '16px', 
        lineHeight: 'clamp(27px, 5vw, 29.7px)' 
    },
    SmallBaskerville: { 
        fontSize: '12.8px', 
        lineHeight: 'clamp(22.72px, 4vw, 25.992px)' 
    },
};

interface TextBlockProps {
  variant: 'BodyFranklin' | 'BodyBaskerville' | 'SmallFranklin' | 'SmallBaskerville' | 'ExtraSmallFranklin';
  style?: CSSProperties;
  children?: ReactNode;
}

const baseTextStyle: CSSProperties = {
  letterSpacing: '1%',
  color: '#1E1E1E',
  overflowWrap: 'break-word',
};

const TextBlock: FC<TextBlockProps> = ({ variant, style, children }) => {
  const combinedTextStyle = {
    ...baseTextStyle,
    ...textBlockStyles[variant],
    ...style,
  };

  return <div style={combinedTextStyle} className={`textBlockStyle ${variant}`}>{children}</div>;
};

export default TextBlock;
