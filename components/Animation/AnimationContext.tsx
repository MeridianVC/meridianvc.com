"use client";

import React, { createContext, useContext, useState, ReactNode, FC } from 'react';

interface AnimationContextType {
  isAnimating: boolean;
  setIsAnimating?: React.Dispatch<React.SetStateAction<boolean>>;
  animationStarted: boolean;
  setAnimationStarted?: React.Dispatch<React.SetStateAction<boolean>>
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const useAnimationContext = (): AnimationContextType => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimationContext must be used within an AnimationProvider');
  }
  return context;
};

interface AnimationProviderProps {
  children: ReactNode;
}

const AnimationProvider: FC<AnimationProviderProps> = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);

  return (
    <AnimationContext.Provider value={{ isAnimating, setIsAnimating, animationStarted, setAnimationStarted}}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider
