import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";

const Actor = () => {
  const meshRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotateY(Math.PI);

    // Set initial properties and functions
    mesh.instructions = [];
    mesh.target = new THREE.Object3D().copy(mesh, false);
    mesh.targetRadiansOnY = 0;
    mesh.currentRadiansOnY = 0;
    mesh.mass = 0.1;
    mesh.velocity = new THREE.Vector3();
    mesh.angularVelocity = 0.015;
    mesh.topSpeed = 0.05;
    mesh.topAccelleration = 0.0015;
    mesh.accelleration = new THREE.Vector3();
    mesh.currentInstruction = null;
    mesh.gravityForce = new THREE.Vector3(0.0, -0.01, 0.0);

    // Add mesh to the scene
    scene.add(mesh);
    meshRef.current = mesh;

    return () => {
      // Clean up the mesh when the component unmounts
      scene.remove(mesh);
    };
  }, [scene]);

     // Update function to consume commands
    const consumeCommands = (hhh) => {
      console.log(hhh)
      // const mesh = meshRef.current;
      // if (mesh.currentInstruction) {
      //   let instruction = mesh.currentInstruction;
      //   let movementType = instruction["type"];
      //   let movementValue = instruction["value"];
      //   let dir = null;
      //   switch (movementType) {
      //     case "move_forward":
      //       dir = new THREE.Vector3().subVectors(mesh.target.position, mesh.position);
      //       dir.setLength(mesh.topAccelleration);
      //       mesh.applyForce(dir);
      //       mesh.applyForce(mesh.gravityForce);
      //       mesh.velocity.add(mesh.accelleration);
      //       mesh._limitVelocity(mesh.topSpeed);
      //       mesh.position.add(mesh.velocity);
      //       mesh._limitGravity();
      //       mesh.accelleration.multiplyScalar(0.0);
      //       break;
      //     case "jump_forward":
      //       dir = new THREE.Vector3().subVectors(mesh.target.position, mesh.position);
      //       let upForce = new THREE.Vector3(0, (0.012 * (dir.length() / movementValue)), 0);
      //       dir.setLength(mesh.topAccelleration);
      //       mesh.applyForce(dir);
      //       mesh.applyForce(upForce);
      //       mesh.applyForce(mesh.gravityForce);
      //       mesh.velocity.add(mesh.accelleration);
      //       mesh._limitVelocity(mesh.topSpeed);
      //       mesh.position.add(mesh.velocity);
      //       mesh._limitGravity();
      //       mesh.accelleration.multiplyScalar(0.0);
      //       break;
      //     case "turn":
      //       if (movementValue === "turnLeft") {
      //         mesh.rotateY(mesh.angularVelocity);
      //         mesh.currentRadiansOnY += mesh.angularVelocity;
      //       } else {
      //         mesh.rotateY(-mesh.angularVelocity);
      //         mesh.currentRadiansOnY += mesh.angularVelocity;
      //       }
      //       break;
      //     default:
      //       console.log("command not implemented");
      //       break;
      //   }
      //   if (mesh._targetReached(movementType)) {
      //     mesh._nextAnimation();
      //   }
      // }
    };

    // Set the consumeCommands function as an update function
    useFrame(() => {
      consumeCommands();
    });

  return null; // We don't render anything for this component
};

export default Actor;
