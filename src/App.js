import React from 'react'
import "./App.css"

function App() {
  return (
    <div className="App">

      <section className="hero">
          <div className="navbar">
              <img src="/assets/Group1.svg" alt="Simple Services logo" className="logo"/>
              <nav className="navlinks">
                <a href="">Home</a>
                <a href="">Services</a>
                <a href="">About</a>
                <a href="">Contact</a>
              </nav>
          </div>
        
          <div className="content">
                  <div className="m2">
                      <h1>BEST “<span>IT</span>” SERVICES BUT SIMPLE</h1>
                  </div>
              
          </div>
      </section>
        
      <section className="works">
        
      </section>
        
      <footer> || <a href="https://www.hyperisland.com/" target="blank">HYPER ISLAND</a> || HAMED KHOMAJNI DESIGN</footer>
    </div>
  );
}

export default App;
