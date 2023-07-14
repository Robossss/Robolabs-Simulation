// import { RigidBody } from "@react-three/rapier";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody, CapsuleCollider, useRapier } from "@react-three/rapier";
import { useEffect } from "react";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import useFollowCam from "./hooks/useFollowCam";


export default function Steps() {
  const characterRef = useRef();
  const characterModelRef = useRef();
  console.log(characterModelRef)
  return (
    <>
      {/* Small steps */}
      <RigidBody type="fixed" position={[0, -0.9, 5]}>
        <mesh receiveShadow>
          <boxGeometry args={[4, 0.2, 0.2]} />
          <meshStandardMaterial color={"lightpink"} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[0, -0.9, 6]}>
        <mesh receiveShadow>
          <boxGeometry args={[4, 0.2, 0.2]} />
          <meshStandardMaterial color={"lightpink"} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[0, -0.9, 7]}>
        <mesh receiveShadow>
          <boxGeometry args={[4, 0.2, 0.2]} />
          <meshStandardMaterial color={"lightpink"} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[0, -0.9, 8]}>
        <mesh receiveShadow>
          <boxGeometry args={[4, 0.2, 0.2]} />
          <meshStandardMaterial color={"lightpink"} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[0, -0.9, 11]}>
        <mesh receiveShadow>
          <boxGeometry args={[4, 0.2, 4]} />
          <meshStandardMaterial color={"lightpink"} />
        </mesh>
      </RigidBody>
    </>
  );
}
