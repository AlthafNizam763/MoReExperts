import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Creative Designs',
        description: 'Unique and innovative designs that reflect your brand identity.'
    },
    {
        title: 'Professional Quality',
        description: 'We adhere to the highest standards of quality in every project we undertake.'
    },
    {
        title: 'Affordable Solutions',
        description: 'Premium services at competitive prices, making excellence accessible.'
    },
    {
        title: 'One-stop Solution',
        description: 'From personal branding to corporate hiring, we handle it all.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="section" style={{ background: 'var(--color-card-bg)' }}>
            <div className="container">
                <h2 className="section-title">Why Choose Us</h2>

                <div className="grid-2">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{
                                padding: 'var(--spacing-md)',
                                borderLeft: '2px solid var(--color-text)',
                                background: 'rgba(255,255,255,0.02)'
                            }}
                        >
                            <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-xs)' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
