import GUI from "lil-gui";
import * as THREE from "three";
import { useEffect } from "react";
import { OrbitControls, Sky, Timer } from "three/examples/jsm/Addons.js";
import waterVertex from "../shaders/raging-sea/vertex.glsl";
import waterFragment from "../shaders/raging-sea/fragment.glsl";

interface DebugObject {
  depthColor: string;
  surfaceColor: string;
}

const RagingSea = () => {
  useEffect(() => {
    // Lil GuiGui
    const gui = new GUI();
    const debugObject: DebugObject = {
      depthColor: "#1f82b7",
      surfaceColor: "#a3dcff",
    };

    // SCENE
    const scene = new THREE.Scene();
    let aspectRatio = window.innerWidth / window.innerHeight;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize", () => {
      aspectRatio = window.innerWidth / window.innerHeight;
      camera.aspect = aspectRatio;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // CAMERA
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

    camera.position.y = 1;
    camera.position.z = 0.5;

    // Orbit Control
    const orbitControl = new OrbitControls(camera, renderer.domElement);
    orbitControl.enableDamping = true;

    // Geometry
    const geometry = new THREE.PlaneGeometry(2, 2, 512, 512);

    // Color
    debugObject.depthColor = "#1f82b7";
    debugObject.surfaceColor = "#a3dcff";

    // Material
    const material = new THREE.ShaderMaterial({
      vertexShader: waterVertex,
      fragmentShader: waterFragment,
      uniforms: {
        uTime: { value: 0 },

        uBigWavesElevation: { value: 0.2 },
        uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) },
        uBigWavesSpeed: { value: 0.75 },

        uSmallWavesElevation: { value: 0.15 },
        uSmallWavesFrequency: { value: 3 },
        uSmallWavesSpeed: { value: 0.2 },
        uSmallWavesIteration: { value: 3.0 },

        uDepthColor: { value: new THREE.Color(debugObject.depthColor) },
        uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor) },
        uColorOffset: { value: 0.14 },
        uColorMultiplier: { value: 5 },
      },
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI * 0.5;

    scene.add(mesh);

    // Sky
    const sky = new Sky();
    sky.scale.set(100, 100, 100);
    scene.add(sky);

    sky.material.uniforms["turbidity"].value = 5;
    sky.material.uniforms["rayleigh"].value = 1;
    sky.material.uniforms["mieCoefficient"].value = 0.05;
    sky.material.uniforms["mieDirectionalG"].value = 0.95;
    sky.material.uniforms["sunPosition"].value.set(0.3, -0.05, -0.95);

    scene.fog = new THREE.FogExp2("#02343f", 0.2);

    // Debug
    gui
      .add(material.uniforms.uBigWavesElevation, "value")
      .min(0)
      .max(1)
      .step(0.001)
      .name("uBigWavesElevation");

    gui
      .add(material.uniforms.uBigWavesFrequency.value, "x")
      .min(0)
      .max(10)
      .step(0.001)
      .name("uBigWavesFrequencyX");

    gui
      .add(material.uniforms.uBigWavesFrequency.value, "y")
      .min(0)
      .max(10)
      .step(0.001)
      .name("uBigWavesFrequencyY");

    gui
      .add(material.uniforms.uBigWavesSpeed, "value")
      .min(0)
      .max(4)
      .step(0.001)
      .name("uBigWavesSpeed");

    gui.addColor(debugObject, "depthColor").onChange(() => {
      material.uniforms.uDepthColor.value.set(debugObject.depthColor);
    });

    gui.addColor(debugObject, "surfaceColor").onChange(() => {
      material.uniforms.uSurfaceColor.value.set(debugObject.surfaceColor);
    });

    gui
      .add(material.uniforms.uColorOffset, "value")
      .min(0)
      .max(1)
      .step(0.001)
      .name("uColorOffset");

    gui
      .add(material.uniforms.uColorMultiplier, "value")
      .min(0)
      .max(10)
      .step(0.001)
      .name("uColorMultiplier");

    gui
      .add(material.uniforms.uSmallWavesElevation, "value")
      .min(0)
      .max(1)
      .step(0.001)
      .name("uSmallWavesElevation");

    gui
      .add(material.uniforms.uSmallWavesFrequency, "value")
      .min(0)
      .max(30)
      .step(0.001)
      .name("uSmallWavesFrequency");

    gui
      .add(material.uniforms.uSmallWavesSpeed, "value")
      .min(0)
      .max(4)
      .step(0.001)
      .name("uSmallWavesSpeed");

    gui
      .add(material.uniforms.uSmallWavesIteration, "value")
      .min(0)
      .max(3)
      .step(1)
      .name("uSmallWavesIteration");

    // Animate
    const timer = new Timer();

    function animate() {
      timer.update();
      const elapsedTime = timer.getElapsed();
      orbitControl.update();

      material.uniforms.uTime.value = elapsedTime;

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

export default RagingSea;
