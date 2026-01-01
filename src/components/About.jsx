import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--color-bg)' }}>
            <div className="container">
                <div className="grid-2" style={{ alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title" style={{ textAlign: 'left', margin: 0, left: 0, transform: 'none' }}>
                            About <br />MoRe Experts
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-muted)' }}>
                            We are a creative agency dedicated to empowering individuals and businesses.
                            From crafting the perfect resume to building high-end websites, we deliver excellence in every pixel.
                        </p>
                        <p style={{ marginBottom: 'var(--spacing-md)' }}>
                            At MoRe Experts, we believe in the power of minimalism and precision.
                            Our team of designers and developers work seamlessly to bring your vision to life, ensuring that your brand stands out in a crowded digital landscape.
                        </p>
                        <a href="#contact" className="btn btn-outline">
                            Get in Touch
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
