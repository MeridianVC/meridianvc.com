// This component is used to define screen-sized sections to place in the main scroll

import { FC } from 'react';
import { navHeight } from '@/components/UI/Navbar';


interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Section: FC<SectionProps> = ({ id, children, className, style }) => {

  const sectionStyle: React.CSSProperties = {
    height: `100vh - ${navHeight}`,
    minHeight: `100vh - ${navHeight}`,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'space-between',
    ...style,
  };

  return (
    <section id={id} className={className} style={sectionStyle}>
      {children}
    </section>
  );
};

export default Section;
