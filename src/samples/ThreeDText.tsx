import { useEffect } from "react";
import * as THREE from 'three'
import { FontLoader, OrbitControls, TextGeometry } from "three/examples/jsm/Addons.js";
import matcapMercury from '../assets/matcaps/3.png'
import matcapSunset from '../assets/matcaps/4.png'
import matcapDawn from '../assets/matcaps/5.png'
import matcapLime from '../assets/matcaps/7.png'

const ThreeDText = () => {

   useEffect(() => {
      // Lil GuiGui

      // Scene
      const scene = new THREE.Scene();
      let aspectRatio = window.innerWidth / window.innerHeight;

      // Axes Helper
      // const axesHelper = new THREE.AxesHelper();
      // scene.add(axesHelper);

      // Camera
      const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);

      camera.position.set(4, 2, 5);

      // Renderer
      const renderer = new THREE.WebGLRenderer();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      document.body.appendChild(renderer.domElement);

      window.addEventListener('resize', () => {
         aspectRatio = (window.innerWidth / window.innerHeight);
         camera.aspect = aspectRatio;
         camera.updateProjectionMatrix();

         renderer.setSize(window.innerWidth, window.innerHeight);
         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      // Texture
      const textureLoader = new THREE.TextureLoader();
      const matcapTexture = textureLoader.load(matcapLime);

      // Fonts
      const fontLoader = new FontLoader();
      const font = fontLoader.load(
         '/fonts/helvetiker_regular.typeface.json',
         (font) => {
            const textGeometry = new TextGeometry(
               'Hello, Three.js',
               {
                  font,
                  size: 0.5,
                  depth: 0.2,
                  curveSegments: 5,
                  bevelEnabled: true,
                  bevelThickness: 0.03,
                  bevelSize: 0.02,
                  bevelOffset: 0,
                  bevelSegments: 4
               }
            );
            // textGeometry.computeBoundingBox();
            // textGeometry.translate(
            //    textGeometry.boundingBox?.max.x * -0.5,
            //    textGeometry.boundingBox?.max.y * -0.5,
            //    textGeometry.boundingBox?.max.z * -0.5,
            // )
            textGeometry.center();

            const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture});
            const text = new THREE.Mesh(textGeometry, material);

            // Donuts (Torus)
            const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);

            console.time('donut');

            for (let i = 0; i < 200; i++) {
               const donut = new THREE.Mesh(donutGeometry, material);

               donut.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10)

               donut.rotation.x = Math.random() * Math.PI;
               donut.rotation.y = Math.random() * Math.PI;

               const scale = Math.random();
               donut.scale.set(scale, scale, scale);

               scene.add(donut);
            }

            console.timeEnd('donut');

            scene.add(text);
         }
      );

      // Orbit Control
      const orbitControl = new OrbitControls(camera, renderer.domElement);
      orbitControl.enableDamping = true;

      // Animate
      function animate () {
         orbitControl.update();

         renderer.render(scene, camera);
      }

      renderer.setAnimationLoop(animate)

      return (() => {
         renderer.dispose();
         document.body.removeChild(renderer.domElement);
      })
   }, [])

   return null;
}

export default ThreeDText
