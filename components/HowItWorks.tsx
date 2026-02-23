"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const steps = [
    {
        title: "Download & Access",
        description: "Get the app from your favorite store and log in with your team credentials.",
    },
    {
        title: "Configure Space",
        description: "Set up your workspace with our intuitive drag-and-drop interface.",
    },
    {
        title: "Launch & Scale",
        description: "Start collaborating and watch your productivity reach new heights immediately.",
    },
];

export function HowItWorks() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="how-it-works" className="py-32 bg-background-light dark:bg-navy text-text-light dark:text-text-dark transition-colors duration-300 overflow-hidden">
            <div className="container px-6 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-text-light/10 dark:bg-white/10 hidden md:block" />
                {/* Animated Progress Line */}
                <motion.div
                    style={{ scaleY }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-primary origin-top hidden md:block"
                />

                <div className="relative z-10 text-center max-w-2xl mx-auto mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple. Scalable. <span className="text-primary italic dark:text-sky">Experts</span>.</h2>
                    <p className="text-lg text-text-light/50 dark:text-white/50">
                        Three simple steps to revolutionize how your team works.
                    </p>
                </div>

                <div className="space-y-24 md:space-y-48 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary text-primary font-bold mb-6">
                                    {index + 1}
                                </div>
                                <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                                <p className="text-text-light/60 dark:text-white/40 text-lg leading-relaxed max-w-md mx-auto md:mx-0 font-medium">
                                    {step.description}
                                </p>
                            </div>
                            <div className="flex-1 w-full aspect-video rounded-3xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 flex items-center justify-center relative group overflow-hidden shadow-xl shadow-primary/5">
                                <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="text-primary/10 dark:text-white/20 font-black text-6xl select-none group-hover:scale-110 group-hover:text-primary/40 transition-all duration-700 uppercase italic">
                                    STEP {index + 1}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
