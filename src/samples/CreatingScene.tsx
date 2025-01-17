import { useEffect } from 'react'
import * as THREE from 'three'
import gsap from 'gsap';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import GUI from 'lil-gui';
import diamond_ore from '../assets/diamond_block.jpg';
// import neil from '../assets/dl_neil.jpg';
// import freak from '../assets/freak.png';
// import moon from '../assets/moon.jpg';
// import crate from '../assets/csgo_crate.jpg';

const CreatingScene = () => {
  useEffect(() => {
    // Debug
    const gui = new GUI();

    gui.add(document, 'title');

    // Parameters for lil guigui to configure
    const parameters = {
      color: '#00ff00',
      isWireframe: false,
      elevation: 0,
      x: 0,
      visible: true,
      height: 1,
      width: 1,
      depth: 1,
      widthSegments: 1,
      heightSegments: 1,
      depthSegments: 1,
      spin: () => {
        gsap.to(cube.rotation, {
          y: cube.rotation.y + Math.PI * 2,
          x: cube.rotation.x + Math.PI * 2,
          duration: 1,
          ease: "power4.out"
        });
      }
    }

    gui.addColor(parameters, 'color').onChange((value: string) => {
      cube.material.color.set(value);
    });

    gui.add(parameters, 'isWireframe').onChange((value: boolean) => {
      cube.material.wireframe = value;
    });

    gui.add(parameters, 'x', -5, 5, 0.5).onChange((value: number) => {
      cube.position.x = value;
    });

    gui.add(parameters, 'elevation', -5, 5, 0.5).onChange((value: number) => {
      cube.position.y = value;
    });

    gui.add(parameters, 'visible').onChange((value: boolean) => {
      cube.visible = value;
    });

    gui.add(parameters, 'height', 1, 10, 1).onChange((value: number) => {
      cube.geometry.dispose();
      cube.geometry = new THREE.BoxGeometry(parameters.width, value, parameters.depth, parameters.widthSegments, parameters.heightSegments, parameters.depthSegments);
    });

    gui.add(parameters, 'width', 1, 10, 1).onChange((value: number) => {
      cube.geometry.dispose();
      cube.geometry = new THREE.BoxGeometry(value, parameters.height, parameters.depth, parameters.widthSegments, parameters.heightSegments, parameters.depthSegments);
    });

    gui.add(parameters, 'depth', 1, 10, 1).onChange((value: number) => {
      cube.geometry.dispose();
      cube.geometry = new THREE.BoxGeometry(parameters.width, parameters.height, value, parameters.widthSegments, parameters.heightSegments, parameters.depthSegments);
    });

    gui.add(parameters, 'widthSegments', 1, 10, 1).onChange((value: number) => {
      cube.geometry.dispose();
      cube.geometry = new THREE.BoxGeometry(parameters.width, parameters.height, parameters.depth, value, parameters.heightSegments, parameters.depthSegments)
    });

    gui.add(parameters, 'heightSegments', 1, 10, 1).onChange((value: number) => {
      cube.geometry.dispose();
      cube.geometry = new THREE.BoxGeometry(parameters.width, parameters.height, parameters.depth, parameters.widthSegments, value, parameters.depthSegments)
    });

    gui.add(parameters, 'depthSegments', 1, 10, 1).onChange((value: number) => {
      cube.geometry.dispose();
      cube.geometry = new THREE.BoxGeometry(parameters.width, parameters.height, parameters.depth, parameters.widthSegments, parameters.heightSegments, value)
    });

    gui.add(parameters, 'spin');

    const scene = new THREE.Scene();
    let aspectRatio = (window.innerWidth / window.innerHeight)
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    // const camera = new THREE.OrthographicCamera( -10 * aspectRatio, 10 * aspectRatio, 10, -10, 1, 1000 );

    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    //LIMIT SET PIXEL RATIO VERY NEEDED FOR OPTIMIZATION
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
      aspectRatio = (window.innerWidth / window.innerHeight);
      camera.aspect = aspectRatio;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    window.addEventListener('dblclick', () => {
      if (!document.fullscreenElement) {
        console.log('wassupt beijing')
        renderer.domElement.requestFullscreen();
      }
      else {
        document.exitFullscreen();
      }
    })

    // Create controls UI
    // const controlsDiv = document.createElement('div');
    // controlsDiv.style.position = 'fixed';
    // controlsDiv.style.top = '10px';
    // controlsDiv.style.right = '10px';
    // controlsDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    // controlsDiv.style.color = 'white';
    // controlsDiv.style.padding = '10px';
    // controlsDiv.style.fontFamily = 'monospace';
    // document.body.appendChild(controlsDiv);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Create boundary settings
    // const bounds = {
    //   x: 8,
    //   y: 4
    // };

    // Create sliders for camera and boundaries
    // controlsDiv.innerHTML = `
    //   <div>Camera Z Position: <input type="range" id="cameraZ" min="5" max="20" value="10" step="1"> <span id="cameraZValue">10</span></div>
    //   <div>X Boundary: <input type="range" id="boundX" min="2" max="15" value="8" step="0.5"> <span id="boundXValue">8</span></div>
    //   <div>Y Boundary: <input type="range" id="boundY" min="2" max="10" value="4" step="0.5"> <span id="boundYValue">4</span></div>
    // `;

    // Create visible boundary box
    // const boundaryBox = new THREE.LineSegments(
    //   new THREE.EdgesGeometry(new THREE.BoxGeometry(bounds.x * 2, bounds.y * 2, 0.1)),
    //   new THREE.LineBasicMaterial({ color: 0xffffff })
    // );
    // scene.add(boundaryBox);

    /*
     TEXTURES
    */

    // const image = new Image();
    // const texture = new THREE.Texture(image);

    // image.addEventListener('load', () => {
    //   texture.needsUpdate = true;
    // });

    // image.src = diamond_ore;

    // TextureLoader

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
    const diamondOreTexture = textureLoader.load(
      diamond_ore,
      () => {
        console.log('load');
      },
      () => {
        console.log('progress');
      },
      () => {
        console.log('error');
      }
    );

    // texture.colorSpace = THREE.SRGBColorSpace;

    // diamondOreTexture.repeat.x = 3;
    // diamondOreTexture.repeat.y = 3;
    // diamondOreTexture.wrapS = THREE.RepeatWrapping;
    // diamondOreTexture.wrapT = THREE.RepeatWrapping;

    diamondOreTexture.generateMipmaps = false;
    diamondOreTexture.minFilter = THREE.NearestFilter;
    diamondOreTexture.magFilter = THREE.NearestFilter;

    // Lighting

    const light = new THREE.DirectionalLight('white', 5);
    const ambientLight = new THREE.AmbientLight('white', 0.5);

    light.position.set(10, 10, 0);

    scene.add(light);
    scene.add(ambientLight);

    // Add coordinate axes
    const axesHelper = new THREE.AxesHelper(10);
    scene.add(axesHelper);

    // Create cubes
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1, 1, 1, 1),
      new THREE.MeshStandardMaterial({ map: diamondOreTexture })
    );

    // const cubeTwo = new THREE.Mesh(
    //   new THREE.BoxGeometry(1, 1, 2),
    //   new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
    // );

    // const cubeThree = new THREE.Mesh(
    //   new THREE.BoxGeometry(1, 1, 1),
    //   new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
    // )

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 16),
      new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
    );

    const geometry = new THREE.BufferGeometry();

    const count = 5;

    const positionsArray = new Float32Array(count * 3 * 3);

    for (let i = 0; i < count * 3 * 3; i++) {
      positionsArray[i] = (Math.random() - 0.5) * 6
    }

    console.log(positionsArray);

    const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);

    geometry.setAttribute('position', positionsAttribute);

    // const someShape = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true }));

    const group = new THREE.Group();

    scene.add(group);

    group.add(cube);
    // group.add(cubeTwo);
    // group.add(cubeThree);
    // group.add(someShape);
    group.add(sphere);

    // Set initial camera position
    camera.position.z = 10;
    camera.position.x = 0;
    camera.position.y = 0;

    // Movement speed
    // const speed = {
    //   x: 0.1,
    //   y: 0.1
    // };

    // Handle slider changes
    // document.getElementById('cameraZ').addEventListener('input', (e) => {
    //   camera.position.z = Number(e.target.value);
    //   document.getElementById('cameraZValue').textContent = e.target.value;
    // });

    // document.getElementById('boundX').addEventListener('input', (e) => {
    //   bounds.x = Number(e.target.value);
    //   document.getElementById('boundXValue').textContent = e.target.value;
    //   updateBoundaryBox();
    // });

    // document.getElementById('boundY').addEventListener('input', (e) => {
    //   bounds.y = Number(e.target.value);
    //   document.getElementById('boundYValue').textContent = e.target.value;
    //   updateBoundaryBox();
    // });

    // function updateBoundaryBox() {
    //   scene.remove(boundaryBox);
    //   boundaryBox.geometry.dispose();
    //   boundaryBox.material.dispose();

    //   const newGeometry = new THREE.BoxGeometry(bounds.x * 2, bounds.y * 2, 0.1);
    //   boundaryBox.geometry = new THREE.EdgesGeometry(newGeometry);
    //   scene.add(boundaryBox);
    // }

    // Position display
    // const positionDiv = document.createElement('div');
    // positionDiv.style.position = 'fixed';
    // positionDiv.style.bottom = '10px';
    // positionDiv.style.left = '10px';
    // positionDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    // positionDiv.style.color = 'white';
    // positionDiv.style.padding = '10px';
    // positionDiv.style.fontFamily = 'monospace';
    // document.body.appendChild(positionDiv);

    // const MAX_SCALE = 5;
    // const MIN_SCALE = 1;
    // const SCALE_SPEED = 0.05;

    // let isGrowing = true;

    // function animateCube() {
    //   if (isGrowing) {
    //     cubeTwo.scale.x += SCALE_SPEED;
    //     if (cubeTwo.scale.x >= MAX_SCALE) {
    //       isGrowing = false;
    //     }
    //   }
    //   else {
    //     cubeTwo.scale.x -= SCALE_SPEED;
    //     if (cubeTwo.scale.x <= MIN_SCALE) {
    //       isGrowing = true;
    //     }
    //   }

    //   cubeTwo.scale.x = Math.max(MIN_SCALE, Math.min(MAX_SCALE, cubeTwo.scale.x));

    //   // If you want uniform scaling in all directions:
    //   cubeTwo.scale.y = cubeTwo.scale.x;
    //   cubeTwo.scale.z = cubeTwo.scale.x;
    // }

    // let time = Date.now();

    const clock = new THREE.Clock();

    // gsap.to(cube.position, { duration: 1, delay: 1, x: 6, y: -2 });

    const cursor = { x: 0, y: 0 }

    window.addEventListener('mousemove', (e) => {
      cursor.x = e.clientX / window.innerWidth - 0.5;
      cursor.y = - (e.clientY / window.innerHeight - 0.5);
    })

    const r = 10;
    let theta = 0;
    const dTheta = 2 * Math.PI / 1000;

    function animate() {

      // const currTime = Date.now();
      // const deltaTime = currTime - time;
      // time = currTime

      const elapsedClock = clock.getElapsedTime();

      // cube.rotation.x += 0.001 * deltaTime;
      cube.rotation.y = elapsedClock * 0.1;

      // cube.position.x = Math.sin(elapsedClock)
      // cube.position.y = Math.cos(elapsedClock)
      // cube.position.z = Math.sin(elapsedClock)


      // cubeTwo.rotation.x += 0.001 * deltaTime;
      // cubeTwo.rotation.y += 0.001 * deltaTime;

      // cubeTwo.position.x += speed.x;
      // cubeTwo.position.y += speed.y;

      // camera.position.x = Math.sin(cursor.x * (Math.PI * 2)) * 10;
      // camera.position.y = cursor.y * 10;
      // camera.position.z = Math.cos(cursor.x * (Math.PI * 2)) * 10;

      // camera.lookAt(cube.position);

      theta += dTheta;
      sphere.position.x = r * Math.cos(theta);
      sphere.position.z = r * Math.sin(theta);
      controls.update();

      // Update position display
      // positionDiv.textContent = `Cube Position:
      // X: ${cubeTwo.position.x.toFixed(2)} (Bounds: ±${bounds.x})
      // Y: ${cubeTwo.position.y.toFixed(2)} (Bounds: ±${bounds.y})`;

      // // Boundary check
      // if (Math.abs(cubeTwo.position.x) > bounds.x) {
      //   speed.x = -speed.x;
      //   boundaryBox.material.color.setHex(0xff0000);
      //   setTimeout(() => boundaryBox.material.color.setHex(0xffffff), 100);
      // }

      // if (Math.abs(cubeTwo.position.y) > bounds.y) {
      //   speed.y = -speed.y;
      //   boundaryBox.material.color.setHex(0xff0000);
      //   setTimeout(() => boundaryBox.material.color.setHex(0xffffff), 100);
      // }

      // animateCube();

      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    // Cleanup
    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
}

export default CreatingScene;