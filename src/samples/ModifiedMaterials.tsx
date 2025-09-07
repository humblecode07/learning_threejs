import GUI from "lil-gui";
import * as THREE from "three";
import { useEffect } from "react";
import {
  DRACOLoader,
  GLTFLoader,
  OrbitControls,
  Timer,
} from "three/examples/jsm/Addons.js";

const ModifiedMaterials = () => {
  useEffect(() => {
    // Loaders
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const textureLoader = new THREE.TextureLoader();

    // Lil Guigui
    // const gui = new GUI();

    // Scene
    const scene = new THREE.Scene();
    let aspectRatio = window.innerWidth / window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;

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

    camera.position.set(1, 3, -10);

    // Lighting
    // const ambientLight = new THREE.AmbientLight(0xffffff, 1);

    const directionalLight = new THREE.DirectionalLight("#ffffff", 3);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(1024, 1024);
    directionalLight.shadow.camera.far = 15;
    directionalLight.shadow.normalBias = 0.05;
    directionalLight.position.set(0.25, 2, -2.25);

    // const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);

    scene.add(directionalLight);

    // Orbit Control
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;

    // Update all materials
    const updateAllMaterials = () => {
      scene.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          child.material.envMap = environmentMap;
          child.material.envMapIntensity = 5;
          child.material.needsUpdate = true;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    };

    /**
     * Loading the environment and models
     */

    // Environment
    const environmentMap = cubeTextureLoader.load([
      "environmentMaps/3/px.jpg",
      "environmentMaps/3/nx.jpg",
      "environmentMaps/3/py.jpg",
      "environmentMaps/3/ny.jpg",
      "environmentMaps/3/pz.jpg",
      "environmentMaps/3/nz.jpg",
    ]);

    environmentMap.colorSpace = THREE.SRGBColorSpace;
    scene.background = environmentMap;
    scene.environment = environmentMap;

    // Textures
    const mapTexture = textureLoader.load("models/LeePerrySmith/color.jpg");
    mapTexture.colorSpace = THREE.SRGBColorSpace;

    const normalTexture = textureLoader.load("models/LeePerrySmith/normal.jpg");

    // Plane
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(15, 15, 15),
      new THREE.MeshStandardMaterial()
    );

    plane.rotation.y = Math.PI;
    plane.position.y = -5;
    plane.position.z = 5;
    scene.add(plane);

    // Material
    const material = new THREE.MeshStandardMaterial({
      map: mapTexture,
      normalMap: normalTexture,
    });

    const depthMaterial = new THREE.MeshDepthMaterial({
      depthPacking: THREE.RGBADepthPacking,
    });

    const customUniforms = {
      uTime: { value: 0 },
    };

    material.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = customUniforms.uTime;

      shader.vertexShader = shader.vertexShader.replace(
        "#include <common>",
        `
          #include <common>    
          
          uniform float uTime;

          mat2 get2dRotateMatrix(float _angle) {
            return mat2(cos(_angle), -sin(_angle), sin(_angle), cos(_angle));
          }
        `
      );
      shader.vertexShader = shader.vertexShader.replace(
        "#include <beginnormal_vertex>",
        `
          #include <beginnormal_vertex>

          float angle = sin(position.y + uTime) * 0.3;
          mat2 rotateMatrix = get2dRotateMatrix(angle);

          objectNormal.xz = rotateMatrix * objectNormal.xz;
        `
      );
      shader.vertexShader = shader.vertexShader.replace(
        "#include <begin_vertex>",
        `
          #include <begin_vertex>

          transformed.xz = transformed.xz * rotateMatrix;
        `
      );
    };

    depthMaterial.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = customUniforms.uTime;

      shader.vertexShader = shader.vertexShader.replace(
        "#include <common>",
        `
          #include <common>    
          
          uniform float uTime;

          mat2 get2dRotateMatrix(float _angle) {
            return mat2(cos(_angle), -sin(_angle), sin(_angle), cos(_angle));
          }
        `
      );
      shader.vertexShader = shader.vertexShader.replace(
        "#include <begin_vertex>",
        `
          #include <begin_vertex>

          float angle = sin(position.y + uTime) * 0.3;
          mat2 rotateMatrix = get2dRotateMatrix(angle);

          transformed.xz = transformed.xz * rotateMatrix;
        `
      );
    };

    //  Models
    gltfLoader.load("models/LeePerrySmith/LeePerrySmith.glb", (gltf) => {
      gltf.scene.scale.setScalar(1);
      gltf.scene.position.set(0, 0, 0);
      gltf.scene.rotation.y = Math.PI * 0.5;

      const mesh = gltf.scene.children[0] as THREE.Mesh;
      if (mesh.isMesh) {
        mesh.material = material;
        (mesh as any).customDepthMaterial = depthMaterial; // not standard in TS
      }

      scene.add(gltf.scene);

      updateAllMaterials();
    });

    //  Objects;
    //  const sphere = new THREE.Mesh(
    //    new THREE.SphereGeometry(1, 32, 32),
    //    new THREE.MeshStandardMaterial()
    //  );

    //  scene.add(sphere);

    // Animate
    const timer = new Timer();

    function animate() {
      timer.update();
      const elapsedTime = timer.getElapsed();
      orbitControls.update();

      customUniforms.uTime.value = elapsedTime;

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

export default ModifiedMaterials;
