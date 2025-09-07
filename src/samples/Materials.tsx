import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls, RGBELoader, Timer } from "three/examples/jsm/Addons.js";
import doorDiff from "../assets/door/door_base_color.webp";
import doorAlpha from "../assets/door/Door_Wood_001_opacity.webp";
import doorAO from "../assets/door/door_ambient_occlusion.webp";
import doorHght from "../assets/door/door_height.webp";
import doorNor from "../assets/door/door_normal.webp";
import doorMetal from "../assets/door/door_metallic.webp";
import doorRough from "../assets/door/door_roughness.webp";
import brownMatcap from "../assets/matcaps/1.png";
import gradient from "../assets/gradients/3.jpg";
import environment from "../assets/environmentMap/2k.hdr";
import GUI from "lil-gui";

const Materials = () => {
  useEffect(() => {
    // Lil GuiGui
    const gui = new GUI();

    // Scene
    const scene = new THREE.Scene();
    let aspectRatio = window.innerWidth / window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer(); // Creates Canvas tag

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

    // Camera
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

    camera.position.z = 5;
    camera.position.x = 4;
    camera.position.y = 2;

    // Orbit Control
    const orbitControl = new OrbitControls(camera, renderer.domElement);
    orbitControl.enableDamping = true;

    // Cube Textures
    // const cubeTextureLoader = new THREE.CubeTextureLoader();

    // const environmentMapTexture = cubeTextureLoader.load([environment]);

    // RGBELoader

    const rgbeLoader = new RGBELoader();
    rgbeLoader.load(environment, function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.background = texture;
      scene.environment = texture;
    });

    // Textures
    const textureLoader = new THREE.TextureLoader();

    const doorColorTexture = textureLoader.load(doorDiff);
    const doorAlphaTexture = textureLoader.load(doorAlpha);
    const doorAOTexture = textureLoader.load(doorAO);
    const doorHeightTexture = textureLoader.load(doorHght);
    const doorNormalTexture = textureLoader.load(doorNor);
    const doorMetalnessTexture = textureLoader.load(doorMetal);
    const doorRoughnessTexture = textureLoader.load(doorRough);
    const matcapTexture = textureLoader.load(brownMatcap);
    const gradientTexture = textureLoader.load(gradient);

    gradientTexture.minFilter = THREE.NearestFilter;
    gradientTexture.magFilter = THREE.NearestFilter;
    gradientTexture.generateMipmaps = false;

    // Objects
    // const material = new THREE.MeshBasicMaterial();
    // material.transparent = true;
    // material.map = doorColorTexture;
    // material.alphaMap = doorAlphaTexture;
    // material.side = THREE.DoubleSide;

    // const material = new THREE.MeshNormalMaterial();
    // material.flatShading = true;

    // const material = new THREE.MeshMatcapMaterial();
    // material.matcap = matcapTexture;

    // const material = new THREE.MeshDepthMaterial();

    // const material = new THREE.MeshLambertMaterial();

    // const material = new THREE.MeshPhongMaterial();
    // material.shininess = 1000;

    // const material = new THREE.MeshToonMaterial();
    // material.gradientMap = gradientTexture;

    // const material = new THREE.MeshStandardMaterial();
    // material.map = doorColorTexture;
    // material.aoMap = doorAOTexture;
    // material.aoMapIntensity = 1;
    // material.displacementMap = doorHeightTexture;
    // material.displacementScale = 0.05;
    // material.metalnessMap = doorMetalnessTexture;
    // material.roughnessMap = doorRoughnessTexture;
    // material.normalMap = doorNormalTexture;
    // material.transparent = true;
    // material.alphaMap = doorAlphaTexture;

    const material = new THREE.MeshStandardMaterial();
    material.metalness = 0.7;
    material.roughness = 0.2;
    material.side = THREE.DoubleSide;

    gui.add(material, "metalness", 0, 1, 0.001).onChange((value: number) => {
      material.metalness = value;
    });

    gui.add(material, "roughness", 0, 1, 0.001).onChange((value: number) => {
      material.roughness = value;
    });

    // gui.add(material, 'aoMapIntensity', 0, 10, 0.01).onChange((value: number) => {
    //    material.roughness = value
    // });

    // gui.add(material, 'displacementScale', 0, 1, 0.001).onChange((value: number) => {
    //    material.displacementScale = value
    // });

    gui.addColor(material, "color").onChange((value: string) => {
      material.color.set(value);
    });

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 64, 64),
      material
    );
    sphere.position.x = -1.5;

    sphere.geometry.setAttribute(
      "uv2",
      new THREE.BufferAttribute(sphere.geometry.attributes.uv.array, 2)
    );

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1, 100, 100),
      material
    );

    plane.geometry.setAttribute(
      "uv2",
      new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2)
    );

    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(0.3, 0.2, 64, 128),
      material
    );
    torus.position.x = 1.5;

    torus.geometry.setAttribute(
      "uv2",
      new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2)
    );

    scene.add(sphere, plane, torus);

    // Lighting
    const ambientLight = new THREE.AmbientLight("#ffffff", 1);
    scene.add(ambientLight);

    const pointLight = new THREE.DirectionalLight("#ffffff", 2);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Animate
    const timer = new Timer();

    function animate() {
      timer.update();
      const elapsedTime = timer.getElapsed();
      orbitControl.update();

      // Update Objects
      sphere.rotation.y = elapsedTime * 0.25;
      plane.rotation.y = elapsedTime * 0.25;
      torus.rotation.y = elapsedTime * 0.25;

      sphere.rotation.x = elapsedTime * 0.3;
      plane.rotation.x = elapsedTime * 0.3;
      torus.rotation.x = elapsedTime * 0.3;

      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default Materials;
