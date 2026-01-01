import React from 'react';
import { motion } from 'framer-motion';

const jobs = [
    {
        role: 'Graphic Designer',
        company: 'Creative Studio',
        type: 'Full-time',
        location: 'Remote'
    },
    {
        role: 'Frontend Developer',
        company: 'Tech Innovators',
        type: 'Contract',
        location: 'New York, NY'
    },
    {
        role: 'Marketing Manager',
        company: 'Brandify',
        type: 'Part-time',
        location: 'London, UK'
    }
];

const JobPromotions = () => {
    return (
        <section id="jobs" className="section">
            <div className="container">
                <h2 className="section-title">Latest Opportunities</h2>

                <div className="grid-3">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.25rem' }}>{job.role}</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{job.company}</p>
                            </div>

                            <div style={{ display: 'flex', gap: 'var(--spacing-xs)', fontSize: '0.85rem' }}>
                                <span style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '4px 8px',
                                    borderRadius: '4px'
                                }}>{job.type}</span>
                                <span style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '4px 8px',
                                    borderRadius: '4px'
                                }}>{job.location}</span>
                            </div>

                            <button className="btn btn-outline" style={{ marginTop: 'auto', width: '100%', borderRadius: 'var(--radius-md)' }}>
                                Apply Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobPromotions;
