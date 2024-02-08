import React, { useState, useEffect } from "react";
import * as THREE from "three";
import { useThree, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { CharacterControls } from "./charactercontrols";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const Actor = () => {
  const { camera, gl } = useThree(); // useThree hook to get camera and renderer's context
  const [character, setCharacter] = useState(null);
  const [mixers, setMixers] = useState([]);
  const [characterControls, setCharacterControls] = useState(null);


  useEffect(() => {
  
  
    const loader = new GLTFLoader();
    
    const orbitcontrols = new OrbitControls(camera, gl.domElement); // Pass renderer's DOM element

    loader.load("models/unstable_robot.glb", function (loadedCharater) {
      const model = loadedCharater.scene;
      const gltfAnimations = loadedCharater.animations;
      const mixer = new THREE.AnimationMixer(model);
      // const action = mixer.clipAction(loadedCharater.animations[0]);
      // action.play()
      // console.log(action)
      const animationsMap = new Map();

      gltfAnimations
        .filter((a) => a.name !== "Pose")
        .forEach((a) => {
          const action = mixer.clipAction(a);
          animationsMap.set(a.name, action);
        });
        console.log(animationsMap)

      const newCharacterControls = new CharacterControls(
        model,
        mixer,
        animationsMap,
        orbitcontrols,
        "CINEMA_4D_Main"
      );

      setCharacter(model);
      setCharacterControls(newCharacterControls);

      return () => {
        // Clean up resources if necessary
        orbitcontrols.dispose();
      };
    },
    );



  }, [ gl.domElement]);


  useFrame(() => {
    // console.log(character.position)
    // Your animation-related code here
    if (characterControls) {
      // characterControls.orbitControl.update(); // Update camera controls
      characterControls.mixer.update(0.02); // Adjust delta value accordingly
    }
  });


  return character ? (
    <group position={[0, 0.5, -0.5]} >
      {/* Additional components or modifications related to the character */}
      <primitive object={character} />
    </group>
  ) : null;
};

export default Actor;
