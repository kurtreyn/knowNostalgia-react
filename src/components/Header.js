import React from 'react';
import { mediaObject } from '../shared/MediaObject';

export const Header = () => {
  return (
    <header>
      <div className="jumbotron-fluid">
        <div className="container-fluid hero-container">
          <img src={mediaObject.image} alt={mediaObject.name} />
        </div>
      </div>
    </header>
  );
};

export default Header;
