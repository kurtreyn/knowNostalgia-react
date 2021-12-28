import React from 'react';
import heroImage from '../images/hero-img-lg.jpg';
import headerLogo from '../images/header-logo.png';

const Header = (props) => {
  return (
    <header>
      <div className="jumbotron-fluid">
        <div className="container-fluid hero-container">
          <img src={heroImage} alt="hero" />
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center logo-column">
        <img
          src={headerLogo}
          alt="header logo"
          className="img-fluid logo-header"
        />
      </div>
    </header>
  );
};

export default Header;
