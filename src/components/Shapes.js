"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment, useProgress } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Shapes3DLoader from "./Shapes3DLoader";

export default function Shapes() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square  md:col-span-1 md:col-start-2 md:mt-0 relative">
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-light/90 dark:bg-dark/90 backdrop-blur-sm">
          <Shapes3DLoader />
        </div>
      )}
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
        onCreated={() => {
          // Canvas is ready, but we'll wait a bit for geometries to load
          setTimeout(() => setIsLoaded(true), 1500);
        }}
      >
        <Suspense fallback={null}>
          <Geometries onLoad={() => setIsLoaded(true)} />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries({ onLoad }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640); // 640px is typically the 'sm' breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const geometries = [
    {
      position: [0, 0, 0],
      mobilePosition: [0.1, 0.8, 0],
      r: 0.3,
      geometry: new THREE.IcosahedronGeometry(isMobile ? 4.2 : 3), // Gem
    },
    {
      position: [1, -0.75, 4],
      mobilePosition: [2.2, -1.3, 4],
      r: 0.4,
      geometry: new THREE.CapsuleGeometry(isMobile ? 0.55 : 0.5, isMobile ? 2.4 : 1.6, 2, 16), // Pill
    },
    {
      position: [-1.6, 2, -4],
      mobilePosition: [-3.9, 3.9, -5.1],
      r: 0.6,
      geometry: new THREE.DodecahedronGeometry(isMobile ? 2.25 : 1.5), // Soccer ball
    },
    {
      position: [-0.8, -0.75, 5],
      mobilePosition: [-1.9, -1.25, 5],
      r: 0.5,
      geometry: new THREE.TorusGeometry(isMobile ? 0.9 : 0.6, isMobile ? 0.375 : 0.25, 16, 32), // Donut
    },
    {
      position: [1.7, 1.8, -4],
      mobilePosition: [4.4, 3.7, -6],
      r: 0.7,
      geometry: new THREE.OctahedronGeometry(isMobile ? 2.25 : 1.5), // Diamond
    },
  ];

  const soundEffects = [
    new Audio("/sounds/hit2.ogg"),
    new Audio("/sounds/hit3.ogg"),
    new Audio("/sounds/hit4.ogg"),
  ];

  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0 }),
    new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x8e44ad, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x1abc9c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({
      roughness: 0,
      metalness: 0.5,
      color: 0x2980b9,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2c3e50,
      roughness: 0.1,
      metalness: 0.5,
    }),
  ];

  useEffect(() => {
    if (onLoad) {
      // Call onLoad after geometries are created and materials are ready
      const timer = setTimeout(() => {
        onLoad();
      }, 1000); // Small delay to ensure everything is rendered
      return () => clearTimeout(timer);
    }
  }, [onLoad]);

  return geometries.map(({ position, mobilePosition, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)} // Unique key
      position={isMobile ? mobilePosition.map((p) => p * 1.5) : position.map((p) => p * 2)}
      geometry={geometry}
      soundEffects={soundEffects}
      materials={materials}
      r={r}
    />
  ));
}

function Geometry({ r, position, geometry, soundEffects, materials }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);

  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e) {
    const mesh = e.object;

    gsap.utils.random(soundEffects).play();

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });

    mesh.material = getRandomMaterial();
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: gsap.utils.random(0.8, 1.2),
        ease: "elastic.out(1,0.3)",
        delay: gsap.utils.random(0, 0.5),
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
        ></mesh>
      </Float>
    </group>
  );
}