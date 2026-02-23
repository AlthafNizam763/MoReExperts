"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./three/Scene").then((mod) => mod.Scene), {
    ssr: false,
    loading: () => <div className="w-full h-[400px] flex items-center justify-center text-text-light/20 dark:text-text-dark/20 text-sm font-bold tracking-widest uppercase italic">Preparing Experience...</div>,
});

export function Showcase() {
    return (
        <section id="showcase" className="py-32 relative overflow-hidden">
            <div className="container px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] w-full order-2 lg:order-1"
                    >
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px]" />
                        <Scene showParticles={false} />
                    </motion.div>

                    <div className="order-1 lg:order-2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-8"
                        >
                            Experience the <span className="text-primary">future</span> of collaboration.
                        </motion.h2>

                        <div className="space-y-8">
                            {[
                                { title: "Fluid Interaction", desc: "Every touchpoint is designed with purpose and precision." },
                                { title: "Real-time Sync", desc: "Never miss a beat with our instant synchronization engine." },
                                { title: "Adaptive Layout", desc: "Seamlessly transition between desktop and mobile views." }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-6 items-start"
                                >
                                    <div className="w-1 h-12 bg-primary/20 rounded-full shrink-0 relative overflow-hidden">
                                        <motion.div
                                            initial={{ y: "-100%" }}
                                            whileInView={{ y: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 bg-primary"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-text-light/60 dark:text-text-dark/60 font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 px-8 py-4 rounded-full bg-navy text-white dark:bg-white dark:text-navy font-bold hover:scale-105 transition-all shadow-xl"
                        >
                            Learn More
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
