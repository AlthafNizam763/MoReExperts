"use client";

import React from "react";
import { motion } from "framer-motion";
import { Apple, PlayCircle, Send } from "lucide-react";

export function CTA() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 earth-gradient opacity-10 -z-10" />
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/10 rounded-full blur-[150px] animate-pulse" />

            <div className="container px-6">
                <div className="glass rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                    {/* Inner glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/20 blur-[120px] -z-10" />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-8"
                    >
                        Ready to experience <br /> <span className="text-primary italic">Better</span> collaboration?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-text-light/60 dark:text-text-dark/60 mb-12 max-w-2xl mx-auto"
                    >
                        Join over 120,000+ experts who are already launching faster and scaling smarter with our premium toolset.
                    </motion.p>

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <button className="flex items-center gap-3 px-8 py-4 bg-navy text-white dark:bg-white dark:text-navy rounded-2xl font-bold hover:scale-105 transition-all shadow-2xl">
                            <Apple className="w-6 h-6" />
                            <div className="text-left leading-none">
                                <div className="text-[10px] uppercase font-bold opacity-60">Download on the</div>
                                <div className="text-lg">App Store</div>
                            </div>
                        </button>
                        <button className="flex items-center gap-3 px-8 py-4 bg-navy text-white dark:bg-white dark:text-navy rounded-2xl font-bold hover:scale-105 transition-all shadow-2xl">
                            <PlayCircle className="w-6 h-6" />
                            <div className="text-left leading-none">
                                <div className="text-[10px] uppercase font-bold opacity-60">Available on</div>
                                <div className="text-lg">Google Play</div>
                            </div>
                        </button>
                    </div>

                    <div className="max-w-md mx-auto relative group">
                        <input
                            type="email"
                            placeholder="Enter your email for early access"
                            className="w-full px-8 py-5 rounded-2xl glass border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/40 bg-white/5 dark:bg-black/20 font-medium"
                        />
                        <button className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors">
                            Notify Me <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
