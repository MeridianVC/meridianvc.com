// This component is used to define screen-sized sections to place in the main scroll

import { FC } from 'react';
import { navHeight } from './NavHeight';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  isFullHeight?: boolean;
}

const Section: FC<SectionProps> = ({ id, children, className, style, isFullHeight }) => {
  const sectionStyle: React.CSSProperties = {
    minHeight: isFullHeight ? `calc(100vh - ${navHeight})` : undefined, // no height defined if height is not needed
    width: '100%',
    position: 'relative',
    borderLeft: '2px solid #444444',
    borderRight: '2px solid #444444',
    willChange: 'transform',
    ...style,
  };

  return (
    <section id={id} className={className} style={sectionStyle}>
      {children}
    </section>
  );
};

export default Section;
