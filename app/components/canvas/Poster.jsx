'use client';
import {Suspense, useEffect, useState} from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

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


function ContactModel(){
  const computer = useGLTF('./FYP/FYP.gltf')

  return(
    <group>
            <mesh>
            <primitive
  object={computer.scene}
  position-y={-2} // Adjust this
  scale={1.5}
  rotation-y={1.7}
/>

      </mesh>
    </group>
  )
}

export default Poster