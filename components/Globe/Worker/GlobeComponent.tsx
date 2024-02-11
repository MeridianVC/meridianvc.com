"use client";

import { useRef, useEffect } from 'react';

const GlobeComponent: React.FC = () => {

  // Style for the canvas to cover the entire screen, adjustable as needed
  const globeStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF5DC',
    zIndex: -2
  };

  // Initialize the worker outside the useEffect to ensure it's not recreated on every render
  const workerRef = useRef<Worker>();
  let worker = workerRef.current;

  // Setup a callback ref that will be called with the canvas DOM element
  // This ref callback is invoked both when the component mounts (with the canvas element) and when it unmounts (null)
  const canvasRef = (canvas: HTMLCanvasElement | null) => {
    if (canvas) {

      // Ensure the worker is only initialized once
      if (!worker) {
        worker = new Worker(new URL('./globeWorker.ts', import.meta.url), { type: 'module' });

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const offScreenCanvas = canvas.transferControlToOffscreen();
        worker.postMessage({ action: 'init', canvas: offScreenCanvas }, [offScreenCanvas]);

        worker.onmessage = (event) => {
          //not needed for now
        };
      }
    } else {
      if (worker) {
        worker.terminate(); // terminate the worker
        worker = undefined; // Clear the worker reference
      }
    }
  };

  // THIS SECTION IS USED FOR VARIABLES IMPORTANT IN SENDING TO THE WORKER TO AFFECT WINDOW RESIZING
  // Set scale variables
  const baseScale = 3.33;
  const maxScale = 3.75;
  const minScale = 2.5;

  // Function to calculate scale based on window size
  const calculateScale = () => {
      const baseWidth = 1920; // base width for scale 1
      let scaleFactor = (window.innerWidth / baseWidth) * baseScale;

      scaleFactor = Math.max(scaleFactor, minScale); // min scale
      scaleFactor = Math.min(scaleFactor, maxScale); // max scale

      return scaleFactor;
  };

  // Function to calculate Y offset based on scale
  const calculateYOffset = (scale:number):number => {
      const yOffset = (maxScale - scale) * 1; // Adjust the factor as needed
      return -yOffset; // Negative for moving down
  };

  // use effect for handling the resize of the window
  useEffect(() => {
    const handleResize = () => {
      if (worker) {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Post message to worker with new dimensions
        worker.postMessage({ action: 'resize', width, height });
      }
    };

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Initial resize call to ensure correct size from the start
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this runs once on mount



  return <canvas ref={canvasRef} style={globeStyle}></canvas>;
};

export default GlobeComponent;

