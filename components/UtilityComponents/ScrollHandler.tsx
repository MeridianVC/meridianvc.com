// This initializes the user scroll utility within a react functional component

import scrollListener from '../../utilities/handleUserScroll';
import { FC, useEffect } from 'react';

// USER SCROLL INPUT

const ScrollHandler: FC = () => {
    useEffect(() => {
        const handleScroll = (deltaX: number, deltaY: number) => {
          console.log('scroll event:', deltaX, deltaY);
        };
      
        // Set up scroll listener
        const removeScrollListener = scrollListener(handleScroll);
      
        // Cleanup function to remove event listener when component unmounts
        return removeScrollListener
      
    }, []);

    return null; // Does not render anything

};

export default ScrollHandler;

