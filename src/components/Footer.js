import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" role="contentinfo">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Simple Services</h3>
                    <p>Making high-end IT solutions accessible and simple for everyone.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/services">Our Work</a></li>
                        <li><a href="/about">The Team</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Connect</h4>
                    <p>Email: info@simpleservices.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>|| <a href="https://www.hyperisland.com/" target="_blank" rel="noopener noreferrer">HYPER ISLAND</a> || HAMED KHOMJANI DESIGN &copy; 2024 ||</p>
            </div>
        </footer>
    );
};

export default Footer;
