import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="Main navigation">
            <Link to="/">
                <img src="/assets/Group1.svg" alt="Simple Services Logo" className="logo" />
            </Link>
            <div className="navlinks">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
