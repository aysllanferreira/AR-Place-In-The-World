import React from 'react';
import { Canvas } from '@react-three/fiber';
import { XR } from '@react-three/xr';
import Model from './Model';

function App() {
  return (
    <Canvas>
      <XR>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model position={[0, 0, -1]} />
      </XR>
    </Canvas>
  );
}

export default App;
