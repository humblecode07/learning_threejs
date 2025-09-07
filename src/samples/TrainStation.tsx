import GUI from 'lil-gui';
import React, { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls, RGBELoader } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { DRACOLoader } from "three/examples/jsm/Addons.js";
import tiledFloorARM from '../assets/floor/tiled_floor_001_arm_1k.jpg';
import tiledFloorDiffuse from '../assets/floor/tiled_floor_001_diffuse_1k.jpg';
import tiledFloorNor from '../assets/floor/tiled_floor_001_nor_gl_1k.jpg';
import concreteFloorARM from '../assets/floor/concrete_floor_arm_1k.jpg';
import concreteFloorDiffuse from '../assets/floor/concrete_floor_diff_1k.jpg';
import concreteFloorNor from '../assets/floor/concrete_floor_nor_gl_1k.jpg';
// import trainToyDiffuse from '/models/WoodenTrainToy/textures/diffuse.png';
// import trainToyNormal from '/models/WoodenTrainToy/textures/normal.png';
// import trainToySpecularGlossiness from '/models/WoodenTrainToy/textures/specularGlossiness.png';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
import tapeColor from '../assets/floor/Tape001_1K-PNG_Color.png';
import tapeDisplacement from '../assets/floor/Tape001_1K-PNG_Displacement.png';
import tapeNormalGL from '../assets/floor/Tape001_1K-PNG_NormalGL.png';
import tapeOpacity from '../assets/floor/Tape001_1K-PNG_Opacity.png';
import tapeRoughness from '../assets/floor/Tape001_1K-PNG_Roughness.png';
import ganggesPebblesARM from '../assets/floor/train_rocks/ganges_river_pebbles_arm_1k.jpg';
import ganggesPebblesDiffuse from '../assets/floor/train_rocks/ganges_river_pebbles_diff_1k.jpg';
import ganggesPebblesNor from '../assets/floor/train_rocks/ganges_river_pebbles_nor_gl_1k.jpg';
import graniteTileWallARM from '../assets/wall/granite_tile_arm_1k.jpg';
import graniteTileDiffuse from '../assets/wall/granite_tile_diff_1k.jpg';
import graniteTileNor from '../assets/wall/granite_tile_nor_gl_1k.jpg';

const TrainStation = () => {
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

      document.body.appendChild(renderer.domElement);

      window.addEventListener('resize', () => {
         aspectRatio = window.innerWidth / window.innerHeight;
         camera.aspect = aspectRatio;
         camera.updateProjectionMatrix();

         renderer.setSize(window.innerWidth, window.innerHeight);
         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      // Camera
      const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
      camera.position.set(5, 15, 5);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 5);

      const light = new THREE.DirectionalLight('#426C8A', 10);
      light.position.set(3, 2, -8);

      scene.add(camera, ambientLight, light);

      // Textures
      const loadingManager = new THREE.LoadingManager();

      loadingManager.onStart = () => {
         console.log('onStart')
      }

      loadingManager.onLoad = () => {
         console.log('onLoad')
      }

      loadingManager.onProgress = () => {
         console.log('onProgress')
      }

      loadingManager.onError = () => {
         console.log('onError')
      }

      const textureLoader = new THREE.TextureLoader(loadingManager);

      // Floor Textures
      const floorARMTexture = textureLoader.load(tiledFloorARM);
      const floorColorTexture = textureLoader.load(tiledFloorDiffuse);
      const floorNormalTexture = textureLoader.load(tiledFloorNor);

      floorColorTexture.colorSpace = THREE.SRGBColorSpace;

      floorARMTexture.repeat.set(8, 8);
      floorColorTexture.repeat.set(8, 8);
      floorNormalTexture.repeat.set(8, 8);

      floorARMTexture.wrapS = THREE.RepeatWrapping;
      floorARMTexture.wrapT = THREE.RepeatWrapping;
      floorColorTexture.wrapS = THREE.RepeatWrapping;
      floorColorTexture.wrapT = THREE.RepeatWrapping;
      floorNormalTexture.wrapS = THREE.RepeatWrapping;
      floorNormalTexture.wrapT = THREE.RepeatWrapping;

      const concreteFloorARMTexture = textureLoader.load(concreteFloorARM);
      const concreteFloorColorTexture = textureLoader.load(concreteFloorDiffuse);
      const concreteFloorNormalTexture = textureLoader.load(concreteFloorNor);

      concreteFloorARMTexture.colorSpace = THREE.SRGBColorSpace;

      concreteFloorARMTexture.repeat.set(8, 8);
      concreteFloorColorTexture.repeat.set(8, 8);
      concreteFloorNormalTexture.repeat.set(8, 8);

      concreteFloorARMTexture.wrapS = THREE.RepeatWrapping;
      concreteFloorARMTexture.wrapT = THREE.RepeatWrapping;
      concreteFloorColorTexture.wrapS = THREE.RepeatWrapping;
      concreteFloorColorTexture.wrapT = THREE.RepeatWrapping;
      concreteFloorNormalTexture.wrapS = THREE.RepeatWrapping;
      concreteFloorNormalTexture.wrapT = THREE.RepeatWrapping;

      // Tape Textures
      const tapeColorTexture = textureLoader.load(tapeColor);
      const tapeDisplacementTexture = textureLoader.load(tapeDisplacement);
      const tapeNormalGLTexture = textureLoader.load(tapeNormalGL);
      const tapeOpacityTexture = textureLoader.load(tapeOpacity);
      const tapeRoughnessTexture = textureLoader.load(tapeRoughness);

      tapeColorTexture.colorSpace = THREE.SRGBColorSpace;

      // Ganges River Pebble
      const ganggesPebblesARMTexture = textureLoader.load(ganggesPebblesARM);
      const ganggesPebblesColorTexture = textureLoader.load(ganggesPebblesDiffuse);
      const ganggesPebblesNormalTexture = textureLoader.load(ganggesPebblesNor);

      ganggesPebblesARMTexture.colorSpace = THREE.SRGBColorSpace;

      ganggesPebblesARMTexture.repeat.set(8, 8);
      ganggesPebblesColorTexture.repeat.set(8, 8);
      ganggesPebblesNormalTexture.repeat.set(8, 8);

      ganggesPebblesARMTexture.wrapS = THREE.RepeatWrapping;
      ganggesPebblesARMTexture.wrapT = THREE.RepeatWrapping;
      ganggesPebblesColorTexture.wrapS = THREE.RepeatWrapping;
      ganggesPebblesColorTexture.wrapT = THREE.RepeatWrapping;
      ganggesPebblesNormalTexture.wrapS = THREE.RepeatWrapping;
      ganggesPebblesNormalTexture.wrapT = THREE.RepeatWrapping;

      // Granite Tile Wall
      const graniteTileARMTexture = textureLoader.load(graniteTileWallARM);
      const graniteTileColorTexture = textureLoader.load(graniteTileDiffuse);
      const graniteTileNormalTexture = textureLoader.load(graniteTileNor);

      graniteTileARMTexture.colorSpace = THREE.SRGBColorSpace;

      graniteTileARMTexture.repeat.set(8, 8);
      graniteTileColorTexture.repeat.set(8, 8);
      graniteTileNormalTexture.repeat.set(8, 8);

      graniteTileARMTexture.wrapS = THREE.RepeatWrapping;
      graniteTileARMTexture.wrapT = THREE.RepeatWrapping;
      graniteTileColorTexture.wrapS = THREE.RepeatWrapping;
      graniteTileColorTexture.wrapT = THREE.RepeatWrapping;
      graniteTileNormalTexture.wrapS = THREE.RepeatWrapping;
      graniteTileNormalTexture.wrapT = THREE.RepeatWrapping

      // Controls
      const orbitControls = new OrbitControls(camera, renderer.domElement);
      orbitControls.enableDamping = true;

      const flyControls = new FlyControls(camera, renderer.domElement);
      flyControls.movementSpeed = 10;
      flyControls.rollSpeed = Math.PI / 24;
      flyControls.autoForward = false;
      flyControls.dragToLook = true;

      // RGBELoader
      // const rgbeLoader = new RGBELoader();
      // rgbeLoader.load('/environmentMaps/metro_vijzelgracht_2k.hdr', (texture) => {
      //    texture.mapping = THREE.EquirectangularReflectionMapping;
      //    scene.background = texture;
      //    scene.environment = texture;
      // })

      // Loaders

      // Models
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('/draco/');

      const gltfLoader = new GLTFLoader();
      gltfLoader.setDRACOLoader(dracoLoader);

      // gltfLoader.load('/models/TicketMachine/scene.gltf',
      //    (gltf) => {
      //       gltf.scene.scale.set(0.02, 0.02, 0.01);
      //       gltf.scene.position.set(0, 0, 5);
      //       scene.add(gltf.scene);
      //    }
      // );

      // const trainToyDiffuseTexture = textureLoader.load(trainToyDiffuse);
      // const trainToyNormalTexture = textureLoader.load(trainToyNormal);
      // const trainToySpecularGlossinessTexture = textureLoader.load(trainToySpecularGlossiness);

      // gltfLoader.load('/models/WoodenTrainToy/scene.gltf',
      //    (gltf) => {
      //       gltf.scene.traverse((child) => {
      //          if (child.isMesh) {
      //             child.material = new THREE.MeshStandardMaterial({
      //                map: trainToyDiffuseTexture,
      //                normalMap: trainToyNormalTexture,
      //                roughnessMap: trainToySpecularGlossinessTexture,
      //                metalnessMap: trainToySpecularGlossinessTexture
      //             });
      //          }
      //       });

      //       gltf.scene.scale.set(0.5, 0.5, 0.5);
      //       gltf.scene.position.set(0, 0, -10);
      //       gltf.scene.rotation.y = Math.PI * - .5;
      //       scene.add(gltf.scene);
      //    }
      // );

      gltfLoader.load('/models/CityTrain/scene.gltf',
         (gltf) => {
            gltf.scene.scale.set(3.5, 4, 3.5);
            gltf.scene.position.set(0, -2, -22);
            gltf.scene.rotation.y = Math.PI * - .5;
            scene.add(gltf.scene);
         }
      );

      // Train Tracks
      gltfLoader.load('/models/TrainTrack/scene.gltf',
         (gltf) => {
            gltf.scene.scale.set(3.5, 4, 3.5);
            gltf.scene.position.set(-30, -2, -22);
            scene.add(gltf.scene);
         }
      );
      gltfLoader.load('/models/TrainTrack/scene.gltf',
         (gltf) => {
            gltf.scene.scale.set(3.5, 4, 3.5);
            gltf.scene.position.set(-16, -2, -22);
            scene.add(gltf.scene);
         }
      );
      gltfLoader.load('/models/TrainTrack/scene.gltf',
         (gltf) => {
            gltf.scene.scale.set(3.5, 4, 3.5);
            gltf.scene.position.set(-2, -2, -22);
            scene.add(gltf.scene);
         }
      );
      gltfLoader.load('/models/TrainTrack/scene.gltf',
         (gltf) => {
            gltf.scene.scale.set(3.5, 4, 3.5);
            gltf.scene.position.set(12, -2, -22);
            scene.add(gltf.scene);
         }
      );
      gltfLoader.load('/models/TrainTrack/scene.gltf',
         (gltf) => {
            gltf.scene.scale.set(3.5, 4, 3.5);
            gltf.scene.position.set(26, -2, -22);
            scene.add(gltf.scene);
         }
      );

      gltfLoader.load('/models/MetroBench/scene.gltf',
         (gltf) => {
            gltf.scene.scale.set(6, 6, 6);
            gltf.scene.position.set(25, 0, 5);
            gltf.scene.rotation.y = Math.PI * - 1;
            scene.add(gltf.scene);
         }
      );
      

      // Objects
      const plane = new THREE.Mesh(
         new THREE.PlaneGeometry(75, 25, 1, 1),
         new THREE.MeshStandardMaterial({
            map: floorColorTexture,
            normalMap: floorNormalTexture,
            normalScale: new THREE.Vector2(1, 1),
            aoMap: floorARMTexture,
            roughnessMap: floorARMTexture,
            metalnessMap: floorARMTexture,
            displacementScale: 0.1,
            displacementBias: 0.1
         })
      );

      plane.rotation.x = -Math.PI / 2;
      plane.receiveShadow = true;

      const floorCube = new THREE.Mesh(
         new THREE.BoxGeometry(75, 2.6, 25),
         new THREE.MeshStandardMaterial({
            map: concreteFloorColorTexture,
            normalMap: concreteFloorNormalTexture,
            normalScale: new THREE.Vector2(1, 1),
            aoMap: concreteFloorARMTexture,
            roughnessMap: concreteFloorARMTexture,
            metalnessMap: concreteFloorARMTexture,
            displacementScale: 0.1,
            displacementBias: 0.1
         })
      );

      floorCube.position.set(0, -1.6, 0);

      const tapeFloorPlane = new THREE.Mesh(
         new THREE.PlaneGeometry(75, 2, 1, 1),
         new THREE.MeshStandardMaterial({
            map: tapeColorTexture,
            normalMap: tapeNormalGLTexture,
            roughnessMap: tapeRoughnessTexture,
            displacementMap: tapeDisplacementTexture,
            displacementScale: 0.1,
            transparent: true,
            alphaMap: tapeOpacityTexture
         })
      );

      tapeFloorPlane.position.set(0, 0.1, -10);
      tapeFloorPlane.rotation.x = -Math.PI / 2;

      tapeFloorPlane.receiveShadow = true;

      const gangesPebblesPlane = new THREE.Mesh(
         new THREE.PlaneGeometry(75, 25, 1, 1),
         new THREE.MeshStandardMaterial({
            color: 0x3B3B3B,
            map: ganggesPebblesColorTexture,
            normalMap: ganggesPebblesNormalTexture,
            normalScale: new THREE.Vector2(1, 1),
            aoMap: ganggesPebblesARMTexture,
            roughnessMap: ganggesPebblesARMTexture,
            metalnessMap: ganggesPebblesARMTexture,
            displacementScale: 0.3,
            displacementBias: -0.0609999999999999,
         })
      );

      gangesPebblesPlane.position.set(0, -2.9, -25);
      gangesPebblesPlane.rotation.x = -Math.PI / 2;

      const pillarOne = new THREE.Mesh(
         new THREE.CylinderGeometry(3, 3, 20, 32),
         new THREE.MeshStandardMaterial({ color: 0x3B3B3B })
      );

      pillarOne.position.set(10, 10, 5);

      const graniteWallCube = new THREE.Mesh(
         new THREE.BoxGeometry(25, 20, 1),
         new THREE.MeshStandardMaterial({
            map: graniteTileColorTexture,
            normalMap: graniteTileNormalTexture,
            normalScale: new THREE.Vector2(1, 1),
            aoMap: graniteTileARMTexture,
            roughnessMap: graniteTileARMTexture,
            metalnessMap: graniteTileARMTexture,
            displacementScale: 0.1,
            displacementBias: 0.1
         })
      );

      graniteWallCube.position.set(37.5, 10, 0);
      graniteWallCube.rotation.y = Math.PI / 2;

      scene.add(plane, floorCube, tapeFloorPlane, gangesPebblesPlane, graniteWallCube, pillarOne);

      // Animation
      const animate = () => {
         orbitControls.update();
         flyControls.update(0.01);

         renderer.render(scene, camera);
      }

      renderer.setAnimationLoop(animate);

      // Cleanup
      return () => {
         renderer.dispose();
         document.body.removeChild(renderer.domElement);
         gui.destroy();
      }
   }, []);

   return null;
}

export default TrainStation
