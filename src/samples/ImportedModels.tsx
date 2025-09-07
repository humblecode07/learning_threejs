import GUI from "lil-gui";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls, Timer } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { DRACOLoader } from "three/examples/jsm/Addons.js";

const ImportedModels = () => {
   useEffect(() => {
      let aspectRatio = window.innerWidth / window.innerHeight;

      // Lil GuiGui
      const gui = new GUI();

      // Scene
      const scene = new THREE.Scene();

      // Render
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
      const camera = new THREE.PerspectiveCamera(35, aspectRatio, 0.1, 1000);
      camera.position.set(5, 5, 5);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 1);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(2, 2, 2);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 1024;
      directionalLight.shadow.mapSize.height = 1024;
      directionalLight.shadow.camera.top = 5;
      directionalLight.shadow.camera.right = 5;
      directionalLight.shadow.camera.bottom = -5;
      directionalLight.shadow.camera.left = -5;
      directionalLight.shadow.camera.near = 1;
      directionalLight.shadow.camera.far = 6;
      directionalLight.shadow.radius = 5;

      const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);

      scene.add(camera, ambientLight, directionalLightCameraHelper);

      // Orbit Controls
      const orbitControls = new OrbitControls(camera, renderer.domElement);
      orbitControls.enableDamping = true;

      // Models
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('/draco/');

      const gltfLoader = new GLTFLoader();
      gltfLoader.setDRACOLoader(dracoLoader);

      let mixer: THREE.AnimationMixer | null = null;

      gltfLoader.load(
         'models/Fox/glTF/Fox.gltf',
         (gltf) => {

            // const children = [...gltf.scene.children]

            // for (const child of children) {
            //    scene.add(child);
            // }

            mixer = new THREE.AnimationMixer(gltf.scene);
            const action = mixer.clipAction(gltf.animations[0]);

            action.play();

            gltf.scene.scale.set(0.025, 0.025, 0.025)
            gltf.scene.castShadow = true;
            scene.add(gltf.scene);
         },
         (progress) => {
            console.log('progress');
            console.log(progress)
         },
         (error) => {
            console.log('error');
            console.log(error);
         }
      )

      gltfLoader.load(
         'models/Duck/glTF-Draco/Duck.gltf',
         (gltf) => {
            gltf.scene.children[0].position.set(-5, 0, 0);
            gltf.scene.children[0].rotation.y = Math.PI * - .5;
            scene.add(gltf.scene.children[0]);
         },
         (progress) => {
            console.log('progress');
            console.log(progress)
         },
         (error) => {
            console.log('error');
            console.log(error);
         }
      )

      gltfLoader.load(
         'models/FlightHelmet/glTF/FlightHelmet.gltf',
         (gltf) => {
            const children = [...gltf.scene.children]

            for (const child of children) {
               child.position.set(5, 0, 0);
               child.scale.setScalar(2);
               scene.add(child);
            }
         },
         (progress) => {
            console.log('progress');
            console.log(progress)
         },
         (error) => {
            console.log('error');
            console.log(error);
         }
      )

      // Objects
      const plane = new THREE.Mesh(
         new THREE.PlaneGeometry(15, 15),
         new THREE.MeshStandardMaterial()
      );
      plane.rotation.x = Math.PI * - .5;
      plane.receiveShadow = true;

      scene.add(plane);

      // Animate
      const timer = new Timer();
      let previousTime = 0;

      const animate = () => {
         timer.update();
         const elapsedTime = timer.getElapsed();
         const deltaTime = elapsedTime - previousTime;
         previousTime = elapsedTime;

         // Update Mixer
         if (mixer !== null) mixer.update(deltaTime);

         orbitControls.update(deltaTime);

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

export default ImportedModels
