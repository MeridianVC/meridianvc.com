"use client";

// This component instantiates the globe animation and manipulates it with user-scroll. 

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion-3d';

const useGlobeAnimation = (
    globe: THREE.Object3D | undefined,
    rendererRef: React.MutableRefObject<THREE.WebGLRenderer | null>,
    camera: THREE.PerspectiveCamera,
    scene: THREE.Scene
) => {

    const { scrollYProgress } = useScroll();
    const previousScrollYProgress = useRef<number>(0);

    useEffect(() => {
        if (!globe || !rendererRef.current) return;

        //animate function, loops continuously
        const animate = () => {
            const currentScrollYProgress = scrollYProgress.get(); // Get current scroll progress
            const scrollDelta = currentScrollYProgress - previousScrollYProgress.current; // Calculate the change in scroll position

            globe.rotation.y -= 0.00055 + scrollDelta * 5;

            if (rendererRef.current) {
                rendererRef.current.render(scene, camera);
            }

            previousScrollYProgress.current = currentScrollYProgress

            // Request the next frame
            requestID = requestAnimationFrame(animate);
        };

        // Start the animation loop
        let requestID = requestAnimationFrame(animate);

        // Cleanup function
        return () => {
            cancelAnimationFrame(requestID);
        };
    }, [globe, camera, scene,]);
};

export default useGlobeAnimation;

