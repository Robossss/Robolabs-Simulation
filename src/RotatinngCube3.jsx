import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function RotatingCube3() {
  const rotatePlatformRef = useRef();

  const handleCollision = () => {
    setIsVisible(true); // Hide the cube
  };

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Rotate platform
    const rotationSpeed = 2;
    const rotationAngle = time * rotationSpeed;
    rotatePlatformRef.current.rotation.y = rotationAngle;

    // Apply other transformations or animations as needed
  });

  return (
    <mesh ref={rotatePlatformRef} position={[5,0.3,0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"green"} transparent={true} opacity={0.7} />
    </mesh>
  );
}
