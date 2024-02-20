"use client";

import { useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const useCleanAnimation = (isAnimating: boolean): void => {

  disableBodyScroll(document.body);
  // window.scrollTo(0, 0);

  //all of these ensure animation is not adversely affected
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.body.style.top = "0px";
  document.body.style.overflowY = "scroll"; // ensures scroll bar is always set in view
  document.body.style.overflowX = 'hidden'; // no x-direction scroll ever

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the beginning on component mount
  }, [])

  //once animation is done, enable body scroll and remove the forced document styles
  useEffect(() => {
    if (!isAnimating) {
      enableBodyScroll(document.body);
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, 0); // fully ensure this is our scroll position, other useEffect didn't always work

    }

  }, [isAnimating]);
};

export default useCleanAnimation;
