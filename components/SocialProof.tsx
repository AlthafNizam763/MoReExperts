"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
    { label: "Downloads", value: "1M+" },
    { label: "App Store Rating", value: "4.8/5" },
    { label: "Enterprise Teams", value: "120+" },
    { label: "Countries", value: "80+" },
];

export function SocialProof() {
    return (
        <section className="py-20 border-y border-border">
            <div className="container px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center md:text-left"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium text-text-light/50 dark:text-text-dark/50 uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Logo placeholders */}
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="text-xl font-black italic tracking-tighter">
                                BRAND_{i}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
