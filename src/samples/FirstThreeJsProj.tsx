// import React from 'react'
import { useEffect } from "react";
import * as THREE from "three";
// import gsap from 'gsap';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Sky } from "three/addons/objects/Sky.js";
import { Timer } from "three/addons/misc/Timer.js";
import GUI from "lil-gui";
import alpha from "../assets/floor/alpha.jpg";
import rocksGroundCol from "../assets/floor/rocks_ground_02_col_2k.webp";
import rocksGroundARM from "../assets/floor/rocks_ground_02_arm_2k.webp";
import rocksGroundNor from "../assets/floor/rocks_ground_02_nor_gl_2k.webp";
import rocksGroundHght from "../assets/floor/rocks_ground_02_height_2k.webp";
import wallDiff from "../assets/wall/rock_wall_08_diff_1k.webp";
import wallARM from "../assets/wall/rock_wall_08_arm_1k.webp";
import wallNor from "../assets/wall/rock_wall_08_nor_gl_1k.webp";
import wallDisplacement from "../assets/wall/rock_wall_08_disp_1k.webp";
import roofDiff from "../assets/roof/roof_09_diff_1k.webp";
import roofARM from "../assets/roof/roof_09_arm_1k.webp";
import roofNor from "../assets/roof/roof_09_nor_gl_1k.webp";
import bushDiff from "../assets/bush/leaves_forest_ground_diff_1k.webp";
import bushARM from "../assets/bush/leaves_forest_ground_arm_1k.webp";
import bushNor from "../assets/bush/leaves_forest_ground_nor_gl_1k.webp";
import gravesDiff from "../assets/grave/plastered_stone_wall_diff_1k.webp";
import gravesARM from "../assets/grave/plastered_stone_wall_arm_1k.webp";
import gravesNor from "../assets/grave/plastered_stone_wall_nor_gl_1k.webp";
import doorDiff from "../assets/door/door_base_color.webp";
import doorAlpha from "../assets/door/Door_Wood_001_opacity.webp";
import doorAO from "../assets/door/door_ambient_occlusion.webp";
import doorHght from "../assets/door/door_height.webp";
import doorNor from "../assets/door/door_normal.webp";
import doorMetal from "../assets/door/door_metallic.webp";
import doorRough from "../assets/door/door_roughness.webp";

const FirstThreeJsProj = () => {
  useEffect(() => {
    // Lil GuiGui
    const gui = new GUI();

    // SCENE
    const scene = new THREE.Scene();
    let aspectRatio = window.innerWidth / window.innerHeight;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    console.log(THREE.REVISION);

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

    window.addEventListener("dblclick", () => {
      if (!document.fullscreenElement) renderer.domElement.requestFullscreen();
      else document.exitFullscreen();
    });

    // CAMERA
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

    camera.position.z = 5;
    camera.position.x = 4;
    camera.position.y = 2;

    // Orbit Control
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // LIGHTING

    const light = new THREE.DirectionalLight("#426C8A", 1);
    const ambientLight = new THREE.AmbientLight("#426C8A", 0.275);

    light.position.set(3, 2, -8);

    scene.add(light);
    scene.add(ambientLight);

    // Door Light
    const doorLight = new THREE.PointLight("#ff7d46", 5);
    doorLight.position.set(0, 2.2, 2.5);

    // Ghosts ~wooooo....
    const ghost1 = new THREE.PointLight("#8800ff", 6);
    const ghost2 = new THREE.PointLight("#ff0088", 6);
    const ghost3 = new THREE.PointLight("#ff0000", 6);

    scene.add(ghost1, ghost2, ghost3);

    // TEXTURES
    const loadingManager = new THREE.LoadingManager();

    loadingManager.onStart = () => {
      console.log("onStart");
    };

    loadingManager.onLoad = () => {
      console.log("onLoad");
    };

    loadingManager.onProgress = () => {
      console.log("onProgress");
    };

    loadingManager.onError = () => {
      console.log("onError");
    };

    const textureLoader = new THREE.TextureLoader(loadingManager);

    // Floor Textures

    const floorAlphaTexture = textureLoader.load(alpha);
    const floorColorTexture = textureLoader.load(rocksGroundCol);
    const floorARMTexture = textureLoader.load(rocksGroundARM);
    const floorNormalTexture = textureLoader.load(rocksGroundNor);
    const floorDisplacementTexture = textureLoader.load(rocksGroundHght);

    floorColorTexture.colorSpace = THREE.SRGBColorSpace;

    floorColorTexture.repeat.set(8, 8);
    floorARMTexture.repeat.set(8, 8);
    floorNormalTexture.repeat.set(8, 8);
    floorDisplacementTexture.repeat.set(8, 8);

    floorColorTexture.wrapS = THREE.RepeatWrapping;
    floorColorTexture.wrapT = THREE.RepeatWrapping;
    floorARMTexture.wrapS = THREE.RepeatWrapping;
    floorARMTexture.wrapT = THREE.RepeatWrapping;
    floorNormalTexture.wrapS = THREE.RepeatWrapping;
    floorNormalTexture.wrapT = THREE.RepeatWrapping;
    floorDisplacementTexture.wrapS = THREE.RepeatWrapping;
    floorDisplacementTexture.wrapT = THREE.RepeatWrapping;

    // Wall Textures
    const wallColorTexture = textureLoader.load(wallDiff);
    const wallARMTexture = textureLoader.load(wallARM);
    const wallNormalTexture = textureLoader.load(wallNor);
    const wallDisplacementTexture = textureLoader.load(wallDisplacement);

    wallColorTexture.colorSpace = THREE.SRGBColorSpace;

    // Roof Textures
    const roofColorTexture = textureLoader.load(roofDiff);
    const roofARMTexture = textureLoader.load(roofARM);
    const roofNormalTexture = textureLoader.load(roofNor);

    roofColorTexture.colorSpace = THREE.SRGBColorSpace;

    roofColorTexture.repeat.set(6, 1);
    roofARMTexture.repeat.set(6, 1);
    roofNormalTexture.repeat.set(6, 1);

    roofColorTexture.wrapS = THREE.RepeatWrapping;
    roofARMTexture.wrapS = THREE.RepeatWrapping;
    roofNormalTexture.wrapS = THREE.RepeatWrapping;

    // Bush Textures
    const bushColorTexture = textureLoader.load(bushDiff);
    const bushARMTexture = textureLoader.load(bushARM);
    const bushNormalTexture = textureLoader.load(bushNor);

    bushColorTexture.colorSpace = THREE.SRGBColorSpace;

    bushColorTexture.repeat.set(2, 1);
    bushARMTexture.repeat.set(2, 1);
    bushNormalTexture.repeat.set(2, 1);

    bushColorTexture.wrapS = THREE.RepeatWrapping;
    bushARMTexture.wrapS = THREE.RepeatWrapping;
    bushNormalTexture.wrapS = THREE.RepeatWrapping;

    // Grave Textures
    const graveColorTexture = textureLoader.load(gravesDiff);
    const graveARMTexture = textureLoader.load(gravesARM);
    const graveNormalTexture = textureLoader.load(gravesNor);

    graveColorTexture.colorSpace = THREE.SRGBColorSpace;

    graveColorTexture.repeat.set(0.3, 0.4);
    graveARMTexture.repeat.set(0.3, 0.4);
    graveNormalTexture.repeat.set(0.3, 0.4);

    // Door Textures
    const doorColorTexture = textureLoader.load(doorDiff);
    const doorAlphaTexture = textureLoader.load(doorAlpha);
    const doorAOTexture = textureLoader.load(doorAO);
    const doorHeightTexture = textureLoader.load(doorHght);
    const doorNormalTexture = textureLoader.load(doorNor);
    const doorMetalTexture = textureLoader.load(doorMetal);
    const doorRoughTexture = textureLoader.load(doorRough);

    doorColorTexture.colorSpace = THREE.SRGBColorSpace;

    // Mapping
    light.shadow.mapSize.width = 256;
    light.shadow.mapSize.height = 256;
    light.shadow.camera.top = 8;
    light.shadow.camera.right = 8;
    light.shadow.camera.bottom = -8;
    light.shadow.camera.left = -8;
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 20;

    ghost1.shadow.mapSize.width = 256;
    ghost1.shadow.mapSize.height = 256;
    ghost1.shadow.camera.far = 10;

    ghost2.shadow.mapSize.width = 256;
    ghost2.shadow.mapSize.height = 256;
    ghost2.shadow.camera.far = 10;

    ghost3.shadow.mapSize.width = 256;
    ghost3.shadow.mapSize.height = 256;
    ghost3.shadow.camera.far = 10;

    // GEOMETRIES
    // const sphere = new THREE.Mesh(
    //   new THREE.SphereGeometry(1, 32, 32),
    //   new THREE.MeshStandardMaterial({ roughness: 0.7 })
    // );

    // Floor
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20, 100, 100),
      new THREE.MeshStandardMaterial({
        color: 0x3b3b3b,
        alphaMap: floorAlphaTexture,
        transparent: true,
        map: floorColorTexture,
        aoMap: floorARMTexture,
        roughnessMap: floorARMTexture,
        metalnessMap: floorARMTexture,
        normalMap: floorNormalTexture,
        displacementMap: floorDisplacementTexture,
        displacementScale: 0.3,
        displacementBias: -0.0609999999999999,
      })
    );

    floor.rotation.x = -Math.PI / 2;

    // Floor GUI

    gui
      .add(floor.material, "displacementScale")
      .min(0)
      .max(1)
      .step(0.001)
      .name("floorDisplacementScale");
    gui
      .add(floor.material, "displacementBias")
      .min(-1)
      .max(1)
      .step(0.001)
      .name("floorDisplacementBias");

    // Walls
    const walls = new THREE.Mesh(
      new THREE.BoxGeometry(4, 2.5, 4, 100, 100, 100),
      new THREE.MeshStandardMaterial({
        map: wallColorTexture,
        aoMap: wallARMTexture,
        roughnessMap: wallARMTexture,
        metalnessMap: wallARMTexture,
        normalMap: wallNormalTexture,
        displacementMap: wallDisplacementTexture,
        displacementScale: 0,
        displacementBias: 0,
      })
    );

    walls.position.y += 2.5 / 2;

    // Roof
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(3.5, 1.5, 4),
      new THREE.MeshStandardMaterial({
        map: roofColorTexture,
        aoMap: roofARMTexture,
        roughnessMap: roofARMTexture,
        metalnessMap: roofARMTexture,
        normalMap: roofNormalTexture,
      })
    );

    roof.position.y = 2.5 + 0.75;
    roof.rotation.y = Math.PI * 0.25;

    // Door
    const door = new THREE.Mesh(
      new THREE.PlaneGeometry(2.2, 2.2, 100, 100),
      new THREE.MeshStandardMaterial({
        map: doorColorTexture,
        transparent: true,
        alphaMap: doorAlphaTexture,
        aoMap: doorAOTexture,
        displacementMap: doorHeightTexture,
        displacementScale: 0.15,
        displacementBias: -0.04,
        normalMap: doorNormalTexture,
        metalnessMap: doorMetalTexture,
        roughnessMap: doorRoughTexture,
      })
    );

    door.position.y = 1;
    door.position.z = 2 + 0.01;

    // Bushes
    const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
    const bushMaterial = new THREE.MeshStandardMaterial({
      color: 0xccffcc,
      map: bushColorTexture,
      aoMap: bushARMTexture,
      roughnessMap: bushARMTexture,
      metalnessMap: bushARMTexture,
      normalMap: bushNormalTexture,
    });

    const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
    bush1.scale.set(0.5, 0.5, 0.5);
    bush1.position.set(0.8, 0.2, 2.2);
    bush1.rotation.x = -0.75;

    const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
    bush2.scale.set(0.25, 0.25, 0.25);
    bush2.position.set(1.4, 0.1, 2.1);
    bush2.rotation.x = -0.75;

    const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
    bush3.scale.set(0.4, 0.4, 0.4);
    bush3.position.set(-0.8, 0.2, 2.2);
    bush3.rotation.x = -0.75;

    const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
    bush4.scale.set(0.15, 0.15, 0.15);
    bush4.position.set(-1, 0.05, 2.6);
    bush4.rotation.x = -0.75;

    // Graves
    const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
    const graveMaterial = new THREE.MeshStandardMaterial({
      map: graveColorTexture,
      aoMap: graveARMTexture,
      roughnessMap: graveARMTexture,
      metalnessMap: graveARMTexture,
      normalMap: graveNormalTexture,
    });

    const graves = new THREE.Group();

    for (let i = 0; i < 30; i++) {
      const grave = new THREE.Mesh(graveGeometry, graveMaterial);

      // Position the grave randomly but should not touch the house
      const angle = Math.random() * Math.PI * 2;
      const radius = 3 + Math.random() * 4;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;

      grave.position.x = x;
      grave.position.y = Math.random() * 0.4;
      grave.position.z = z;

      // Add randomness on the axes of graves by using rotation
      grave.rotation.x = (Math.random() - 0.5) * 0.4;
      grave.rotation.y = (Math.random() - 0.5) * 0.4;
      grave.rotation.z = (Math.random() - 0.5) * 0.4;

      // Add to grave group
      graves.add(grave);
    }

    // GROUP
    const house = new THREE.Group();

    scene.add(house);

    // group.add(sphere);
    house.add(floor);
    house.add(walls);
    house.add(roof);
    house.add(door);
    house.add(bush1, bush2, bush3, bush4);
    house.add(doorLight);

    scene.add(graves); // or house.add(graves);

    // Shadows
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Cast and Receive
    light.castShadow = true;
    ghost1.castShadow = true;
    ghost2.castShadow = true;
    ghost3.castShadow = true;

    walls.castShadow = true;
    walls.receiveShadow = true;
    roof.castShadow = true;
    floor.receiveShadow = true;

    for (const grave of graves.children) {
      grave.castShadow = true;
      grave.receiveShadow = true;
    }

    // Sky
    const sky = new Sky();
    sky.scale.set(100, 100, 100);
    scene.add(sky);

    sky.material.uniforms["turbidity"].value = 5;
    sky.material.uniforms["rayleigh"].value = 1;
    sky.material.uniforms["mieCoefficient"].value = 0.05;
    sky.material.uniforms["mieDirectionalG"].value = 0.95;
    sky.material.uniforms["sunPosition"].value.set(0.3, -0.05, -0.95);

    // Fog ^^
    scene.fog = new THREE.FogExp2("#02343f", 0.1);

    // ANIMATE
    const timer = new Timer();

    function animate() {
      timer.update();
      const elapsedTime = timer.getElapsed();

      // Ghost
      const ghost1Angle = elapsedTime * 0.5;
      ghost1.position.x = Math.cos(ghost1Angle) * 4;
      ghost1.position.z = Math.sin(ghost1Angle) * 4;
      ghost1.position.y =
        Math.sin(ghost1Angle) *
        Math.sin(ghost1Angle * 2.34) *
        Math.sin(ghost1Angle * 3.45);

      const ghost2Angle = -elapsedTime * 1;
      ghost2.position.x = Math.cos(ghost2Angle) * 6;
      ghost2.position.z = Math.sin(ghost2Angle) * 6;
      ghost2.position.y =
        Math.sin(ghost2Angle) *
        Math.sin(ghost2Angle * 2.34) *
        Math.sin(ghost2Angle * 3.45);

      const ghost3Angle = elapsedTime * 1.5;
      ghost3.position.x = Math.cos(ghost3Angle) * 8;
      ghost3.position.z = Math.sin(ghost3Angle) * 8;
      ghost3.position.y =
        Math.sin(ghost3Angle) *
        Math.sin(ghost3Angle * 2.34) *
        Math.sin(ghost3Angle * 3.45);

      controls.update();

      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    // CLEANUP
    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
      gui.destroy();
    };
  }, []);

  return null;
};

export default FirstThreeJsProj;
