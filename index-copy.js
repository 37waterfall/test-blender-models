import * as THREE from "./libs/three.module.js";

import { OrbitControls } from "./libs/OrbitControls.js";
import { CSS2DRenderer, CSS2DObject } from "./libs/CSS2DRenderer.js";

import { GLTFLoader } from "./libs/GLTFLoader.js";

// import { GUI } from "./libs/lil-gui.module.min.js";

import Stats from "./libs/stats.module.js";

import { RGBELoader } from "./libs/RGBELoader.js";

// 所有数据来源。。
import data from "./libs/data.js";

// 物理

import { Octree } from "./libs/Octree.js";

import { Capsule } from "./libs/Capsule.js";

import { TWEEN } from "./libs/tween.module.min.js";

// let gui;

let camera,
  scene,
  renderer,
  labelRenderer,
  stats,
  controls,
  manager,
  textureLoader,
  mixer;

let tube,
  curve,
  curveVector3 = [],
  haltPoints = [],
  haltIndex = -1;

const wordsArray = [
  // "gc_body",
  "gc_szzSculpture",
  "gc_ddzsSculpture",
  "gc_sxb",
  "gc_zzsw",

  "gj_body",
  "gj_ddgg",
  "gj_sz",
  "gj_sg",

  "jng_body",
  "jng_szzxx",
  "jng_ddzt",
  "jng_szzxjk",
  "jng_nksyl",
  "jng_szzyl",
  "jng_szzjzxqpxb",
  "jng_kxsxx",
  "jng_wmxx",
  "jng_rdwxybjc",
  "jng_szzsjysc",

  "jng_book_jrhyy",
  "jng_book_lz",
  "jng_book_ny",
  "jng_book_agz",
  "jng_book_dmgldgs",
  "jng_book_zgtk",
  "jng_zgwrzp",
  "jng_szzcssy",
  "jng_szzyjcg",
  "jng_zgysdgjyr",
  "jng_qh",
  "jng_tlh",
  "jng_jsy",

  "ddhm_body",
];

let _time = 0;

// posArray - tween animation
const posArray = [];
const lookAtArray = [];

// 状态控制。
let state = {
  isInit: false, // 是否的首次进入
  isMoving: false, // 是否处于移动中
  language: "ch", // 控制当前选中的语言,对应data数据。
  currentPos: 0, // 当前所处位置
  currentMode: "guide", // explorer
};
// audio
let clickAudio = document.querySelector("#clickAudio");

// page

let loadingBox = document.querySelector(".loadingBox");
let homeBox = document.querySelector(".homeBox");

let topBox = document.querySelector(".topBox");
let guideModeBtn = document.querySelector("#guideBtn");
let explorerBtn = document.querySelector("#explorerBtn");

let bottomBox = document.querySelector(".bottomBox");

let preInfoBox = document.querySelector(".preInfoBox");

// loading 接入实际数据显示！
// setTimeout(() => {
//   loadingBox.classList.add("animate__animated", "animate__fadeOut");
//   loadingBox.style.zIndex = 0;
// }, 3000);

// 模式切换

guideModeBtn.addEventListener("click", () => {
  state.currentMode = "guide";

  showBtn();

  guideModeBtn.classList.add("active");
  explorerBtn.classList.remove("active");
});

explorerBtn.addEventListener("click", () => {
  state.currentMode = "explorer";

  hideBtn();
  guideModeBtn.classList.remove("active");
  explorerBtn.classList.add("active");

  setPlayerColliderPos();
});

// joystick
const joystick = createJoystick();

function createJoystick() {
  const joystick = new VirtualJoystick({
    container: document.getElementById("container"),
    mouseSupport: true,
    limitStickTravel: true,
    stickRadius: 50,
  });
  joystick.addEventListener("touchStart", function () {
    console.log("down");
  });
  joystick.addEventListener("touchEnd", function () {
    console.log("up");
  });

  return joystick;
}

// const GRAVITY = 30;
const GRAVITY = 30;

const STEPS_PER_FRAME = 5;

const worldOctree = new Octree();

let playerCollider = new Capsule(
  new THREE.Vector3(6, 8.5, 23),
  new THREE.Vector3(6, 10.3, 23),
  0.35
);

// const playerVelocity = new THREE.Vector3();
const playerVelocity = new THREE.Vector3(6, 9, 23);
const playerDirection = new THREE.Vector3();

let playerOnFloor = false;

function playerCollisions() {
  const result = worldOctree.capsuleIntersect(playerCollider);

  playerOnFloor = false;

  if (result) {
    playerOnFloor = result.normal.y > 0;

    if (!playerOnFloor) {
      playerVelocity.addScaledVector(
        result.normal,
        -result.normal.dot(playerVelocity)
      );
    }

    playerCollider.translate(result.normal.multiplyScalar(result.depth));
  }
}

function updatePlayer(deltaTime) {
  deltaTime = 0.002;
  let damping = Math.exp(-4 * deltaTime) - 1;

  if (!playerOnFloor) {
    playerVelocity.y -= GRAVITY * deltaTime;

    // small air resistance
    damping *= 0.1;
  }

  playerVelocity.addScaledVector(playerVelocity, damping);

  const deltaPosition = playerVelocity.clone().multiplyScalar(deltaTime);
  playerCollider.translate(deltaPosition);

  playerCollisions();

  camera.position.copy(playerCollider.end);
}

function getForwardVector() {
  camera.getWorldDirection(playerDirection);
  playerDirection.y = 0;
  playerDirection.normalize();

  return playerDirection;
}

function getSideVector() {
  camera.getWorldDirection(playerDirection);
  playerDirection.y = 0;
  playerDirection.normalize();
  playerDirection.cross(camera.up);

  return playerDirection;
}

function controlsJoystick(deltaTime) {
  // gives a bit of air control
  const speedDelta = deltaTime * (playerOnFloor ? 25 : 8);

  // console.log(joystick);

  if (joystick.right()) {
    //D
    // 旋转！？
    // playerVelocity.add(getSideVector().multiplyScalar(speedDelta));
    camera.rotation.x = camera.rotation.z = 0;
    camera.rotation.y = camera.rotation.y - 60 * speedDelta * 0.001;
  }
  if (joystick.left()) {
    // A
    // playerVelocity.add(getSideVector().multiplyScalar(-speedDelta));
    camera.rotation.x = camera.rotation.z = 0;
    camera.rotation.y = camera.rotation.y + 60 * speedDelta * 0.001;
  }
  if (joystick.up()) {
    // W
    playerVelocity.add(getForwardVector().multiplyScalar(speedDelta));
  }
  if (joystick.down()) {
    // S
    playerVelocity.add(getForwardVector().multiplyScalar(-speedDelta));
  }
}

function teleportPlayerIfOob() {
  if (camera.position.y <= -25) {
    // 从这里开始！！！！啊啊啊
    // playerCollider.start.set(0, 0.35, 0);
    // playerCollider.end.set(0, 1, 0);
    playerCollider.start.set(6, 8.5, 23);
    playerCollider.end.set(6, 10.3, 23);
    playerCollider.radius = 0.35;
    camera.position.copy(playerCollider.end);
    camera.rotation.set(0, 0, 0);
  }
}

// ---------------
// btn
let leftBtn, rightBtn, enterBtn;
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

  // 用tweenjs 移动 + setPlayerColliderPos。
  switch (e.target.dataset.index) {
    case "0":
      moveCamera_Tween(4); // 公园综述。
      break;
    case "1":
      moveCamera_Tween(3); // 赛珍珠雕像。
      break;
    case "2":
      moveCamera_Tween(1); // 故居。
      break;
    case "3":
      moveCamera_Tween(2); // 纪念馆。
      break;
    case "4":
      moveCamera_Tween(0); // 大地翰墨
      break;
  }
});

leftBtn.addEventListener("click", () => {
  if (state.isMoving) {
    return;
  }

  state.isMoving = true;
  haltIndex--;
  haltIndex %= haltPoints.length;
  moveDirection = "Back";

  debugger;

  // 隐藏文字 - 移动中！
  hideWords();
  clickAudio.play();
});

rightBtn.addEventListener("click", () => {
  if (state.isMoving) {
    return;
  }

  state.isMoving = true;

  haltIndex++;
  haltIndex %= haltPoints.length;
  moveDirection = "Front";

  // 隐藏文字 - 移动中！
  hideWords();
  clickAudio.play();
});

enterBtn.addEventListener("click", () => {
  homeBox.classList.remove("animate__animated", "animate__fadeInRight");
  homeBox.classList.add("animate__animated", "animate__fadeOutRight");

  showUI();

  homeBox.style.zIndex = 0;
});

listBtn.addEventListener("click", () => {
  homeBox.classList.remove("animate__animated", "animate__fadeOutRight");
  homeBox.classList.add("animate__animated", "animate__fadeInRight");

  hideUI();

  homeBox.style.zIndex = 10;
});

//init
var selectHead = document.getElementsByClassName("select-head")[0];
var selectHeadCont = document.getElementsByClassName("select-head-cont");
var Option = document.getElementsByClassName("option")[0];
var optionItem = document.getElementsByClassName("option-item");

/*默认是第一个选项*/
selectHeadCont[0].innerHTML = optionItem[0].innerHTML;

/*点击后出现下拉框*/
selectHead.addEventListener(
  "click",
  function () {
    Option.style.display = "block";
  },
  false
);
/*点击选项后出现在下拉框*/
var len = optionItem.length;
for (var i = 0; i < len; i++) {
  optionItem[i].index = i;
  optionItem[i].addEventListener(
    "click",
    function () {
      selectHeadCont[0].innerHTML = optionItem[this.index].innerHTML;
      Option.style.display = "none";
    },
    false
  );
}

// show 和 hide ，显示和隐藏UI组件。
function showUI() {
  topBox.style.top = "0";
  bottomBox.style.bottom = "0";
  leftBtn.style.left = "20px";
  rightBtn.style.right = "20px";
}

function hideUI() {
  topBox.style.top = "-10vh";
  bottomBox.style.bottom = "-10vh";
  leftBtn.style.left = "-52px";
  rightBtn.style.right = "-52px";
}

function showBtn() {
  leftBtn.style.left = "20px";
  rightBtn.style.right = "20px";
}

function hideBtn() {
  leftBtn.style.left = "-52px";
  rightBtn.style.right = "-52px";
}

// pageInfo

// 修改文字内容！
const preHeader = document.querySelector(".preInfoBox .title");
const preInfoBody = document.querySelector(".preInfoBox .infoBody");
// 展示页从右侧出来，和选择语言的一样的位置，也要隐藏按钮
const readMoreBtn = document.querySelector("#readMoreBtn");
const detailInfoBox = document.querySelector(".detailInfoBox");
const detailCloseBtn = document.querySelector(".detailCloseBtn");

const detailHeader = document.querySelector(".detailInfoBox .title");
const detailInfoBody = document.querySelector(".detailInfoBox .infoBody");

// 停止的时候显示文字！
function showWords() {
  preInfoBox.classList.remove("animate__animated", "animate__fadeOutLeft");
  preInfoBox.classList.add("animate__animated", "animate__fadeInLeft");
}

function hideWords() {
  preInfoBox.classList.remove("animate__animated", "animate__fadeInLeft");
  preInfoBox.classList.add("animate__animated", "animate__fadeOutLeft");
}

function handleWords() {
  // 修改文字内容！preInfoBox + detailInfoBox
  preHeader.innerText = data[state.language][wordsArray[haltIndex]].header;
  preInfoBody.innerHTML = `${data[state.language][
    wordsArray[haltIndex]
  ].info.slice(0, 50)}
      ${
        data[state.language][wordsArray[haltIndex]].info.length > 50
          ? "..."
          : ""
      }`;

  // 插入音频按钮+音频路径
  const audioDOM = `<img class="audioImg" data-currentinfo='${wordsArray[haltIndex]}' src="./icons/audio.png" alt="audio" />`;

  detailHeader.innerHTML =
    data[state.language][wordsArray[haltIndex]].header + audioDOM;
  detailInfoBody.innerHTML = data[state.language][wordsArray[haltIndex]].info;
  detailHeader.dataset.currentinfo = wordsArray[haltIndex];

  const temp = ["gc_szzSculpture", "gj_body", "jng_body", "ddhm_empty"];
  if (temp.find((element) => element === wordsArray[haltIndex])) {
    handleCurrentPos(wordsArray[haltIndex], _time);
  }
}

// audioBtn + contentAudio内容播放！
const audioBtn = document.querySelector("#audioBtn");
const contentAudio = document.querySelector("#contentAudio");
audioBtn.addEventListener("click", (e) => {
  const temp = e.target.dataset.currentinfo;
  contentAudio.src = `./audio/${temp}.mp3`;
  contentAudio.play();
});

// 改变底部按钮的选中状态 + 记录当前的_time ，可以从当前位置移动！
function handleCurrentPos(currentPos, _time) {}

readMoreBtn.addEventListener("click", () => {
  detailInfoBox.style.display = "block";

  detailInfoBox.classList.remove("animate__animated", "animate__fadeOutRight");
  detailInfoBox.classList.add("animate__animated", "animate__fadeInRight");

  hideUI();

  detailInfoBox.style.zIndex = 10;
});

detailCloseBtn.addEventListener("click", () => {
  detailInfoBox.classList.remove("animate__animated", "animate__fadeInRight");
  detailInfoBox.classList.add("animate__animated", "animate__fadeOutRight");

  showUI();
  contentAudio.pause();

  detailInfoBox.style.zIndex = 0;
});

// videoPageInfo
// 在detailInfoBox里的按钮。。
let videoBoxBtn = document.querySelector("#videoBoxBtn");

let videoPageBox = document.querySelector(".videoPageBox");
let videoCloseBtn = document.querySelector("#videoCloseBtn");
let videoContent = document.querySelector("#videoContent");

videoBoxBtn.addEventListener("click", () => {
  videoPageBox.style.opacity = 1;
  videoPageBox.style.zIndex = 11;

  // 需要从网络获取video。。

  videoContent.src = "./video/test-video.mp4";
  videoContent.play();

  videoPageBox.classList.remove("animate__animated", "animate__fadeOutUp");
  videoPageBox.classList.add("animate__animated", "animate__fadeInDown");

  hideUI();
});

videoCloseBtn.addEventListener("click", () => {
  videoPageBox.classList.remove("animate__animated", "animate__fadeInDown");
  videoPageBox.classList.add("animate__animated", "animate__fadeOutUp");

  // 停止播放视频！
  videoContent.pause();

  // showUI();
});

// imgPageBox

let imgBoxBtn = document.querySelector("#imgBoxBtn");

let imgPageBox = document.querySelector(".imgPageBox");
let imgCloseBtn = document.querySelector("#imgCloseBtn");
let imgContent = document.querySelector("#imgContent");

imgBoxBtn.addEventListener("click", () => {
  imgPageBox.style.opacity = 1;
  imgPageBox.style.zIndex = 11;

  // 需要从网络获取img。。
  imgContent.src = "./imgs/test-img.jpg";

  imgPageBox.classList.remove("animate__animated", "animate__fadeOutUp");
  imgPageBox.classList.add("animate__animated", "animate__fadeInDown");

  hideUI();
});

imgCloseBtn.addEventListener("click", () => {
  imgPageBox.classList.remove("animate__animated", "animate__fadeInDown");
  imgPageBox.classList.add("animate__animated", "animate__fadeOutUp");

  // showUI();
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
//   },topBox

//   "Disable All": function () {
//     camera.layers.disableAll();
//   },
// };300

const clock = new THREE.Clock();

init();

function init() {
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    300
  );
  camera.position.set(6, 10, 9);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf2f7ff);
  scene.fog = new THREE.Fog(0xf2f7ff, 1, 25000);

  // light * 3
  // const ambientLight = new THREE.AmbientLight(0xcccccc);
  // scene.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
  hemiLight.color.setHSL(0.6, 1, 0.6);
  hemiLight.groundColor.setHSL(0.095, 1, 0.75);
  hemiLight.position.set(0, 50, 0);
  scene.add(hemiLight);

  // const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  // dirLight.position.set(0, 0, 1);
  // scene.add(dirLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 2);
  dirLight.color.setHSL(0.1, 1, 0.95);
  dirLight.position.set(-1, 1.75, 1);
  dirLight.position.multiplyScalar(30);
  scene.add(dirLight);

  // const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2);
  // directionalLight2.position.set(1, 1, 0.5).normalize();
  // scene.add(directionalLight2);

  // SKYDOME

  const vertexShader = document.getElementById("vertexShader").textContent;
  const fragmentShader = document.getElementById("fragmentShader").textContent;
  const uniforms = {
    topColor: { value: new THREE.Color(0x0077ff) },
    bottomColor: { value: new THREE.Color(0xffffff) },
    offset: { value: 33 },
    exponent: { value: 0.6 },
  };
  uniforms["topColor"].value.copy(hemiLight.color);

  scene.fog.color.copy(uniforms["bottomColor"].value);

  const skyGeo = new THREE.SphereGeometry(4000, 32, 15);
  const skyMat = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    side: THREE.BackSide,
  });

  const sky = new THREE.Mesh(skyGeo, skyMat);
  scene.add(sky);

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

  const texutres = {
    floorMap: {
      url: "./textures/floor.jpg",
    },
  };

  // const floorMap = textureLoader.load("./textures/floor.jpg", (texture) => {
  //   texture.wrapS = THREE.RepeatWrapping;
  //   texture.wrapT = THREE.RepeatWrapping;
  //   texture.repeat.set(100, 100);
  // });
  // floorMap.anisotropy = 4;

  // hdr.exr??
  // new RGBELoader(manager).load(
  //   "./imgs/rooitou_park_1k.hdr",
  //   function (texture) {
  //     texture.mapping = THREE.EquirectangularReflectionMapping;

  //     scene.background = texture;
  //     scene.environment = texture;
  //   }
  // );

  const progressbarElem = document.querySelector("#progressbar");
  manager.onProgress = (url, itemsLoaded, itemsTotal) => {
    progressbarElem.style.width = `${((itemsLoaded / itemsTotal) * 100) | 0}%`;

    console.log((itemsLoaded / itemsTotal) * 100, url);
  };

  // 加载所有模型 - 材质和模型分离！在加载中上材质！
  const models = {
    // jng: { url: "./models/buildings/jng.glb" },
    // gj: { url: "./models/buildings/gj.glb" },
    // szzyjh: { url: "./models/buildings/szzyjh.glb" },
    // ddzs: { url: "./models/buildings/ddzs.glb" },
    // test: { url: "./models/buildings/test.glb" },

    // szzSculpture: { url: "./models/szzSculpture.glb" },
    test: { url: "./models/test.glb" },
    // testUv: { url: "./models/test-uv.glb" },
  };
  {
    const gltfLoader = new GLTFLoader(manager);
    for (const [key, value] of Object.entries(models)) {
      gltfLoader.load(value.url, (gltf) => {
        // 这一步是如果有动画的话，可以进一步操作！
        // model.gltf = gltf;

        // gltf.scene.traverse((item) => {
        //   item.material = new THREE.MeshBasicMaterial({
        //     map: floorMap,
        //   });
        // });

        // gltf.scene.traverse((item) => {
        //   item.material = new THREE.MeshLambertMaterial({ color: 0xffffff });
        //   item.material.color.setHSL(0.095, 1, 0.75);
        // });

        // gltf.scene.scale.set(0.5, 0.5, 0.5);
        // gltf.scene.position.set(0, -5, 0);

        // 物理世界
        worldOctree.fromGraphNode(gltf.scene);

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

  // birdAnimation - 丰富画面内容。
  loader.load("./models/birdAnimation.glb", (gltf) => {
    const model = gltf.scene;

    model.scale.set(3, 3, 3);
    model.position.set(6, 10, 23);
    model.rotation.set(0, Math.PI, 0);
    mixer = new THREE.AnimationMixer(model);
    mixer.clipAction(gltf.animations[0]).play();

    scene.add(gltf.scene);
  });

  // 专门放点的model -> 创建曲线 -> 游览路径！！
  // loader.load("./models/test-curve02.glb", (gltf) => {
  // loader.load("./models/test-curve.glb", (gltf) => {
  loader.load("./models/test-point02.glb", (gltf) => {
    // 这个缩放还是模型中的好。。。
    // gltf.scene.scale.set(0.5, 0.5, 0.5);

    gltf.scene.traverse((item) => {
      if (item.isMesh && item.name.indexOf("Cube") !== -1) {
        item.material = new THREE.MeshBasicMaterial({
          color: "green",
        });
        // item.scale.set(1, 1, 1);
        item.visible = false;
        const tempText = `
          ${item.name}, 
          x=${item.position.x.toFixed(2)}, 
          y=${item.position.y.toFixed(2)}, 
          z=${item.position.z.toFixed(2)}
        `;
        // createCSS2D(item, tempText, item.position);

        curveVector3.push(item.position);

        if (item.name.endsWith("h")) {
          haltPoints.push(item.position);
        }
      }

      // else if (item.name.indexOf("Text") !== -1) {
      //   item.material = new THREE.MeshBasicMaterial({
      //     color: "blue",
      //   });
      // } else {
      //   item.material = new THREE.MeshBasicMaterial({
      //     map: floorMap,
      //   });
      // }
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

    // tween - 移动！

    loader.load("./models/tween-points.glb", (gltf) => {
      scene.add(gltf.scene);

      gltf.scene.traverse((item) => {
        if (item.name.endsWith("l")) {
          lookAtArray.push({
            name: item.name,
            pos: item.position,
          });
        } else {
          posArray.push({
            name: item.name,
            pos: item.position,
          });
        }

        item.visible = false;
      });

      posArray.shift();

      lookAtArray.unshift({
        name: "pos-top-l",
        pos: new THREE.Vector3(),
      });

      // 拍个序
      posArray.sort((a, b) => a.name.localeCompare(b.name));
      lookAtArray.sort((a, b) => a.name.localeCompare(b.name));

      console.log(gltf.scene, posArray, lookAtArray);
    });
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

  stats.dom.style.position = "absolute";
  stats.dom.style.top = "12vh";

  // controls = new OrbitControls(camera, labelRenderer.domElement);
  // controls.minDistance = 0.1;
  // controls.maxDistance = 1000;
  // controls.enableRotate = true; // 开局自动旋转
  // controls.enabled = false;

  //

  window.addEventListener("resize", onWindowResize);

  // 取消gui
  // initGui();
}
function moveCamera_Tween(index) {
  const cameraPos = camera.position;

  const topPos = new THREE.Vector3(4, 56, 19);

  // 移动。。

  const tween1 = new TWEEN.Tween(cameraPos).to(topPos, 1000);
  const tween2 = new TWEEN.Tween(cameraPos).to(posArray[index].pos, 3000);

  function updateCamera() {
    camera.lookAt(lookAtArray[index].pos);
  }

  tween1.chain(tween2);

  tween1.onUpdate(updateCamera);
  tween2.onUpdate(updateCamera);

  tween2.onComplete(() => {
    if (state.currentMode === "explorer") {
      // 修改位置。。+ 方向。。

      setPlayerColliderPos();
    } else {
    }

    console.log(camera, playerCollider, state, _time);
  });

  tween1.start();
}

function setPlayerColliderPos() {
  const cameraPos = camera.position;

  playerCollider.start.set(cameraPos.x, cameraPos.y - 1.8, cameraPos.z);
  playerCollider.end.set(cameraPos.x, cameraPos.y, cameraPos.z);
}

function updateCamera() {
  // const time = clock.getElapsedTime();
  const time = _time;
  const looptime = 20;
  const t = (time % looptime) / looptime;
  const t2 = ((time + 0.1) % looptime) / looptime;

  const pos = curve.getPointAt(t);
  const pos2 = curve.getPointAt(t2);

  // 如果停止的数组没有，需要判空。。
  const _temp = haltPoints[haltIndex].clone().sub(pos.clone());

  // controls.target = pos.clone();

  // console.log(_temp, haltIndex, controls);

  if (
    _temp.x > -0.5 &&
    _temp.x < 0.5 &&
    _temp.y > -0.5 &&
    _temp.y < 0.5 &&
    _temp.z > -0.5 &&
    _temp.z < 0.5
  ) {
    state.isMoving = false;

    // 显示文字 + 文字内容（根据halIndex判断。一个字符串数组，从对象中获取！。）！
    handleWords();
    showWords();

    // 设置探索模式的位置！
    setPlayerColliderPos();

    console.log(_time, wordsArray[haltIndex]);
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
  // const elapsed = clock.getElapsedTime();

  if (state.isMoving) {
    moveCamera(moveDirection);
  }

  stats.update();

  const delta = clock.getDelta();

  mixer.update(delta);

  // controls.update();

  const deltaTime = Math.min(0.05, delta) / STEPS_PER_FRAME;

  // we look for collisions in substeps to mitigate the risk of
  // an object traversing another too quickly for detection.

  if (state.currentMode === "explorer") {
    for (let i = 0; i < STEPS_PER_FRAME; i++) {
      controlsJoystick(deltaTime);

      updatePlayer(deltaTime);

      teleportPlayerIfOob();
    }
  }

  TWEEN.update();

  renderer.render(scene, camera);
  // labelRenderer.render(scene, camera);

  requestAnimationFrame(animate);
}

//

// function initGui() {
//   gui = new GUI();

//   gui.add(layers, "Toggle Name");
//   gui.add(layers, "Toggle Mass");
//   gui.add(layers, "Enable All");
//   gui.add(layers, "Disable All");
// }
