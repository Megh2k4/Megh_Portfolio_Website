"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const Earth = () => {
  const earth = useGLTF("/Design/scene.gltf"); // Path to your GLTF model

  // Reset the transformation matrix and apply scale
  earth.scene.scale.set(100, 100,100); // Significantly increase the scale
  earth.scene.position.set(0, 0, 0); // Ensure it stays centered
  earth.scene.rotation.set(0, 0, 0); // Reset any unwanted rotation
  earth.scene.updateMatrixWorld(true); // Force update the transformations

  return (
    <primitive
      object={earth.scene}
      position-y={0} // Center the Earth on the Y-axis
      rotation-y={0} // Optional: auto-rotate Earth on Y-axis
    />
  );
};




const EarthCanvas = () => {
  return (
    <Canvas
  shadows
  frameloop="demand"
  dpr={[1, 2]}
  gl={{ preserveDrawingBuffer: true }}
  camera={{
    fov: 80, // Narrow FOV to focus on the Earth
    near: 0.1,
    far: 8000, // Increase far plane for large models
    position: [-160, 120, 240], // Move back further for visibility
  }}
  
  
>
  <Suspense fallback={<CanvasLoader />}>
    <OrbitControls
      autoRotate
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
    <Earth />
    <Preload all />
  </Suspense>
</Canvas>



  );
};

export default EarthCanvas;
