import { RigidBody } from "@react-three/rapier";
import { useGLTF, Text } from "@react-three/drei";
import { useFBX} from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";

export default function Envprop() {
  const envprop = useGLTF("models/rt.glb");
  const prop = envprop.scene;

  const [meshVisible, setMeshVisible] = useState(true);

  const toggleMeshVisibility = () => {
    setMeshVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    // Example: Toggle visibility after 3 seconds
    const timeoutId = setTimeout(() => {
      toggleMeshVisibility();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <group position={[0, -1,0]} scale={[3,3,3]} >
      <RigidBody mass={0} type="fixed" colliders="trimesh" rotation={[0, Math.PI, 0]} includeInvisible={true}>
        <primitive object={prop}/>
      </RigidBody>
    </group>
    
  );
}
