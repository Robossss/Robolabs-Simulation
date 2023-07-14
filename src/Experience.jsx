import { Grid, KeyboardControls, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import {Character} from "./Character.jsx";
import Floor from "./Floor.jsx";
import Lights from "./Lights.jsx";
import Steps from "./Steps.jsx";
import Slopes from "./Slopes.jsx";
import RoughPlane from "./RoughPlane.jsx";
import RigidObjects from "./RigidObjects.jsx";
import FloatingPlatform from "./FloatingPlatform.jsx";
import DynamicPlatforms from "./DynamicPlatforms.jsx";
import { useControls } from "leva";
import {RotatingCube} from "./RotatingCube.jsx"
import { RotatingCube2 } from "./RotatingCubes2.jsx";
import { RotatingCube3 } from "./RotatinngCube3.jsx";


export default function Experience() {

  /**
   * Debug settings
   */
  const {physics} = useControls("World Settings",{
    physics: true
  })

  /**
   * Keyboard control preset
   */
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];

  return (
    <>
      {/* <OrbitControls makeDefault /> */}

      <Perf position="top-left" />

      <Grid
        infiniteGrid
        followCamera
        sectionColor={"lightgray"}
        cellColor={"gray"}
        position={[0, -0.99, 0]}
      />

      <Lights />

      <Physics debug={physics} timeStep="vary" >

        <KeyboardControls map={keyboardMap}>
          <Character />
        </KeyboardControls>

        <RotatingCube/>
        <RotatingCube2/>
        <RotatingCube3/>
   



        {/* Rough plan */}
        <RoughPlane />
  

        {/* Slopes and stairs */}
        <Slopes />


        {/* Small steps */}
        <Steps />

        {/* Rigid body objects */}
        <RigidObjects />

        {/* Floating platform */}
        <FloatingPlatform />

        {/* Dynamic platforms */}
        <DynamicPlatforms />

        {/* Floor */}
        <Floor />
      </Physics>
    </>
  );
}
