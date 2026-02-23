import React from "react";
import Link from "next/link";
import { Twitter, Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-20 border-t border-border">
            <div className="container px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">
                                M
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                More <span className="text-primary italic">Experts</span>
                            </span>
                        </Link>
                        <p className="text-sm text-text-light/50 dark:text-text-dark/50 leading-relaxed">
                            Empowering modern teams with premium tools for faster launches and smarter growth.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-text-light/60 dark:text-text-dark/60">
                            <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="#showcase" className="hover:text-primary transition-colors">Showcase</Link></li>
                            <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="/releases" className="hover:text-primary transition-colors">Release Notes</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm text-text-light/60 dark:text-text-dark/60">
                            <li><Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#faq" className="hover:text-primary transition-colors">Support FAQ</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Connect</h4>
                        <div className="flex gap-4 mb-8">
                            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                        <div className="text-xs text-text-light/30 dark:text-text-dark/30 uppercase tracking-widest font-black">
                            Made with passion by More Experts
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border text-[10px] uppercase font-black tracking-widest text-text-light/40 dark:text-text-dark/40">
                    <div>© 2026 MORE EXPERTS INC. ALL RIGHTS RESERVED.</div>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-primary transition-colors">Safety</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
