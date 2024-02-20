"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useScroll, useMotionValue, easeInOut } from 'framer-motion';
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

    const { isAnimating } = useAnimationContext();

    useEffect(() => {
        actualScrollYProgress.on("change", (value) => scrollYProgress.current.set(value))
    }, [actualScrollYProgress])

    //useEffect to start the animation
    useEffect(() => {
        if (!globe || !rendererRef || isAnimating) return;


        // let opacity = 0; // Initial opacity
        // const opacityIncrement = 1 / 30; // Will occur over 60 frames

        // MAIN ROTATION ANIMATION FUNCTION, LOOPS CONTINUOUSLY
        const animate = () => {

            const currentScrollYProgress = scrollYProgress.current.get();
            const scrollDelta = currentScrollYProgress - previousScrollYProgress.current;

            if (scrollDelta >= 0) { // if scrolling down the website
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

            // // Increment opacity until it reaches 1
            // if (opacity < 1) {
            //     opacity += opacityIncrement;
            //     opacity = Math.min(opacity, 1); // Ensure it doesn't exceed 1
            //     globe.traverse((child) => {
            //         if (child instanceof THREE.Mesh && child.material && child.material.transparent) {
            //             child.material.opacity = opacity;
            //         }
            //     });
            // }

            previousScrollYProgress.current = currentScrollYProgress;

            // This keeps it going by requesting the next frame
            requestID = requestAnimationFrame(animate); // change to commit.then
        };

        // This starts the animation loop
        let requestID = requestAnimationFrame(animate);

        // this will set the scroll position to 0 right as soon as we start the animation, which is necessary in some browser situations
        const scrollToTop = () => window.scrollTo(0,0);
        requestAnimationFrame(scrollToTop)

        // Cleanup function
        return () => {
            cancelAnimationFrame(requestID);
        };
    }, [globe, camera, scene, scrollYProgress, isAnimating]);

};

export default useGlobeAnimation;
