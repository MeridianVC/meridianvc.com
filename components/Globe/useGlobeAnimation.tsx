'use client';

import { useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useAnimationContext } from '../Animation/AnimationContext';

const useGlobeAnimation = (
  globe: THREE.Object3D | null,
  rendererRef: THREE.WebGLRenderer | null,
  camera: THREE.PerspectiveCamera | null,
  scene: THREE.Scene | null
) => {
  const scrollYProgress = useRef(useMotionValue(0));
  const previousScrollYProgress = useRef<number>(0);

  const { isAnimating } = useAnimationContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 5000; // fixed maximum scroll distance for animation (works fine)
      const progress = Math.min(scrollY / maxScroll, 1);
      scrollYProgress.current.set(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //useEffect to start the animation
  useEffect(() => {
    if (!globe || !rendererRef || !camera || isAnimating) return;

    // joey: i'm not sure why there is a scroll being forced here.
    //       it jumps the page to top and seems to work fine without it
    //       the whole race condition bit makes me worried i'm missing something
    //       but actually zero idea what could be racing here

    //force the scroll position to control for race conditions
    // window.scrollTo(0, 1); // this ensures there is a state change
    // window.scrollTo(0, 0); // and this immediately moves us back

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
