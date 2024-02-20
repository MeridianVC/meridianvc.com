"use client";

import { useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const useCleanAnimation = (isAnimating: boolean, allowScroll: boolean): void => {

  useEffect(() => {
    if (isAnimating) {
      disableBodyScroll(document.body);
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = "0px";
      document.body.style.overflowY = "scroll"; // ensures scroll bar is always set in view
      document.body.style.overflowX = 'hidden'; // no x-direction scroll ever
    }
  }, [isAnimating])

  useEffect(() => {
    if (allowScroll) {
      enableBodyScroll(document.body);
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    }

  }, [allowScroll]);
};

export default useCleanAnimation;
