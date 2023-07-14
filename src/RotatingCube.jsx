import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function RotatingCube() {
  const rotatePlatformRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Rotate platform
    const rotationSpeed = 2;
    const rotationAngle = time * rotationSpeed;
    rotatePlatformRef.current.rotation.y = rotationAngle;

    // Apply other transformations or animations as needed
  });

  return (
    <mesh ref={rotatePlatformRef} position={[8.9,0.3,8.9]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"red"} transparent={true} opacity={0.89} />
    </mesh>
  );
}
