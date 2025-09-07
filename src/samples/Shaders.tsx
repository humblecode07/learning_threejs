import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls, Timer } from "three/examples/jsm/Addons.js";
import testVertexShader from "../shaders/test/vertex.glsl";
import testFragmentShader from "../shaders/test/fragment.glsl";
import GUI from "lil-gui";
import philippinesFlag from "../assets/philippines-flag.jpg";

const Shaders = () => {
  useEffect(() => {
    // Lil GuiGui
    const gui = new GUI();

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

    camera.position.z = 1;
    camera.position.y = 0;
    camera.position.x = 0;

    // Orbit Control
    const orbitControl = new OrbitControls(camera, renderer.domElement);
    orbitControl.enableDamping = true;

    // Textures
    const textureLoader = new THREE.TextureLoader();
    const flagTexture = textureLoader.load(philippinesFlag);

    // Geometry
    const geometry = new THREE.PlaneGeometry(1, 1, 32, 32);

    // Material
    const material = new THREE.RawShaderMaterial({
      vertexShader: testVertexShader,
      fragmentShader: testFragmentShader,
      // wireframe: true,
      // side: THREE.DoubleSide,
      uniforms: {
        uFrequency: { value: new THREE.Vector2(10, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("orange") },
        uTexture: { value: flagTexture },
      },
    });

    // Mesh
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.y = 2 / 3;
    scene.add(mesh);

    gui
      .add(material.uniforms.uFrequency.value, "x")
      .min(0)
      .max(20)
      .step(0.01)
      .name("frequencyX");
    gui
      .add(material.uniforms.uFrequency.value, "y")
      .min(0)
      .max(20)
      .step(0.01)
      .name("frequencyY");

    // Animate
    const timer = new Timer();

    function animate() {
      timer.update();
      const elapsedTime = timer.getElapsed();
      orbitControl.update();

      // Update Material
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

export default Shaders;
