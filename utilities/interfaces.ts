// This file creates and exports any interface expected to be used more than once in the application

export interface ScrollContextProps {
    scrollPosition: {
        x: number;
        y: number;
    };
    setScrollPosition: (position: {x: number; y: number}) => void;
}