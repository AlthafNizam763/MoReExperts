"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

export function PhoneModel({ ...props }) {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime();
        // Gentle floating animation
        meshRef.current.position.y = Math.sin(t * 0.5) * 0.1;
        meshRef.current.rotation.y = Math.sin(t * 0.3) * 0.1;
    });

    return (
        <group ref={meshRef} {...props}>
            {/* Phone Body */}
            <RoundedBox
                args={[3, 6, 0.4]} // Width, Height, Depth
                radius={0.3}
                smoothness={4}
            >
                <meshStandardMaterial color="#0B1B34" roughness={0.1} metalness={0.8} />
            </RoundedBox>

            {/* Screen */}
            <RoundedBox
                args={[2.8, 5.8, 0.41]}
                radius={0.25}
                smoothness={4}
                position={[0, 0, 0.01]}
            >
                <meshStandardMaterial
                    color="#1E5AA8"
                    emissive="#1E5AA8"
                    emissiveIntensity={0.5}
                    roughness={0}
                    metalness={0.5}
                />
            </RoundedBox>

            {/* "App UI" elements on screen (primitives) */}
            <mesh position={[0, 1.5, 0.22]}>
                <planeGeometry args={[2, 0.5]} />
                <meshBasicMaterial color="#6EC1FF" transparent opacity={0.8} />
            </mesh>

            <mesh position={[0, 0.5, 0.22]}>
                <planeGeometry args={[1.8, 0.2]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
            </mesh>

            <mesh position={[0, -0.5, 0.22]}>
                <planeGeometry args={[1.8, 0.2]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
            </mesh>

            {/* Camera Hole (simplified) */}
            <mesh position={[0, 2.6, 0.22]}>
                <circleGeometry args={[0.08, 32]} />
                <meshBasicMaterial color="#000000" />
            </mesh>

            {/* Bezel details */}
            <pointLight position={[0, 0, 2]} intensity={5.5} color="#6EC1FF" />
        </group>
    );
}
