import { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls, Timer } from 'three/examples/jsm/Addons.js'
import particleOne from '../assets/particles/1.png'
import particleTwo from '../assets/particles/2.png'
import particleThree from '../assets/particles/3.png'
import particleFour from '../assets/particles/4.png'
import particleFive from '../assets/particles/5.png'
import particleSix from '../assets/particles/6.png'
import particleSeven from '../assets/particles/7.png'
import particleEight from '../assets/particles/8.png'
import particleNine from '../assets/particles/9.png'
import particleTen from '../assets/particles/10.png'
import particleEleven from '../assets/particles/11.png'
import particleTwelve from '../assets/particles/12.png'
import particleThirteen from '../assets/particles/13.png'
import GUI from 'lil-gui'

const particleOptions = [
   "Soft Dot",
   "Ring",
   "Cloud",
   "Lens",
   "Cross Glow",
   "Crescent",
   "Crosshair",
   "Sharp Star",
   "Sparkle",
   "Heart",
   "Star",
   "Streak",
   "Beam",
] as const;

type ParticleOption = (typeof particleOptions)[number];

const PARTICLE_TEXTURES: Record<ParticleOption, string> = {
   'Soft Dot': particleOne,
   'Ring': particleTwo,
   'Cloud': particleThree,
   'Lens': particleFour,
   'Cross Glow': particleFive,
   'Crescent': particleSix,
   'Crosshair': particleSeven,
   'Sharp Star': particleEight,
   'Sparkle': particleNine,
   'Heart': particleTen,
   'Star': particleEleven,
   'Streak': particleTwelve,
   'Beam': particleThirteen
}

const Particles = () => {
   useEffect(() => {
      let aspectRatio = window.innerWidth / window.innerHeight;

      // Lil GuiGui
      const gui = new GUI();

      const particleConfiguration: { particleSelector: ParticleOption; size: number } = {
         particleSelector: "Soft Dot",
         size: 0.5,
      };

      // GUI selector
      gui
         .add(particleConfiguration, "particleSelector", particleOptions)
         .name("Particle Selector")
         .onChange((value: ParticleOption) => {
            const particleTexture = textureLoader.load(PARTICLE_TEXTURES[value]);
            particlesMaterial.alphaMap = particleTexture;
            particlesMaterial.transparent = true;
         });

      // GUI size
      gui
         .add(particleConfiguration, "size", 0, 1, 0.01)
         .onChange((value: number) => {
            particlesMaterial.size = value;
         });

      // Scene
      const scene = new THREE.Scene();

      // Renderer
      const renderer = new THREE.WebGLRenderer();

      document.body.appendChild(renderer.domElement);

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

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

      // Textures
      const textureLoader = new THREE.TextureLoader();
      let particleTexture = textureLoader.load(PARTICLE_TEXTURES[particleConfiguration.particleSelector]);

      /*
         Particles
      */

      // Geometry
      const particlesGeometry = new THREE.BufferGeometry();
      const count = 20000;

      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      for (let i = 0; i < count * 3; i++) {
         positions[i] = (Math.random() - 0.5) * 10;
         colors[i] = Math.random();
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      // Material
      const particlesMaterial = new THREE.PointsMaterial({
         size: particleConfiguration.size,
         sizeAttenuation: true,
         alphaMap: particleTexture,
         transparent: true,
         // alphaTest: 0.001,
         // depthTest: false
         depthWrite: false,
         blending: THREE.AdditiveBlending,
         vertexColors: true
      });

      // Points
      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      // Animate
      const timer = new Timer();

      function animate() {
         timer.update();
         const elapsedTime = timer.getElapsed();

         orbitControls.update();

         // console.log(Math.sin(elapsedTime - particlesGeometry.attributes.position.array[0]));

         // Update particles
         // particles.rotation.y = elapsedTime * 0.2;

         for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            particlesGeometry.attributes.position.array[i3 + 1] = Math.sin(elapsedTime - particlesGeometry.attributes.position.array[i3]);
         }

         particlesGeometry.attributes.position.needsUpdate = true;

         renderer.render(scene, camera);
      }

      renderer.setAnimationLoop(animate);

      // Cleanup
      return (() => {
         renderer.dispose();
         document.body.removeChild(renderer.domElement);
         gui.destroy();
      })
   }, [])

   return null;
}

export default Particles
