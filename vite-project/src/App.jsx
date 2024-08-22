import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Model';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Canvas dpr={[1,2--]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default App;
