// This component is used to define screen-sized sections to place in the main scroll

import { FC } from 'react';
import { navHeight } from '@/components/UI/Navbar';


interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    isFullHeight?: boolean;
}

const Section: FC<SectionProps> = ({ id, children, className, style, isFullHeight }) => {

  console.log('hello');
  console.log(isFullHeight);

  const sectionStyle: React.CSSProperties = {
    minHeight: isFullHeight? `calc(100vh - ${navHeight})` : undefined, // no height defined if height is not needed
    width: '100%',
    position: 'relative',
    ...style,
  };

  return (
    <section id={id} className={className} style={sectionStyle}>
      {children}
    </section>
  );
};

export default Section;
