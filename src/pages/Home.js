import React from 'react';

const Home = () => {
    return (
        <div className="page-home">
            <section className="hero">
                <div className="content">
                    <div className="m2">
                        <h1>BEST "<span>IT</span>" SERVICES BUT SIMPLE</h1>
                        <p className="hero-subtitle">Innovative solutions tailored for your business growth.</p>
                        <button className="cta-button">Get Started</button>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <h2 className="section-title">Why Simple Services?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="icon">🚀</div>
                            <h3>Fast Delivery</h3>
                            <p>We value your time. Our agile approach ensures rapid deployment of your projects.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon">🛡️</div>
                            <h3>Secure Solutions</h3>
                            <p>Security is baked into everything we build, from web apps to cloud infra.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon">💎</div>
                            <h3>Premium Quality</h3>
                            <p>Simple doesn't mean basic. We provide world-class quality with a clean experience.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
