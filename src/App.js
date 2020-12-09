import React from 'react'

function App() {
  return (
    <div className="App">

      <section className="hero">
          <div className="navbar">
              <img src="/assets/logoandicons/2trans.png" alt="logo" className="logo"/>
        
          </div>
        
          <div className="content">
              <div className="m">
                  <div className="m2">
                      <h3>Welcome</h3>
                      <h1>Discover Arts of Cars' world with CarArt.</h1>
                      <button type="button">Take a tour</button>
                  </div>
                  <img className="do002" src="/assets/images/4 trans.png" alt=""/>
              </div>
          </div>
      </section>
      <div className="side-bar">
          <a><img src="/assets/logoandicons/Hamburger_icon.svg.png" alt="menulogo" className="menu"/></a>
        
          <nav className="social-links">
              <a href="https://www.facebook.com/" className="socialLink" target="blank">
                  <img src="/assets/logoandicons/facebook.svg" className="socialIcon" alt=""/>
              </a>
              <a href="https://www.instagram.com/" className="socialLink" target="blank">
                  <img src="/assets/logoandicons/instagram.svg" className="socialIcon" alt=""/>
              </a>
              <a href="https://www.twitter.com/" className="socialLink" target="blank">
                  <img src="/assets/logoandicons/twitter.svg" className="socialIcon" alt=""/>
              </a>
          </nav>
      </div>
        
      <section className="works">
          <div className="work1">
              <img className="workpic" src="/assets/images/25.jpg" alt="Porsche painting"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra mauris laoreet blandit semper. Fusce fringilla mi nisi, eu dapibus elit vulputate ut. Vestibulum aliquam venenatis euismod. Integer quis urna nec est interdum maximus.</p>
          </div>
          <div className="work2">
              <img className="workpic" S src="/assets/images/12.png" alt="Porsche painting"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra mauris laoreet blandit semper. Fusce fringilla mi nisi, eu dapibus elit vulputate ut. Vestibulum aliquam venenatis euismod. Integer quis urna nec est interdum maximus.</p>
          </div>
        
      </section>
        
      <footer> || <a href="https://www.hyperisland.com/" target="blank">HYPER ISLAND</a> || HAMED KHOMAJNI DESIGN</footer>
    </div>
  );
}

export default App;
