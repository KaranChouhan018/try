import React, { useRef } from 'react';
import { useGLTF, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes } = useGLTF('/torus.glb');
  const meshRef = useRef();

  // Automatic rotation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t / 2; // Rotate around x-axis
    meshRef.current.rotation.y = t / 2; // Rotate around y-axis
  });

  // Mouse interaction
  const handlePointerMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const x = (offsetX / window.innerWidth) * 2 - 1;
    const y = -(offsetY / window.innerHeight) * 2 + 1;
    
    meshRef.current.rotation.x = y * 0.5;
    meshRef.current.rotation.y = x * 0.5;
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        onPointerMove={handlePointerMove}
        scale={[10, 12, 10]} // Fixed scale, no scaling on scroll
      >
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={1}
          roughness={0}
          metalness={0.5}
          clearcoat={1}
          clearcoatRoughness={0}
          thickness={1}
          envMapIntensity={1}
        />
      </mesh>
      <Environment preset="dawn" />
    </group>
  );
}

useGLTF.preload('/torus.glb');
