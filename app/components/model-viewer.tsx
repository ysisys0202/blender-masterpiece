"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

interface ModelProps {
  modelPath: string;
}

function Model({ modelPath }: ModelProps) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.5} />;
}

interface ModelViewerProps {
  modelPath: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function ModelViewer({ modelPath, isOpen, onClose, title }: ModelViewerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white dark:bg-zinc-900 rounded-lg w-[90vw] h-[90vh] max-w-4xl flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-700">
          <h2 className="text-xl font-bold text-black dark:text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 relative">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <Suspense fallback={null}>
              <Environment preset="studio" />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Model modelPath={modelPath} />
              <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}