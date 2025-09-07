import GUI from "lil-gui";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls, Timer } from "three/examples/jsm/Addons.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

const PerformanceTips = () => {
  useEffect(() => {
    // Lil Guigui
    // const gui = new GUI();

    // Scene
    const scene = new THREE.Scene();
    let aspectRatio = window.innerWidth / window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize", () => {
      aspectRatio = window.innerWidth / window.innerHeight;
      camera.aspect = aspectRatio;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    console.log(renderer.info);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.set(2, 2, 6);

    // Orbit Control
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;

    // Test Meshes
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.MeshStandardMaterial()
    );
    cube.castShadow = true;
    cube.receiveShadow = false;
    cube.position.set(-5, 0, 0);
    scene.add(cube);

    const torusKnot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1, 0.4, 128, 32),
      new THREE.MeshStandardMaterial()
    );

    torusKnot.castShadow = true;
    torusKnot.receiveShadow = false;
    scene.add(torusKnot);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshStandardMaterial()
    );

    sphere.castShadow = true;
    sphere.receiveShadow = false;
    sphere.position.set(5, 0, 0);
    scene.add(sphere);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshStandardMaterial()
    );

    floor.castShadow = false;
    floor.receiveShadow = true;
    floor.position.set(0, -2, 0);
    floor.rotation.x = -Math.PI * 0.5;
    scene.add(floor);

    // Lights
    const directinalLight = new THREE.DirectionalLight("#ffffff", 1);
    directinalLight.castShadow = true;
    directinalLight.shadow.mapSize.set(1024, 1024);
    directinalLight.shadow.camera.far = 15;
    directinalLight.shadow.normalBias = 0.05;
    scene.add(directinalLight);

    // Camera Helper
    const cameraHelper = new THREE.CameraHelper(directinalLight.shadow.camera);
    scene.add(cameraHelper);

    // Stats
    const stats = new Stats();
    document.body.appendChild(stats.dom);

    // Animate
    const timer = new Timer();

    function animate() {
      timer.update();
      stats.update();
      orbitControls.update();
      const elapsedTime = timer.getElapsed();
      const radius = 5;

      torusKnot.rotation.y = elapsedTime * 0.1;

      directinalLight.position.x = Math.cos(elapsedTime) * radius;
      directinalLight.position.z = Math.sin(elapsedTime) * radius;

      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default PerformanceTips;
