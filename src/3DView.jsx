import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, HueSaturation} from '@react-three/postprocessing';

import { HemisphereLight, DirectionalLight, AmbientLight, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { BlendFunction } from 'postprocessing';






const Earth = (props) => {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load('/earth.fbx', object => {
      object.scale.set(props.scale, props.scale, props.scale);
      object.traverse(child => {
        if (child.isMesh) {
          child.material.transparent = false;
          child.material.emissiveIntensity = 0.01;
          child.material.emissive.set(0xffffff);
        }
      });
      scene.add(object);
      earthRef.current = object;
    });

    
    loader.load('/clouds.fbx', object => {
      object.scale.set(props.scale, props.scale, props.scale);
      object.traverse(child => {
        if (child.isMesh) {
          child.material.emissiveIntensity = 0.5;
          child.material.emissive.set(0xfffff0);
        }
      });
      scene.add(object);
      cloudsRef.current = object;
    });
    scene.position.y=-1;
  }, [scene]);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y -= 0.01;
    }

  });

  return null;
};

const Lights = () => {
  return (
    <>
      <hemisphereLight args={[0xfffffff, 100]} position={[-1, 5, 1]} />
      <directionalLight args={[0xffffff, 0.1]} position={[-5, 2, 2]} />
      <ambientLight args={[0xffffff, 3]} />
    </>
  );
};

function ResizeCanvas() {
  const { gl } = useThree();

  useEffect(() => {
    function handleResize() {
      // Set the size of the renderer (canvas)
      gl.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial resize
    return () => window.removeEventListener('resize', handleResize);
  }, [gl]);

  return null;
}

const View3D = (props) => {
  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 100, position: [0, 2, 5] }}
            style={{}}>
      <Lights />
      <Earth scale={0.013}/>
      <EffectComposer>
      <HueSaturation
    blendFunction={BlendFunction.NORMAL} // blend mode
    hue={0} // hue in radians
    saturation={0.3} // saturation in radians
  />
      </EffectComposer>
    </Canvas>
  );
};

export default View3D;