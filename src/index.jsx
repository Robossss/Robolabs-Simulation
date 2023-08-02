import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Leva } from "leva";
import { Block } from "blockly";



const root = ReactDOM.createRoot(document.querySelector("#root"));

// import * as THREE from 'three';
// import Stats from 'stats.js';
// import Actor from "./actor";
// import Plane from "./plane";
// import Game from "./game";





root.render(
  <>
  <Leva collapsed position={{x:10,y:10}}/>
  <Canvas
    shadows
    camera={{
      fov: 65,
      near: 0.1,
      far: 1000,
      position: [0, 0, -1],
    }}
    onPointerDown={(e) => {
      e.target.requestPointerLock();
    }}
  >
    <Experience />
  </Canvas>
  </>
);
