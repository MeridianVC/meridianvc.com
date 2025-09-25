'use client';

import { useMotionValue, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useAnimationContext } from '../Animation/AnimationContext';

const useGlobeAnimation = (
  globe: THREE.Object3D | null,
  rendererRef: THREE.WebGLRenderer | null,
  camera: THREE.PerspectiveCamera | null,
  scene: THREE.Scene | null,
) => {
  const { scrollYProgress: actualScrollYProgress } = useScroll();

  const scrollYProgress = useRef(useMotionValue(0));
  const previousScrollYProgress = useRef<number>(0);

  const { isAnimating } = useAnimationContext();

  useEffect(() => {
    actualScrollYProgress.on('change', value => scrollYProgress.current.set(value));
  }, [actualScrollYProgress]);

  //useEffect to start the animation
  useEffect(() => {
    if (!globe || !rendererRef || !camera || isAnimating) return;

    //force the scroll position to control for race conditions
    window.scrollTo(0, 1); // this ensures there is a state change
    window.scrollTo(0, 0); // and this immediately moves us back

    // MAIN ROTATION ANIMATION FUNCTION, LOOPS CONTINUOUSLY
    const animate = () => {
      if (isAnimating) {
        return;
      }

      const currentScrollYProgress = scrollYProgress.current.get();
      const scrollDelta = currentScrollYProgress - previousScrollYProgress.current;

      if (scrollDelta >= 0) {
        // extra rotation only happens on scroll-down
        globe.rotation.y -= 0.0002 + scrollDelta * 1.77;
      }

      if (camera) {
        camera.position.y = 4 - currentScrollYProgress * 10;
        camera.position.z = 6.5 - currentScrollYProgress * 2;
        camera.position.x = 6.5 - currentScrollYProgress * 2;
        camera.lookAt(new THREE.Vector3(0, 0, 0));
      }

      if (rendererRef && scene && camera) {
        rendererRef.render(scene, camera);
      }

      previousScrollYProgress.current = currentScrollYProgress;

      // This keeps it going by requesting the next frame
      requestID = requestAnimationFrame(animate);
    };

    // This starts the animation loop
    let requestID = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      cancelAnimationFrame(requestID);
    };
  }, [globe, camera, scene, isAnimating]);
};

export default useGlobeAnimation;
