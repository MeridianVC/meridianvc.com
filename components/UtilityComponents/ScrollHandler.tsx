"use client";

// This initializes the user scroll utility within a react functional component and adds the state to our React Context

import { FC, useEffect } from 'react';
import { useScrollContext } from '../../contexts/ScrollContext';

const ScrollHandler: FC = () => {
  const { setScrollPosition } = useScrollContext();

  useEffect(() => {
    const handleScroll = () => {

      const currentScrollX = window.scrollX;
      const currentScrollY = window.scrollY;

      setScrollPosition({ x: currentScrollX, y: currentScrollY });
      console.log('scroll state:', currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrollPosition]);

  return null;
};

export default ScrollHandler;

