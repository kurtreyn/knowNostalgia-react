import React from 'react';
import { FooterIcons } from '../shared/FooterIcons';
import logo from '../images/sunglasses.svg';

const FooterElement = ({ FooterIcons }) => {
  return (
    <footer className="site-footer custom-footer">
      <div className="container-fluid footer-container">
        <div className="row">
          <div className="col-4 col-sm-4 text-center">
            <a href="http://facebook.com/">
              <img src="" alt="facebook icon" className="social-icon" />
            </a>
            <a href="http://twitter.com/">
              <img
                src="./assets/images/icon-twitter.svg"
                alt="twitter icon"
                className="social-icon"
              />
            </a>
            <a href="http://youtube.com/">
              <img
                src="./assets/images/icon-youtube.svg"
                alt="youtube icon"
                className="social-icon"
              />
            </a>
            <a href="http://instagram.com/">
              <img
                src="./assets/images/icon-instagram.svg"
                alt="instagram icon"
                className="social-icon"
              />
            </a>
          </div>
          <div className="col-4 col-sm-4 text-center">
            <p className="copyright">&copy; Kurt Reynolds, 2021</p>
          </div>
          <div className="col-4 col-sm-4 text-center">
            <img src={logo} alt="logo" className="footer-logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterElement;
