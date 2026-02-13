import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import "./App.css"

// Placeholder for missing pages - will create shortly
const Services = () => (
  <section className="services" id="services">
    <h1 className="title">OUR SERVICES</h1>
    <div className="leaveittous">
      <h2>Technical Excellence</h2>
      <img src="/assets/ittree.png" alt="IT services tree" loading="lazy" />
    </div>
    <div className="servs">
      <div className="sevise">
        <img src="/assets/web.png" alt="Web" loading="lazy" />
        <a href="#contact">Web Development</a>
        <p>Custom high-performance websites built for speed and SEO.</p>
      </div>
      <div className="sevise">
        <img src="/assets/marketing.png" alt="Marketing" loading="lazy" />
        <a href="#contact">Digital Marketing</a>
        <p>Strategic campaigns to grow your brand and reach customers.</p>
      </div>
      <div className="sevise">
        <img src="/assets/add.png" alt="Advertising" loading="lazy" />
        <a href="#contact">Creative Ads</a>
        <p>Eye-catching advertising that converts viewers into clients.</p>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="about" id="about">
    <h1 className="title">OUR STORY</h1>
    <p>We started with a simple mission: to bridge the gap between complex technology and business needs. At Simple Services, we believe that the best IT solutions are the ones you don't have to worry about.</p>
    <img className="tf" src="/assets/TechnologyFuture.jpg" alt="Background" loading="lazy" />
    <div className="rafeinfo">
      <div className="rafeinfotext">
        <h2>Rafe Nasir</h2>
        <h3>Founder and CEO</h3>
      </div>
      <img className="rafenasirpic" src="/assets/rafenasir.png" alt="Founder" loading="lazy" />
    </div>
  </section>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
