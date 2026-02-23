"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "More Experts changed the way our remote team works. It's not just an app, it's a productivity multiplier.",
        author: "Sarah J.",
        role: "Product Lead @ TechFlow",
    },
    {
        quote: "The attention to detail and smooth animations make it a joy to use every single day. Highly recommended.",
        author: "Michael R.",
        role: "Design Director @ CreativeOps",
    },
    {
        quote: "We launched 3 months faster than expected thanks to the streamlined workflow provided by More Experts.",
        author: "Elena G.",
        role: "CEO @ StartScale",
    },
];

export function Testimonials() {
    const [index, setIndex] = useState(0);

    return (
        <section className="py-32 bg-primary/5 relative overflow-hidden">
            {/* Decorative quotes */}
            <Quote className="absolute top-10 left-10 w-64 h-64 text-primary/5 -z-10" />

            <div className="container px-6 flex flex-col items-center">
                <div className="max-w-4xl w-full text-center relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="px-6"
                        >
                            <h3 className="text-3xl md:text-5xl font-medium italic mb-12 leading-tight">
                                "{testimonials[index].quote}"
                            </h3>
                            <div>
                                <div className="font-bold text-xl text-primary">{testimonials[index].author}</div>
                                <div className="text-text-light/50 dark:text-text-dark/50 font-medium">
                                    {testimonials[index].role}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center gap-3 mt-16">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === i ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
