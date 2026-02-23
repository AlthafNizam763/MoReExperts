"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Showcase", href: "#showcase" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4",
                scrolled ? "py-2" : "py-4"
            )}
        >
            <div className={cn(
                "max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
                scrolled ? "glass bg-white/5 shadow-lg shadow-black/5" : "bg-transparent"
            )}>
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                        M
                    </div>
                    <span className="text-xl font-bold tracking-tight text-text-light dark:text-text-dark">
                        More <span className="text-primary">Experts</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-sky transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <button className="hidden sm:block px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
                        Get the App
                    </button>

                    {/* Mobile Menu Toggle (simplified for single-page) */}
                    <button className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group">
                        <div className="w-5 h-0.5 bg-text-light dark:bg-text-dark rounded-full group-hover:bg-primary transition-colors" />
                        <div className="w-5 h-0.5 bg-text-light dark:bg-text-dark rounded-full group-hover:bg-primary transition-colors" />
                        <div className="w-5 h-0.5 bg-text-light dark:bg-text-dark rounded-full group-hover:bg-primary transition-colors" />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
