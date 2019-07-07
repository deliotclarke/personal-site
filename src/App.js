import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor'



import headerImg from './headerImg.jpg';

export default class App extends Component {


  render() {

    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName('typewrite');
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };

    return (
      <div className="App" >
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
            <div className="name">Eliot<br /><span className="name-space"></span>Clarke</div>
          </div>
          <div className="intro-div">
            <div className="intro-container">
              <h2 className="intro">
                <a href="#about" className="typewrite" data-period="2000" data-type='[ "Hi, My name is Eliot.", "And I am a developer.", "Among other things." ]'>
                  <span className="wrap"></span>
                </a>
              </h2>
            </div>
          </div>
        </section>
        <div className="transition-to-body">
        </div>
        <section className="main-body">
          <ScrollableAnchor id={'about'}>
            <div className="about">
            </div>
          </ScrollableAnchor>

        </section>

      </div>
    );
  }
}
