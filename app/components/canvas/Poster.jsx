'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Poster = () => {
  return (
    <div className="h-[400px] w-full justify-center align-middle border-4 rounded-3xl bg-gray-900">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 50,
          near: 0.1,
          far: 200,
          position: [0, 3, 10],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ContactModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

function ContactModel() {
  const computer = useGLTF('/FYP/FYP.gltf'); // Use absolute path for public assets

  return (
    <group>
      <primitive
        object={computer.scene}
        position-y={-2}
        scale={1.5}
        rotation-y={1.7}
      />
    </group>
  );
}

export default Poster;
