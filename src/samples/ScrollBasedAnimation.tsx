import GUI from 'lil-gui'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import threePixelGradient from '../assets/gradients/3.jpg';
import { Timer } from 'three/examples/jsm/Addons.js';
import gsap from 'gsap';

const ScrollBasedAnimation = () => {
   const canvasRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      const currentCanvasRef = canvasRef.current;
      if (!currentCanvasRef) return;

      let aspectRatio = window.innerWidth / window.innerHeight;

      // Lil GuiGui
      const gui = new GUI();

      const parameters = {
         color: '#ffb8b8'
      }

      gui.addColor(parameters, 'color').onChange(() => {
         material.color.set(parameters.color);
         particlesMaterial.color.set(parameters.color);
      });

      // Scene
      const scene = new THREE.Scene();

      // Renderer
      const renderer = new THREE.WebGLRenderer({ alpha: true });

      currentCanvasRef.appendChild(renderer.domElement);

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      window.addEventListener('resize', () => {
         aspectRatio = (window.innerWidth / window.innerHeight);
         camera.aspect = aspectRatio;
         camera.updateProjectionMatrix();

         renderer.setSize(window.innerWidth, window.innerHeight);
         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      // Group
      const cameraGroup = new THREE.Group();
      scene.add(cameraGroup);

      // Camera 
      const camera = new THREE.PerspectiveCamera(35, aspectRatio, 0.1, 100);
      camera.position.z = 6
      cameraGroup.add(camera);

      // Lights
      const directionalLight = new THREE.DirectionalLight('#ffffff', 1);
      directionalLight.position.set(1, 1, 0);
      scene.add(directionalLight);

      // Texture
      const textureLoader = new THREE.TextureLoader();
      const gradientTexture = textureLoader.load(threePixelGradient);
      gradientTexture.magFilter = THREE.NearestFilter;

      // Materials
      const material = new THREE.MeshToonMaterial({ color: parameters.color, gradientMap: gradientTexture });
      const particlesMaterial = new THREE.PointsMaterial({
         color: parameters.color,
         size: 0.03,
         sizeAttenuation: true,
         depthWrite: false,
         blending: THREE.AdditiveBlending
      })

      // Objects
      const objectsDistance = 4;

      const mesh1 = new THREE.Mesh(
         new THREE.TorusGeometry(1, 0.4, 16, 60),
         material
      );

      const mesh2 = new THREE.Mesh(
         new THREE.ConeGeometry(1, 2, 32),
         material
      );

      const mesh3 = new THREE.Mesh(
         new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
         material
      );

      const sectionMeshes = [mesh1, mesh2, mesh3];

      // Geomtry
      const particlesGeometry = new THREE.BufferGeometry();
      const count = 200;

      const positions = new Float32Array(count * 3);

      for (let i = 0; i < count * 3; i++) {
         const i3 = i * 3;

         positions[i3] = (Math.random() - 0.5) * 10;
         positions[i3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * sectionMeshes.length;
         positions[i3 + 2] = (Math.random() - 0.5) * 10;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      // Points
      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      mesh1.position.y = -objectsDistance * 0;
      mesh2.position.y = -objectsDistance * 1;
      mesh3.position.y = -objectsDistance * 2;

      mesh1.position.x = 2;
      mesh2.position.x = -2;
      mesh3.position.x = 2;

      scene.add(mesh1, mesh2, mesh3);

      // // Axes helper
      // const axesHelper = new THREE.AxesHelper();
      // scene.add(axesHelper);

      // Scroll
      let scrollY = window.scrollY;
      let currentSection = 0;

      window.addEventListener('scroll', () => {
         scrollY = window.scrollY;

         const newSection = Math.round(scrollY / window.innerHeight);

         if (newSection !== currentSection) {
            currentSection = newSection;

            gsap.to(sectionMeshes[currentSection].rotation, {
               duration: 1.5,
               ease: 'power2.inOut',
               x: '+=6',
               y: '+=3'
            })
         }
      })

      // Cursor
      const cursor = {
         x: 0,
         y: 0,
      };

      window.addEventListener("mousemove", (e) => {
         cursor.x = e.clientX / window.innerWidth - 0.5;
         cursor.y = -(e.clientY / window.innerHeight - 0.5); // invert Y if needed
      });

      // Animate
      const timer = new Timer();
      let previousTime = 0;

      function animate() {
         timer.update();
         const elapsedTime = timer.getElapsed();
         const deltaTime = elapsedTime - previousTime;
         previousTime = elapsedTime;

         // Animate camera
         camera.position.y = - scrollY / window.innerHeight * objectsDistance;

         const parallaxX = - cursor.x * 0.5;
         const parallaxY = cursor.y * 0.5;

         cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
         cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

         // Animate Meshes
         for (const mesh of sectionMeshes) {
            mesh.rotation.x += deltaTime * 0.1;
            mesh.rotation.y += deltaTime * 0.12;
         }

         // Spin


         renderer.render(scene, camera);
      }

      renderer.setAnimationLoop(animate);

      // Cleanup
      return (() => {
         gui.destroy();
         renderer.dispose();
         currentCanvasRef.removeChild(renderer.domElement);
      })
   }, [])

   return (
      <>
         <div ref={canvasRef} className='w-screen h-screen fixed top-0 left-0' />
         <section className='h-screen flex items-center relative text-[#ffeded] uppercase font-[7vmin] pl-[10%] pr-[10%]'>
            <h1 className='text-[5.5em] f'>こんにちは、ユーザー！</h1>
         </section>
         <section className='h-screen flex items-center justify-end relative text-[#ffeded] uppercase font-[7vmin] pl-[10%] pr-[10%]'>
            <h2 className='text-[5em]'>いつも考えて、</h2>
         </section>
         <section className='h-screen flex items-center relative text-[#ffeded] uppercase font-[7vmin] pl-[10%] pr-[10%]'>
            <h2 className='text-[5em]'>一歩ずつ物事をする！</h2>
         </section>
      </>
   )
}

export default ScrollBasedAnimation
