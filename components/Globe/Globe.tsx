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

    // Globe initialization
    const globe = useGlobeObject({ renderer: rendererRef.current });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

    useGlobeAnimation(globe, rendererRef, camera, scene);

    useEffect(() => {
        if (!divRef.current) return;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        divRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Camera position
        camera.position.z = 130;
        camera.position.y = 120;

        // Add globe to scene if it exists
        if (globe) {
            scene.add(globe);
        }

        // Render scene and camera if renderer exists
        if (renderer) {
            renderer.render(scene, camera);
        }

        // Handle window resize
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
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