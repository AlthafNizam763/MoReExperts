"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
    {
        name: "Starter",
        price: "$0",
        description: "Great for individuals and small side projects.",
        features: ["Up to 3 projects", "Basic collaboration", "24/7 read-only access", "Community support"],
        cta: "Start for Free",
        popular: false,
    },
    {
        name: "Pro",
        price: "$29",
        description: "Perfect for growing teams and active businesses.",
        features: ["Unlimited projects", "Advanced analytics", "Priority support", "Custom integrations", "Team permissions"],
        cta: "Go Pro Now",
        popular: true,
    },
    {
        name: "Business",
        price: "$99",
        description: "Full power for large organizations and enterprises.",
        features: ["SSO & Security", "Dedicated manager", "Custom contracts", "Unlimited cloud storage", "Priority API access"],
        cta: "Contact Sales",
        popular: false,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-32">
            <div className="container px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Fair pricing for everyone.</h2>
                    <p className="text-lg text-text-light/60 dark:text-text-dark/60">
                        Choose the plan that fits your ambition. No hidden fees.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`premium-card relative flex flex-col ${tier.popular ? "border-primary/50 translate-y-[-10px] shadow-2xl shadow-primary/10" : "border-border"
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black">{tier.price}</span>
                                    <span className="text-text-light/50 dark:text-text-dark/50">/month</span>
                                </div>
                                <p className="text-sm text-text-light/60 dark:text-text-dark/60 mt-4 leading-relaxed">
                                    {tier.description}
                                </p>
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                {tier.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3 text-sm font-medium">
                                        <Check className="w-4 h-4 text-primary shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`w-full py-4 rounded-xl font-bold transition-all ${tier.popular
                                        ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:scale-[1.02]"
                                        : "glass hover:bg-white/10"
                                    }`}
                            >
                                {tier.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
