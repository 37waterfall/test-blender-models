import * as THREE from "./libs/three.module.js";

import { OrbitControls } from "./libs/OrbitControls.js";
import { CSS2DRenderer, CSS2DObject } from "./libs/CSS2DRenderer.js";

import { GLTFLoader } from "./libs/GLTFLoader.js";

// import { GUI } from "./libs/lil-gui.module.min.js";

import Stats from "./libs/stats.module.js";

import { RGBELoader } from "./libs/RGBELoader.js";

// let gui;

let camera,
  scene,
  renderer,
  labelRenderer,
  stats,
  controls,
  manager,
  textureLoader;

let tube,
  curve,
  curveVector3 = [],
  haltPoints = [],
  haltIndex = 0;

let _time = 0;

// page

let loadingBox = document.querySelector(".loadingBox");
let homeBox = document.querySelector(".homeBox");

let topBox = document.querySelector(".topBox");
let bottomBox = document.querySelector(".bottomBox");

let optionInfoBox = document.querySelector(".optionInfoBox");

// loading 接入实际数据显示！
// setTimeout(() => {
//   loadingBox.classList.add("animate__animated", "animate__fadeOut");
//   loadingBox.style.zIndex = 0;
// }, 3000);

// ---------------
// btn
let leftBtn, rightBtn, enterBtn;
let flag = false;
let moveDirection;

let listBtn;

let bottomListBtn, bottomItemList;

leftBtn = document.querySelector("#leftBtn");
rightBtn = document.querySelector("#rightBtn");
enterBtn = document.querySelector("#enterBtn");

listBtn = document.querySelector("#listBtn");

// 事件委托

bottomListBtn = document.querySelector("#bottomList");
bottomItemList = document.querySelectorAll(".bottomItem");
bottomListBtn.addEventListener("click", (e) => {
  // 通过data属性方法是哪一个！！不用管中英文！
  // console.log(e.target.dataset.index);

  // 排他
  bottomItemList.forEach((item) => {
    item.classList.remove("active");
  });

  // 添加active
  e.target.classList.add("active");
});

leftBtn.addEventListener("click", () => {
  flag = true;
  haltIndex--;
  haltIndex %= haltPoints.length;
  moveDirection = "Back";
});

rightBtn.addEventListener("click", () => {
  flag = true;
  haltIndex++;
  haltIndex %= haltPoints.length;
  moveDirection = "Front";
});

enterBtn.addEventListener("click", () => {
  homeBox.classList.remove("animate__animated", "animate__fadeInRight");
  homeBox.classList.add("animate__animated", "animate__fadeOutRight");
  topBox.style.top = "0";
  bottomBox.style.bottom = "0";
  leftBtn.style.left = "20px";
  rightBtn.style.right = "20px";

  homeBox.style.zIndex = 0;
});

listBtn.addEventListener("click", () => {
  homeBox.classList.remove("animate__animated", "animate__fadeOutRight");
  homeBox.classList.add("animate__animated", "animate__fadeInRight");

  topBox.style.top = "-10vh";
  bottomBox.style.bottom = "-10vh";

  leftBtn.style.left = "-52px";
  rightBtn.style.right = "-52px";

  homeBox.style.zIndex = 10;
});

// ---------------
// ----

// const layers = {
//   "Toggle Name": function () {
//     camera.layers.toggle(0);
//   },
//   "Toggle Mass": function () {
//     camera.layers.toggle(1);
//   },
//   "Enable All": function () {
//     camera.layers.enableAll();
//   },

//   "Disable All": function () {
//     camera.layers.disableAll();
//   },
// };

const clock = new THREE.Clock();

init();

function init() {
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    300
  );
  camera.position.set(10, 5, 20);
  camera.layers.enableAll();
  camera.layers.toggle(1);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf2f7ff);
  scene.fog = new THREE.Fog(0xf2f7ff, 1, 25000);

  const dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(0, 0, 1);
  dirLight.layers.enableAll();
  scene.add(dirLight);

  const axesHelper = new THREE.AxesHelper(5);
  axesHelper.layers.enableAll();
  scene.add(axesHelper);

  function createCSS2D(obj, name, pos) {
    const div = document.createElement("div");
    div.className = "label";
    div.textContent = name;
    div.style.marginTop = "-1em";
    const label = new CSS2DObject(div);
    // label.position.set(0, pos, 0);
    // 基于父组件，，0，0，0即可。。。开始画线条。。。
    label.position.set(0, 0, 0);
    obj.add(label);
    label.layers.set(0);
  }

  // loadingManager.

  manager = new THREE.LoadingManager();
  manager.onLoad = initLoading;

  // textureLoader
  textureLoader = new THREE.TextureLoader(manager);

  const floorMap = textureLoader.load("./textures/floor.jpg", (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(100, 100);
  });
  floorMap.anisotropy = 4;

  // hdr.exr??
  new RGBELoader(manager).load(
    "./imgs/rooitou_park_1k.hdr",
    function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;

      scene.background = texture;
      scene.environment = texture;
    }
  );

  const progressbarElem = document.querySelector("#progressbar");
  manager.onProgress = (url, itemsLoaded, itemsTotal) => {
    progressbarElem.style.width = `${((itemsLoaded / itemsTotal) * 100) | 0}%`;

    console.log((itemsLoaded / itemsTotal) * 100, url);
  };

  const models = {
    pig: { url: "./models/animals/Pig.gltf" },
    cow: { url: "./models/animals/Cow.gltf" },
    llama: { url: "./models/animals/Llama.gltf" },
    pug: { url: "./models/animals/Pug.gltf" },
    sheep: { url: "./models/animals/Sheep.gltf" },
    zebra: { url: "./models/animals/Zebra.gltf" },
    horse: { url: "./models/animals/Horse.gltf" },
    // knight: { url: "./models/knight/KnightCharacter.gltf" },
  };
  {
    const gltfLoader = new GLTFLoader(manager);
    let temp = 0;
    for (const model of Object.values(models)) {
      gltfLoader.load(model.url, (gltf) => {
        model.gltf = gltf;

        // add gltf
        gltf.scene.position.x = (temp - 3) * 3;
        temp++;

        scene.add(gltf.scene);
      });
    }
  }

  function initLoading() {
    // hide the loading bar
    const loadingElem = document.querySelector("#loading");
    loadingElem.style.display = "none";

    // 加载完执行动画！！
    animate();
  }

  // gltf

  const loader = new GLTFLoader(manager);

  loader.load("./models/test-curve02.glb", (gltf) => {
    // 这个缩放还是模型中的好。。。
    // gltf.scene.scale.set(0.5, 0.5, 0.5);

    gltf.scene.traverse((item) => {
      if (item.isMesh && item.name.indexOf("Cube") !== -1) {
        // item.material = new THREE.MeshBasicMaterial({
        //   color: "green",
        // });
        // item.scale.set(0.1, 0.1, 0.1);
        item.visible = false;
        const tempText = `
          ${item.name}, 
          x=${item.position.x.toFixed(2)}, 
          y=${item.position.y.toFixed(2)}, 
          z=${item.position.z.toFixed(2)}
        `;
        createCSS2D(item, tempText, item.position);

        curveVector3.push(item.position);

        if (item.name.endsWith("h")) {
          haltPoints.push(item.position);
        }
      } else if (item.name.indexOf("Text") !== -1) {
        item.material = new THREE.MeshBasicMaterial({
          color: "blue",
        });
      } else {
        item.material = new THREE.MeshBasicMaterial({
          map: floorMap,
        });
      }
    });

    console.log(haltPoints);

    curve = new THREE.CatmullRomCurve3([...curveVector3]);

    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

    // Create the final object to add to the scene
    tube = new THREE.Line(geometry, material);
    // tube.visible = false;
    scene.add(tube);

    scene.add(gltf.scene);
  });

  // render.

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.domElement.style.position = "absolute";
  labelRenderer.domElement.style.top = "0px";
  document.body.appendChild(labelRenderer.domElement);

  stats = new Stats();
  document.body.appendChild(stats.dom);

  controls = new OrbitControls(camera, labelRenderer.domElement);
  controls.minDistance = 5;
  controls.maxDistance = 200;
  controls.enableRotate = true; // 开局自动旋转

  //

  window.addEventListener("resize", onWindowResize);

  // 取消gui
  // initGui();
}

function updateCamera() {
  // const time = clock.getElapsedTime();
  const time = _time;
  const looptime = 20;
  const t = (time % looptime) / looptime;
  const t2 = ((time + 0.1) % looptime) / looptime;

  const pos = curve.getPointAt(t);
  const pos2 = curve.getPointAt(t2);

  const _temp = haltPoints[haltIndex].clone().sub(pos.clone());

  if (_temp.x < 0.5 && _temp.y < 0.5 && _temp.z < 0.5) {
    // alert("1");
    flag = false;
  }

  camera.position.copy(pos);
  camera.lookAt(pos2);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  labelRenderer.setSize(window.innerWidth, window.innerHeight);
}

function moveCamera(moveDirection) {
  // console.log(_time);

  updateCamera();
  _time += moveDirection === "Front" ? 0.01 : -0.01;
}

function animate() {
  requestAnimationFrame(animate);

  // const elapsed = clock.getElapsedTime();

  if (flag) {
    moveCamera(moveDirection);
  }

  stats.update();

  // controls.update();

  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
}

//

// function initGui() {
//   gui = new GUI();

//   gui.add(layers, "Toggle Name");
//   gui.add(layers, "Toggle Mass");
//   gui.add(layers, "Enable All");
//   gui.add(layers, "Disable All");
// }
