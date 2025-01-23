import GUI from 'lil-gui';
import { useEffect } from 'react'
import * as THREE from 'three';
import { OrbitControls, Timer } from 'three/examples/jsm/Addons.js';
import * as CANNON from 'cannon-es'
import hit from '../assets/sounds/hit.mp3'

const Physics = () => {
   useEffect(() => {
      let aspectRatio = window.innerWidth / window.innerHeight;

      // Lil GuiGui
      const gui = new GUI();

      const debugObject = {
         createSphere: () => {
            createSphere(Math.random() * 0.5, { x: (Math.random() - 0.5) * 5, y: Math.random() * 5, z: (Math.random() - 0.5) * 5 })
         },
         createBox: () => {
            createBox(
               Math.random(),
               Math.random(),
               Math.random(),
               { x: (Math.random() - 0.5) * 5, y: Math.random() * 5, z: (Math.random() - 0.5) * 5 }
            )
         },
         reset: () => {
            for (const object of objectsToUpdate) {
               // Remove physics world
               object.body.removeEventListener('collide', playHitSound);
               world.removeBody(object.body);

               // Remove mesh
               scene.remove(object.mesh); 
            }

            objectsToUpdate.splice(0, objectsToUpdate.length)
         }
      };

      gui.add(debugObject, 'createSphere');
      gui.add(debugObject, 'createBox');
      gui.add(debugObject, 'reset');

      // Scene
      const scene = new THREE.Scene();

      // Renderer
      const renderer = new THREE.WebGLRenderer();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;

      document.body.appendChild(renderer.domElement);

      window.addEventListener('resize', () => {
         aspectRatio = window.innerWidth / window.innerHeight;
         camera.aspect = aspectRatio;
         camera.updateProjectionMatrix();

         renderer.setSize(window.innerWidth, window.innerHeight);
         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      })

      // Camera
      const camera = new THREE.PerspectiveCamera(35, aspectRatio, 0.1, 100);
      camera.position.set(-5, 5, 5);

      // Orbit Controls
      const orbitControls = new OrbitControls(camera, renderer.domElement);
      orbitControls.enableDamping = true;

      // Sounds
      // const audioListener = new THREE.AudioListener();
      // camera.add(audioListener);

      // const sound = new THREE.Audio(audioListener);

      // const audioLoader = new THREE.AudioLoader();
      // audioLoader.load(hit, function (buffer) {
      //    sound.setBuffer(buffer);
      //    sound.play();
      // })

      const hitSound = new Audio(hit);

      const playHitSound = (collision) => {
         const impactStrength = collision.contact.getImpactVelocityAlongNormal();

         if (impactStrength > 1.5) {
            hitSound.volume = impactStrength / 10 > 1 ? 1 : Math.random() * impactStrength / 10;
            hitSound.currentTime = 0;
            hitSound.play();
         }
      }

      /* <PHYSICS> */

      // World
      const world = new CANNON.World();
      world.broadphase = new CANNON.SAPBroadphase(world); // For optimization
      world.allowSleep = true; // For optimization
      world.gravity.set(0, -9.82, 0);

      // Materials
      const defaultMaterial = new CANNON.Material('default');

      const defaultContactMaterial = new CANNON.ContactMaterial(
         defaultMaterial,
         defaultMaterial,
         {
            friction: 0.1,
            restitution: 0.4
         }
      )

      world.addContactMaterial(defaultContactMaterial);
      world.defaultContactMaterial = defaultContactMaterial;

      // Floor
      const floorShape = new CANNON.Plane();
      const floorBody = new CANNON.Body();
      floorBody.mass = 0;
      floorBody.addShape(floorShape);
      floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(- 1, 0, 0), Math.PI * 0.5);

      world.addBody(floorBody);

      /* </ PHYSICS> */

      // Material
      const material = new THREE.MeshStandardMaterial({
         color: 0x777777,
         metalness: 0.3,
         roughness: 0.4
      })

      // Object
      const plane = new THREE.Mesh(
         new THREE.PlaneGeometry(10, 10),
         material
      )
      plane.rotation.x = Math.PI * - .5;
      plane.receiveShadow = true;

      scene.add(plane);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 2.1);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.set(1024, 1024);
      directionalLight.shadow.camera.far = 15
      directionalLight.shadow.camera.left = - 7
      directionalLight.shadow.camera.top = 7
      directionalLight.shadow.camera.right = 7
      directionalLight.shadow.camera.bottom = - 7
      directionalLight.position.set(5, 5, 5);

      const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
      const axesHelper = new THREE.AxesHelper();

      scene.add(ambientLight, directionalLight, directionalLightCameraHelper, axesHelper);

      // Utils
      const objectsToUpdate = [];

      const sphereGeometry = new THREE.SphereGeometry(1, 20, 20);
      const sphereMaterial = new THREE.MeshStandardMaterial({
         metalness: 0.3,
         roughness: 0.4
      })

      const createSphere = (radius, position) => {
         const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
         mesh.scale.setScalar(radius);
         mesh.castShadow = true;
         mesh.position.copy(position);
         scene.add(mesh);

         // Cannon.js body
         const shape = new CANNON.Sphere(radius);
         const body = new CANNON.Body({
            mass: 1,
            position: new CANNON.Vec3(0, 3, 0),
            shape,
            material: defaultMaterial
         })
         body.position.copy(position);

         setTimeout(() => {
            body.addEventListener('collide', playHitSound);
         }, 500);

         world.addBody(body);

         // Save in objectsToUpdate
         objectsToUpdate.push({
            mesh,
            body
         })
      }

      const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
      const boxMaterial = new THREE.MeshStandardMaterial({
         metalness: 0.3,
         roughness: 0.4
      });

      const createBox = (width, height, depth, position) => {
         const mesh = new THREE.Mesh(boxGeometry, boxMaterial);
         mesh.scale.set(width, height, depth);
         mesh.castShadow = true;
         mesh.position.copy(position);
         scene.add(mesh);

         // Cannon.js body
         const shape = new CANNON.Box(new CANNON.Vec3(width * .5, height * .5, depth * .5));
         const body = new CANNON.Body({
            mass: 1,
            position: new CANNON.Vec3(0, 3, 0),
            shape,
            material: defaultMaterial
         })
         body.position.copy(position);

         setTimeout(() => {
            body.addEventListener('collide', playHitSound);
         }, 500);

         world.addBody(body);

         // Save in objectsToUpdate
         objectsToUpdate.push({
            mesh,
            body
         })
      }

      // Animate
      const timer = new Timer();
      let oldElapsedTime = 0;

      function animate() {
         timer.update();
         const elapsedTime = timer.getElapsed();
         const deltaTime = elapsedTime - oldElapsedTime;
         oldElapsedTime = elapsedTime;

         orbitControls.update();

         // Update Physics Worl
         world.step(1 / 60, deltaTime, 3);

         for (const object of objectsToUpdate) {
            object.mesh.position.copy(object.body.position);
            object.mesh.quaternion.copy(object.body.quaternion);
         }

         renderer.render(scene, camera);
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

export default Physics
