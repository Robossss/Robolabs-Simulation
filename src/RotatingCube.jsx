import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef,useState } from "react";

export default function RotatingCube() {
  const rotatePlatformRef = useRef();
  const cube3bb = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
  // window.colorlock = false
  const [color, setcolor] = useState(true);


  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Rotate platform
    const rotationSpeed = 2;
    const rotationAngle = time * rotationSpeed;
    rotatePlatformRef.current.rotation.y = rotationAngle;

    // Update bounding box
    cube3bb.setFromObject(rotatePlatformRef.current);
    // console.log(cube1bb)
    window.cube3bb = cube3bb
    

    if(cube3bb){
      window.key =true
    }
    else{
      window.key = false
    }
    if(window.colorlock2){
     
      setcolor("green")
    }
    else{
      setcolor("red")
    }
// console.log(window.colorlock)

    // Apply other transformations or animations as needed
  });

  return (
    <mesh ref={rotatePlatformRef} position={[8.9, 0.3, 8.9]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color || 'green'} transparent={true} opacity={0.89} />
    </mesh>
  );
}
