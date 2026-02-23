"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What platforms is More Experts available on?",
        answer: "More Experts is currently available as a web application and mobile apps for iOS and Android. Our native desktop apps for macOS and Windows are coming early 2026.",
    },
    {
        question: "How secure is my team's data?",
        answer: "We use bank-grade AES-256 encryption for all data at rest and TLS 1.3 for data in transit. We are SOC2 Type II compliant and perform regular third-party security audits.",
    },
    {
        question: "Can I upgrade or downgrade my plan at any time?",
        answer: "Absolutely. You can change your plan whenever you need from your workspace settings. Adjustments are prorated, so you only pay for what you use.",
    },
    {
        question: "Do you offer discounts for non-profits?",
        answer: "Yes, we are proud to support mission-driven organizations with a 50% discount on all our annual plans. Contact our support team to verify your status.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-32 bg-primary/5">
            <div className="container px-6 max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center text-primary italic">FAQ</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="premium-card !p-0 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left transition-colors"
                            >
                                <span className="font-bold text-lg">{faq.question}</span>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-text-light/60 dark:text-text-dark/60 font-medium leading-relaxed border-t border-border mt-0">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
