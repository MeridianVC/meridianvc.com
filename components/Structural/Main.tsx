import React, { cloneElement, ReactElement, ReactNode } from 'react';

const mainContentStyle: React.CSSProperties = {
  width: '92%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  backgroundColor: '#FFF5DC',
  top: '0',
  marginLeft: 'auto',
  marginRight: 'auto',
};

interface Props {
  children: ReactNode;
  isAnimating?: boolean;
  style?: React.CSSProperties;
}

interface ChildrenProps {
  isAnimating?: boolean;
}

const Main: React.FC<Props> = ({ children, isAnimating, style }) => {
  return (
    <main style={{ ...mainContentStyle, ...style }}>
      {React.Children.map(
        children,
        (
          child, //Loop over all children and provide them with the isAnimating prop
          // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
        ) => cloneElement(child as ReactElement<ChildrenProps>, { isAnimating }),
      )}
    </main>
  );
};

export default Main;
