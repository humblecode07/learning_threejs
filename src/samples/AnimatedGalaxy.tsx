import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls, Timer } from "three/examples/jsm/Addons.js";
import galaxyVertexShader from "../shaders/animated-galaxy/vertex.glsl";
import galaxyFragmentShader from "../shaders/animated-galaxy/fragment.glsl";
import GUI from "lil-gui";

const AnimatedGalaxy = () => {
  useEffect(() => {
    // Lil Guigui
    const gui = new GUI();

    // SCENE
    const scene = new THREE.Scene();
    let aspectRatio = window.innerWidth / window.innerHeight;

    // Renderer
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

    // Camera
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

    camera.position.set(0, 2, 2);

    // Orbit Controls
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;

    // Galaxy
    interface Parameters {
      count: number;
      size: number;
      radius: number;
      branches: number;
      spin: number;
      randomness: number;
      randomnessPower: number;
      insideColor: THREE.ColorRepresentation;
      outsideColor: THREE.ColorRepresentation;
    }

    const parameters: Parameters = {
      count: 100000,
      size: 0.005,
      radius: 5,
      branches: 3,
      spin: 1,
      randomness: 0.5,
      randomnessPower: 3,
      insideColor: "#ffb8f5",
      outsideColor: "#ffffff",
    };

    let particlesGeometry: THREE.BufferGeometry | null = null;
    let particleMaterial: THREE.ShaderMaterial | null = null;
    let particles: THREE.Points | null = null;

    const generateGalaxy = () => {
      // Destroy old galaxy
      if (particles) {
        particlesGeometry?.dispose();
        particleMaterial?.dispose();
        scene.remove(particles);
      }

      // Geometry
      particlesGeometry = new THREE.BufferGeometry();

      const positions = new Float32Array(parameters.count * 3);
      const colors = new Float32Array(parameters.count * 3);
      const scales = new Float32Array(parameters.count * 1);
      const randomness = new Float32Array(parameters.count * 3);

      const insideColor = new THREE.Color(parameters.insideColor);
      const outsideColor = new THREE.Color(parameters.outsideColor);

      for (let i = 0; i < parameters.count; i++) {
        const i3 = i * 3;

        const radius = Math.random() * parameters.radius;
        const branchAngle =
          ((i % parameters.branches) / parameters.branches) * Math.PI * 2;
        // const spinAngle = radius * parameters.spin;

        positions[i3] = Math.cos(branchAngle) * radius;
        positions[i3 + 1] = 0.0;
        positions[i3 + 2] = Math.sin(branchAngle) * radius + 0;

        // Randomness
        const randomX =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness *
          radius;
        const randomY =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness *
          radius;
        const randomZ =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness *
          radius;

        randomness[i3 + 0] = randomX;
        randomness[i3 + 1] = randomY;
        randomness[i3 + 2] = randomZ;

        // Color
        const mixedColor = insideColor.clone();
        mixedColor.lerp(outsideColor, radius / parameters.radius);

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;

        // Scale
        scales[i] = Math.random() * 10.0;
      }

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      particlesGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colors, 3)
      );
      particlesGeometry.setAttribute(
        "aScale",
        new THREE.BufferAttribute(scales, 1)
      );
      particlesGeometry.setAttribute(
        "aRandomness",
        new THREE.BufferAttribute(randomness, 3)
      );

      // Material
      particleMaterial = new THREE.ShaderMaterial({
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        vertexShader: galaxyVertexShader,
        fragmentShader: galaxyFragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uSize: { value: 30 * renderer.getPixelRatio() },
        },
      });

      // Points
      particles = new THREE.Points(particlesGeometry, particleMaterial);
      scene.add(particles);
    };

    generateGalaxy();

    // const axesHelper = new THREE.AxesHelper();
    // scene.add(axesHelper);

    gui
      .add(parameters, "count", 100, 1000000, 100)
      .onFinishChange(generateGalaxy);
    gui
      .add(parameters, "size", 0.001, 0.1, 0.001)
      .onFinishChange(generateGalaxy);
    gui
      .add(parameters, "radius", 0.01, 20, 0.01)
      .onFinishChange(generateGalaxy);
    gui.add(parameters, "branches", 2, 20, 1).onFinishChange(generateGalaxy);
    gui.add(parameters, "spin", -5, 5, 0.001).onFinishChange(generateGalaxy);
    gui
      .add(parameters, "randomness", 0, 2, 0.001)
      .onFinishChange(generateGalaxy);
    gui.addColor(parameters, "insideColor").onFinishChange(generateGalaxy);
    gui.addColor(parameters, "outsideColor").onFinishChange(generateGalaxy);

    // Timer
    const timer = new Timer();

    // Animate
    function animate() {
      timer.update();
      const elapsedTime = timer.getElapsed();
      orbitControls.update();

      if (!particleMaterial) return;
      particleMaterial.uniforms.uTime.value = elapsedTime;

      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    // Cleanup
    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default AnimatedGalaxy;
