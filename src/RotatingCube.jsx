import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { useBox } from "@react-three/cannon";

export default function RotatingCube() {
  const meshRef = useRef(null);
  const [boxRef, api] = useBox(() => ({ mass: 1 }));

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
  });

  const handleCollision = (event) => {
    console.log("Cube collided with:", event.body);
    // Handle the collision event here
  };

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
      <primitive ref={boxRef} object={null} />
      <meshCollisionEvents onCollide={handleCollision} />
    </mesh>
  );
};
