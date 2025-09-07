import GUI from "lil-gui";
import * as THREE from "three";
import { useEffect } from "react";
import {
  DRACOLoader,
  GLTFLoader,
  OrbitControls,
  Timer,
} from "three/examples/jsm/Addons.js";

const Raycaster = () => {
  useEffect(() => {
    let aspectRatio = window.innerWidth / window.innerHeight;

    // Lil Guigui
    const gui = new GUI();

    // Scene
    const scene = new THREE.Scene();

    // Render
    const renderer = new THREE.WebGLRenderer();

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

    // Cursor
    const mouse = new THREE.Vector2();

    window.addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener("click", () => {
      if (currentIntersect) {
        switch (currentIntersect.object) {
          case mesh1:
            console.log("clicked on mesh1");
            break;
          case mesh2:
            console.log("clicked on mesh2");
            break;
          case mesh3:
            console.log("clicked on mesh3");
            break;
        }
      }
    });

    // Camera
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

    camera.position.setScalar(5);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

    scene.add(ambientLight, directionalLight);

    // Models
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");

    console.log(dracoLoader);

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    let duck: THREE.Object3D | null = null;

    gltfLoader.load(
      "models/Duck/glTF-Draco/Duck.gltf",
      (gltf) => {
        console.log("load");

        duck = gltf.scene;

        duck.position.y = -1.2;
        scene.add(duck);

        console.log(duck);
      },
      (progress) => {
        console.log("progress");
        console.log(progress);
      },
      (error) => {
        console.log("error");
        console.log(error);
      }
    );

    // Orbit Controls
    const orbitCOntrols = new OrbitControls(camera, renderer.domElement);
    orbitCOntrols.enableDamping = true;

    // Objects
    const mesh1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    mesh1.position.set(-2, 0, 0);

    const mesh2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );

    const mesh3 = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    mesh3.position.set(2, 0, 0);

    scene.add(mesh1, mesh2, mesh3);

    // Raycaster
    const raycaster = new THREE.Raycaster();

    // const rayOrigin = new THREE.Vector3(-3, 0, 0);
    // const rayDirection = new THREE.Vector3(10, 0, 0);
    // rayDirection.normalize();

    // raycaster.set(rayOrigin, rayDirection);

    // const intersect = raycaster.intersectObject(mesh2);
    // console.log(intersect);

    // const intersects = raycaster.intersectObjects([mesh1, mesh2, mesh3]);
    // console.log(intersects)

    // Animate
    const timer = new Timer();

    let currentIntersect: THREE.Intersection | null = null;

    console.log(mesh1);

    const animate = () => {
      timer.update();
      const elapsedTime = timer.getElapsed();

      orbitCOntrols.update();

      // Animate Objects
      mesh1.position.y = Math.sin(elapsedTime * 0.5) * 1.5;
      mesh2.position.y = Math.sin(elapsedTime * 0.8) * 1.5;
      mesh3.position.y = Math.sin(elapsedTime * 1.4) * 1.5;

      // Cast a ray
      raycaster.setFromCamera(mouse, camera);

      // const rayOrigin = new THREE.Vector3(-3, 0, 0);
      // const rayDirection = new THREE.Vector3(1, 0, 0);
      // rayDirection.normalize();

      // raycaster.set(rayOrigin, rayDirection);

      const intersects = raycaster.intersectObjects([mesh1, mesh2, mesh3]);

      let intersect = null;

      if (duck) {
        intersect = raycaster.intersectObject(duck);
      }

      // let firstTime = true;

      for (const object of [mesh1, mesh2, mesh3]) {
        // Handle both single material and material array cases
        const mesh = object as THREE.Mesh;
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];

        materials.forEach(material => {
          if ('color' in material) {
            (material as THREE.MeshBasicMaterial).color.set(0xff0000);
          }
        });
      }

      if (intersects.length) {
        if (!currentIntersect) {
          console.log("mouse enter");
        }

        // Type assertion to access material property
        ((intersects[0].object as THREE.Mesh).material as THREE.MeshBasicMaterial).color.set(0x0000ff);
        currentIntersect = intersects[0];
      } else {
        if (currentIntersect) {
          console.log("mouse leave");
        }

        currentIntersect = null;
      }

      if (duck && intersect) { // Add null check for intersect
        if (intersect.length) {
          duck.scale.setScalar(2);
        } else {
          duck.scale.setScalar(1);
        }
      }

      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    // Cleanup
    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
      gui.destroy();
    };
  }, []);

  return null;
};

export default Raycaster;
