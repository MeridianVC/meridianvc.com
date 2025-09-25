'use client';

import { useCallback, useEffect, useRef } from 'react';

type UseScrollLockReturn = {
  lockScroll: () => void;
  unlockScroll: () => void;
};

/**
 * Custom hook for locking/unlocking scroll that works properly with Safari
 * without causing the jump-to-top issue that body-scroll-lock has
 */
export const useScrollLock = (): UseScrollLockReturn => {
  const isLockedRef = useRef<boolean>(false);

  const lockScroll = useCallback(() => {
    if (isLockedRef.current) return;

    const body = document.body;
    body.classList.add('modal-scroll-lock');

    isLockedRef.current = true;
  }, []);

  const unlockScroll = useCallback(() => {
    if (!isLockedRef.current) return;

    const body = document.body;
    body.classList.remove('modal-scroll-lock');

    isLockedRef.current = false;
  }, []);

  useEffect(() => {
    return () => {
      if (isLockedRef.current) unlockScroll();
    };
  }, [unlockScroll]);

  return { lockScroll, unlockScroll };
};
