import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = ({ modelPath, scale, position, rotation }) => {
  const { scene } = useGLTF(modelPath);
  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
};

const ModelViewer = ({
  modelPath,
  scale = [1, 1, 1],
  position = [0, 0, 0],
  rotation = [0.3, -1, -0.3],
}) => {
  return (
    <Canvas style={{ width: "100%", height: "400px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <Suspense fallback={null}>
        <Model
          modelPath={modelPath}
          scale={scale}
          position={position}
          rotation={rotation}
        />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
