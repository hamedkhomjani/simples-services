import React from 'react';

const Contact = () => {
    return (
        <div className="page-contact">
            <div className="container">
                <h1 className="title">CONTACT US</h1>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2>Let's talk about your next project</h2>
                        <p>Our team is ready to help you simplify your IT needs. Reach out to us and we'll get back to you within 24 hours.</p>
                        <div className="info-item">
                            <strong>Location:</strong>
                            <span>Stockholm, Sweden (Hyper Island HQ)</span>
                        </div>
                        <div className="info-item">
                            <strong>Email:</strong>
                            <span>hello@simpleservices.com</span>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="john@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Tell us about your project..."></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
