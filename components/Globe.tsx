"use client";

import React, { FC, useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/Addons.js';

// Styled component for the globe -- delete if styling isn't needed
const GlobeStyle = styled.div``;

const Globe: FC = () => {
    const globeRef = useRef<HTMLDivElement>(null);

    const renderer = new THREE.WebGLRenderer

    //load texture and create material
    const texture = new THREE.TextureLoader().load('./globe_texture_a.jpg', function(texture) {
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    });
    const material = new THREE.MeshBasicMaterial({ map: texture }); // basic material has no lighting or shadow effects - perfect
    

    useEffect(() => {
        if (!globeRef.current) return;

        // Scene, camera, and renderer setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        globeRef.current.appendChild(renderer.domElement);

        // Define globe
        let GLOBE: THREE.Object3D | null | void = null;

        // Load the OBJ file, add to scene, asign to GLOBE variable
        const loader = new OBJLoader();
        GLOBE = loader.load('./globe.OBJ', function(obj) {
            obj.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = material;
                }
            });
            obj.scale.set(1, 1, 1); // Adjust scale as needed
            obj.position.set(0, 0, 0); // Adjust position as needed

            scene.add(obj);
            GLOBE = obj;
        });
        
        camera.position.z = 130;
        camera.position.y = 120;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            if (GLOBE) {
                GLOBE.rotation.y += 0.00075;
                // GLOBE.rotation.x += 0.001;
            }
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onWindowResize, false);

        // Clean up
        return () => {
            window.removeEventListener('resize', onWindowResize);
            globeRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return <GlobeStyle ref={globeRef} />;
};

export default Globe;
