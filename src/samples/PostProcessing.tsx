import GUI from "lil-gui";
import * as THREE from "three";
import { useEffect } from "react";
import {
  DRACOLoader,
  GLTFLoader,
  OrbitControls,
  Timer,
} from "three/examples/jsm/Addons.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/Addons.js";
import { DotScreenPass } from "three/examples/jsm/Addons.js";
import { GlitchPass } from "three/examples/jsm/Addons.js";
import { ShaderPass } from "three/examples/jsm/Addons.js";
import { RGBShiftShader } from "three/examples/jsm/Addons.js";
import { GammaCorrectionShader } from "three/examples/jsm/Addons.js";
import { SMAAPass } from "three/examples/jsm/Addons.js";
import { UnrealBloomPass } from "three/examples/jsm/Addons.js";

const PostProcessing = () => {
  useEffect(() => {
    // Loaders
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco");
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const textureLoader = new THREE.TextureLoader();

    // Lil Guigui
    const gui = new GUI();

    console.log(EffectComposer);

    // Scene
    const scene = new THREE.Scene();
    let aspectRatio = window.innerWidth / window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Post-processing
    const renderTarget = new THREE.WebGLRenderTarget(800, 600, {
      samples: renderer.getPixelRatio() === 1 ? 1 : 0,
    });

    // Camera
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

    camera.position.set(1, 3, -10);

    // Effect composer
    const effectComposer = new EffectComposer(renderer, renderTarget);
    effectComposer.setSize(window.innerWidth, window.innerHeight);
    effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const renderPass = new RenderPass(scene, camera);
    effectComposer.addPass(renderPass);

    const dotScreenPass = new DotScreenPass();
    dotScreenPass.enabled = false;
    effectComposer.addPass(dotScreenPass);

    const glitchPass = new GlitchPass();
    glitchPass.enabled = false;
    glitchPass.goWild = false;
    effectComposer.addPass(glitchPass);

    const rgbShiftPass = new ShaderPass(RGBShiftShader);
    rgbShiftPass.enabled = false;
    effectComposer.addPass(rgbShiftPass);

    const unrealBloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight), // resolution
      0.3,  // strength
      1.0,  // radius
      0.6   // threshold
    );
    effectComposer.addPass(unrealBloomPass);

    const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader);
    effectComposer.addPass(gammaCorrectionPass);

    // Tint pass
    const TintShader = {
      uniforms: {
        tDiffuse: { value: null },
        uTint: { value: null },
      },
      vertexShader: `
        varying vec2 vUv;

        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

          vUv = uv;
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform vec3 uTint;

        varying vec2 vUv;

        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          color.rgb += uTint;
          gl_FragColor = color;
        }
      `,
    };

    const tintPass = new ShaderPass(TintShader);
    tintPass.material.uniforms.uTint.value = new THREE.Vector3();
    effectComposer.addPass(tintPass);

    // Displacement pass
    const DisplacementShader = {
      uniforms: {
        tDiffuse: { value: null },
        uNormalMap: { value: null },
      },
      vertexShader: `
        varying vec2 vUv;

        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

          vUv = uv;
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform sampler2D uNormalMap;

        varying vec2 vUv;

        void main() {
          vec3 normalColor = texture2D(uNormalMap, vUv).xyz * 2.0 - 1.0;
          vec2 newUv = vUv + normalColor.xy * 0.1;
          vec4 color = texture2D(tDiffuse, newUv);

          vec3 lightDirection = normalize(vec3(-1.0, 1.0, 0.0));
          float lightness = clamp(dot(normalColor, lightDirection), 0.0, 1.0);
          color.rgb += lightness * 2.0;

          gl_FragColor = color;
        }
      `,
    };

    const displacementPass = new ShaderPass(DisplacementShader);
    // displacementPass.material.uniforms.uTime.value = 0;
    displacementPass.material.uniforms.uNormalMap.value = textureLoader.load(
      "textures/interfaceNormalMap.png"
    );
    effectComposer.addPass(displacementPass);

    // SMAA Pass

    if (renderer.getPixelRatio() === 1 && !renderer.capabilities.isWebGL2) {
      const smaaPass = new SMAAPass(window.innerWidth, window.innerHeight);
      effectComposer.addPass(smaaPass);
    }

    // Gui
    gui.add(unrealBloomPass, "enabled");
    gui.add(unrealBloomPass, "strength").min(0).max(2).step(0.001);
    gui.add(unrealBloomPass, "radius").min(0).max(2).step(0.001);
    gui.add(unrealBloomPass, "threshold").min(0).max(1).step(0.001);

    gui
      .add(tintPass.material.uniforms.uTint.value, "x")
      .min(-1)
      .max(1)
      .step(0.001)
      .name("r");
    gui
      .add(tintPass.material.uniforms.uTint.value, "y")
      .min(-1)
      .max(1)
      .step(0.001)
      .name("g");
    gui
      .add(tintPass.material.uniforms.uTint.value, "z")
      .min(-1)
      .max(1)
      .step(0.001)
      .name("b");

    window.addEventListener("resize", () => {
      aspectRatio = window.innerWidth / window.innerHeight;
      camera.aspect = aspectRatio;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      effectComposer.setSize(window.innerWidth, window.innerHeight);
      effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    document.body.appendChild(renderer.domElement);

    // Lights
    const directionalLight = new THREE.DirectionalLight("#ffffff", 3);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(1024, 1024);
    directionalLight.shadow.camera.far = 15;
    directionalLight.shadow.normalBias = 0.05;
    directionalLight.position.set(0.25, 3, -2.25);

    scene.add(directionalLight);

    // Orbit Control
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;

    /*
     * Loading models and environment
     */
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

    // Environment
    const environmentMap = cubeTextureLoader.load([
      "environmentMaps/4/px.jpg",
      "environmentMaps/4/nx.jpg",
      "environmentMaps/4/py.jpg",
      "environmentMaps/4/ny.jpg",
      "environmentMaps/4/pz.jpg",
      "environmentMaps/4/nz.jpg",
    ]);

    environmentMap.colorSpace = THREE.SRGBColorSpace;
    scene.background = environmentMap;
    scene.environment = environmentMap;

    gltfLoader.load("models/DamagedHelmet/glTF/DamagedHelmet.gltf", (gltf) => {
      gltf.scene.scale.setScalar(3);
      gltf.scene.position.set(0, 0, 0);
      gltf.scene.rotation.y = Math.PI * 0.5;

      scene.add(gltf.scene);

      updateAllMaterials();
    });

    // Animate
    const timer = new Timer();

    function animate() {
      timer.update();
      // const elapsedTime = timer.getElapsed();
      orbitControls.update();

      // displacementPass.material.uniforms.uTime.value = elapsedTime;

      // renderer.render(scene, camera);
      effectComposer.render();
    }

    renderer.setAnimationLoop(animate);

    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
      gui.destroy();
    };
  }, []);

  return null;
};

export default PostProcessing;
