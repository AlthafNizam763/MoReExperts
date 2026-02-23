"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Zap,
    Shield,
    Globe,
    BarChart,
    Users,
    MessageSquare
} from "lucide-react";

const features = [
    {
        title: "Lightning Fast",
        description: "Built on a world-class infrastructure that ensures sub-millisecond response times.",
        icon: Zap,
    },
    {
        title: "Enterprise Security",
        description: "Bank-grade encryption and advanced security protocols to keep your data safe.",
        icon: Shield,
    },
    {
        title: "Global Scale",
        description: "Deploy and manage your operations anywhere in the world with ease.",
        icon: Globe,
    },
    {
        title: "Insightful Analytics",
        description: "Deep-dive into your data with our powerful, real-time analytics engine.",
        icon: BarChart,
    },
    {
        title: "Team Collaboration",
        description: "Powerful tools designed to keep your modern team synchronized and productive.",
        icon: Users,
    },
    {
        title: "Smart Support",
        description: "AI-powered support that helps you resolve issues before they even happen.",
        icon: MessageSquare,
    },
];

export function Features() {
    return (
        <section id="features" className="py-32 relative">
            <div className="container px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Engineered for <span className="text-primary italic">excellence</span>.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-text-light/60 dark:text-text-dark/60"
                    >
                        Everything you need to launch and scale your premium application in one unified platform.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="premium-card group relative active:scale-95 cursor-pointer"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-text-light/60 dark:text-text-dark/60 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
