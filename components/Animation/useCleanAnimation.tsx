'use client';

import { useEffect } from 'react';
import { useScrollLock } from '../hooks/useScrollLock';

const useCleanAnimation = (isAnimating: boolean, allowScroll: boolean): void => {
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isAnimating) {
      lockScroll();
      document.body.style.overflowY = 'scroll'; // ensures scroll bar is always set in view
      document.body.style.overflowX = 'hidden'; // no x-direction scroll ever
    }
  }, [isAnimating, lockScroll]);

  useEffect(() => {
    if (allowScroll) {
      unlockScroll();
    }
  }, [allowScroll, unlockScroll]);
};

export default useCleanAnimation;
