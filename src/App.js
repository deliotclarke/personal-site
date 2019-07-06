import React from 'react';
import './App.css';

import headerImg from './headerImg.jpg';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="navbar">
          <ul className="nav-links">
            <li className="nav-item">Intro</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Tech Stuff</li>
            <li className="nav-item">Resume</li>
            <li className="nav-item">More</li>
          </ul>
        </div>
      </nav>
      <section className="hero-section">
        <div className="image-div">
          <img className="headerImg" src={headerImg} alt="" />
        </div>
        <div className="intro-div">
          <div className="intro-container">
            <h2 className="intro">Hello, my name is Eliot Clarke.</h2>
          </div>
        </div>
      </section>
      <section className="main-body">

      </section>

    </div>
  );
}

export default App;
