"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import { PhoneModel } from "./PhoneModel";
import { Particles } from "./Particles";

interface SceneProps {
    showParticles?: boolean;
}

export function Scene({ showParticles = true }: SceneProps) {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />

                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#1E5AA8" />

                <Suspense fallback={null}>
                    <PhoneModel position={[0, 0, 0]} rotation={[0, -0.4, 0]} />
                    {showParticles && <Particles count={50} />}
                    <Environment preset="city" />
                    <ContactShadows
                        position={[0, -3.5, 0]}
                        opacity={0.4}
                        scale={10}
                        blur={2}
                        far={4.5}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}
