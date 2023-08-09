// import * as THREE from "three";

// import TWEEN from "three/addons/libs/tween.module.js";
// import { TrackballControls } from "three/addons/controls/TrackballControls.js";
// import {
//   CSS3DRenderer,
//   CSS3DObject,
// } from "three/addons/renderers/CSS3DRenderer.js";

export const table = [
  {
    name: "python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    x: 1,
    y: 1,
  },
  {
    name: "java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    x: 2,
    y: 1,
  },
  {
    name: "node",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    x: 3,
    y: 1,
  },
  {
    name: "django",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg",
    x: 4,
    y: 1,
  },
  {
    name: "C",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    x: 5,
    y: 1,
  },
  {
    name: "c#",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    x: 6,
    y: 1,
  },
  {
    name: "c++",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    x: 7,
    y: 1,
  },
  {
    name: "javascript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    x: 1,
    y: 2,
  },
  {
    name: "redux",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    x: 2,
    y: 2,
  },
  {
    name: "react",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    x: 3,
    y: 2,
  },
  {
    name: "react native",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    x: 4,
    y: 2,
  },
  {
    name: "flask",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg",
    x: 5,
    y: 2,
  },
  {
    name: "html",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    x: 6,
    y: 2,
  },
  {
    name: "css",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    x: 7,
    y: 2,
  },
  {
    name: "bootstrp",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg",
    x: 8,
    y: 2,
  },
  {
    name: "tailwind",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    x: 9,
    y: 2,
  },
  {
    name: "mysql",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    x: 1,
    y: 3,
  },
  {
    name: "sql server",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg",
    x: 2,
    y: 3,
  },
  {
    name: "sqlite",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg",
    x: 3,
    y: 3,
  },
  {
    name: "mongodb",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    x: 4,
    y: 3,
  },
  {
    name: "sqlalchemy",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg",
    x: 5,
    y: 3,
  },
  {
    name: "firebase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
    x: 6,
    y: 3,
  },
  {
    name: "git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
    x: 1,
    y: 4,
  },
  {
    name: "vscode",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg",
    x: 2,
    y: 4,
  },
  {
    name: "android studio",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original-wordmark.svg",
    x: 3,
    y: 4,
  },
  {
    name: "unity",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original-wordmark.svg",
    x: 4,
    y: 4,
  },
  {
    name: "jwt",
    src: "/pic_logo.svg",
    x: 5,
    y: 4,
  },
  {
    name: "windows",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    x: 1,
    y: 5,
  },
  {
    name: "linux",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    x: 2,
    y: 5,
  },
];

// export let camera, scene, renderer, controls, sphere;

// const objects = [];

// export const targets = { table: [], sphere: [] };

// export function init() {
//   const container = document.querySelector(".skills");
//   camera = new THREE.PerspectiveCamera(
//     50,
//     container.clientWidth / container.clientHeight,
//     1,
//     10000
//   );
//   camera.position.set(0, 0, 2000);

//   scene = new THREE.Scene();
//   const vector = new THREE.Vector3();
//   getTable().forEach((e, index) => {
//     const l = getTable().length;
//     const phi = Math.acos(-1 + (2 * index) / l);
//     const theta = Math.sqrt(l * Math.PI) * phi;
//     const element = document.createElement("div");
//     element.className = "element";
//     // element.style.backgroundColor =
//     //   "rgba(0,127,127," + (Math.random() * 0.5 + 0.25) + ")";

//     const img = document.createElement("img");
//     img.className = e.name;
//     img.src = e.src;

//     element.appendChild(img);

//     const objectCSS = new CSS3DObject(element);
//     const object = new THREE.Object3D();

//     object.position.setFromSphericalCoords(600, phi, theta);

//     vector.copy(object.position).multiplyScalar(2);

//     objectCSS.position.x = object.position.x;
//     objectCSS.position.y = object.position.y;
//     objectCSS.position.z = object.position.z;
//     object.lookAt(vector);
//     objectCSS.lookAt(vector);
//     scene.add(objectCSS);
//     objects.push(objectCSS);
//     targets.sphere.push(object);
//     const object2 = new THREE.Object3D();
//     object2.position.x = e.x;
//     object2.position.y = e.y;

//     targets.table.push(object2);
//     sphere = true;
//   });
//   renderer = new CSS3DRenderer();
//   renderer.setSize(container.clientWidth, container.clientHeight);
//   document.getElementById("skills").appendChild(renderer.domElement);
//   controls = new TrackballControls(camera, renderer.domElement);
//   controls.noZoom = true;
//   controls.minDistance = 500;
//   controls.maxDistance = 6000;
//   controls.addEventListener("change", render);

//   window.addEventListener("resize", onWindowResize);
// }

// export function transform(targets, duration) {
//   TWEEN.removeAll();

//   for (let i = 0; i < objects.length; i++) {
//     const object = objects[i];
//     const target = targets[i];

//     new TWEEN.Tween(object.position)
//       .to(
//         { x: target.position.x, y: target.position.y, z: target.position.z },
//         Math.random() * duration + duration
//       )
//       .easing(TWEEN.Easing.Exponential.InOut)
//       .start();

//     new TWEEN.Tween(object.rotation)
//       .to(
//         { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z },
//         Math.random() * duration + duration
//       )
//       .easing(TWEEN.Easing.Exponential.InOut)
//       .start();
//   }

//   new TWEEN.Tween(this)
//     .to({}, duration * 2)
//     .onUpdate(render)
//     .start();
// }

// export function onWindowResize() {
//   const container = document.querySelector(".skills");
//   camera.aspect = container.clientWidth / container.clientHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(container.clientWidth, container.clientHeight);
//   // objects[0].position.x
//   // resetPos(container.clientWidth, container.clientHeight);

//   render();
// }

// export function animate() {
//   requestAnimationFrame(animate);

//   TWEEN.update();

//   controls.update();
// }

// export function render() {
//   renderer.render(scene, camera);
// }

// export function resetControlls() {
//   controls.reset();
// }



export const getTable = () => {
  let elements = [];
  for (let i = 0; i < table.length; i++) {
    elements.push({
      ...table[i],
      x: table[i].x * 280 - 1400,
      y: -(table[i].y * 320) + 940,
    });
  }
  return elements;
};
