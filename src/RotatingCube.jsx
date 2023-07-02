import React, { Component } from "react";
import { RigidBody } from "@react-three/rapier";
import { Mesh, MeshStandardMaterial, BoxGeometry } from "three";

class RotatingCube extends Component {
  render() {
    return (
      <RigidBody position={[0, 0, 0]}>
        <mesh receiveShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </RigidBody>
    );
  }
}

export default RotatingCube;
