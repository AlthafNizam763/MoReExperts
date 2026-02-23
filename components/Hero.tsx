"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Play } from "lucide-react";

const Scene = dynamic(() => import("./three/Scene").then((mod) => mod.Scene), {
    ssr: false,
    loading: () => <div className="w-full h-[400px] flex items-center justify-center text-text-light/20 dark:text-text-dark/20">Loading 3D Experience...</div>,
});

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky/20 rounded-full blur-[120px] -z-10" />

            <div className="container px-6 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/20 text-xs font-semibold text-primary mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        v2.0 is now live
                    </motion.div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                        More Experts — the <span className="text-primary italic">premium</span> app experience for modern teams.
                    </h1>

                    <p className="text-lg text-text-light/60 dark:text-text-dark/60 mb-10 max-w-xl">
                        Launch faster. Convert more. Support smarter. Our world-class platform gives your team the tools they need to scale without the friction.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 flex items-center gap-2">
                            Get the App <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="px-8 py-4 rounded-full glass font-bold hover:bg-white/10 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <Play className="w-3 h-3 fill-current" />
                            </div>
                            Watch Demo
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-4 text-sm text-text-light/40 dark:text-text-dark/40">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-background-light dark:border-background-dark bg-navy flex items-center justify-center text-[10px] text-white">
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                        <span>Trusted by 120+ teams worldwide</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative h-[500px] lg:h-[700px] w-full"
                >
                    <Scene />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
            >
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
}
