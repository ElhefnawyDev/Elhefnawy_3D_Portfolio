"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  useGLTF,
} from "@react-three/drei";
import CanvasLoader from "../../Loader";

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {<NextJs imgUrl={icon} />}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

function NextJs({ imgUrl }) {
  const computer = useGLTF("./NextJs/Scene.gltf");

  return (
    <group>
      <hemisphereLight
        position={[0, 10, 1]}
        intensity={1}
        groundColor="black"
      />
      <pointLight intensity={1} />
      <ambientLight intensity={0.5} />
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
          position={[0, 0, 0]}
          scale={9}
          rotation={[0, Math.PI, 0]}
        />
      </mesh>
    </group>
  );
}

export default BallCanvas;
