import * as THREE from 'three';

export const preloadSphere = async () => {
  const manager = new THREE.LoadingManager();
  const loadTexture = (path: string) =>
    new Promise<THREE.Texture>((resolve, reject) => {
      new THREE.TextureLoader(manager).load(path, resolve, undefined, reject);
    });

  const texture = await loadTexture('texture-base.png');
  texture.colorSpace = THREE.SRGBColorSpace;

  const texturePole = await loadTexture('texture-pole.png');
  texturePole.colorSpace = THREE.SRGBColorSpace;

  const geometry = new THREE.SphereGeometry(1.5, 111, 111);
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const materialPole = new THREE.MeshStandardMaterial({ map: texturePole, transparent: true });

  const sphere = new THREE.Mesh(geometry, material);
  const spherePole = new THREE.Mesh(geometry, materialPole);

  sphere.add(spherePole);
  spherePole.position.set(-0.01, -0.01, 0);
  spherePole.rotation.y = -1.55;
  spherePole.rotation.x = 1.7;
  sphere.rotation.y = -0.15;

  return sphere;
};
