import GUI from "lil-gui";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls, Timer } from "three/examples/jsm/Addons.js";
import testVertexShader from "../shaders/shaders-patterns/vertex.glsl";
import testFragmentShader from "../shaders/shaders-patterns/fragment.glsl";

const ShadersPatterns = () => {
  useEffect(() => {
    // Lil Guigui
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

    // Orbit Control
    const orbitControl = new OrbitControls(camera, renderer.domElement);
    orbitControl.enableDamping = true;

    // Geometry
    const geometry = new THREE.PlaneGeometry(1, 1, 32, 32);

    // Material
    const material = new THREE.ShaderMaterial({
      vertexShader: testVertexShader,
      fragmentShader: testFragmentShader,
      side: THREE.DoubleSide,
    });

    // Mesh
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animate
    const timer = new Timer();

    function animate() {
      timer.update();
      orbitControl.update();

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

export default ShadersPatterns;
