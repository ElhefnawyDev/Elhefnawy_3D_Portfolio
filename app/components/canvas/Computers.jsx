'use client';
import {Suspense, useEffect, useState} from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Indicates the component has hydrated
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (!hydrated) return null; // Skip rendering on the server

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Scene isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};



function Scene({isMobile }){
  const computer = useGLTF('./Setup/Setup.gltf')

  return(
    <group>
            <hemisphereLight         position={[0, 10, 1]}
intensity={1} groundColor='black' />  
            <pointLight intensity={1} /> 
            <ambientLight  intensity={0.5} />         
            <spotLight
        position={[-20, 25, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> 
            <mesh>
        <primitive
        object={computer.scene}
        position={isMobile?[0,-2.7,2] : [0, -3.25, 1.5]}
        scale={isMobile ? 0.6 : 0.7}
        rotation={[0, Math.PI, 0]}
      />
      </mesh>
    </group>
  )
}

// const ComputersCanvas = ()=> {
//   return(
//     <Canvas
//     frameloop='demand'
//     shadows
//     gl={{preserveDrawingBuffer: true}}
//     >
//       <Suspense fallback={<CanvasLoader/>}>
//         {/* <OrbitControls enableZoom = {false}
//         maxPolarAngle={Math.PI/2}
//         minPolarAngle={Math.PI/2}
//         /> */}
//         <Scene/>
//       </Suspense>

//       {/* <Preload all></Preload> */}
//     </Canvas>
//   )
// }

export default Computers