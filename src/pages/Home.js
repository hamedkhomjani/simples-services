import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="page-home">
            <section className="hero">
                <div className="content">
                    <motion.div
                        className="m2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>BEST "<span>IT</span>" SERVICES BUT SIMPLE</h1>
                        <motion.p
                            className="hero-subtitle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Innovative solutions tailored for your business growth.
                        </motion.p>
                        <motion.button
                            className="cta-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Get Started
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Why Simple Services?
                    </motion.h2>
                    <div className="features-grid">
                        {[
                            { icon: '🚀', title: 'Fast Delivery', text: 'We value your time. Our agile approach ensures rapid deployment of your projects.' },
                            { icon: '🛡️', title: 'Secure Solutions', text: 'Security is baked into everything we build, from web apps to cloud infra.' },
                            { icon: '💎', title: 'Premium Quality', text: 'Simple doesn\'t mean basic. We provide world-class quality with a clean experience.' }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        What Our Clients Say
                    </motion.h2>
                    <div className="testimonials-grid">
                        {[
                            { name: 'Sarah Johnson', role: 'CEO, TechFlow', text: 'Simple Services lived up to their name. The web design process was incredibly smooth!' },
                            { name: 'David Chen', role: 'Marketing Director', text: 'The advertising results we saw in the first month were beyond our expectations.' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="testimonial-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <p>"{item.text}"</p>
                                <h4>{item.name}</h4>
                                <span>{item.role}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pricing">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Simple Pricing
                    </motion.h2>
                    <div className="pricing-grid">
                        {[
                            { plan: 'Starter', price: '$499', features: ['Custom Web Design', 'SEO Basics', '1 Month Support'] },
                            { plan: 'Professional', price: '$999', features: ['Advanced Development', 'Marketing Strategy', 'Priority Support'], popular: true },
                            { plan: 'Enterprise', price: 'Custom', features: ['Full IT Infrastructure', 'Scale-ready Solutions', '24/7 Dedicated Support'] }
                        ].map((tier, index) => (
                            <motion.div
                                key={index}
                                className={`pricing-card ${tier.popular ? 'popular' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -15 }}
                            >
                                {tier.popular && <span className="badge">MOST POPULAR</span>}
                                <h3>{tier.plan}</h3>
                                <div className="price">{tier.price}</div>
                                <ul>
                                    {tier.features.map((f, i) => <li key={i}>✓ {f}</li>)}
                                </ul>
                                <button className="select-plan">Choose {tier.plan}</button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
