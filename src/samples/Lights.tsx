import GUI from 'lil-gui';
import { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls, RectAreaLightHelper } from 'three/examples/jsm/Addons.js';

const Lights = () => {
   useEffect(() => {
      let aspectRatio = (window.innerWidth / window.innerHeight);

      // Lil GuiGui
      const gui = new GUI();

      // Scene
      const scene = new THREE.Scene();

      // Camera
      const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

      camera.position.set(4, 2, 10)

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

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      gui.add(ambientLight, 'intensity', 0, 1, 0.01);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
      directionalLight.position.set(2, 3, 4);
      scene.add(directionalLight);

      const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 1);
      scene.add(hemisphereLight);

      const pointLight = new THREE.PointLight(0xff9000, 5, 10, 2);
      pointLight.position.set(1, -0.5, 1);
      scene.add(pointLight);

      const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 5, 1, 1);
      rectAreaLight.position.set(-1.5, 0, 1.5);
      rectAreaLight.lookAt(new THREE.Vector3)
      scene.add(rectAreaLight);

      const spotLight = new THREE.SpotLight(0x78ff00, 5, 10, Math.PI * 0.1, 0.25, 1);
      spotLight.position.set(0, 2, 3);
      scene.add(spotLight);

      spotLight.target.position.x = -1.75;
      scene.add(spotLight.target);

      // Minimal Cost
      //    - AmbientLight
      //    - HemisphereLight

      // Moderate Cost
      //    - DirectionalLight
      //    - PointLight

      // High Cost
      //    - SpotLight
      //    - RectAreaLight

      // Light Helpers
      const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.2);
      scene.add(hemisphereLightHelper);

      const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2);
      scene.add(directionalLightHelper);

      const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2);
      scene.add(pointLightHelper);

      const spotLightHelper = new THREE.SpotLightHelper(spotLight, 0.2);
      scene.add(spotLightHelper);

      const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight);
      scene.add(rectAreaLightHelper);

      // Orbit Control
      const orbitControls = new OrbitControls(camera, renderer.domElement);
      orbitControls.enableDamping = true;

      // Group
      const group = new THREE.Group();
      scene.add(group);

      // Material
      const material = new THREE.MeshStandardMaterial();
      material.roughness = 0.4;
      material.side = THREE.DoubleSide;

      // Objects
      const sphere = new THREE.Mesh(
         new THREE.SphereGeometry(0.5, 32, 32),
         material
      );
      sphere.position.x = -2;

      const cube = new THREE.Mesh(
         new THREE.BoxGeometry(1, 1),
         material
      );

      const donut = new THREE.Mesh(
         new THREE.TorusGeometry(0.3, 0.2, 64, 128),
         material
      );
      donut.position.x = 2;

      const plane = new THREE.Mesh(
         new THREE.PlaneGeometry(6, 6),
         material
      );
      plane.rotation.x = Math.PI / 2;
      plane.position.y = -1;

      group.add(sphere);
      group.add(cube);
      group.add(donut);
      group.add(plane);

      // Animate
      function animate() {
         orbitControls.update();

         renderer.render(scene, camera);
      }

      renderer.setAnimationLoop(animate);

      // Cleanup
      return (() => {
         renderer.dispose();
         document.body.removeChild(renderer.domElement);
      })
   }, [])

  return null;
}

export default Lights
