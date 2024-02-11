/// <reference lib="WebWorker" />

import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface InitMessage {
  action: 'init';
  canvas: OffscreenCanvas;
}

interface ResizeMessage {
  action: 'resize';
  width: number;
  height: number;
}

type WorkerMessage = InitMessage | ResizeMessage;

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let light: THREE.AmbientLight;

// Function to load the globe model
const loadGlobe = (scene: THREE.Scene): Promise<THREE.Group | null> => {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    console.log('before globe loaded');
    loader.load('/Box.glb', 
      (gltf: GLTF) => {
        console.log('Globe loaded');
        resolve(gltf.scene); // Resolve with the loaded GLTF scene
      }, 
      undefined, // No progress tracking needed
      (error) => {
        console.error("Error loading GLTF:", error);
        reject(error); // Reject the promise on error
      }
    );
  });
};

// Function to initialize the scene, camera, and renderer
const initThree = (canvas: OffscreenCanvas) => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(15, canvas.width / canvas.height, 0.1, 1000);

  // set positions
  camera.position.z = 50;
  camera.position.y = 30;
  camera.position.x = 80;
  camera.lookAt(new THREE.Vector3(0,0,0));
  light = new THREE.AmbientLight(0xFFFFFF, 3.1)

  renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
  renderer.setClearColor(0xFFF5DC, 1); // sets the color between each frame, essentially our default background color
  renderer.setAnimationLoop(animationLoop);
};

// Animation loop function
const animationLoop = () => {
  renderer.render(scene, camera);
};

self.onmessage = async (event: MessageEvent<WorkerMessage>) => {
  switch (event.data.action) {
    case 'init':
      if (event.data.canvas) {
        initThree(event.data.canvas);

        loadGlobe(scene).then((gltfScene) => {
          if (gltfScene) {
            scene.add(gltfScene);
            scene.background = new THREE.Color(0xFFF5DC);
            gltfScene.scale.set(3, 3, 3);
            gltfScene.position.set(0, 0, 0);
            scene.add(light);
          }
        }).catch((error) => {
          console.error('Failed to load the globe:', error);
        });
      }
      break;
    case 'resize':
      const { width, height } = event.data;
      if (renderer && camera) {
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
      break;
    
  }
};

export {}; // Ensure TypeScript treats this file as a module
