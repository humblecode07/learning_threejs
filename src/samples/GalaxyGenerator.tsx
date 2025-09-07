import GUI from "lil-gui";
import * as THREE from 'three'
import { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const GalaxyGenerator = () => {
   useEffect(() => {
      let aspectRatio = window.innerWidth / window.innerHeight;

      // Lil GuiGui
      const gui = new GUI();

      // Scene
      const scene = new THREE.Scene();

      // Renderer
      const renderer = new THREE.WebGLRenderer();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      document.body.appendChild(renderer.domElement);

      window.addEventListener('resize', () => {
         aspectRatio = window.innerWidth / window.innerHeight;
         camera.aspect = aspectRatio;
         camera.updateProjectionMatrix();

         renderer.setSize(window.innerWidth, window.innerHeight);
         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      })

      // Camera
      const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

      camera.position.set(0, 2, 2);

      // Orbit Controls
      const orbitControls = new OrbitControls(camera, renderer.domElement);
      orbitControls.enableDamping = true;

      /*
         Galaxy
      */
      const parameters = {
         count: 100000,
         size: 0.02,
         radius: 5,
         branches: 3,
         spin: 1,
         randomness: 0.2,
         randomnessPower: 3,
         insideColor: '#ff6030',
         outsideColor: '#1b3984'
      }

      let particlesGeometry: THREE.BufferGeometry | null = null;
      let particleMaterial: THREE.PointsMaterial | null = null;
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

         const insideColor = new THREE.Color(parameters.insideColor);
         const outsideColor = new THREE.Color(parameters.outsideColor);

         for (let i = 0; i < parameters.count; i++) {
            const i3 = i * 3;

            const radius = Math.random() * parameters.radius;
            const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2;
            const spinAngle = radius * parameters.spin;

            const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1);
            const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1);
            const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1);

            positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
            positions[i3 + 1] = randomY;
            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

            // Color
            const mixedColor = insideColor.clone();
            mixedColor.lerp(outsideColor, radius / parameters.radius)

            colors[i3] = mixedColor.r;
            colors[i3 + 1] = mixedColor.g;
            colors[i3 + 2] = mixedColor.b;
         }

         particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
         particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));


         // Material
         particleMaterial = new THREE.PointsMaterial({
            size: parameters.size,
            sizeAttenuation: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true
         })

         // Points
         particles = new THREE.Points(particlesGeometry, particleMaterial);
         scene.add(particles);
      }

      generateGalaxy();

      gui.add(parameters, 'count', 100, 1000000, 100).onFinishChange(generateGalaxy);
      gui.add(parameters, 'size', 0.001, 0.1, 0.001).onFinishChange(generateGalaxy);
      gui.add(parameters, 'radius', 0.01, 20, 0.01).onFinishChange(generateGalaxy);
      gui.add(parameters, 'branches', 2, 20, 1).onFinishChange(generateGalaxy);
      gui.add(parameters, 'spin', -5, 5, 0.001).onFinishChange(generateGalaxy);
      gui.add(parameters, 'randomness', 0, 2, 0.001).onFinishChange(generateGalaxy);
      gui.addColor(parameters, 'insideColor').onFinishChange(generateGalaxy);
      gui.addColor(parameters, 'outsideColor').onFinishChange(generateGalaxy);

      const axesHelper = new THREE.AxesHelper();
      scene.add(axesHelper);

      // Animate
      function animate() {
         orbitControls.update();

         renderer.render(scene, camera)
      }

      renderer.setAnimationLoop(animate);

      // Cleanup
      return () => {
         renderer.dispose();
         document.body.removeChild(renderer.domElement);
         gui.destroy();
      }
   }, [])

   return null;
}

export default GalaxyGenerator
