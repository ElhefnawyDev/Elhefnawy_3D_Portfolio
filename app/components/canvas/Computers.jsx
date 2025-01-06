'use client';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  if (!hydrated) return null;

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
    </Canvas>
  );
};

function Scene({ isMobile }) {
  const computer = useGLTF('/Setup/Setup.gltf');

  return (
    <group>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <directionalLight position={[0, 10, 5]} intensity={1.5} />
      <ambientLight intensity={0.3} />
      <spotLight
        position={[-20, 25, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        position={isMobile ? [0, -2.7, 2] : [0, -3.25, 1.5]}
        scale={isMobile ? 0.6 : 0.7}
        rotation={[0, Math.PI, 0]}
      />
    </group>
  );
}

export default Computers;
