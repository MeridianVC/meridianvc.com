import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';

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

        // Initialize globe rotation
        const initialRotationX = globe.rotation.x = THREE.MathUtils.degToRad(-23.5)

        // animate function, loops continuously
        const animate = () => {
            const currentScrollYProgress = scrollYProgress.get();
            const scrollDelta = currentScrollYProgress - previousScrollYProgress.current;

            globe.rotation.y -= 0.00055 + scrollDelta * 4;

            camera.position.y = 30 - currentScrollYProgress * 100; // Example calculation
            camera.lookAt(new THREE.Vector3(0, 0, 0));

            if (rendererRef.current) {
                rendererRef.current.render(scene, camera);
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
    }, [globe, camera, scene, scrollYProgress]);

};

export default useGlobeAnimation;
