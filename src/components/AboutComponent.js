import React, { Component } from 'react';
// import Header from './components/HeaderComponent';
// import Navigation from './components/NavigationComponent';
// import Footer from './components/FooterComponent';
import sunglasses from '../images/sunglasses.png';

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row custom-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 about-text">
            <p>
              Know(Nostalgia) is all about the best parts of pop culture from
              1990 - 2009. It's a place where you can reminisce the music,
              movies, video games and more that helped influence a generation.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 about-img">
            <img src={sunglasses} alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
