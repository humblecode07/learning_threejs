import GUI from "lil-gui";
import React, { useEffect } from "react";
import * as THREE from "three";
import {
  DRACOLoader,
  GLTFLoader,
  OrbitControls,
  Timer,
} from "three/examples/jsm/Addons.js";
import firefliesVertexShader from "../shaders/fireflies/vertex.glsl";
import firefliesFragmentShader from "../shaders/fireflies/fragment.glsl";
import portalVertexShader from "../shaders/portal/vertex.glsl";
import portalFragmentShader from "../shaders/portal/fragment.glsl";

const Portal = () => {
  useEffect(() => {
    // Loaders
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    const textureLoader = new THREE.TextureLoader();
    const bakedTexture = textureLoader.load("baked.jpg");
    bakedTexture.flipY = false;
    bakedTexture.colorSpace = THREE.SRGBColorSpace;

    // Lil Guigui
    const gui = new GUI();

    // Debug
    const debugObject = {};

    debugObject.clearColor = "#1c1c1c";
    gui.addColor(debugObject, "clearColor").onChange(() => {
      renderer.setClearColor(debugObject.clearColor);
    });

    // Scene
    const scene = new THREE.Scene();
    let aspectRatio = window.innerWidth / window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    renderer.setClearColor(debugObject.clearColor);

    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize", () => {
      aspectRatio = window.innerWidth / window.innerHeight;
      camera.aspect = aspectRatio;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      firefliesMaterial.uniforms.uPixelRatio.value = Math.min(
        window.devicePixelRatio,
        2
      );
    });

    // Camera
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

    camera.position.set(4, 2, 4);

    // Orbit Control
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    // orbitControls.autoRotate = true;
    // controls.autoRotateSpeed = 2;

    /* Fireflies */

    console.log(firefliesFragmentShader);
    console.log(firefliesVertexShader);

    // Geometry
    const firefliesGeometry = new THREE.BufferGeometry();
    const firefliesCount = 30;
    const positionArray = new Float32Array(firefliesCount * 3);
    const scaleArray = new Float32Array(firefliesCount);

    for (let i = 0; i < firefliesCount; i++) {
      positionArray[i * 3 + 0] = Math.random() * 4 - 2;
      positionArray[i * 3 + 1] = Math.random() * 1.5;
      positionArray[i * 3 + 2] = Math.random() * 4 - 2;

      scaleArray[i] = Math.random();
    }

    firefliesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positionArray, 3)
    );
    firefliesGeometry.setAttribute(
      "aScale",
      new THREE.BufferAttribute(scaleArray, 1)
    );

    // Material
    const firefliesMaterial = new THREE.ShaderMaterial({
      vertexShader: firefliesVertexShader,
      fragmentShader: firefliesFragmentShader,
      uniforms: {
        uPixelRatio: {
          value: Math.min(window.devicePixelRatio, 2),
        },
        uSize: {
          value: 100,
        },
        uTime: {
          value: 0,
        },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    gui
      .add(firefliesMaterial.uniforms.uSize, "value")
      .min(0)
      .max(500)
      .step(1)
      .name("firefliesSize");

    // Points
    const fireflies = new THREE.Points(firefliesGeometry, firefliesMaterial);
    scene.add(fireflies);

    // Baked Material
    const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });

    // Pole Light Material
    const poleLightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffe5 });

    // Portal Light Material
    debugObject.portalColorStart = "#000000";
    debugObject.portalColorEnd = "#e51eff";

    gui.addColor(debugObject, "portalColorStart").onChange(() => {
      portalLightMaterial.uniforms.uColorStart.value.set(
        debugObject.portalColorStart
      );
    });
    gui.addColor(debugObject, "portalColorEnd").onChange(() => {
      portalLightMaterial.uniforms.uColorEnd.value.set(
        debugObject.portalColorEnd
      );
    });

    const portalLightMaterial = new THREE.ShaderMaterial({
      vertexShader: portalVertexShader,
      fragmentShader: portalFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColorStart: {
          value: new THREE.Color(0x000000),
        },
        uColorEnd: {
          value: new THREE.Color(0xe51eff),
        },
      },
    });

    // E51EFF

    // Models
    gltfLoader.load("portal.glb", (gltf) => {
      const bakedMesh = gltf.scene.children.find(
        (child) => child.name === "baked"
      );

      const portalLightMesh = gltf.scene.children.find(
        (child) => child.name === "Circle"
      );

      const poleLightAMesh = gltf.scene.children.find(
        (child) => child.name === "Cube014"
      );
      const poleLightBMesh = gltf.scene.children.find(
        (child) => child.name === "Cube049"
      );

      portalLightMesh.material = portalLightMaterial;
      poleLightAMesh.material = poleLightMaterial;
      poleLightBMesh.material = poleLightMaterial;
      bakedMesh.material = bakedMaterial;

      scene.add(gltf.scene);
    });

    // Animate
    const timer = new Timer();

    function animate() {
      timer.update();
      const elapsedTime = timer.getElapsed();
      orbitControls.update();

      firefliesMaterial.uniforms.uTime.value = elapsedTime;
      portalLightMaterial.uniforms.uTime.value = elapsedTime;

      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    return () => {
      gui.destroy();
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default Portal;
