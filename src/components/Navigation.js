// https://reactstrap.github.io/?path=/docs/components-navbar--navbar

import React from 'react';
import navLogo from '../images/sunglasses.svg';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-nav">
      <a className="navbar-brand" href="#">
        <img src={navLogo} alt="logo" className="nav-logo" />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};

export default Navigation;
