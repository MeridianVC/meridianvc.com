"use client";

// This component loads 3d objects, creates the scene, and attaches itself to the DOM

import { FC, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import useGlobeObject from './useGlobeObject';
import useGlobeAnimation from './useGlobeAnimation';

const Globe: FC<{ style?: React.CSSProperties }> = ({ style }) => {

    // Set scale variables
    const baseScale = 3.33
    const maxScale = 3.75;
    const minScale = 2.5

    // Function to calculate scale based on window size
    const calculateScale = () => {
        const baseWidth = 1920; // base width for scale 1
        let scaleFactor = (window.innerWidth / baseWidth) * baseScale;

        scaleFactor = Math.max(scaleFactor, minScale); // min scale
        scaleFactor = Math.min(scaleFactor, maxScale); // max scale

        return scaleFactor;
    };

    // Function to calculate Y offset based on scale
    const calculateYOffset = (scale:number):number => {
        const yOffset = (maxScale - scale) * 1; // Adjust the factor as needed
        console.log(`Calculated Y Offset for scale ${scale}: ${yOffset}`);

        return -yOffset; // Negative for moving down
    };

    // Refs section
    const divRef = useRef<HTMLDivElement>(null); // the div for the canvas element to find and attach
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null); // the renderer itself
    const globeAddedRef = useRef<boolean>(false); // like a state variable but won't trigger rerender
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const ambientLightRef = useRef<THREE.AmbientLight| null>(null);
    const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
    const dirLightRef2 = useRef<THREE.DirectionalLight | null>(null);
    const dirLightRef3 = useRef<THREE.DirectionalLight | null>(null);

    // Instantiate scene
    if (!sceneRef.current) {
        sceneRef.current = new THREE.Scene();
        sceneRef.current.background = new THREE.Color(0xFFF5DC); // Cream color
    }

    // Instantiate camera
    if (!cameraRef.current) {
        cameraRef.current = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 1000);
    }

    // Instantiate directional lights
    if (!dirLightRef.current ) {
        dirLightRef.current = new THREE.DirectionalLight(0xFFFFFF, 1.5);
        dirLightRef.current.position.set(500, 1000, -1000); // Top right
        dirLightRef.current.lookAt(new THREE.Vector3(0,0,0))
    }
    if (!dirLightRef2.current) {
        dirLightRef2.current = new THREE.DirectionalLight(0xFFFFFF, 1.1);
        dirLightRef2.current.position.set(-1000, 2500, 2500); // left
        dirLightRef2.current.lookAt(new THREE.Vector3(0,0,0))
    }
    if (!dirLightRef3.current) {
        dirLightRef3.current = new THREE.DirectionalLight(0xFFFFFF, 1.5);
        dirLightRef3.current.position.set(1000, -3000, 0); // Bottom right
        dirLightRef3.current.lookAt(new THREE.Vector3(0,0,0))
    }

    // Instantiate ambient light
    if (!ambientLightRef.current) {
        ambientLightRef.current = new THREE.AmbientLight(0xFFFFFF, 1.7);
    }

    // Initialize globe
    const globe = useGlobeObject({ renderer: rendererRef.current, scene: sceneRef.current });

    useEffect(() => {
        if (!divRef.current) return;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        divRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // if (sceneRef.current) {
        //     const axesHelper = new THREE.AxesHelper(50);
        //     sceneRef.current.add(axesHelper);
        // }

        // Camera setup
        if (cameraRef.current) {
            cameraRef.current.position.z = 50;
            cameraRef.current.position.y = 30;
            cameraRef.current.position.x = 100
            cameraRef.current.lookAt(new THREE.Vector3(0,0,0));
        }

        // Light setup
        if (sceneRef.current && ambientLightRef.current) {
            sceneRef.current.add(ambientLightRef.current);
        }

        // Add directional lights to the scene
        if (sceneRef.current && dirLightRef.current && dirLightRef2.current && dirLightRef3.current) {
            sceneRef.current.add(dirLightRef.current);
            sceneRef.current.add(dirLightRef2.current);
            sceneRef.current.add(dirLightRef3.current);
        }

        // Add globe to scene
        if (globe && sceneRef.current &&!globeAddedRef.current) {
            sceneRef.current.add(globe);
            globeAddedRef.current = true;
        }

        // Render scene and camera
        if (renderer && sceneRef.current && cameraRef.current) {
            renderer.render(sceneRef.current, cameraRef.current);
        }

        // Initialize scale and position
        if (globe) {
            const initialScale = calculateScale();
            globe.scale.set(initialScale, initialScale, initialScale);
            const initialYOffset = calculateYOffset(initialScale);
            globe.position.y = initialYOffset;
        }

        // Handle window resize
        const onWindowResize = () => {
            if(renderer && sceneRef.current && cameraRef.current && globe) {
                cameraRef.current.aspect = window.innerWidth / window.innerHeight;
                cameraRef.current.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.render(sceneRef.current, cameraRef.current);

                // Calculate scale and position and apply it to the globe
                const newScale = calculateScale();
                globe.scale.set(newScale, newScale, newScale);
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

    useGlobeAnimation(globe, rendererRef, cameraRef.current, sceneRef.current);

    return (
        <div ref={divRef} style={style}/>
    );
};

export default Globe;