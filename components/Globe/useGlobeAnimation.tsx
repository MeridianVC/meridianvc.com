"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';

const useGlobeAnimation = (
    globe: THREE.Object3D | null,
    rendererRef: THREE.WebGLRenderer | null,
    camera: THREE.PerspectiveCamera | null,
    scene: THREE.Scene | null,
    isAnimationReady?: boolean,
) => {

    const { scrollYProgress } = useScroll();
    const previousScrollYProgress = useRef<number>(0);

    useEffect(() => {
        if (!globe || !rendererRef) return;

        // animate function, loops continuously
        const animate = () => {
            const currentScrollYProgress = scrollYProgress.get();
            const scrollDelta = currentScrollYProgress - previousScrollYProgress.current;

            if (scrollDelta >= 0) { // if scrolling down the website
                globe.rotation.y -= 0.00022 + scrollDelta * 1.77;
            }

            if (camera) {
                camera.position.y = 4 - currentScrollYProgress * 9;
                camera.position.z = 6.5 - currentScrollYProgress * 2;
                camera.position.x = 6.5 - currentScrollYProgress * 2;
                camera.lookAt(new THREE.Vector3(0, 0, 0));
            }

            if (rendererRef && scene && camera) {
                rendererRef.render(scene, camera);
            }

            // globe.traverse((child: THREE.Object3D) => {
            // // Use type assertion to check if the child is a Mesh and has a material
            // if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
            //     const mesh = child as THREE.Mesh; // Now 'mesh' is typed as Mesh, providing access to 'material'
                
            //     // Some materials might be an array of materials
            //     if (Array.isArray(mesh.material)) {
            //     mesh.material.forEach(material => {
            //         material.transparent = true;
            //         material.opacity = 1 - currentScrollYProgress/10;
            //     });
            //     } else {
            //     mesh.material.transparent = true;
            //     mesh.material.opacity = 1 - currentScrollYProgress/10;
            //     }
            // }
            // });

            previousScrollYProgress.current = currentScrollYProgress;

            // This keeps it going by requesting the next frame
            requestID = requestAnimationFrame(animate); // change to commit.then
        };

        // This starts the animation loop
        let requestID = requestAnimationFrame(animate);

        // Cleanup function
        return () => {
            cancelAnimationFrame(requestID);
        };
    }, [globe, camera, scene, scrollYProgress]);

};

export default useGlobeAnimation;
