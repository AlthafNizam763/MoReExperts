"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Particles({ count = 100 }) {
    const mesh = useRef<THREE.InstancedMesh>(null);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 15;
            const y = (Math.random() - 0.5) * 15;
            const z = (Math.random() - 0.5) * 15;
            const size = Math.random() * 0.05 + 0.01;
            temp.push({ x, y, z, size });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        particles.forEach((particle, i) => {
            const { x, y, z, size } = particle;
            dummy.position.set(
                x + Math.sin(t * 0.2 + i) * 0.5,
                y + Math.cos(t * 0.2 + i) * 0.5,
                z
            );
            dummy.scale.set(size, size, size);
            dummy.updateMatrix();
            mesh.current?.setMatrixAt(i, dummy.matrix);
        });
        if (mesh.current) mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial color="#6EC1FF" transparent opacity={0.3} />
        </instancedMesh>
    );
}
