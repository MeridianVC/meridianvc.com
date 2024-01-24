"use client";
// This custom hook is used to load the globe object and preprocess any texture
// Ideally this ran on the server but it is not trivial to get this to work due to three.js's reliance on native features

import { useState, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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

        if(scene) {
            // Adding lights to the scene
            const ambientLight = new THREE.AmbientLight(0xFFF5DC, 1); // soft white light
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xFFF5DC, 2);
            directionalLight.position.set(2, 5, 5); // Adjust as needed
            scene.add(directionalLight);

        }

        // Load the GLB/GLTF file
        const loader = new GLTFLoader();
        loader.load('./world3.glb', (gltf) => {
            console.log("GLTF Loaded", gltf);

            gltf.scene.scale.set(2, 2, 2);
            gltf.scene.position.set(5, 5, 5);

            console.log('before rotation', gltf.scene.rotation.y)

            gltf.scene.rotation.x = THREE.MathUtils.degToRad(23.5);

            console.log('gltf rotation', gltf.scene.rotation.y);

            setGlobe(gltf.scene); // Set the loaded globe to state


        }, undefined, (error) => {
            console.error("Error loading GLTF:", error);
        });
    }, [renderer]);

    return globe;
};

export default useGlobeObject;