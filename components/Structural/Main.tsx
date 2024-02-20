import React, { ReactNode, cloneElement, ReactElement } from 'react';

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
      <main style={{...mainContentStyle, ...style}}>
        {/* <Spacer/> */}
        {React.Children.map(children, child =>  //Loop over all children and provide them with the isAnimating prop
            cloneElement(child as ReactElement<ChildrenProps>, { isAnimating })
)       }
      </main>
    );
  };
  
  export default Main;
  

  
  