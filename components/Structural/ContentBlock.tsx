// This component is used to fill width and ensure components fill space and stack correctly

import React, { FC } from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const ContentBlock: FC<SectionProps> = ({ children, className, style }) => {

  const clientStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    ...style,
  };

  return (
    <div className={className} style={clientStyle}>
      {children}
    </div>
  );
};

export default ContentBlock;
