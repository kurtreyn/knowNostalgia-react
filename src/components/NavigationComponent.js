// https://reactstrap.github.io/?path=/docs/components-navbar--navbar
import {
  Nav,
  Navbar,
  NavbarBrand,
  Jumbotron,
  NavbarToggler,
  Collapse,
  NavItem,
} from 'reactstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';
import navLogo from '../images/sunglasses.svg';

const Navigation = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light custom-nav">
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
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a class="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./pages/about.html">
              About
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Select Interest
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="./pages/movies.html">
                Movies
              </a>
              <a className="dropdown-item" href="./pages/music.html">
                Music
              </a>
              <a className="dropdown-item" href="./pages/tvshows.html">
                TV Shows
              </a>
              <a className="dropdown-item" href="./pages/videogames.html">
                Video Games
              </a>
            </div>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navigation;
