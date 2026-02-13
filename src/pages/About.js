import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="about-page">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="about-content"
                >
                    <h1 className="section-title">OUR STORY</h1>
                    <div className="story-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', marginTop: '3rem', alignItems: 'center' }}>
                        <div className="story-text">
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>We started with a simple mission: to bridge the gap between complex technology and business needs. At Simple Services, we believe that the best IT solutions are the ones you don't have to worry about.</p>
                            <p style={{ fontSize: '1.1rem' }}>Our team of experts is dedicated to delivering excellence in every pixel and every line of code. We believe in transparency, speed, and quality above all else.</p>
                        </div>
                        <div className="founder-card" style={{ background: 'white', padding: '2rem', borderRadius: '30px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <img src="/assets/rafenasir.png" alt="Rafe Nasir" className="founder-img" />
                            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Rafe Nasir</h3>
                            <span style={{ color: 'var(--accent-brown)', fontWeight: '700' }}>Founder and CEO</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
