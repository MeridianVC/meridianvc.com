"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useScroll, useMotionValue } from 'framer-motion';
import { useAnimationContext } from '../Animation/AnimationContext';

const useGlobeAnimation = (
    globe: THREE.Object3D | null,
    rendererRef: THREE.WebGLRenderer | null,
    camera: THREE.PerspectiveCamera | null,
    scene: THREE.Scene | null
) => {

    const { scrollYProgress: actualScrollYProgress } = useScroll();

    const scrollYProgress = useRef(useMotionValue(0));
    const previousScrollYProgress = useRef<number>(0);
    

    console.log('Globe Animation: scrollYProgress', scrollYProgress);
    console.log('Globe Animation: previous scrollYProgress', previousScrollYProgress);

    const { isAnimating } = useAnimationContext();

    useEffect(() => {
        actualScrollYProgress.on("change", (value) => scrollYProgress.current.set(value))
    }, [actualScrollYProgress])

    //useEffect to start the animation
    useEffect(() => {

        console.log('Globe Animation: useEffect globe', globe)
        console.log('Globe Animation: useEffect renderRef', rendererRef)
        console.log('Globe Animation: useEffect camera', camera)
        console.log('Globe Animation: useEffect isAnimating', isAnimating)

        if (!globe || !rendererRef || !camera || isAnimating) return; // added camera to this perhaps this ensures nothing strange happens

        //set the scroll position as soon we're ready to render
        console.log('window scroll toY 1:', window.scrollY);
        window.scrollTo(0,1); // this ensures there is a change
        console.log('window scroll toY 2:', window.scrollY);
        window.scrollTo(0,0); // and this immediately moves us back
        console.log('window scroll toY 2:', window.scrollY);

        console.log('Globe Animation useEffect animation running');

        const startTime = Date.now(); // Capture the start time of the animation

        // MAIN ROTATION ANIMATION FUNCTION, LOOPS CONTINUOUSLY
        const animate = () => {

            if (isAnimating) {
                return;
            }

            const currentTime = Date.now();

            // Check if 5 seconds have passed
            if (currentTime - startTime <= 2000) {
                console.log('scroll position and element:');
                console.log(document.body.scrollTop);
                console.log(document.scrollingElement?.scrollTop);
            }

            const currentScrollYProgress = scrollYProgress.current.get();
            const scrollDelta = currentScrollYProgress - previousScrollYProgress.current;

            if (scrollDelta >= 0) { // extra rotation only happens on scroll-down
                globe.rotation.y -= 0.00033 + scrollDelta * 1.77;
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
