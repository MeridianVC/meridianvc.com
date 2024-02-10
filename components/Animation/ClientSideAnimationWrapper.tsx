"use client";

import { motion } from 'framer-motion';
import { FC, ReactNode, useState, useEffect } from 'react';
import FillHorizontal from '../Structural/FillHorizontal';
import useCleanAnimation from './useCleanAnimation'; // Ensure this path is correct

interface Props {
  children: ReactNode;
}
const ClientSideAnimationWrapper: FC<Props> = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  useCleanAnimation(isAnimating);

  useEffect(() => {
    // Start the animation
    setIsAnimating(true);

    // Assume animation completes after a specific duration, adjust as necessary
    const timer = setTimeout(() => setIsAnimating(false), 2500);

    return () => clearTimeout(timer);
  }, []);
  

  const animationVariants = {
    initial: {
      x: 1000, // Start below the view
      // scale: 0.85, // Start a bit scaled down
      // rotate: -45, // Start with a slight rotation
    },
    animate: {
      x: [1000, 0], // Bounce effect
      // scale: [0.85, 1], // Pulse effect
      // rotate: [-45, 45, 0], // Swing effect
      transition: {
        // scale: { duration: 1.0, times: [0, 1], delay: 1, ease: "easeInOut" },
        x: { duration: 1.0, times: [0, 1], delay: 1, ease: "easeInOut" },
        rotate: { duration: 10, times: [0, 1], ease: "easeInOut" }
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 2.5 },
      x: 0,
    },
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      key="main-animation-wrapper"
    >
      <FillHorizontal />
      <FillHorizontal behind={true} />
      {children}
    </motion.div>
  );
};

export default ClientSideAnimationWrapper
