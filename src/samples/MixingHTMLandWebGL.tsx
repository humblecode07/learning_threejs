import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader, OrbitControls, Timer } from "three/examples/jsm/Addons.js";

const MixingHTMLandWebGL = () => {
  const [loadingBar, setLoadingBar] = useState(0);
  const [isLoadingBarEnded, setIsLoadingBarEnded] = useState(false);

  const [divs, setDivs] = useState({
    divOne: {
      label: "1",
      text: "Front and top screen with HUD aggregating terrain and battle informations.",
      translateX: "0px",
      translateY: "0px",
      opacity: 0,
      visible: false,
    },
    divTwo: {
      label: "2",
      text: "Ventilation with air purifier and detection of environment toxicity.",
      translateX: "0px",
      translateY: "0px",
      opacity: 0,
      visible: false,
    },
    divThree: {
      label: "3",
      text: "Cameras supporting night vision and heat vision with automatic adjustment.",
      translateX: "0px",
      translateY: "0px",
      opacity: 0,
      visible: false,
    },
  });

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
    renderer.outputEncoding = THREE.SRGBColorSpace;
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

    camera.position.set(4, 1, -4);

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

    environmentMap.colrSpace = THREE.SRGBColorSpace;
    scene.background = environmentMap;
    scene.environment = environmentMap;

    // Models
    gltfLoader.load("models/DamagedHelmet/glTF/DamagedHelmet.gltf", (gltf) => {
      gltf.scene.scale.setScalar(2.5);
      gltf.scene.position.set(0, 0, 0);
      gltf.scene.rotation.y = Math.PI * 0.5;

      scene.add(gltf.scene);

      updateAllMaterials();
    });

    // Points of interest
    const raycaster = new THREE.Raycaster();

    const points = [
      {
        position: new THREE.Vector3(1.55, 0.3, -0.6),
      },
      {
        position: new THREE.Vector3(0.5, 0.8, -1.6),
      },
      {
        position: new THREE.Vector3(1.6, -1.3, -0.7),
      },
    ];

    // Animate
    const timer = new Timer();

    function animate() {
      timer.update();
      // const elapsedTime = timer.getElapsed();
      orbitControls.update();

      // Go through each point
      points.forEach((point, index) => {
        const screenPosition = point.position.clone();
        screenPosition.project(camera);

        raycaster.setFromCamera(screenPosition, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);

        let currentlyVisible = false;

        const divKeys = ["divOne", "divTwo", "divThree"];

        if (intersects.length === 0) {
          setDivs((prevDivs) => ({
            ...prevDivs,
            [divKeys[index]]: {
              ...prevDivs[divKeys[index]],
              visible: true,
            },
          }));
        } else {
          const intersectionDistance = intersects[0].distance;
          const pointDistance = point.position.distanceTo(camera.position);

          if (intersectionDistance < pointDistance) {
            setDivs((prevDivs) => ({
              ...prevDivs,
              [divKeys[index]]: {
                ...prevDivs[divKeys[index]],
                visible: false,
              },
            }));
          } else {
            setDivs((prevDivs) => ({
              ...prevDivs,
              [divKeys[index]]: {
                ...prevDivs[divKeys[index]],
                visible: true,
              },
            }));
          }
        }

        const screenX = screenPosition.x * 0.5 * window.innerWidth;
        const screenY = -screenPosition.y * 0.5 * window.innerHeight;

        setDivs((prevDivs) => ({
          ...prevDivs,
          [divKeys[index]]: {
            ...prevDivs[divKeys[index]],
            translateX: `${screenX}px`,
            translateY: `${screenY}px`,
          },
        }));
      });

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
      {Object.entries(divs).map(([key, value]) => (
        <div
          key={key}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translateX(${value.translateX}) translateY(${value.translateY})`,
            transition: "transform 0.3s",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "1.25rem",
              left: "1.25rem",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#00000077",
              border: "1px solid #ffffff77",
              color: "#ffffff",
              fontFamily: "Helvetica, Arial, sans-serif ",
              textAlign: "center",
              lineHeight: "40px",
              fontWeight: "100",
              fontSize: ".875rem",
              cursor: "help",
              transform: `${
                !isLoadingBarEnded
                  ? "scale(0, 0)"
                  : value.visible
                  ? "scale(1, 1)"
                  : "scale(0, 0)"
              } `,
              transition: "transform 1.3s",
            }}
            onMouseEnter={() => (value.opacity = 1)}
            onMouseLeave={() => (value.opacity = 0)}
          >
            {value.label}
          </div>
          <div
            style={{
              position: "absolute",
              top: "80px",
              left: "-70px",
              width: "200px",
              padding: "20px",
              borderRadius: "4px",
              background: "#00000077",
              border: "1px solid #ffffff77",
              color: "#ffffff",
              fontFamily: "Helvetica, Arial, sans-serif ",
              lineHeight: "1.3em",
              fontWeight: "100",
              fontSize: ".875rem",
              textAlign: "center",
              opacity: `${value.opacity}`,
              transition: "opacity 0.3s",
              willChange: "transform",
              pointerEvents: "none",
            }}
          >
            {value.text}
          </div>
        </div>
      ))}
    </>
  );
};

export default MixingHTMLandWebGL;
