import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function ParticleField() {
  const points = useRef()
  const particlesCount = 1000
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05
      points.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#E879F9"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  )
}

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        <group position={[3, 0, -2]}>
          <AnimatedSphere />
        </group>
        
        <ParticleField />
      </Canvas>
    </div>
  )
}

export default Background3D