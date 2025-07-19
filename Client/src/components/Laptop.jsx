import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Plane, RoundedBox } from '@react-three/drei'

function Laptop() {
  const laptopRef = useRef()
  const screenRef = useRef()
  const codeRef = useRef()
  
  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
    if (screenRef.current) {
      screenRef.current.material.emissiveIntensity = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
    }
    if (codeRef.current) {
      codeRef.current.children.forEach((child, index) => {
        child.material.emissiveIntensity = 0.2 + Math.sin(state.clock.elapsedTime * 3 + index) * 0.1
      })
    }
  })

  return (
    <group ref={laptopRef} position={[0, -0.5, 0]}>
      {/* Laptop Base */}
      <RoundedBox args={[3.2, 0.15, 2.2]} radius={0.05} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#e5e7eb" 
          metalness={0.8} 
          roughness={0.2}
        />
      </RoundedBox>
      
      {/* Laptop Screen Frame */}
      <RoundedBox args={[3.2, 2.2, 0.1]} radius={0.05} position={[0, 1.1, -1.05]} rotation={[-0.15, 0, 0]}>
        <meshStandardMaterial 
          color="#374151" 
          metalness={0.9} 
          roughness={0.1}
        />
      </RoundedBox>
      
      {/* Screen */}
      <Plane ref={screenRef} args={[2.8, 1.8]} position={[0, 1.1, -1]} rotation={[-0.15, 0, 0]}>
        <meshStandardMaterial 
          color="#1f2937" 
          emissive="#1e293b"
          emissiveIntensity={0.1}
        />
      </Plane>
      
      {/* VS Code Interface - Title Bar */}
      <Plane args={[2.6, 0.15]} position={[0, 1.82, -0.99]} rotation={[-0.15, 0, 0]}>
        <meshStandardMaterial color="#323639" />
      </Plane>
      
      {/* VS Code Interface - Sidebar */}
      <Plane args={[0.5, 1.5]} position={[-1.05, 1.25, -0.99]} rotation={[-0.15, 0, 0]}>
        <meshStandardMaterial color="#252526" />
      </Plane>
      
      {/* Code Editor Area */}
      <Plane args={[2.0, 1.5]} position={[0.25, 1.25, -0.99]} rotation={[-0.15, 0, 0]}>
        <meshStandardMaterial color="#1e1e1e" />
      </Plane>
      
      {/* Code Lines Group */}
      <group ref={codeRef}>
        {/* HTML Tag */}
        <Plane args={[1.8, 0.04]} position={[-0.1, 1.5, -0.98]} rotation={[-0.15, 0, 0]}>
          <meshStandardMaterial 
            color="#569cd6" 
            emissive="#569cd6" 
            emissiveIntensity={0.2} 
          />
        </Plane>
        
        {/* Function Declaration */}
        <Plane args={[1.6, 0.04]} position={[-0.2, 1.4, -0.98]} rotation={[-0.15, 0, 0]}>
          <meshStandardMaterial 
            color="#dcdcaa" 
            emissive="#dcdcaa" 
            emissiveIntensity={0.2} 
          />
        </Plane>
        
        {/* React Component */}
        <Plane args={[1.9, 0.04]} position={[-0.05, 1.3, -0.98]} rotation={[-0.15, 0, 0]}>
          <meshStandardMaterial 
            color="#4fc1ff" 
            emissive="#4fc1ff" 
            emissiveIntensity={0.2} 
          />
        </Plane>
        
        {/* CSS Property */}
        <Plane args={[1.4, 0.04]} position={[-0.3, 1.2, -0.98]} rotation={[-0.15, 0, 0]}>
          <meshStandardMaterial 
            color="#ce9178" 
            emissive="#ce9178" 
            emissiveIntensity={0.2} 
          />
        </Plane>
        
        {/* JavaScript Variable */}
        <Plane args={[1.7, 0.04]} position={[-0.15, 1.1, -0.98]} rotation={[-0.15, 0, 0]}>
          <meshStandardMaterial 
            color="#9cdcfe" 
            emissive="#9cdcfe" 
            emissiveIntensity={0.2} 
          />
        </Plane>
        
        {/* Comment */}
        <Plane args={[2.0, 0.04]} position={[0, 1.0, -0.98]} rotation={[-0.15, 0, 0]}>
          <meshStandardMaterial 
            color="#6a9955" 
            emissive="#6a9955" 
            emissiveIntensity={0.1} 
          />
        </Plane>
      </group>
      
      {/* Keyboard */}
      <RoundedBox args={[2.7, 0.03, 1.7]} radius={0.02} position={[0, 0.085, 0.15]}>
        <meshStandardMaterial 
          color="#d1d5db" 
          metalness={0.6} 
          roughness={0.4}
        />
      </RoundedBox>
      
      {/* Individual Keys */}
      {Array.from({ length: 48 }, (_, i) => {
        const row = Math.floor(i / 12)
        const col = i % 12
        const x = -1.2 + col * 0.2
        const z = 0.6 - row * 0.2
        return (
          <RoundedBox 
            key={i}
            args={[0.15, 0.02, 0.15]} 
            radius={0.01} 
            position={[x, 0.11, z]}
          >
            <meshStandardMaterial 
              color="#f9fafb" 
              metalness={0.3} 
              roughness={0.7}
            />
          </RoundedBox>
        )
      })}
      
      {/* Trackpad */}
      <RoundedBox args={[1.2, 0.01, 0.8]} radius={0.05} position={[0, 0.1, 0.6]}>
        <meshStandardMaterial 
          color="#e5e7eb" 
          metalness={0.8} 
          roughness={0.3}
        />
      </RoundedBox>
      
      {/* Apple Logo */}
      <Plane args={[0.2, 0.25]} position={[0, 1.6, -1.15]} rotation={[-0.15, 0, 0]}>
        <meshStandardMaterial 
          color="#9ca3af" 
          emissive="#6b7280" 
          emissiveIntensity={0.1} 
        />
      </Plane>
      
      {/* Terminal Cursor (blinking effect) */}
      <Plane args={[0.02, 0.04]} position={[0.8, 0.9, -0.98]} rotation={[-0.15, 0, 0]}>
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={0.8} 
        />
      </Plane>
    </group>
  )
}

export default Laptop
