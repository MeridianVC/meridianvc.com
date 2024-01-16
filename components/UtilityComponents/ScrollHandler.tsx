// This initializes the user scroll utility within a react functional component and adds the state to our React Context

import { FC, useEffect } from 'react';
import { useScroll } from '../../contexts/ScrollContext';
import scrollListener from '../../utilities/handleUserScroll';

// USER SCROLL INPUT

const ScrollHandler: FC = () => {
  const { setScrollPosition } = useScroll();

  useEffect(() => {
    const handleScroll = (deltaX: number, deltaY: number) => {
      setScrollPosition({ x: deltaX, y: deltaY }); // Set scroll position in the ScrollContext
    };
    
    const removeScrollListener = scrollListener(handleScroll);

    return removeScrollListener;
  }, [setScrollPosition]);

  return null; // This component sets scroll context, it does not return anything
};

export default ScrollHandler;

