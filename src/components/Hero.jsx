import React from 'react';
import { motion } from 'framer-motion';
import ShinyText from './ShinyText';
import LiquidChrome from './LiquidChrome';

const Hero = () => {
    return (
        <section id="home" className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 'var(--nav-height)'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 style={{
                        fontSize: 'clamp(3rem, 10vw, 6rem)',
                        lineHeight: 1.1,
                        marginBottom: 'var(--spacing-md)',
                        letterSpacing: '-2px'
                    }}>
                        We Are <br />
                        <ShinyText text="MoRe Experts" disabled={false} speed={3} className="custom-class" />
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        maxWidth: '600px',
                        margin: '0 auto var(--spacing-lg)',
                        color: 'var(--color-text-muted)'
                    }}>
                        Elevating brands through premium design and web development.
                        Connecting talent with opportunity.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    style={{ display: 'flex', gap: 'var(--spacing-sm)', justifyContent: 'center' }}
                >
                    <a href="#services" className="btn btn-primary">Our Services</a>
                    <a href="#contact" className="btn btn-outline">Contact Us</a>
                </motion.div>
            </div>

            {/* Background Abstract Elements */}
            {/* Background elements moved to global App level - Reverted to local Hero only */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                overflow: 'hidden'
            }}>
                <LiquidChrome
                    baseColor={[0.05, 0.05, 0.05]} // Very dark grey/black for "dark mode" feel
                    speed={0.4}
                    amplitude={0.3}
                    interactive={true}
                />
            </div>
        </section>
    );
};

export default Hero;
