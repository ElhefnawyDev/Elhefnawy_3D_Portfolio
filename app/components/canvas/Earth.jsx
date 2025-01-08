'use client';
import {Suspense} from 'react'

import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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
  const computer = useLoader(GLTFLoader, '/VR/Scene.gltf');

  return(
<>
<primitive
        object={computer.scene}
        position={[0, -3, 0]}
        scale={2.3}
        rotation={[0, 0, 0]}      
/>
</>

  )
}

export default Earth