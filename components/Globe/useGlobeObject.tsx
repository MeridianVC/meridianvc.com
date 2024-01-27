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

        // Load the GLB/GLTF file
        const loader = new GLTFLoader();
        loader.load('./world10.glb', (gltf) => {

            // Scale and position the scene
            gltf.scene.scale.set(3, 3, 3);
            gltf.scene.position.set(8, 5, 5);

            // Adjust materials to reduce shininess
            gltf.scene.traverse((object) => {
                if (object) {
                    const mesh = object as THREE.Mesh;
                    if (mesh.material instanceof THREE.Material) {
                        const material = mesh.material as THREE.MeshStandardMaterial; // Assuming MeshStandardMaterial, adjust as needed

                        // Adjust the roughness and metalness for a more matte appearance
                        material.roughness = 1; // Increase roughness
                        material.metalness = 0; // Decrease metalness
                    }
                }
            });

            // Set the loaded globe to state
            setGlobe(gltf.scene);

        }, undefined, (error) => {
            console.error("Error loading GLTF:", error);
        });
    }, [renderer]);

    return globe;
};

export default useGlobeObject;