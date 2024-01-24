"use client";

// This component loads 3d objects, creates the scene, and attaches itself to the DOM

import { FC, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import useGlobeObject from './useGlobeObject';
import useGlobeAnimation from './useGlobeAnimation';

// Styled component for the globe -- delete if styling isn't needed
const GlobeStyle = styled.div``;

const Globe: FC = () => {

    // Refs section
    const divRef = useRef<HTMLDivElement>(null); // the div the canvas element will attach to
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null); // the renderer itself
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const lightRef = useRef<THREE.Light| null>(null);
    const globeAddedRef = useRef<boolean>(false);

    // Instantiate scene
    if (!sceneRef.current) {
        sceneRef.current = new THREE.Scene();
    }

    // Instantiate camera
    if (!cameraRef.current) {
        cameraRef.current = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 1000);
    }

    // Instantiate light
    if (!lightRef.current) {
        lightRef.current = new THREE.AmbientLight(0xFFFFFF, 3.1);
    }

    // Initialize globe
    const globe = useGlobeObject({ renderer: rendererRef.current, scene: sceneRef.current });

    useEffect(() => {
        if (!divRef.current) return;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        divRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Camera setup
        if (cameraRef.current) {
            cameraRef.current.position.z = 50;
            cameraRef.current.position.y = 40;
            cameraRef.current.position.x = 100;
            cameraRef.current.lookAt(new THREE.Vector3(2,2,2));
        }

        // Light setup
        if (sceneRef.current && lightRef.current) {
            
            sceneRef.current.add(lightRef.current);
            // const axesHelper = new THREE.AxesHelper(50);
            // sceneRef.current.add(axesHelper);

        }

        // Add globe to scene if it exists
        if (globe && sceneRef.current &&!globeAddedRef.current) {
            sceneRef.current.add(globe);
            globeAddedRef.current = true;
        }

        // Render scene and camera if renderer exists
        if (renderer && sceneRef.current && cameraRef.current) {
            renderer.render(sceneRef.current, cameraRef.current);
        }

        if (globe) {
            globe.rotation.x = THREE.MathUtils.degToRad(-25.5)
        }

        // Handle window resize
        const onWindowResize = () => {
            if(renderer && sceneRef.current && cameraRef.current) {
                cameraRef.current.aspect = window.innerWidth / window.innerHeight;
                cameraRef.current.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.render(sceneRef.current, cameraRef.current);
            }

        };
        window.addEventListener('resize', onWindowResize, false);

        // Cleanup
        return () => {
            window.removeEventListener('resize', onWindowResize);
            if (divRef.current && renderer.domElement) {
                divRef.current.removeChild(renderer.domElement);
            }
        };
    }, [globe]);

    
    
    if (sceneRef.current) {
        console.log('testing');
        useGlobeAnimation(globe, rendererRef, cameraRef.current, sceneRef.current);
    }


    return (
        <GlobeStyle ref={divRef} />
    );
};

export default Globe;