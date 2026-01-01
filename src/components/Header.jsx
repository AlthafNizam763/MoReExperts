import React, { useState, useEffect } from 'react';
import ShinyText from './ShinyText';
import logo from '../assets/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Jobs', href: '#jobs' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                height: 'var(--nav-height)',
                display: 'flex',
                alignItems: 'center',
                background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-1px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 102 }}>
                    <img src={logo} alt="MoRe Experts Logo" style={{ height: '40px', width: 'auto' }} />
                    <ShinyText text="MoRe Experts" disabled={false} speed={3} className="custom-class" />
                </a>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <div
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{ display: 'none', cursor: 'pointer', zIndex: 102 }}
                >
                    <div style={{ width: '24px', height: '2px', background: 'white', marginBottom: '6px', transition: '0.3s', transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></div>
                    <div style={{ width: '24px', height: '2px', background: 'white', marginBottom: '6px', opacity: mobileMenuOpen ? 0 : 1, transition: '0.3s' }}></div>
                    <div style={{ width: '24px', height: '2px', background: 'white', transition: '0.3s', transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></div>
                </div>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="mobile-menu"
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100vh',
                                background: '#050505',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '2rem',
                                zIndex: 101
                            }}
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        fontSize: '2rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        color: '#fff',
                                        textDecoration: 'none'
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </header>
    );
};

export default Header;
