'use client';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import React, { Children, cloneElement, FC, isValidElement, ReactNode, useEffect } from 'react';
import { useAnimationContext } from './AnimationContext';

interface Props {
  children: ReactNode;
}

interface ChildrenProps {
  isAnimating: boolean;
  style?: React.CSSProperties;
}

const MainContentAnimation: FC<Props> = ({ children }) => {
  const { isAnimating } = useAnimationContext(); // animation context used to sync animations across mult components

  const animationControls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      if (!isAnimating) return;

      // turn opacity on
      await animationControls.start({
        opacity: 1,
        transition: { duration: 0, delay: 1 },
      });

      //animate to final position
      await animationControls.start({
        y: '0vh',
        scale: 1,
        transition: { duration: 0.7, delay: 0.8, ease: 'easeInOut' },
      });
    };

    void animate();
  }, [animationControls, isAnimating]); // Empty dependency array means this effect runs once on mount

  return (
    <AnimatePresence>
      <motion.div
        animate={animationControls}
        initial={{
          y: '105vh', // just outside of the viewport
          opacity: 0,
        }}
        key="main-content-animation">
        {Children.map(children, child =>
          isValidElement<ChildrenProps>(child)
            ? cloneElement(child, {
                style: !isAnimating ? { ...child.props.style, backgroundColor: 'transparent' } : child.props.style,
              })
            : child,
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default MainContentAnimation;
export type { Props as MainContentAnimationProps };
