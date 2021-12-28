import React from 'react';
import logo from '../images/sunglasses.png';
import facebookIcon from '../images/icon-facebook.png';
import instagramIcon from '../images/icon-instagram.png';
import youtubeIcon from '../images/icon-youtube.png';
import twitterIcon from '../images/icon-twitter.png';

const Footer = () => {
  return (
    <footer className="site-footer custom-footer">
      <div className="container-fluid footer-container">
        <div className="row">
          <div className="col-4 col-sm-4 text-center">
            <a href="http://facebook.com/">
              <img
                src={facebookIcon}
                alt="facebook icon"
                className="social-icon"
              />
            </a>
            <a href="http://twitter.com/">
              <img
                src={twitterIcon}
                alt="twitter icon"
                className="social-icon"
              />
            </a>
            <a href="http://youtube.com/">
              <img
                src={youtubeIcon}
                alt="youtube icon"
                className="social-icon"
              />
            </a>
            <a href="http://instagram.com/">
              <img
                src={instagramIcon}
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

export default Footer;
