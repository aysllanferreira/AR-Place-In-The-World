import React from 'react';
import { ZapparCanvas, ZapparCamera, InstantTracker } from '@zappar/zappar-react-three-fiber';
import './Environment.scss';

function App() {
  return (
    <div className="Environment">
      <ZapparCanvas>
        <ZapparCamera rearCameraMirrorMode facingMode="environment" />
        <InstantTracker placementUI="placement-only" placementCameraOffset={[0, 0, -10]}>
          <mesh>
            <sphereBufferGeometry />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </InstantTracker>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
      </ZapparCanvas>
    </div>
  );
}

export default App;
