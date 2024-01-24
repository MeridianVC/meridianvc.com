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

    //instantiate things if they don't already exist as a ref
    if (!sceneRef.current) {
        sceneRef.current = new THREE.Scene();
    }

    if (!cameraRef.current) {
        cameraRef.current = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
    }

    // Globe initialization
    const globe = useGlobeObject({ renderer: rendererRef.current, scene: sceneRef.current });

    useGlobeAnimation(globe, rendererRef, cameraRef.current, sceneRef.current);

    useEffect(() => {
        if (!divRef.current) return;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        divRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        if (cameraRef.current) {
            cameraRef.current.position.z = 60;
            cameraRef.current.position.y = 0;
            cameraRef.current.position.x = 10;
        }

        // Add globe to scene if it exists
        if (globe && sceneRef.current) {
            sceneRef.current.add(globe);
        }

        // Render scene and camera if renderer exists
        if (renderer && sceneRef.current && cameraRef.current) {
            renderer.render(sceneRef.current, cameraRef.current);
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

    return (
        <GlobeStyle ref={divRef} />
    );
};

export default Globe;