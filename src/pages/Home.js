import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const faqs = [
        { q: "How long does a typical project take?", a: "Most website projects are completed within 2-4 weeks, while marketing campaigns can start showing results in the first few days." },
        { q: "Do you offer custom IT solutions?", a: "Absolutely! We specialize in tailoring our services to fit your specific business needs, no matter how complex." },
        { q: "Is there ongoing support after delivery?", a: "Yes, all our plans include a period of dedicated support to ensure everything runs smoothly." }
    ];

    return (
        <div className="page-home">
            <section className="hero">
                <div className="content">
                    <motion.div
                        className="m2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1>BEST "<span>IT</span>" SERVICES BUT SIMPLE</h1>
                        <p className="hero-subtitle">
                            Innovative solutions tailored for your business growth.
                        </p>
                        <motion.button
                            className="cta-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <section className="partners">
                <div className="container">
                    <h4 className="partners-title">TRUSTED BY INNOVATIVE COMPANIES</h4>
                    <div className="partners-slider">
                        <div className="partners-track">
                            {['TECHFLOW', 'HYPER ISLAND', 'VOLVO', 'SPOTIFY', 'ERICSSON', 'TECHFLOW', 'HYPER ISLAND', 'VOLVO', 'SPOTIFY'].map((p, i) => (
                                <span key={i} className="partner-logo">{p}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <h2 className="section-title">Why Simple Services?</h2>
                    <div className="features-grid">
                        {[
                            { icon: '🚀', title: 'Fast Delivery', text: 'We value your time. Our agile approach ensures rapid deployment of your projects.' },
                            { icon: '🛡️', title: 'Secure Solutions', text: 'Security is baked into everything we build, from web apps to cloud infra.' },
                            { icon: '💎', title: 'Premium Quality', text: 'Simple doesn\'t mean basic. We provide world-class quality with a clean experience.' }
                        ].map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <div className="container">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <div className="testimonials-grid">
                        {[
                            { name: 'Sarah Johnson', role: 'CEO, TechFlow', text: 'Simple Services lived up to their name. The web design process was incredibly smooth!' },
                            { name: 'David Chen', role: 'Marketing Director', text: 'The advertising results we saw in the first month were beyond our expectations.' }
                        ].map((item, index) => (
                            <div key={index} className="testimonial-card">
                                <p>"{item.text}"</p>
                                <h4>{item.name}</h4>
                                <span>{item.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pricing">
                <div className="container">
                    <h2 className="section-title">Simple Pricing</h2>
                    <div className="pricing-grid">
                        {[
                            { plan: 'Starter', price: '$499', features: ['Custom Web Design', 'SEO Basics', '1 Month Support'] },
                            { plan: 'Professional', price: '$999', features: ['Advanced Development', 'Marketing Strategy', 'Priority Support'], popular: true },
                            { plan: 'Enterprise', price: 'Custom', features: ['Full IT Infrastructure', 'Scale-ready Solutions', '24/7 Dedicated Support'] }
                        ].map((tier, index) => (
                            <motion.div
                                key={index}
                                className={`pricing-card ${tier.popular ? 'popular' : ''}`}
                                whileHover={{ y: -10 }}
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

            <section className="faq">
                <div className="container">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                                <button className="faq-question" onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                                    {faq.q}
                                    <span className="icon">{activeFaq === index ? '−' : '+'}</span>
                                </button>
                                {activeFaq === index && (
                                    <div className="faq-answer">
                                        <p>{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
