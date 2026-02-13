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
                    className="title"
                >
                    OUR SERVICES
                </motion.h1>
                <div className="services-grid">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            className="service-card-large"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <span className="service-icon-large">{s.icon}</span>
                            <h2>{s.title}</h2>
                            <p>{s.text}</p>
                            <button className="learn-more">Learn More</button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
