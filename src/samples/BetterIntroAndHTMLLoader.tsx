import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader, OrbitControls, Timer } from "three/examples/jsm/Addons.js";
import { gsap } from "gsap";

const BetterIntroAndHTMLLoader = () => {
  const [loadingBar, setLoadingBar] = useState(0);
  const [isLoadingBarEnded, setIsLoadingBarEnded] = useState(false);

  useEffect(() => {
    // Loaders
    const loadingManager = new THREE.LoadingManager(
      // Loaded
      () => {
        gsap.delayedCall(0.5, () => {
          gsap.to(overlayMaterial.uniforms.uAlpha, {
            duration: 3,
            value: 0,
            delay: 1,
          });
          setIsLoadingBarEnded(true);
        });
      },
      // Progress
      (itemUrl, itemsLoaded, itemsTotal) => {
        const progressRatio = itemsLoaded / itemsTotal;
        setLoadingBar(progressRatio);
      }
    );
    const gltfLoader = new GLTFLoader(loadingManager);
    const cubeTextureLoader = new THREE.CubeTextureLoader(loadingManager);

    // Scene
    const scene = new THREE.Scene();
    let aspectRatio = window.innerWidth / window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;

    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize", () => {
      aspectRatio = window.innerWidth / window.innerHeight;
      camera.aspect = aspectRatio;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Camera
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

    camera.position.set(1, 3, -10);

    // Orbit Control
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;

    // Overlay
    const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1);
    const overlayMaterial = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uAlpha: { value: 1 },
      },
      vertexShader: `
         void main() {
            gl_Position = vec4(position, 1.0);
         }
      `,
      fragmentShader: `
         uniform float uAlpha;

         void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
         }
      `,
    });

    const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial);
    scene.add(overlay);

    // Update all materials
    const updateAllMaterials = () => {
      scene.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          child.material.envMap = environmentMap;
          child.material.envMapIntensity = 5;
          child.material.needsUpdate = true;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    };

    // Environment map
    const environmentMap = cubeTextureLoader.load([
      "environmentMaps/5/px.jpg",
      "environmentMaps/5/nx.jpg",
      "environmentMaps/5/py.jpg",
      "environmentMaps/5/ny.jpg",
      "environmentMaps/5/pz.jpg",
      "environmentMaps/5/nz.jpg",
    ]);

    environmentMap.colorSpace = THREE.SRGBColorSpace;
    scene.background = environmentMap;
    scene.environment = environmentMap;

    // Models
    gltfLoader.load("models/FlightHelmet/glTF/FlightHelmet.gltf", (gltf) => {
      gltf.scene.scale.setScalar(10);
      gltf.scene.position.set(0, -2, 0);
      gltf.scene.rotation.y = Math.PI * 0.5;

      scene.add(gltf.scene);

      updateAllMaterials();
    });

    // Animate
    const timer = new Timer();

    function animate() {
      timer.update();
      const elapsedTime = timer.getElapsed();
      orbitControls.update();

      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          width: "100%",
          height: "2px",
          transform: `${
            isLoadingBarEnded ? "scaleX(0)" : `scaleX(${loadingBar})`
          }`,
          background: "#ffffff",
          transformOrigin: `top ${isLoadingBarEnded ? "right" : "left"}`,
          transition: `transform ${
            isLoadingBarEnded ? "1.3s ease-in-out" : "0.5s"
          }`,
          willChange: "transform",
        }}
      ></div>
    </>
  );
};

export default BetterIntroAndHTMLLoader;
