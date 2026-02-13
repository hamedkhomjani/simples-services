import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        { title: 'Web Development', icon: '💻', text: 'Custom high-performance websites built for speed and SEO.' },
        { title: 'Digital Marketing', icon: '📈', text: 'Strategic campaigns to grow your brand and reach customers.' },
        { title: 'Creative Ads', icon: '🎯', text: 'Eye-catching advertising that converts viewers into clients.' }
    ];

    return (
        <section className="services-page">
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="section-title"
                >
                    OUR SERVICES
                </motion.h1>
                <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            className="service-card-large"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            style={{ background: 'white', padding: '3rem 2rem', borderRadius: '30px', textAlign: 'center' }}
                        >
                            <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1.5rem' }}>{s.icon}</span>
                            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>{s.title}</h2>
                            <p style={{ color: 'var(--text-dark)', opacity: 0.8 }}>{s.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
