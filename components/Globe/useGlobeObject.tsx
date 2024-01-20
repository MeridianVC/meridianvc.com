// This custom hook is used to load the globe object and preprocess any textures, ideally it runs on the server
"use client";

import { useState, useEffect } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/Addons.js';
import { UseGlobeObjectProps } from '@/utilities/interfaces';

const useGlobeObject = ({ renderer }: UseGlobeObjectProps) => {
    const [globe, setGlobe] = useState<THREE.Object3D | void>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!renderer) {
            setIsLoading(false);
            return;
        }
        
        // Load texture and create material
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load('./globe_texture_a.jpg', (texture) => {
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
            const material = new THREE.MeshBasicMaterial({ map: texture });

            // Load the OBJ file, map texture, set initial scale and position
            const loader = new OBJLoader();
            loader.load('./globe.OBJ', (obj) => {
                obj.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.material = material;
                    }
                });
                obj.scale.set(1, 1, 1);
                obj.position.set(0, 0, 0);

                setGlobe(obj); // Set the loaded globe to state
            });
        });
    }, [renderer]);

    return globe;
};

export default useGlobeObject;
