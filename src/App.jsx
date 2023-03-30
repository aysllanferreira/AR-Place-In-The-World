import React from 'react';
import { Canvas } from '@react-three/fiber';
import { XR } from '@react-three/xr';
import { Box } from '@react-three/drei';

function App() {
  return (
    <Canvas>
      <XR>
        <Box scale={[0.5, 0.5, 0.5]} position={[0, 0, -1]} color="red" />
      </XR>
    </Canvas>
  );
}

export default App;
