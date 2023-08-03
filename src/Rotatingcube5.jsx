import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef,useState } from "react";

export default function RotatingCube5() {
  const rotatePlatformRef = useRef();
  const cube7bb = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
  // window.colorlock = false
  const [color, setcolor] = useState(true);


  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Rotate platform
    const rotationSpeed = 2;
    const rotationAngle = time * rotationSpeed;
    rotatePlatformRef.current.rotation.y = rotationAngle;

    // Update bounding box
    cube7bb.setFromObject(rotatePlatformRef.current);
    // console.log(cube1bb)
    window.cube7bb = cube7bb
    

    if(cube7bb){
      window.key =true
    }
    else{
      window.key = false
    }
    if(window.colorlock6){
     
      setcolor("green")
    }
    else{
      setcolor("red")
    }
// console.log(window.colorlock)

    // Apply other transformations or animations as needed
  });

  return (
    <mesh ref={rotatePlatformRef} position={[8.9, 0.3, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color || 'green'} transparent={true} opacity={0.89} />
    </mesh>
  );
}
