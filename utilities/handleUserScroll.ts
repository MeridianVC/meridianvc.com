// This utility handles user scroll inputs
// We use the 'scroll' event listener to handle inputs from all necessary devices including trackpads, mouses, and touch screens

type ScrollCallback = (deltaX: number, deltaY: number) => void;

const scrollListener = (onScroll: ScrollCallback): (() => void) => {
  const handleScroll = () => {
    onScroll(window.scrollX, window.scrollY);
    console.log('scroll event:', window.scrollX, window.scrollY); // Remove this before production or leverage a testing framework
  };

  window.addEventListener('scroll', handleScroll);

  // Return a function to remove the event listener
  return () => window.removeEventListener('scroll', handleScroll);
};

export default scrollListener;