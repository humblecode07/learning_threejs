import GUI from "lil-gui";
import { useEffect } from "react";
import * as THREE from "three";
import {
  DRACOLoader,
  GLTFLoader,
  OrbitControls,
} from "three/examples/jsm/Addons.js";

const RealisticRender = () => {
  useEffect(() => {
    let aspectRatio = window.innerWidth / window.innerHeight;

    // Loaders
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);
    const cubeTextureLoader = new THREE.CubeTextureLoader();

    // Lil Guigui
    const gui = new GUI();

    const debugObject = {};

    // Scene
    const scene = new THREE.Scene();

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2;
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

    gui.add(renderer, "toneMapping", {
      No: THREE.NoToneMapping,
      Linear: THREE.LinearToneMapping,
      Reinhard: THREE.ReinhardToneMapping,
      Cineon: THREE.CineonToneMapping,
      ACESFilmic: THREE.ACESFilmicToneMapping,
    });
    gui.add(renderer, "toneMappingExposure", 0, 10, 0.001);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

    camera.position.set(5, 5, -5);

    scene.add(camera);

    // Lighting
    // const ambientLight = new THREE.AmbientLight(0xffffff, 1);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(0.25, 3, -2.25);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.bottom = -10;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.near = 1;
    directionalLight.shadow.camera.far = 15;
    directionalLight.shadow.radius = 5;
    directionalLight.shadow.normalBias = 0.05;

    // const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);

    scene.add(directionalLight);

    gui.add(directionalLight, "intensity", 0, 10, 0.001).name("lightIntensity");
    gui.add(directionalLight.position, "x", -5, 5, 0.001).name("lightX");
    gui.add(directionalLight.position, "y", -5, 5, 0.001).name("lightY");
    gui.add(directionalLight.position, "z", -5, 5, 0.001).name("lightZ");

    // Orbit Controls
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;

    // Update all materials
    const updateAllMaterials = () => {
      scene.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          child.material.envMap = environmentMap;
          child.material.envMapIntensity = debugObject.envMapIntensity;
          child.material.needsUpdate = true;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    };

    // Loaders
    const environmentMap = cubeTextureLoader.load([
      "environmentMaps/0/px.png",
      "environmentMaps/0/nx.png",
      "environmentMaps/0/py.png",
      "environmentMaps/0/ny.png",
      "environmentMaps/0/pz.png",
      "environmentMaps/0/nz.png",
    ]);

    environmentMap.colorSpace = THREE.SRGBColorSpace;
    scene.background = environmentMap;
    scene.environment = environmentMap;

    debugObject.envMapIntensity = 5;

    gui
      .add(debugObject, "envMapIntensity", 0, 10, 0.001)
      .onChange(updateAllMaterials);

    // Models
    gltfLoader.load("models/FlightHelmet/glTF/FlightHelmet.gltf", (gltf) => {
      gltf.scene.scale.setScalar(2);
      gltf.scene.position.set(0, 0, 0);
      gltf.scene.rotation.y = Math.PI * 0.5;

      scene.add(gltf.scene);

      gui
        .add(gltf.scene.rotation, "y", -Math.PI, Math.PI, 0.001)
        .name("rotation");

      updateAllMaterials();
    });

    // Objects
    // const sphere = new THREE.Mesh(
    //    new THREE.SphereGeometry(1, 32, 32),
    //    new THREE.MeshStandardMaterial()
    // );

    // scene.add(sphere);

    // Animate
    const animate = () => {
      orbitControls.update();

      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    // Cleanup Func
    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
      gui.destroy();
    };
  }, []);

  return null;
};

export default RealisticRender;
