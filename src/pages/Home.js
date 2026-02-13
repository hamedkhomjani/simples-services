import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const faqs = [
        { q: "How long does a typical project take?", a: "Most website projects are completed within 2-4 weeks, while marketing campaigns can start showing results in the first few days." },
        { q: "Do you offer custom IT solutions?", a: "Absolutely! We specialize in tailoring our services to fit your specific business needs, no matter how complex." },
        { q: "Is there ongoing support after delivery?", a: "Yes, all our plans include a period of dedicated support to ensure everything runs smoothly." }
    ];

    return (
        <div className="page-home">
            {/* HERO SECTION */}
            <section className="hero">
                <div className="content">
                    <motion.div
                        className="m2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
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

            {/* PARTNERS SECTION */}
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

            {/* OUR SERVICES (ITTREE.SVG) SECTION */}
            <section className="our-services-home">
                <div className="container">
                    <div className="services-showcase">
                        <motion.div
                            className="services-text-box"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Our Services</h2>
                            <h3>Technical Excellence</h3>
                            <p>We combine deep expertise with a passion for simplicity. Our solutions are built to scale, perform, and most importantly, work for you without the headache.</p>
                            <div className="simple-features">
                                <div>🚀 Fast Delivery</div>
                                <div>🛡️ Secure Solutions</div>
                                <div>💎 Premium Quality</div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="services-image-box"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                        >
                            <img src="./assetssrc/ittree.svg" alt="IT Services" className="ittree-svg" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="testimonials">
                <div className="container">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <div className="testimonials-grid">
                        {[
                            { name: 'Sarah Johnson', role: 'CEO, TechFlow', text: 'Simple Services lived up to their name. The web design process was incredibly smooth!' },
                            { name: 'David Chen', role: 'Marketing Director', text: 'The advertising results we saw in the first month were beyond our expectations.' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="testimonial-card"
                                whileHover={{ y: -5 }}
                            >
                                <p>"{item.text}"</p>
                                <h4>{item.name}</h4>
                                <span>{item.role}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING SECTION */}
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

            {/* FAQ SECTION (NO LAG) */}
            <section className="faq">
                <div className="container">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button className="faq-question" onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                                    {faq.q}
                                    <span className="icon">{activeFaq === index ? '−' : '+'}</span>
                                </button>
                                <div className={`faq-answer ${activeFaq === index ? 'show' : ''}`}>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
