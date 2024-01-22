"use client";

import React, { useEffect } from 'react';
import * as THREE from 'three';

const useGlobeAnimation = (
    globe: THREE.Object3D | undefined,
    rendererRef: React.MutableRefObject<THREE.WebGLRenderer | null>,
    camera: THREE.PerspectiveCamera,
    scene: THREE.Scene
) => {
    useEffect(() => {
        if (!globe || !rendererRef.current) return;

        const animate = () => {
            globe.rotation.y += 0.00075;

            if (rendererRef.current) {
                rendererRef.current.render(scene, camera);
            }

            // Request the next frame
            requestID = requestAnimationFrame(animate);
        };

        // Start the animation loop
        let requestID = requestAnimationFrame(animate);

        // Cleanup function
        return () => {
            cancelAnimationFrame(requestID);
        };
    }, [globe, camera, scene]);
};

export default useGlobeAnimation;

