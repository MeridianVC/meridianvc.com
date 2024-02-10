// preloadGlobe.ts
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Promise to load the globe and return a GLTF object
const globePromise: Promise<GLTF> = new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load('./globe-light.glb', (gltf: GLTF) => {
        resolve(gltf);
    }, undefined, (error) => reject(error));
});

export default globePromise;
