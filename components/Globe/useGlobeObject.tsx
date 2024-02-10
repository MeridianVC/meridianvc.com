// Assuming preloadGlobe.ts is correctly set up as before
import { useState, useEffect } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import globePromise from './preloadGlobe'; // Import the preloaded globe promise

interface GlobeObjectProps {
    renderer: THREE.WebGLRenderer | null,
    scene: THREE.Scene | null
}

const useGlobeObject = ({ renderer, scene }: GlobeObjectProps) => {
    const [globe, setGlobe] = useState<THREE.Object3D | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!renderer) {
            setIsLoading(false);
            return;
        }

        // Wait for the globePromise to resolve then manipulate globe
        globePromise.then((gltf: GLTF) => {
            const scene = gltf.scene;
            scene.scale.set(3, 3, 3);
            scene.position.set(8, 5, 5);

            // Set the loaded globe to state
            setGlobe(scene);
            setIsLoading(false);
            
        }).catch((error) => {
            console.error("Error loading GLTF:", error);
            setIsLoading(false);
        });
    }, [renderer]);

    return { globe, isLoading };
};

export default useGlobeObject;
