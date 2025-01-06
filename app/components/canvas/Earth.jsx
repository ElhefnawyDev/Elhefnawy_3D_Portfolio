'use client';
import {Suspense, useEffect, useState} from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  return (
    <Canvas
    shadows
    frameloop='demand'
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],
    }}
  >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ContactModel/>
      </Suspense>
    </Canvas>  )
}


function ContactModel(){
  const computer = useGLTF('./VR/scene.gltf')

  return(
    <group>
            <mesh>
        <primitive
        object={computer.scene}
        position-y={-3}
        scale={2.3}
        rotation-y={0}
      />
      </mesh>
    </group>
  )
}

export default Earth