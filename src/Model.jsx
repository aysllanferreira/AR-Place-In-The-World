/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useXR, useXREvent } from '@react-three/xr';
import MyObject from './burger_2.glb';

function Model(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, MyObject);
  const { player } = useXR();

  function onSelect(event) {
    const hitTestResult = event.frame.getHitTestResults(event.inputSource)[0];

    if (hitTestResult) {
      const hitMatrix = new THREE.Matrix4().fromArray(
        hitTestResult.getPose(event.frame.session.referenceSpace).transform.matrix,
      );
      group.current.applyMatrix4(hitMatrix);
      group.current.position.setY(group.current.position.y + 0.5);
      player.add(group.current);
    }
  }

  useXREvent('select', onSelect);

  return (
    <group ref={group} {...props}>
      <primitive object={gltf.scene} />
    </group>
  );
}

export default Model;
