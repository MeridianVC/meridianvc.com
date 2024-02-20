"use client";

import { useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const useCleanAnimation = (isAnimating: boolean): void => {

  disableBodyScroll(document.body);

  //all of these ensure animation is not adversely affected
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.body.style.top = "0px";
  document.body.style.overflowY = "scroll"; // ensures scroll bar is always set in view
  document.body.style.overflowX = 'hidden'; // no x-direction scroll ever

  //once animation is done, enable body scroll and remove the forced document styles
  useEffect(() => {
    if (!isAnimating) {
      enableBodyScroll(document.body);
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    }

  }, [isAnimating]);
};

export default useCleanAnimation;
