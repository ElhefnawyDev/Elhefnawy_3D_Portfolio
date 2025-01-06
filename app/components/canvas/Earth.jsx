'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60,
        near: 0.1,
        far: 300,
        position: [-6, 4, 8],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ContactModel />
      </Suspense>
    </Canvas>
  );
};

function ContactModel() {
  const computer = useGLTF('/VR/scene.gltf');

  return (
    <group>
      <primitive
        object={computer.scene}
        position-y={-3}
        scale={2.5}
        rotation-y={Math.PI / 4}
      />
    </group>
  );
}

export default Earth;
