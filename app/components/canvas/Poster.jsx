'use client';
import {Suspense} from 'react'

import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import CanvasLoader from '../Loader';

const Poster = () => {
  return (
    <div className="h-[400px] w-full justify-center align-middle border-4 rounded-3xl bg-gray-900">
      <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 40, // Increase field of view
        near: 0.1,
        far: 100,
        position: [0, 2, 10], // Move camera closer or adjust its height
      }}
      
        >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enablePan={true} // Enable panning (movement)
            enableZoom={true} // Optional: Allow zooming
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ContactModel/>
        </Suspense>
      </Canvas>
    </div>  )
}


function ContactModel() {
  const computer = useLoader(GLTFLoader, '/FYP/FYP.gltf');

  // Check if the object is loaded properly
  if (!computer || !computer.scene) {
    console.error("GLTF model could not be loaded or is invalid.");
    return (
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }

  // Normalize geometry
  computer.scene.traverse((child) => {
    if (child.isMesh) {
      if (child.geometry) {
        child.geometry.computeBoundingBox();
        child.geometry.computeBoundingSphere();
      }
    }
  });

  return (
    <primitive
      object={computer.scene}
      position={[0, -3, 0]}
      scale={1.5}
      rotation={[0, Math.PI / 2, 0]}
    />
  );
}


export default Poster