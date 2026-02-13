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
                    <h1 className="title">OUR STORY</h1>
                    <div className="story-grid">
                        <div className="story-text">
                            <p>We started with a simple mission: to bridge the gap between complex technology and business needs. At Simple Services, we believe that the best IT solutions are the ones you don't have to worry about.</p>
                            <p>Our team of experts is dedicated to delivering excellence in every pixel and every line of code.</p>
                        </div>
                        <div className="founder-card">
                            <img src="/assets/rafenasir.png" alt="Rafe Nasir" className="founder-img" />
                            <h3>Rafe Nasir</h3>
                            <span>Founder and CEO</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
