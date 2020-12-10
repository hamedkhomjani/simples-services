import React from 'react'
import "./App.css"

function App() {
  return (
    <div className="App">

      <section className="hero">
        <div className="navbar">
          <img src="/assets/Group1.svg" alt="Simple Services logo" className="logo" />
          <nav className="navlinks">
            <a href="">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="">Contact</a>
          </nav>
        </div>

        <div className="content">
          <div className="m2">
            <h1>BEST “<span>IT</span>” SERVICES BUT SIMPLE</h1>
          </div>

        </div>
      </section>

      <section className="services" id="services">
        <h1 className="title">SERVICES</h1>
        <div className="leaveittous">
          <h2>Leave IT to US</h2>
          <img src="/assets/ittree.png" alt="" />
        </div>
        <div className="servs">
          <div className="sevise">
            <img src="/assets/web.png" alt="Make and design website pic" />
            <a href="">Make and design website</a>
          </div>
          <div className="sevise">
            <img src="/assets/marketing.png" alt="Marketing pic" />
            <a href="">Marketing</a>
          </div>
          <div className="sevise">
            <img src="/assets/add.png" alt="Advertising pic" />
            <a href="">Advertising</a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h1 className="title">ABOUT</h1>
        <p>Duis malesuada feugiat ex sagittis mattis. Donec a nulla pharetra, iaculis justo ut, accumsan ante. Ut fringilla elit sodales nisi scelerisque viverra. Aenean purus libero, eleifend eu viverra lobortis, placerat et justo. Quisque dignissim commodo efficitur. Aliquam aliquet sit amet eros eget placerat. Duis volutpat est sit amet neque tristique accumsan.</p>
        <img className="tf" src="/assets/TechnologyFuture.jpg" alt="apout pic" />
        <div className="rafeinfo">
          <div className="rafeinfotext">
            <h2>Rafe Nasir</h2>
            <h3>Founder and CEO</h3>
          </div>
          <img className="rafenasirpic" src="/assets/rafenasir.png" alt="Rafe Nasir, founder and CEO of SIMPLE SERVICES photo" />
        </div>
      </section>

      <footer> || <a href="https://www.hyperisland.com/" target="blank">HYPER ISLAND</a> || HAMED KHOMAJNI DESIGN ||</footer>
    </div>
  );
}

export default App;
