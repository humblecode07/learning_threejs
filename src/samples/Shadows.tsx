import GUI from 'lil-gui';
import React, { useEffect } from 'react'
import * as THREE from 'three';
import { OrbitControls, Timer } from 'three/examples/jsm/Addons.js';
import bakedShadow from '../assets/textures/bakedShadow.jpg';
import simpleShadow from '../assets/textures/simpleShadow.jpg';

const Shadows = () => {
   useEffect(() => {
      let aspectRatio = window.innerWidth / window.innerHeight;

      // Lil GuiGui
      const gui = new GUI();

      // Scene
      const scene = new THREE.Scene();

      // Renderer
      const renderer = new THREE.WebGLRenderer();

      document.body.appendChild(renderer.domElement);

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      renderer.shadowMap.enabled = false;
      // renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Loses shadow.radius

      window.addEventListener('resize', () => {
         aspectRatio = window.innerWidth / window.innerHeight;
         camera.aspect = aspectRatio;
         camera.updateProjectionMatrix();

         renderer.setSize(window.innerWidth, window.innerHeight);
         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      // Camera
      const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);

      camera.position.set(0, 2, 2);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientLight);

      // DirectionalLight
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(2, 2, -1);
      directionalLight.castShadow = false;

      directionalLight.shadow.mapSize.width = 1024;
      directionalLight.shadow.mapSize.height = 1024;
      directionalLight.shadow.camera.top = 2;
      directionalLight.shadow.camera.right = 2;
      directionalLight.shadow.camera.bottom = -2;
      directionalLight.shadow.camera.left = -2;
      directionalLight.shadow.camera.near = 1;
      directionalLight.shadow.camera.far = 6;

      directionalLight.shadow.radius = 5;

      const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
      directionalLightCameraHelper.visible = false;
      scene.add(directionalLightCameraHelper);

      scene.add(directionalLight);

      // SpotLight
      const spotLight = new THREE.SpotLight(0xffffff, 1, 10, Math.PI * 0.3);
      spotLight.castShadow = false;

      spotLight.position.set(0, 2, 2);
      scene.add(spotLight);
      scene.add(spotLight.target);

      spotLight.shadow.mapSize.width = 1024;
      spotLight.shadow.mapSize.height = 1024;
      spotLight.shadow.camera.fov = 30;
      spotLight.shadow.camera.near = 1;
      spotLight.shadow.camera.far = 6;

      const spotLightCameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);
      spotLightCameraHelper.visible = false;
      scene.add(spotLightCameraHelper);

      // PointLight
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.castShadow = false;

      pointLight.shadow.mapSize.width = 1024;
      pointLight.shadow.mapSize.height = 1024;
      pointLight.shadow.camera.near = 0.1;
      pointLight.shadow.camera.far = 5;

      pointLight.position.set(-1, 1, 0);
      scene.add(pointLight);

      const pointLightCameraHelper = new THREE.CameraHelper(pointLight.shadow.camera);
      pointLightCameraHelper.visible = false;
      scene.add(pointLightCameraHelper);

      // Orbit Controls
      const orbitControls = new OrbitControls(camera, renderer.domElement);
      orbitControls.enableDamping = true;

      // Textures
      const textureLoader = new THREE.TextureLoader();
      const bakedShadowTexture = textureLoader.load(bakedShadow);
      const simpleShadowTexture = textureLoader.load(simpleShadow);

      // Material
      const material = new THREE.MeshStandardMaterial();
      // material.side = THREE.DoubleSide;

      // Objects
      const sphere = new THREE.Mesh(
         new THREE.SphereGeometry(0.3, 64, 64),
         material
      );
      sphere.castShadow = true;

      const plane = new THREE.Mesh(
         new THREE.PlaneGeometry(5, 5),
         material
      );
      plane.position.y = -0.3;
      plane.rotation.x = -Math.PI / 2;
      plane.receiveShadow = true;

      const sphereShadow = new THREE.Mesh(
         new THREE.PlaneGeometry(1.5, 1.5),
         new THREE.MeshBasicMaterial({
            color: 0x000000,
            transparent: true,
            alphaMap: simpleShadowTexture
         })
      );
      sphereShadow.rotation.x = -Math.PI / 2;
      sphereShadow.position.y = plane.position.y + 0.01;

      scene.add(sphere, plane, sphereShadow)

      // Axes Helper
      const axesHelper = new THREE.AxesHelper();
      scene.add(axesHelper);

      // Animate
      const timer = new Timer();

      function animate() {
         timer.update();
         const elapsedTime = timer.getElapsed();

         orbitControls.update();

         sphere.position.x = Math.cos(elapsedTime) * 1.5;
         sphere.position.z = Math.sin(elapsedTime) * 1.5;
         sphere.position.y = Math.abs(Math.sin(elapsedTime * 3));

         sphereShadow.position.x = Math.cos(elapsedTime) * 1.5;
         sphereShadow.position.z = Math.sin(elapsedTime) * 1.5;
         sphereShadow.material.opacity = (1 - sphere.position.y) * 0.3;

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

export default Shadows
